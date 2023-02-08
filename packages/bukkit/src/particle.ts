import { provideSingleton } from '@ccms/container'
import { particle } from '@ccms/api'

@provideSingleton(particle.ParticleManager)
export class BukkitParticleManager extends particle.ParticleManager {
}

@provideSingleton(particle.ParticleSpawner)
export class BukkitParticleSpawner extends particle.ParticleSpawner {
    spawn(location: org.bukkit.Location, particle: particle.Particle) {
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
    spawnToPlayer(player: org.bukkit.entity.Player, location: org.bukkit.Location, particle: particle.Particle) {
        player.spawnParticle(
            particle.getParticle(),
            location,
            particle.getCount(),
            particle.getOffsetX(),
            particle.getOffsetY(),
            particle.getOffsetZ(),
            particle.getExtra(),
            particle.getData())
    }
}
