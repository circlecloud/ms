import { server } from '@ccms/api'

const Sponge: typeof org.spongepowered.api.Sponge = Java.type('org.spongepowered.api.Sponge')

export class SpongeNativePluginManager extends server.NativePluginManager {
    private spongePluginManager: org.spongepowered.api.plugin.PluginManager

    constructor() {
        super()
        this.spongePluginManager = Sponge.getPluginManager()
    }

    list(): server.NativePlugin[] {
        return Java.from(this.spongePluginManager.getPlugins()).map(plugin => this.convert(plugin))
    }
    has(name: string) {
        return !!this.spongePluginManager.getPlugin(name).orElse(null)
    }
    get(name: string) {
        return this.convert(this.spongePluginManager.getPlugin(name).orElse(null))
    }

    private convert(plugin: org.spongepowered.api.plugin.PluginContainer): server.NativePlugin {
        if (!plugin) return plugin as any
        return {
            name: plugin.getName(),
            version: plugin.getVersion().get() as string,
            authors: Java.from(plugin.getAuthors() as string[]),
            depends: Java.from(plugin.getDependencies()),
            softDepends: [],
            enable: true,
            origin: plugin
        }
    }
}
