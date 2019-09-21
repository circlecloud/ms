import { injectable, decorate } from "@ms/container";
import { interfaces } from './interfaces'
import { METADATA_KEY } from './constants'
import { getPluginMetadatas, getPluginCommandMetadata, getPluginListenerMetadata, getPluginTabCompleterMetadata } from './utils'

/**
 * MiaoScript plugin
 * @param metadata PluginMetadata
 */
export function plugin(metadata: interfaces.PluginMetadata) {
    return function(target: any) {
        target.description = metadata;
        metadata.target = target;
        decorate(injectable(), target);
        Reflect.defineMetadata(METADATA_KEY.plugin, metadata, target.constructor);
        const previousMetadata: Map<string, interfaces.PluginMetadata> = getPluginMetadatas();
        previousMetadata.set(metadata.name, metadata);
        Reflect.defineMetadata(METADATA_KEY.plugin, previousMetadata, Reflect);
    };
}

/**
 * MiaoScript Command
 * @param metadata CommandMetadata
 */
export function cmd(metadata: interfaces.CommandMetadata = {}) {
    return function(target: any, key: string, value: any) {
        metadata.name = metadata.name || key;
        metadata.executor = key;
        metadata.paramtypes = Reflect.getMetadata("design:paramtypes", target, key)
        const previousMetadata: Map<string, interfaces.CommandMetadata> = getPluginCommandMetadata(target)
        previousMetadata.set(metadata.name, metadata);
        Reflect.defineMetadata(METADATA_KEY.cmd, previousMetadata, target.constructor);
    };
}

/**
 * MiaoScript Command
 * @param metadata CommandMetadata
 */
export function tab(metadata: interfaces.TabCompleterMetadata = {}) {
    return function(target: any, key: string, value: any) {
        metadata.name = metadata.name || key.startsWith('tab') ? key.split('tab', 2)[0] : key;
        metadata.executor = key;
        metadata.paramtypes = Reflect.getMetadata("design:paramtypes", target, key)
        const previousMetadata: Map<string, interfaces.TabCompleterMetadata> = getPluginTabCompleterMetadata(target)
        previousMetadata.set(metadata.name, metadata)
        Reflect.defineMetadata(METADATA_KEY.tab, previousMetadata, target.constructor);
    };
}

/**
 * MiaoScript Listener
 * @param metadata ListenerMetadata
 */
export function listener(metadata: interfaces.ListenerMetadata = {}) {
    return function(target: any, key: string, value: any) {
        metadata.name = metadata.name || key;
        metadata.executor = key;
        const previousMetadata: interfaces.ListenerMetadata[] = getPluginListenerMetadata(target)
        Reflect.defineMetadata(METADATA_KEY.listener, [metadata, ...previousMetadata], target.constructor);
    };
}
