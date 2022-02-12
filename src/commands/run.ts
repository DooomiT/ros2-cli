import {readYAML} from '../utils/readYAML';
import {spawnCommand} from '../utils/spawnCommand';
import {validateEnvironment} from '../utils/validateEnvironment';

/**
 *
 * @param {string} scriptOutput - output of the script
 * @param {number} code - exit code of the script
 */
function componentCallback(scriptOutput: string, code:number) {
  console.debug(scriptOutput);
  console.info(`terminated with ${code}`);
}

/**
 *
 * @param {string} configPath - the path of the config used
 * @param {any} options - command options
 */
export async function run(configPath: string, options: any) {
  const configData = await readYAML(configPath);
  if (options.validation) {
    if (configData.common.pythonCommand && configData.common.pythonVersion) {
      await validateEnvironment(configData.common.pythonCommand, configData.common.pythonVersion);
    } else {
      await validateEnvironment();
    }
    console.info('build environment is available'.green);
  }
  await Promise.all(configData.components.map(async (component: any) => {
    const {name, outputPath, program} = component;
    const relCommand = `./bin/${program}`;
    if (component.args) {
      await spawnCommand(relCommand, componentCallback, component.args, name, outputPath);
    } else {
      await spawnCommand(relCommand, componentCallback, undefined, name, outputPath);
    }
  }));
}
