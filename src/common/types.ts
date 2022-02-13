
/**
 * defines the structure of components
 */
export type Component = {
    name: string,
    outputPath?: string
    program: string,
    args?: string[]
}

export type Options = {
    interactive: boolean,
    validation: boolean
}
