import { server } from '@ccms/api'

let Nukkit: cn.nukkit.Server = base.getInstance().getServer()

export class NukkitNativePluginManager extends server.NativePluginManager {
    private nukkitPluginManager: cn.nukkit.plugin.PluginManager

    constructor() {
        super()
        this.nukkitPluginManager = Nukkit.getPluginManager()
    }

    list(): server.NativePlugin[] {
        return Java.from(this.nukkitPluginManager.getPlugins().values()).map(plugin => this.convert(plugin))
    }
    has(name: string) {
        return !!this.nukkitPluginManager.getPlugin(name)
    }
    get(name: string) {
        return this.convert(this.nukkitPluginManager.getPlugin(name))
    }

    private convert(plugin: cn.nukkit.plugin.Plugin): server.NativePlugin {
        if (!plugin) return plugin as any
        let desc = plugin.getDescription()
        return {
            name: plugin.getName(),
            version: desc.getVersion(),
            authors: Java.from(desc.getAuthors() as string[]),
            depends: Java.from(desc.getDepend() as string[]),
            softDepends: Java.from(desc.getSoftDepend() as string[]),
            enable: plugin.isEnabled(),
            origin: plugin
        }
    }
}
