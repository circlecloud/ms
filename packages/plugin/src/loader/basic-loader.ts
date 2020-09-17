import { plugin } from "@ccms/api"
import { provideSingletonNamed } from "@ccms/container"

const LOADER_TYPE_NAME = 'basic'

@provideSingletonNamed(plugin.PluginLoader, LOADER_TYPE_NAME)
export class BasicLoader implements plugin.PluginLoader {
    type: string = LOADER_TYPE_NAME

    private pluginRequireMap: Map<string, any>

    constructor() {
        this.pluginRequireMap = new Map()
    }
    require(loadMetadata: plugin.PluginLoadMetadata) {
        let metadata = loadMetadata.instance?.description
        if (metadata?.type == this.type) {
            loadMetadata.metadata = metadata
            loadMetadata.loaded = true
            this.pluginRequireMap.set(metadata.source.toString(), loadMetadata.instance)
        }
        return loadMetadata
    }
    build(metadata: plugin.PluginMetadata) {
        return this.pluginRequireMap.get(metadata.source.toString())
    }
}
