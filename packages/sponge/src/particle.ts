import { provideSingleton } from '@ccms/container'
import { particle, plugin } from '@ccms/api'

@provideSingleton(particle.ParticleManager)
export class SpongeParticleManager extends particle.ParticleManager {
    private globalSpawner = new SpongeParticleSpawner()
    constructor() {
        super()
        particle.ParticleManager.globalSpawner = this.globalSpawner
    }
    protected getGlobalSpawner() {
        return this.globalSpawner
    }
}
export class SpongeParticleSpawner extends particle.ParticleSpawner {
    spawnParticle(location: org.spongepowered.api.world.Location<any>, particle: any, count: number = 1) {
        location.getPosition()
        // location.getWorld().spawnParticle(particle, location, count)
    }
    spawn(location: any, particle: particle.Particle) {
        location.getWorld().spawnParticle(
            particle.getParticle(),
            location,
            particle.getCount(),
            particle.getOffsetX(),
            particle.getOffsetY(),
            particle.getOffsetZ(),
            particle.getExtra(),
            particle.getData()
        )
    }
}
