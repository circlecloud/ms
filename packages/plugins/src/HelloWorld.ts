import { plugin, interfaces, cmd, listener, tab } from '@ms/plugin'

@plugin({ name: 'HelloWorld', version: '1.0.0', author: 'MiaoWoo', source: __filename })
export class HelloWorld extends interfaces.Plugin {
    load() {
        this.logger.log('Test Plugin load from MiaoScript Plugin System...');
    }
    enable() {
        this.logger.log('Test Plugin enable from MiaoScript Plugin System...');
    }
    disable() {
        this.logger.log('Test Plugin disable from MiaoScript Plugin System...');
    }

    bukkitload() {
        this.logger.log('Load When ServerType is Bukkit!')
    }
    bukkitenable() {
        this.logger.log('Enable When ServerType is Bukkit!')
    }
    bukkitdisable() {
        this.logger.log('Disable When ServerType is Bukkit!')
    }

    spongeload() {
        this.logger.log('Load When ServerType is Sponge!')
    }
    spongeenable() {
        this.logger.log('Enable When ServerType is Sponge!')
    }
    spongedisable() {
        this.logger.log('Disable When ServerType is Sponge!')
    }

    @cmd()
    hello(sender: any, command: string, args: string[]) {
        this.logger.log(sender, command, args);
        sender.sendMessage(JSON.stringify({ command, ...args }))
    }

    @tab()
    tabhello(_sender: any, _command: string, _args: string[]) {
        return ['world']
    }

    @listener({ servertype: 'bukkit' })
    playerjoin(event: any) {
        this.logger.console(`§aBukkit PlayerJoinEvent: §b${event.player.name}`)
        setTimeout(() => this.logger.sender(event.player, `§a欢迎来到 §bMiaoScript §a的世界!`), 10);
    }

    @listener({ servertype: 'sponge' })
    clientconnectionevent$join(event: any) {
        this.logger.console(`§aSponge ClientConnectionEvent.Join: §b${event.targetEntity.name}`)
        setTimeout(() => this.logger.sender(event.targetEntity, `§a欢迎来到 §bMiaoScript §a的世界!`), 10);
    }
}
