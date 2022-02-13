import {readYAML} from '../utils/readYAML';
import {selectComponents} from '../utils/selectComponents';
import {spawnCommand} from '../utils/spawnCommand';
import {validateEnvironment} from '../utils/validateEnvironment';

import {Component, Options, SpawnCommandOptions} from '../common/types';

/**
 *
 * @param {number} code - exit code of the script
 * @param {SpawnCommandOptions} options - options of the executed command
 */
function componentCallback(code:number, options:SpawnCommandOptions) {
  console.info(`${options.name} terminated with ${code}`);
}

/**
 *
 * @param {string} exitData - error output of the script
 * @param {SpawnCommandOptions} options - options of the executed command
 */
function errorCallback(exitData: string, options:SpawnCommandOptions) {
  console.info(`${options.name} terminated with an error`);
}

/**
 *
 * @param {string} configPath - the path of the config used
 * @param {any} options - command options
 */
export async function run(configPath: string, options: Options) {
  const configData = await readYAML(configPath);
  if (options.validation) {
    if (configData.common.pythonCommand && configData.common.pythonVersion) {
      await validateEnvironment(configData.common.pythonCommand, configData.common.pythonVersion);
    } else {
      await validateEnvironment();
    }
    console.info('build environment is available'.green);
  }
  const usedComponents: Component[] = options.interactive ?
    await selectComponents(configData.components) :
    configData.components;
  await Promise.all(usedComponents.map(async (component: Component) => {
    const relCommand = `./bin/${component.program}`;
    const options: SpawnCommandOptions = {
      command: relCommand,
      callback: componentCallback,
      name: component.name,
      outputPath: component.outputPath,
      args: component.args,
      errorCallback: errorCallback,
      restartOnError: component.restartOnError,
    };
    await spawnCommand(options);
  }));
}