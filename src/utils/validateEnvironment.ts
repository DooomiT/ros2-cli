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
  try {
    await spawnCommand('ros2');
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`${error.message}Try source /opt/ros2/setup.bash`);
    }
  }
  console.info('ros2 is installed'.green);

  try {
    await spawnCommand('colcon');
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`${error.message}`);
    }
  }
  console.info('colcon is installed'.green);

  if (pythonVersion) {
    const result: string = await spawnCommand(`${pythonCommand} --version`);
    if (result !== pythonVersion) {
      throw new Error(`python version required: ${pythonVersion} used: ${result}`);
    }
    console.info('Python is installed'.green);
  }
  return;
}
