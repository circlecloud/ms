import { provideSingleton } from '@ccms/container'
import { particle, plugin } from '@ccms/api'

@provideSingleton(particle.ParticleManager)
export class BukkitParticleManager extends particle.ParticleManager {
    private globalSpawner = new BukkitParticleSpawner()
    constructor() {
        super()
        particle.ParticleManager.globalSpawner = this.globalSpawner
    }
    protected getGlobalSpawner() {
        return this.globalSpawner
    }
}
export class BukkitParticleSpawner extends particle.ParticleSpawner {
    spawnParticle(location: any, particle: any, count: number = 1) {
        location.getWorld().spawnParticle(particle, location, count)
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
