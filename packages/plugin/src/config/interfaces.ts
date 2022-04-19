export const PluginConfigLoader = Symbol.for('PluginConfigLoader')
export interface PluginConfigLoader {
    type: string
    load(content: string): any
    dump(variable: any): string
}

export interface PluginConfig {
    /**
     * Save Config to File
     */
    readonly save?: () => void
    /**
     * Reload Config from File
     */
    readonly reload?: () => void
    [key: string]: any
}
