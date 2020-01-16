/// <reference types="@ms/types/dist/typings/bukkit" />
/// <reference types="@ms/types/dist/typings/sponge" />
/// <reference types="@ms/types/dist/typings/bungee" />

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

    bungeeload() {
        this.logger.log('Load When ServerType is BungeeCord!')
    }
    bungeeenable() {
        this.logger.log('Enable When ServerType is BungeeCord!')
    }
    bungeedisable() {
        this.logger.log('Disable When ServerType is BungeeCord!')
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
    playerjoin(event: org.bukkit.event.player.PlayerJoinEvent) {
        let plyaer = event.getPlayer();
        this.logger.console(`§cBukkit §aPlayerJoinEvent: §b${plyaer.getName()}`)
        setTimeout(() => this.logger.sender(plyaer, `§a欢迎来到 §bMiaoScript §a的世界!`), 10);
    }

    @listener({ servertype: 'sponge' })
    clientconnectionevent$join(event: org.spongepowered.api.event.network.ClientConnectionEvent.Join) {
        this.logger.console(`§cSponge §aClientConnectionEvent.Join: §b${event.getTargetEntity().getName()}`)
        setTimeout(() => this.logger.sender(event.getTargetEntity(), `§a欢迎来到 §bMiaoScript §a的世界!`), 10);
    }

    @listener({ servertype: 'bungee' })
    serverconnected(e: any) {
        let event = e as net.md_5.bungee.api.event.ServerConnectedEvent
        this.logger.console(`§cBungeeCord §aServerConnectedEvent: §b${event.getPlayer().getDisplayName()}`)
        setTimeout(() => this.logger.sender(event.getPlayer(), `§a欢迎来到 §bMiaoScript §a的世界 §6来自 §cBungeeCord §6的问候!`), 10);
    }
}
