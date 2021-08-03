import { server } from '@ccms/api'

let Bungee: net.md_5.bungee.api.ProxyServer = base.getInstance().getProxy()

export class BungeeNativePluginManager extends server.NativePluginManager {
    private bungeePluginManager: net.md_5.bungee.api.plugin.PluginManager

    constructor() {
        super()
        this.bungeePluginManager = Bungee.getPluginManager()
    }

    list(): server.NativePlugin[] {
        return Java.from(this.bungeePluginManager.getPlugins()).map(plugin => this.convert(plugin))
    }
    has(name: string): boolean {
        return !!this.bungeePluginManager.getPlugin(name)
    }
    get(name: string): server.NativePlugin {
        return this.convert(this.bungeePluginManager.getPlugin(name))
    }

    private convert(plugin: net.md_5.bungee.api.plugin.Plugin): server.NativePlugin {
        if (!plugin) return plugin as any
        let desc = plugin.getDescription()
        return {
            name: desc.getName(),
            version: desc.getVersion(),
            authors: [desc.getAuthor()],
            depends: Java.from(desc.getDepends()) as any,
            softDepends: Java.from(desc.getSoftDepends()) as any,
            enable: true,
            origin: plugin
        }
    }
}
