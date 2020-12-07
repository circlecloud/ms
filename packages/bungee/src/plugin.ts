import { server } from '@ccms/api'

let Bungee: net.md_5.bungee.api.ProxyServer = base.getInstance().getProxy()

export class BungeeNativePluginManager extends server.NativePluginManager {
    has(name: string) {
        return !!this.get(name)
    }
    get(name: string) {
        return Bungee.getPluginManager().getPlugin(name)
    }
}
