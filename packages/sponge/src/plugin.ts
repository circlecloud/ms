import { server } from '@ccms/api'

const Sponge = org.spongepowered.api.Sponge

export class SpongeNativePluginManager extends server.NativePluginManager {
    has(name: string) {
        return !!this.get(name)
    }
    get(name: string) {
        return Sponge.getPluginManager().getPlugin(name).orElse(null)
    }
}
