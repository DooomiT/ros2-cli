import * as util from 'util';
const exec = util.promisify(require('child_process').exec);

/**
 * This function spawns a shell executing a command
 *
 * @param {string} command - The command to execute
 * @return {string} - The output of the command
 *
 * @example
 *
 *     spawnCommand('cat myFile')
 */
export async function spawnCommand(command: string) {
  const {stdout, stderr} = await exec(command);

  if (stderr) {
    throw Error(stderr);
  }
  return stdout;
};
