import { plugin } from "@ccms/api"
import { provideSingleton } from "@ccms/container"

@provideSingleton(plugin.PluginLoader)
export class BasicLoader implements plugin.PluginLoader {
    type: string = 'basic'

    private pluginRequireMap: Map<string, any>

    constructor() {
        this.pluginRequireMap = new Map()
    }
    require(target: any, result: any) {
        this.pluginRequireMap.set(target.toString(), result)
        return result
    }
    build(metadata: plugin.PluginMetadata) {
        return this.pluginRequireMap.get(metadata.source.toString())
    }
    load(plugin: plugin.Plugin): void { }
    enable(plugin: plugin.Plugin): void { }
    disable(plugin: plugin.Plugin): void { }
    reload(plugin: plugin.Plugin): void { }
}
