import * as yaml from 'js-yaml'
import * as fs from '@ccms/common/dist/fs'
import { plugin } from '@ccms/api'
import { provideSingleton } from '@ccms/container'

import { interfaces } from './interfaces'
import { getPluginConfigMetadata } from './utils'

export interface PluginConfigLoader {
    load(content: string): any
    dump(variable: any): string
}

export class YamlPluginConfig implements PluginConfigLoader {
    load(content: string) {
        return yaml.safeLoad(content)
    }
    dump(variable: any): string {
        return yaml.safeDump(variable, { skipInvalid: true, lineWidth: 120 })
    }
}

export class JsonPluginConfig implements PluginConfigLoader {
    load(content: string) {
        return JSON.parse(content)
    }
    dump(variable: any): string {
        return JSON.stringify(variable, undefined, 4)
    }
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

@provideSingleton(PluginConfigManager)
export class PluginConfigManager {
    private configLoaderMap = new Map<string, PluginConfigLoader>()

    constructor() {
        this.configLoaderMap.set("json", new JsonPluginConfig())
        let yaml = new YamlPluginConfig()
        this.configLoaderMap.set("yml", yaml)
        this.configLoaderMap.set("yaml", yaml)
        process.on('plugin.before.load', this.loadConfig.bind(this))
        process.on('plugin.after.disable', this.saveConfig.bind(this))
    }

    getConfigLoader(format: string) {
        if (!this.configLoaderMap.has(format)) { throw new Error(`Unsupport config format ${format} !`) }
        return this.configLoaderMap.get(format)
    }

    loadConfig(plugin: plugin.Plugin) {
        let configs = getPluginConfigMetadata(plugin)
        for (let [_, config] of configs) {
            this.loadConfig0(plugin, config)
        }
    }

    saveConfig(plugin: plugin.Plugin) {
        let configs = getPluginConfigMetadata(plugin)
        for (let [_, config] of configs) {
            config.autosave && this.saveConfig0(plugin, config)
        }
    }

    private defienConfigProp(plugin: plugin.Plugin, metadata: interfaces.ConfigMetadata, value: any) {
        Object.defineProperties(value, {
            'save': { value: () => this.saveConfig0(plugin, metadata) },
            'reload': { value: () => this.loadConfig0(plugin, metadata) }
        })
        Object.defineProperty(plugin, metadata.variable, { value })
    }

    private loadConfig0(plugin: plugin.Plugin, metadata: interfaces.ConfigMetadata) {
        try {
            metadata.file = fs.concat(fs.file(plugin.description.loadMetadata.file).parent, plugin.description.name, metadata.filename)
            let configLoader = this.getConfigLoader(metadata.format)
            let value = plugin[metadata.variable]
            if (!fs.exists(metadata.file)) {
                base.save(metadata.file, configLoader.dump(value))
                console.i18n("ms.plugin.manager.config.save.default", { plugin: plugin.description.name, name: metadata.name, format: metadata.format })
            } else {
                value = configLoader.load(base.read(metadata.file))
                console.debug(`[${plugin.description.name}] Load Config ${metadata.variable} from file ${metadata.file} =>\n${JSON.stringify(value, undefined, 4)}`)
                if (metadata.default) {
                    let needSave = false
                    for (const key of Object.keys(metadata.default)) {
                        if (!value[key]) {
                            value[key] = metadata.default[key]
                            needSave = true
                        }
                    }
                    needSave && base.save(metadata.file, configLoader.dump(value))
                }
            }
            this.defienConfigProp(plugin, metadata, value)
        } catch (error) {
            console.i18n("ms.plugin.manager.config.load.error", { plugin: plugin.description.name, name: metadata.name, format: metadata.format, error })
            console.ex(error)
        }
    }

    private saveConfig0(plugin: plugin.Plugin, metadata: interfaces.ConfigMetadata) {
        try {
            metadata.file = fs.concat(fs.file(plugin.description.loadMetadata.file).parent, plugin.description.name, metadata.filename)
            let result = this.getConfigLoader(metadata.format).dump(plugin[metadata.variable])
            base.save(metadata.file, result)
            console.debug(`[${plugin.description.name}] Save Config ${metadata.variable} to file ${metadata.file} =>\n${result}`)
            return true
        } catch (error) {
            console.i18n("ms.plugin.manager.config.save.error", { plugin: plugin.description.name, name: metadata.name, format: metadata.format, error })
            console.ex(error)
            return false
        }
    }
}
