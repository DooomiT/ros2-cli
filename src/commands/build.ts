import {validateEnvironment} from '../utils/validateEnvironment';
import {readYAML} from '../utils/readYAML';

/**
 * This function executes the build
 *
 * @param {string} configPath - the path of the config used
 * @param {any} options - command options
 *
 * @example
 *     build('./config')
 */
export async function build(configPath: string, options: any) {
  const configData = await readYAML(configPath);
  if (options.validation) {
    if (configData.common.pythonCommand && configData.common.pythonVersion) {
      await validateEnvironment(configData.common.pythonCommand, configData.common.pythonVersion);
    } else {
      await validateEnvironment();
    }
    console.info('build environment is available'.green);
  }
  for (const component of configData.components) {
    console.info(component);
  }
};
