import {spawnCommand} from './spawnCommand';

/**
 * This function provides a default callback
 * @param {string} scriptOutput - output of the script
 * @param {number} code - exit code of the script
 */
function defaultCallback(scriptOutput: string, code:number) {
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
    await spawnCommand('ros2', defaultCallback);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`${error.message}Try source /opt/ros2/setup.bash`);
    }
  }
  console.info('ros2 is installed'.green);

  try {
    await spawnCommand('colcon', defaultCallback);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`${error.message}`);
    }
  }
  console.info('colcon is installed'.green);

  if (pythonVersion) {
    await spawnCommand(`${pythonCommand}`,
        function(scriptOutput: string, code:number) {
          if (scriptOutput !== pythonVersion) {
            throw new Error(`python version required: ${pythonVersion} used: ${scriptOutput}`);
          }
          console.info('Python is installed'.green);
        },
        ['--version']);
  }
  return;
}
