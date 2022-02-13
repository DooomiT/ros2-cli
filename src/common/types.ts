
/**
 * defines the structure of components
 */
export type Component = {
    name: string,
    outputPath?: string
    program: string,
    args?: string[]
}

/**
 * defines the structure of command options
 */
export type Options = {
    interactive: boolean,
    validation: boolean
}
