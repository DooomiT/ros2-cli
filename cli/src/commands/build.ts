import { Component, Config, Options } from '../common/types';
import { selectComponents } from '../utils/selectComponents';
import { validateEnvironment } from '../utils/validateEnvironment';
import { readYAML } from '../utils/readYAML';

/**
 * This function executes the build
 *
 * @param {string} configPath - the path of the config used
 * @param {any} options - command options
 *
 * @example
 *     build('./config')
 */
export async function build(configPath: string, options: Options) {
  const configData = await readYAML(configPath) as Config;
  if (options.validation) {
    validateEnvironment(configData);
    console.info('build environment is available'.green);
  }
  const usedComponents: Component[] = options.interactive ?
    await selectComponents(configData.components) :
    configData.components;
  for (const component of usedComponents) {
    console.info(component);
  }
};
