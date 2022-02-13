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
  let outputFile: string;
  if (options.outputPath) {
    if (!await pathExists(options.outputPath)) {
      await mkdir(options.outputPath, {recursive: true});
    }
    const outputFileName = options.name || options.command.replace(/[ &\/\\#,+()$~%.'":*?<>{}]/g, '');
    outputFile = path.join(options.outputPath, outputFileName);
  }

  console.log(`start ${options.command}`.green);
  if (!pathExists(options.command)) {
    throw new Error(`path ${options.command} does not exist`);
  }
  const child = options.args ?
  childProcess.spawn(options.command) :
  childProcess.spawn(options.command, options.args);

  let scriptOutput = '';

  child.stdout.setEncoding('utf8');
  child.stdout.on('data', function(data) {
    console.log(`[${options.name}]: ${data}`);
    data=data.toString();
    scriptOutput+=data;
  });

  child.stderr.setEncoding('utf8');
  child.stderr.on('data', async function(data) {
    scriptOutput+=data;
    if (options.outputPath) {
      await writeFile(outputFile, scriptOutput);
    }
    console.error(`[${options.name}]: ${data}`.red);
    if (options.errorCallback) {
      options.errorCallback(data, options);
    }
    if (options.restartOnError) {
      restartOnError(options);
    }
  });

  child.on('close', async function(code) {
    if (options.outputPath) {
      await writeFile(outputFile, scriptOutput);
    }
    if (options.callback) {
      options.callback(code, scriptOutput, options);
    }
  });
};
