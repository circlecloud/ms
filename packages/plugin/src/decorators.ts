import { plugin as pluginApi } from "@ccms/api"
import { injectable, decorate } from "@ccms/container"
import { interfaces } from './interfaces'
import { METADATA_KEY } from './constants'
import { getPluginMetadatas, getPluginCommandMetadata, getPluginListenerMetadata, getPluginTabCompleterMetadata, getPluginConfigMetadata, getPluginStageMetadata, getPluginSources } from './utils'

/**
 * MiaoScript plugin
 * @param metadata PluginMetadata
 */
export function plugin(metadata: pluginApi.PluginMetadata | any) {
    return function (target: any) {
        if (!metadata.source) metadata = { souece: metadata }
        metadata = { name: target.name, version: '1.0.0', author: 'Unknow', target, type: 'ioc', ...metadata }
        decorate(injectable(), target)
        Reflect.defineMetadata(METADATA_KEY.plugin, metadata, target)
        const previousMetadata: Map<string, pluginApi.PluginMetadata> = getPluginMetadatas()
        previousMetadata.set(metadata.name, metadata)
        Reflect.defineMetadata(METADATA_KEY.plugin, previousMetadata, Reflect)
        const previousSources: Map<string, pluginApi.PluginMetadata> = getPluginSources()
        previousSources.set(metadata.source.toString(), metadata)
        Reflect.defineMetadata(METADATA_KEY.source, previousSources, Reflect)
    }
}

/**
 * MiaoScript Command
 * @param metadata CommandMetadata
 */
export function cmd(metadata: interfaces.CommandMetadata = {}) {
    return function (target: any, key: string, value: any) {
        metadata.name = metadata.name || key
        metadata.alias = metadata.alias || []
        metadata.target = target
        metadata.executor = key
        metadata.paramtypes = Reflect.getMetadata("design:paramtypes", target, key)
        Reflect.defineMetadata(METADATA_KEY.cmd, [metadata, ...getPluginCommandMetadata(target)], target.constructor)
    }
}

/**
 * MiaoScript TabComplete
 * @param metadata TabCompleterMetadata
 */
export function tab(metadata: interfaces.CommandMetadata = {}) {
    return function (target: any, key: string, value: any) {
        metadata.name = metadata.name || (key.startsWith('tab') ? key.split('tab', 2)[1] : key)
        if (!metadata.name) { return }
        metadata.alias = metadata.alias || []
        metadata.target = target
        metadata.executor = key
        metadata.paramtypes = Reflect.getMetadata("design:paramtypes", target, key)
        let previousMetadata = getPluginTabCompleterMetadata(target)
        previousMetadata.set(metadata.name, metadata)
        metadata.alias?.forEach((name) => previousMetadata.set(name, metadata))
        Reflect.defineMetadata(METADATA_KEY.tab, previousMetadata, target.constructor)
    }
}

/**
 * MiaoScript Listener
 * @param metadata ListenerMetadata
 */
export function listener(metadata: interfaces.ListenerMetadata = {}) {
    return function (target: any, key: string, value: any) {
        metadata.name = metadata.name || key
        metadata.target = target
        metadata.executor = key
        Reflect.defineMetadata(METADATA_KEY.listener, [metadata, ...getPluginListenerMetadata(target)], target.constructor)
        Reflect.defineMetadata(METADATA_KEY.listener, metadata, target[key])
    }
}

export function config(metadata: interfaces.ConfigMetadata = {}) {
    return function (target: any, key: string) {
        metadata.name = metadata.name || key
        metadata.variable = key
        metadata.version = metadata.version ?? 1
        metadata.format = metadata.format ?? 'yml'
        metadata.filename = metadata.filename ?? metadata.name + '.' + metadata.format
        let previousMetadata = getPluginConfigMetadata(target)
        previousMetadata.set(metadata.name, metadata)
        Reflect.defineMetadata(METADATA_KEY.config, previousMetadata, target.constructor)
        Reflect.defineMetadata(METADATA_KEY.config, metadata, target[key])
    }
}

function stage(stage: string) {
    return (metadata: interfaces.ExecMetadata = {}) => {
        return function (target: any, key: string, value: any) {
            metadata.name = metadata.name || key
            metadata.executor = key
            Reflect.defineMetadata(METADATA_KEY.stage[stage], [metadata, ...getPluginStageMetadata(target, stage)], target.constructor)
        }
    }
}
export const load = stage('load')
export const enable = stage('enable')
export const disable = stage('disable')
