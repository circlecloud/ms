import { interfaces } from './interfaces'
import { METADATA_KEY } from './constants'

function getPlugins() {
    return [...getPluginMetadatas().values()].map((target) => target.target);
}

function getPlugin(name: string) {
    return getPluginMetadatas().get(name);
}

function getPluginSources() {
    let pluginSources: Map<string, interfaces.PluginMetadata> = Reflect.getMetadata(
        METADATA_KEY.souece,
        Reflect
    ) || new Map<string, interfaces.PluginMetadata>();
    return pluginSources;
}

function getPluginMetadatas() {
    let pluginMetadatas: Map<string, interfaces.PluginMetadata> = Reflect.getMetadata(
        METADATA_KEY.plugin,
        Reflect
    ) || new Map<string, interfaces.PluginMetadata>();
    return pluginMetadatas;
}

function getPluginMetadata(target: any) {
    let pluginMetadata: interfaces.PluginMetadata = Reflect.getMetadata(
        METADATA_KEY.plugin,
        target.constructor
    ) || {};
    return pluginMetadata;
}

function getPluginCommandMetadata(target: any) {
    let commandMetadata: Map<string, interfaces.CommandMetadata> = Reflect.getMetadata(
        METADATA_KEY.cmd,
        target.constructor
    ) || new Map<string, interfaces.CommandMetadata>();
    return commandMetadata;
}

function getPluginTabCompleterMetadata(target: any) {
    let tabcompleterMetadata: Map<string, interfaces.CommandMetadata> = Reflect.getMetadata(
        METADATA_KEY.tab,
        target.constructor
    ) || new Map<string, interfaces.CommandMetadata>();
    return tabcompleterMetadata;
}

function getPluginListenerMetadata(target: any) {
    let listnerMetadata: interfaces.ListenerMetadata[] = Reflect.getMetadata(
        METADATA_KEY.listener,
        target.constructor
    ) || [];
    return listnerMetadata;
}

function getPluginConfigMetadata(target: any) {
    let configMetadata: Map<string, interfaces.ConfigMetadata> = Reflect.getMetadata(
        METADATA_KEY.config,
        target.constructor
    ) || new Map<string, interfaces.ConfigMetadata>();
    return configMetadata;
}

function getPluginStageMetadata(target: any, stage: string) {
    let stageMetadata: interfaces.ExecMetadata[] = Reflect.getMetadata(
        METADATA_KEY.stage[stage],
        target.constructor
    ) || [];
    return stageMetadata;
}

export {
    getPlugin,
    getPlugins,
    getPluginSources,
    getPluginMetadatas,
    getPluginMetadata,
    getPluginCommandMetadata,
    getPluginTabCompleterMetadata,
    getPluginListenerMetadata,
    getPluginConfigMetadata,
    getPluginStageMetadata
}
