
/**
 * defines the structure of components
 */
export type Component = {
    name: string,
    outputPath?: string
    program: string,
    args?: string[]
    restartOnError?: boolean,
}

/**
 * defines the structure of command options
 */
export type Options = {
    interactive: boolean,
    validation: boolean
}

/**
 * defines the input for spawnCommand
 *
 * @param {string} command - The command to execute
 * @param {Function(number, SpawnCommandOptions)} callback - Invoked after the command closes
 * @param {string[]} [args] - List of arguments to execute the command with
 * @param {string} [name] - Name of the process
 * @param {string} [outputPath] - Path where the log will be saved to
 * @param {Function(string, string, SpawnCommandOptions)} errorCallback
 * - Invoked after the command execution stops on error
 */
export interface SpawnCommandOptions {
    command: string,
    callback:Function,
    args?: string[],
    name?: string,
    outputPath?: string,
    errorCallback?:Function,
    restartOnError?: boolean,
}
