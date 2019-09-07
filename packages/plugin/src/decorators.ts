import { interfaces } from './interfaces'
import { METADATA_KEY } from './constants'
import { injectable, decorate } from "inversify";
import { getPluginMetadatas } from './utils'

/**
 * MiaoScript plugin
 * @param name namespace name default is '/'
 * @param middleware middleware array
 */
export function plugin(currentMetadata: interfaces.PluginMetadata) {
    return function(target: any) {
        target.description = currentMetadata;
        currentMetadata.target = target;
        decorate(injectable(), target);
        Reflect.defineMetadata(METADATA_KEY.plugin, currentMetadata, target);
        const previousMetadata: interfaces.PluginMetadata[] = getPluginMetadatas();
        Reflect.defineMetadata(METADATA_KEY.plugin, [currentMetadata, ...previousMetadata], Reflect);
    };
}
