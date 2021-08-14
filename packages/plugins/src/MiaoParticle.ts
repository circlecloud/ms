/// <reference types="@javatypes/bungee-api" />
/// <reference types="@javatypes/bukkit-api" />
/// <reference types="@javatypes/sponge-api" />

import { constants, particle } from '@ccms/api'
import { Autowired } from '@ccms/container'
import { Cmd, JSPlugin, Tab, interfaces } from '@ccms/plugin'

@JSPlugin({ version: '1.0.0', author: 'MiaoWoo', servers: [constants.ServerType.Bukkit], source: __filename })
export class MiaoParticle extends interfaces.Plugin {
    @Autowired()
    private particleManager: particle.ParticleManager

    private particleTask: particle.ParticleTask

    enable() {
        // let boot = new Bootstrap()
        this.particleTask = this.particleManager.create(new particle.Circle(2, 20).setParticle(org.bukkit.Particle.BLOCK_DUST), this)
    }

    diable() {
        this.particleTask.cancel()
    }

    @Cmd({ autoMain: true })
    mpt() { }

    cmdtest(sender: org.bukkit.entity.Player) {
        this.particleTask.follow(sender).async(true).timer(5).submit()
    }

    @Tab()
    tabmpt(_sender: any, _command: string, _args: string[]) {
        return []
    }
}
