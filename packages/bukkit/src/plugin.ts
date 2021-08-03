import { server } from '@ccms/api'

const Bukkit: typeof org.bukkit.Bukkit = Java.type('org.bukkit.Bukkit')

export class BukkitNativePluginManager extends server.NativePluginManager {
    private bukkitPluginManager: org.bukkit.plugin.PluginManager

    constructor() {
        super()
        this.bukkitPluginManager = Bukkit.getPluginManager()
    }

    list(): server.NativePlugin[] {
        return Java.from(this.bukkitPluginManager.getPlugins()).map(plugin => this.convert(plugin))
    }
    has(name: string): boolean {
        return !!Bukkit.getPluginManager().getPlugin(name)
    }
    get(name: string): server.NativePlugin {
        return this.convert(Bukkit.getPluginManager().getPlugin(name))
    }

    private convert(plugin: org.bukkit.plugin.Plugin): server.NativePlugin {
        if (!plugin) return plugin as any
        let desc = plugin.getDescription()
        return {
            name: plugin.getName(),
            version: desc.getVersion(),
            authors: Java.from(desc.getAuthors()),
            depends: Java.from(desc.getDepend()),
            softDepends: Java.from(desc.getSoftDepend()),
            enable: plugin.isEnabled(),
            origin: plugin
        }
    }
}
