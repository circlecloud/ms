import { injectable, decorate } from "@ccms/container"
import { interfaces } from './interfaces'
import { METADATA_KEY } from './constants'
import { getPluginMetadatas, getPluginCommandMetadata, getPluginListenerMetadata, getPluginTabCompleterMetadata, getPluginConfigMetadata, getPluginStageMetadata, getPluginSources } from './utils'

/**
 * MiaoScript plugin
 * @param metadata PluginMetadata
 */
export function plugin(metadata: interfaces.PluginMetadata) {
    return function (target: any) {
        metadata.target = target
        metadata.type = "ioc"
        decorate(injectable(), target)
        Reflect.defineMetadata(METADATA_KEY.plugin, metadata, target)
        const previousMetadata: Map<string, interfaces.PluginMetadata> = getPluginMetadatas()
        previousMetadata.set(metadata.name, metadata)
        Reflect.defineMetadata(METADATA_KEY.plugin, previousMetadata, Reflect)
        const previousSources: Map<string, interfaces.PluginMetadata> = getPluginSources()
        previousSources.set(metadata.source.toString(), metadata)
        Reflect.defineMetadata(METADATA_KEY.souece, previousSources, Reflect)
    }
}

/**
 * MiaoScript Command
 * @param metadata CommandMetadata
 */
export function cmd(metadata: interfaces.CommandMetadata = {}) {
    return function (target: any, key: string, value: any) {
        metadata.name = metadata.name || key
        metadata.executor = key
        metadata.paramtypes = Reflect.getMetadata("design:paramtypes", target, key)
        const previousMetadata: Map<string, interfaces.CommandMetadata> = getPluginCommandMetadata(target)
        previousMetadata.set(metadata.name, metadata)
        Reflect.defineMetadata(METADATA_KEY.cmd, previousMetadata, target.constructor)
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
        metadata.executor = key
        metadata.paramtypes = Reflect.getMetadata("design:paramtypes", target, key)
        const previousMetadata: Map<string, interfaces.CommandMetadata> = getPluginTabCompleterMetadata(target)
        previousMetadata.set(metadata.name, metadata)
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
        metadata.executor = key
        const previousMetadata: interfaces.ListenerMetadata[] = getPluginListenerMetadata(target)
        Reflect.defineMetadata(METADATA_KEY.listener, [metadata, ...previousMetadata], target.constructor)
    }
}

export function config(metadata: interfaces.ConfigMetadata = {}) {
    return function (target: any, key: string) {
        metadata.name = metadata.name || key
        metadata.variable = key
        metadata.version = metadata.version ?? 1
        metadata.format = metadata.format ?? 'yml'
        const previousMetadata: Map<string, interfaces.ConfigMetadata> = getPluginConfigMetadata(target)
        previousMetadata.set(metadata.name, metadata)
        Reflect.defineMetadata(METADATA_KEY.config, previousMetadata, target.constructor)
    }
}

function stage(metadata: interfaces.ExecMetadata = {}, stage: string) {
    return function (target: any, key: string, value: any) {
        metadata.name = metadata.name || key
        metadata.executor = key
        const previousMetadata: interfaces.ExecMetadata[] = getPluginStageMetadata(target, stage)
        Reflect.defineMetadata(METADATA_KEY.stage[stage], [metadata, ...previousMetadata], target.constructor)
    }
}

export function load(metadata: interfaces.ExecMetadata = {}) {
    return stage(metadata, 'load')
}

export function enable(metadata: interfaces.ExecMetadata = {}) {
    return stage(metadata, 'enable')
}

export function disable(metadata: interfaces.ExecMetadata = {}) {
    return stage(metadata, 'disable')
}
