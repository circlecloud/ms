import { server } from '@ccms/api'

const Bukkit = org.bukkit.Bukkit

export class BukkitNativePluginManager extends server.NativePluginManager {
    has(name: string) {
        return !!this.get(name)
    }
    get(name: string) {
        return Bukkit.getPluginManager().getPlugin(name)
    }
}
