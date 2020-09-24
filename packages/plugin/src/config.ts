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
            try {
                config.file = fs.concat(fs.file(plugin.description.loadMetadata.file).parent, plugin.description.name, config.filename)
                let configLoader = this.getConfigLoader(config.format)
                if (!fs.exists(config.file)) {
                    base.save(config.file, configLoader.dump(plugin[config.variable]))
                    console.i18n("ms.plugin.manager.config.save.default", { plugin: plugin.description.name, name: config.name, format: config.format })
                } else {
                    Object.defineProperty(plugin, config.variable, { value: configLoader.load(base.read(config.file)) })
                    plugin[config.variable].save = () => this.saveConfig0(plugin, config)
                    console.debug(`[${plugin.description.name}] Load Config ${config.variable} from file ${config.file} =>\n${JSON.stringify(plugin[config.variable], undefined, 4)}`)
                }
            } catch (error) {
                console.i18n("ms.plugin.manager.config.load.error", { plugin: plugin.description.name, name: config.name, format: config.format, error })
                console.ex(error)
            }
        }
    }

    saveConfig(plugin: plugin.Plugin) {
        let configs = getPluginConfigMetadata(plugin)
        for (let [_, config] of configs) {
            this.saveConfig0(plugin, config)
        }
    }

    private saveConfig0(plugin: plugin.Plugin, metadata: interfaces.ConfigMetadata) {
        try {
            if (metadata.readonly) { console.debug(`[${plugin.description.name}] Skip Save Config ${metadata.variable} Because it's readonly!`) }
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
