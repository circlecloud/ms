import { interfaces } from './interfaces'
import { METADATA_KEY } from './constants'

function getPlugins() {
    return getPluginMetadatas().map((target) => target.target);
}

function getPluginMetadatas() {
    let pluginMetadatas: interfaces.PluginMetadata[] = Reflect.getMetadata(
        METADATA_KEY.plugin,
        Reflect
    ) || [];
    return pluginMetadatas;
}

function getPluginMetadata(target: any) {
    let pluginMetadata: interfaces.PluginMetadata = Reflect.getMetadata(
        METADATA_KEY.plugin,
        target
    ) || {};
    return pluginMetadata;
}

export {
    getPlugins,
    getPluginMetadatas,
    getPluginMetadata
}
