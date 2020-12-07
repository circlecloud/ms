import { server } from '@ccms/api'

let Nukkit: cn.nukkit.Server = base.getInstance().getServer()

export class NukkitNativePluginManager extends server.NativePluginManager {
    has(name: string) {
        return !!this.get(name)
    }
    get(name: string) {
        return Nukkit.getPluginManager().getPlugin(name)
    }
}
