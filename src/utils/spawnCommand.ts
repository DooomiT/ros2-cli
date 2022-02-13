import * as childProcess from 'child_process';
import * as path from 'path';
import {pathExists} from './pathExists';
import {writeFile, mkdir} from 'fs/promises';
import {SpawnCommandOptions} from '../common/types';

/**
 *
 * @param {SpawnCommandOptions} options
 */
async function restartOnError(options:SpawnCommandOptions) {
  await spawnCommand(options);
}

/**
 * This function spawns a shell executing a program
 *
 * @param {SpawnCommandOptions} options
 * @return {Promise<string>} - The output of the command
 *
 * @example
 *
 *     spawnCommand({'cat myFile', myCallback(options), ['--verbose'], 'myCommand', 'logs', myErrorHandler(options)})
 */
export async function spawnCommand(
    options: SpawnCommandOptions,
) {
  const {command, callback, args, name, outputPath, errorCallback} = options;
  let outputFile: string;
  if (outputPath) {
    if (!await pathExists(outputPath)) {
      await mkdir(outputPath, {recursive: true});
    }
    const outputFileName = name || command.replace(/[ &\/\\#,+()$~%.'":*?<>{}]/g, '');
    outputFile = path.join(outputPath, outputFileName);
  }

  console.log(`start ${command}`.green);
  if (!pathExists(command)) {
    throw new Error(`path ${command} does not exist`);
  }
  const child = args ? childProcess.spawn(command) : childProcess.spawn(command, args);

  let scriptOutput = '';

  child.stdout.setEncoding('utf8');
  child.stdout.on('data', function(data) {
    console.log(`[${name}]: ${data}`);
    data=data.toString();
    scriptOutput+=data;
  });

  child.stderr.setEncoding('utf8');
  child.stderr.on('data', async function(data) {
    scriptOutput+=data;
    if (outputPath) {
      await writeFile(outputFile, scriptOutput);
    }
    console.error(`[${name}]: ${data}`.red);
    if (errorCallback) {
      errorCallback(data, options);
    }
    if (options.restartOnError) {
      restartOnError(options);
    }
  });

  child.on('close', async function(code) {
    if (outputPath) {
      await writeFile(outputFile, scriptOutput);
    }
    callback(code, scriptOutput, options);
  });
};
