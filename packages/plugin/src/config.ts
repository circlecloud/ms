import { plugin } from '@ccms/api'
import { Autowired, Container, ContainerInstance, postConstruct, provideSingleton } from '@ccms/container'

import * as fs from '@ccms/common/dist/fs'

import { interfaces } from './interfaces'
import { getPluginConfigMetadata } from './utils'

import { PluginConfigLoader } from './config/interfaces'
import './config/loader/json-loader'
import './config/loader/yaml-loader'

@provideSingleton(PluginConfigManager)
export class PluginConfigManager {
    @Autowired(ContainerInstance)
    private container: Container

    private configLoaderMap = new Map<string, PluginConfigLoader>()

    constructor() {
        process.on('plugin.before.load', this.loadConfig.bind(this))
        process.on('plugin.after.disable', this.saveConfig.bind(this))
    }

    @postConstruct()
    initialize() {
        let configLoader = this.container.getAll<PluginConfigLoader>(PluginConfigLoader)
        configLoader.forEach((scanner) => {
            console.debug(`loading config loader ${scanner.type}...`)
            this.configLoaderMap.set(scanner.type, scanner)
        })
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

    createConfig(plugin: plugin.Plugin, metadata: interfaces.ConfigMetadata, value: any) {
        Object.defineProperties(value, {
            'save': { value: () => this.saveConfig0(plugin, metadata) },
            'reload': { value: () => this.loadConfig0(plugin, metadata) }
        })
        return value
    }

    private defienConfigProp(plugin: plugin.Plugin, metadata: interfaces.ConfigMetadata, value: any) {
        Object.defineProperty(plugin, metadata.variable, {
            value: this.createConfig(plugin, metadata, value),
            configurable: true
        })
    }

    private loadConfig0(plugin: plugin.Plugin, metadata: interfaces.ConfigMetadata) {
        try {
            let defaultValue = metadata.default ?? plugin[metadata.variable]
            let configValue = defaultValue || {}
            if (defaultValue) {
                metadata.file = fs.concat(
                    fs.file(plugin.description.loadMetadata.file).parent,
                    plugin.description.name,
                    metadata.filename
                )
                let configLoader = this.getConfigLoader(metadata.format)
                if (!fs.exists(metadata.file)) {
                    base.save(metadata.file, configLoader.dump(defaultValue))
                    console.i18n("ms.plugin.manager.config.save.default", {
                        plugin: plugin.description.name,
                        name: metadata.name,
                        format: metadata.format
                    })
                } else {
                    configValue = configLoader.load(base.read(metadata.file)) || {}
                    if (defaultValue && this.setDefaultValue(configValue, defaultValue, !!metadata.default)) {
                        base.save(metadata.file, configLoader.dump(configValue))
                    }
                    console.debug(`[${plugin.description.name}] Load Config ${metadata.variable} from file ${metadata.file} =>
${JSON.stringify(configValue, undefined, 4).substring(0, 500)}`)
                }
            }
            this.defienConfigProp(plugin, metadata, configValue)
        } catch (error: any) {
            console.i18n("ms.plugin.manager.config.load.error", {
                plugin: plugin.description.name,
                name: metadata.name,
                format: metadata.format,
                error
            })
            console.ex(error)
        }
    }

    private setDefaultValue(configValue, defaultValue, deepCopy) {
        let needSave = false
        for (const key of Object.keys(defaultValue)) {
            // 当配置文件不存在当前属性时才进行赋值
            if (!Object.prototype.hasOwnProperty.call(configValue, key)) {
                configValue[key] = defaultValue[key]
                needSave = true
            } else if (Object.prototype.toString.call(configValue[key]) == "[object Object]" && deepCopy) {
                // 对象需要递归检测
                needSave ||= this.setDefaultValue(configValue[key], defaultValue[key], deepCopy)
            }
        }
        return needSave
    }

    private saveConfig0(plugin: plugin.Plugin, metadata: interfaces.ConfigMetadata) {
        try {
            metadata.file = fs.concat(fs.file(plugin.description.loadMetadata.file).parent, plugin.description.name, metadata.filename)
            let result = this.getConfigLoader(metadata.format).dump(plugin[metadata.variable])
            base.save(metadata.file, result)
            console.debug(`[${plugin.description.name}] Save Config ${metadata.variable} to file ${metadata.file} =>
${result.substring(0, 500)}`)
            return true
        } catch (error: any) {
            console.i18n("ms.plugin.manager.config.save.error", {
                plugin: plugin.description.name,
                name: metadata.name,
                format: metadata.format,
                error
            })
            console.ex(error)
            return false
        }
    }
}
