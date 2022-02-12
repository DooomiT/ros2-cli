import {readFile} from 'fs/promises';
import YAML from 'yaml';

/**
 *
 * @param {string} path - location of file to read
 * @return {any} - parsed file content
 *
 * @example
 *     readYaml('./myFile')
 */
export async function readYAML(path: string) {
  const file = await readFile(path, 'utf8');
  const data = YAML.parse(file);
  return data;
}
