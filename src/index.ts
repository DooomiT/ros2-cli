import {build} from './commands/build';
import {createCommand} from 'commander';
import Colors = require('colors.ts');
import {exit} from 'process';
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

program.command('build')
    .description('Build the ros2 nodes with colcon')
    .argument('[config]', 'Configuration file describing the build')
    .option('-n, --no-validation', 'ignore validation of build environment')
    .action(withErrors(build));

program
    .configureOutput({
      outputError: (str, write) => write(str.red),
    });

program.exitOverride();

program.parseAsync();
