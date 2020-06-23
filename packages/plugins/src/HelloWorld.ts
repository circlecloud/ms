/// <reference types="@javatypes/bungee-api" />
/// <reference types="@javatypes/spigot-api" />
/// <reference types="@javatypes/sponge-api" />

import { server } from '@ccms/api';
import { inject } from '@ccms/container';
import { plugin, interfaces, cmd, listener, tab } from '@ccms/plugin'

@plugin({ name: 'HelloWorld', version: '1.0.0', author: 'MiaoWoo', source: __filename })
export class HelloWorld extends interfaces.Plugin {
    @inject(server.Server)
    private Server: server.Server

    load() {
        this.logger.log('Plugin load from MiaoScript Plugin System...');
    }
    enable() {
        this.logger.log('Plugin enable from MiaoScript Plugin System...');
    }
    disable() {
        this.logger.log('Plugin disable from MiaoScript Plugin System...');
    }

    bukkitload() {
        this.logger.log('Plugin Load When ServerType is Bukkit!')
    }
    bukkitenable() {
        this.logger.log('Plugin Enable When ServerType is Bukkit!')
    }
    bukkitdisable() {
        this.logger.log('Plugin Disable When ServerType is Bukkit!')
    }

    spongeload() {
        this.logger.log('Plugin Load When ServerType is Sponge!')
    }
    spongeenable() {
        this.logger.log('Plugin Enable When ServerType is Sponge!')
    }
    spongedisable() {
        this.logger.log('Plugin Disable When ServerType is Sponge!')
    }

    bungeeload() {
        this.logger.log('Plugin Load When ServerType is BungeeCord!')
    }
    bungeeenable() {
        this.logger.log('Plugin Enable When ServerType is BungeeCord!')
    }
    bungeedisable() {
        this.logger.log('Plugin Disable When ServerType is BungeeCord!')
    }

    nukkitload() {
        this.logger.log('Plugin Load When ServerType is Nukkit!')
    }
    nukkitenable() {
        this.logger.log('Plugin Enable When ServerType is Nukkit!')
    }
    nukkitdisable() {
        this.logger.log('Plugin Disable When ServerType is Nukkit!')
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

    @listener({ servers: ['bukkit', 'nukkit'] })
    PlayerJoin(event: org.bukkit.event.player.PlayerJoinEvent) {
        let plyaer = event.getPlayer();
        this.logger.console(`§cBukkit §aPlayerJoinEvent: §b${plyaer.getName()}`)
        setTimeout(() => this.sendWelcome(plyaer), 10);
    }

    @listener({ servers: ['sponge'] })
    ClientConnectionEvent$Join(event: org.spongepowered.api.event.network.ClientConnectionEvent.Join) {
        this.logger.console(`§cSponge §aClientConnectionEvent.Join: §b${event.getTargetEntity().getName()}`)
        setTimeout(() => this.sendWelcome(event.getTargetEntity()), 10);
    }

    private sendWelcome(player: any) {
        this.logger.sender(player, `§a欢迎来到 §bMiaoScript §a的世界!`)
        this.logger.sender(player, `§6当前版本: §c${this.Server.getVersion()}`)
    }

    @listener({ servers: ['bungee'] })
    ServerConnected(e: any) {
        let event = e as net.md_5.bungee.api.event.ServerConnectedEvent
        this.logger.console(`§cBungeeCord §aServerConnectedEvent: §b${event.getPlayer().getDisplayName()}`)
        setTimeout(() => this.logger.sender(event.getPlayer(), `§a欢迎来到 §bMiaoScript §a的世界 §6来自 §cBungeeCord §6的问候!`), 10);
    }
}
