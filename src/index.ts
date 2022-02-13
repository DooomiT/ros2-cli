#!/usr/bin/env ts-node
import {build} from './commands/build';
import {createCommand} from 'commander';
import {exit} from 'process';
import {run} from './commands/run';
import Colors = require('colors.ts');
Colors.enable();

const withErrors = (command: (...args: any) => Promise<void>)=> {
  return async (...args: any[])=> {
    try {
      await command(...args);
    } catch (error) {
      if (error instanceof Error) {
        program.error(error.message);
        exit(1);
      }
    }
  };
};

const program = createCommand();

program
    .name('ros2-cli')
    .description('CLI to build and run multi node ros2 projects')
    .version('1.0.0');

/**
 *
 * Usage: `ros2-cli build [options] [config]`
 *
 * @source Build the ros2 nodes with colcon
 *
 * Arguments:
 *   `config`               Configuration file describing the build
 *
 * Options:
 *   `-n, --no-validation`  ignore validation of build environment
 *   `-i, --interactive`    run with interactive prompts (default: true)
 *   `-h, --help`           display help for command
 */
program.command('build')
    .description('Build the ros2 nodes with colcon')
    .argument('[config]', 'Configuration file describing the build')
    .option('-n, --no-validation', 'ignore validation of build environment')
    .option('-i, --interactive', 'run with interactive prompts', true)
    .action(withErrors(build));

/**
 * Usage: `ros2-cli run [options] [config]`
 *
 * @source Run the ros2 nodes
 *
 * Arguments:
 *   `config`               Configuration file describing the components
 *
 * Options:
 *   *-n, --no-validation`  ignore validation of build environment
 *   `-i, --interactive`    run with interactive prompts (default: true)
 *   `-h, --help`           display help for command
 */
program.command('run')
    .description('Run the ros2 nodes')
    .argument('[config]', 'Configuration file describing the components')
    .option('-n, --no-validation', 'ignore validation of build environment')
    .option('-i, --interactive', 'run with interactive prompts', true)
    .action(withErrors(run));

program
    .configureOutput({
      outputError: (str, write) => write(str.red),
    });

program.exitOverride();

program.parseAsync();
