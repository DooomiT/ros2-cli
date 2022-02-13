import {readYAML} from '../utils/readYAML';
import {selectComponents} from '../utils/selectComponents';
import {spawnCommand} from '../utils/spawnCommand';
import {validateEnvironment} from '../utils/validateEnvironment';

import {Component, Options} from '../common/types';

/**
 *
 * @param {string} scriptOutput - output of the script
 * @param {number} code - exit code of the script
 * @param {string} name - name of the executed command
 */
function componentCallback(scriptOutput: string, code:number, name?:string) {
  console.info(`${name} terminated with ${code}`);
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
  await Promise.all(usedComponents.map(async (component: any) => {
    const {name, outputPath, program} = component;
    const relCommand = `./bin/${program}`;
    if (component.args) {
      await spawnCommand(relCommand, componentCallback, component.args, name, outputPath);
    } else {
      await spawnCommand(relCommand, componentCallback, undefined, name, outputPath);
    }
  }));
}
