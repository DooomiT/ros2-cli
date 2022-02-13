import {SpawnCommandOptions} from '../common/types';
import {spawnCommand} from './spawnCommand';

/**
 * This function provides a default callback
 * @param {string} scriptOutput - output of the script
 * @param {number} code - exit code of the script
 * @param {string} name - name of the executed command
 */
function defaultCallback(scriptOutput: string, code:number, name?: string) {
  console.info(`terminated with ${code}`);
}

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
  try {
    const options:SpawnCommandOptions = {
      command: 'ros2',
      callback: defaultCallback,
    };
    await spawnCommand(options);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`${error.message}Try source /opt/ros2/setup.bash`);
    }
  }
  console.info('ros2 is installed'.green);

  try {
    const options:SpawnCommandOptions = {
      command: 'colcon',
      callback: defaultCallback,
    };
    await spawnCommand(options);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`${error.message}`);
    }
  }
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
