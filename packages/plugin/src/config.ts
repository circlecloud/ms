import * as yaml from 'js-yaml'
import * as fs from '@ccms/common/dist/fs'
import { plugin } from '@ccms/api'
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
        return yaml.safeDump(variable, { skipInvalid: true })
    }
}

export class JsonPluginConfig implements PluginConfigLoader {
    load(content: string) {
        return JSON.parse(content)
    }
    dump(variable: any): string {
        return JSON.stringify(variable)
    }
}

const configLoaderMap = new Map<string, PluginConfigLoader>()

export function getConfigLoader(format: string) {
    if (!configLoaderMap.has(format)) { throw new Error(`Unsupport config format ${format} !`) }
    return configLoaderMap.get(format)
}

function loadConfig(plugin: plugin.Plugin) {
    let configs = getPluginConfigMetadata(plugin)
    for (let [_, config] of configs) {
        try {
            let configFile = fs.concat(fs.file(plugin.description.loadMetadata.file).parent, plugin.description.name, config.name + '.' + config.format)
            let configFactory = getConfigLoader(config.format)
            if (!fs.exists(configFile)) {
                base.save(configFile, configFactory.dump(plugin[config.variable]))
                console.i18n("ms.plugin.manager.config.save.default", { plugin: plugin.description.name, name: config.name, format: config.format })
            } else {
                plugin[config.variable] = configFactory.load(base.read(configFile))
                plugin[config.variable].save = () => {
                    let result = configFactory.dump(plugin[config.variable])
                    base.save(configFile, result)
                    console.debug(`[${plugin.description.name}] Save Config ${config.variable} to file ${configFile} result ${result}`)
                }
                console.debug(`[${plugin.description.name}] Load Config ${config.variable} from file ${configFile} result ${JSON.stringify(plugin[config.variable])}`)
            }
        } catch (error) {
            console.i18n("ms.plugin.manager.config.load.error", { plugin: plugin.description.name, name: config.name, format: config.format, error })
            console.ex(error)
        }
    }
}

function saveConfig(plugin: plugin.Plugin) {
    let configs = getPluginConfigMetadata(plugin)
    for (let [_, config] of configs) {
        try {
            let configFile = fs.concat(fs.file(plugin.description.loadMetadata.file).parent, plugin.description.name, config.name + '.' + config.format)
            let configFactory = getConfigLoader(config.format)
            if (!config.readonly) { base.save(configFile, configFactory.dump(plugin[config.variable])) }
        } catch (error) {
            console.i18n("ms.plugin.manager.config.save.error", { plugin: plugin.description.name, name: config.name, format: config.format, error })
            console.ex(error)
        }
    }
}

function init() {
    configLoaderMap.set("json", new JsonPluginConfig())
    let yaml = new YamlPluginConfig()
    configLoaderMap.set("yml", yaml)
    configLoaderMap.set("yaml", yaml)
    process.on('plugin.before.load', loadConfig)
    process.on('plugin.after.load', saveConfig)
}

init()
