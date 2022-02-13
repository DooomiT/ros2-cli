import {SpawnCommandOptions} from '../common/types';
import {spawnCommand} from './spawnCommand';

/**
 * This function checks if all required binaries for build are available
 *
 * @param {string} [pythonCommand] - the command used to execute python
 * @param {string} [pythonVersion] - the used python version
 *
 * @example
 *     validateEnvironment(')
 */
export async function validateEnvironment(
    pythonCommand?: string,
    pythonVersion?: string,
) {
  await spawnCommand({command: 'ros2', errorCallback: (data:number, options: SpawnCommandOptions) => {
    throw new Error('ros2 failed');
  }});
  console.info('ros2 is installed'.green);

  await spawnCommand({command: 'colcon', errorCallback: (data:number, options: SpawnCommandOptions) => {
    throw new Error('colcon failed');
  }});
  console.info('colcon is installed'.green);

  /**
   *
   * @param {number} code
   * @param {string} output
   * @param {SpawnCommandOptions} options
   */
  function pythonCallback(code: number, output: string, options:SpawnCommandOptions) {
    if (output !== pythonVersion) {
      throw new Error(`python version required: ${pythonVersion} used: ${output}`);
    }
    console.info('Python is installed'.green);
  }

  if (pythonVersion) {
    const options:SpawnCommandOptions = {
      command: `${pythonCommand}`,
      args: ['--version'],
      callback: pythonCallback,
    };
    await spawnCommand(options);
    return;
  }
}
