import { interfaces } from './interfaces'
import { METADATA_KEY } from './constants'
import { injectable, decorate } from "inversify";
import { getPluginMetadatas } from './utils'

/**
 * MiaoScript plugin
 * @param metadata PluginMetadata
 */
export function plugin(metadata: interfaces.PluginMetadata) {
    return function(target: any) {
        target.description = metadata;
        metadata.target = target;
        decorate(injectable(), target);
        Reflect.defineMetadata(METADATA_KEY.plugin, metadata, target);
        const previousMetadata: interfaces.PluginMetadata[] = getPluginMetadatas();
        Reflect.defineMetadata(METADATA_KEY.plugin, [metadata, ...previousMetadata], Reflect);
    };
}
