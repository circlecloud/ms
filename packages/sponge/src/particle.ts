import { provideSingleton } from '@ccms/container'
import { particle } from '@ccms/api'

@provideSingleton(particle.ParticleManager)
export class SpongeParticleManager extends particle.ParticleManager {
}
@provideSingleton(particle.ParticleSpawner)
export class SpongeParticleSpawner extends particle.ParticleSpawner {
    spawn(location: any, particle: particle.Particle) {
        throw new Error('Not Impl.')
    }
    spawnToPlayer(player: any, location: any, particle: particle.Particle) {
        throw new Error('Not Impl.')
    }
}
