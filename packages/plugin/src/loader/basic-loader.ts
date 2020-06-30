import { plugin } from "@ccms/api"
import { provideSingleton } from "@ccms/container"

@provideSingleton(plugin.PluginLoader)
export class BasicLoader implements plugin.PluginLoader {
    type: string = 'basic'

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
    load(plugin: plugin.Plugin): void { }
    enable(plugin: plugin.Plugin): void { }
    disable(plugin: plugin.Plugin): void { }
    reload(plugin: plugin.Plugin): void { }
}
