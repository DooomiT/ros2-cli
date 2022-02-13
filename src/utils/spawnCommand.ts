import * as childProcess from 'child_process';
import * as path from 'path';
import {pathExists} from './pathExists';
import {writeFile, mkdir} from 'fs/promises';

/**
 * This function spawns a shell executing a program
 *
 * @param {string} command - The command to execute
 * @param {Function} callback - Invoked after the command closes
 * @param {string[]} [args] - List of arguments to execute the command with
 * @param {string} [name] - Name of the process
 * @param {string} [outputPath] - Path where the log will be saved to
 * @return {Promise<string>} - The output of the command
 *
 * @example
 *
 *     spawnCommand('cat myFile', myCallback(), ['--verbose'], 'myCommand', 'logs')
 */
export async function spawnCommand(
    command: string,
    callback:Function,
    args?: string[],
    name?: string,
    outputPath?: string,
) {
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
  });

  child.on('close', async function(code) {
    if (outputPath) {
      await writeFile(outputFile, scriptOutput);
    }
    callback(scriptOutput, code, name);
  });
};
