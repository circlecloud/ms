import { constants, channel, server } from "@ccms/api"
import { JSPlugin, interfaces, Cmd, Tab } from "@ccms/plugin"
import { inject, optional } from '@ccms/container'

const StandardCharsets = Java.type('java.nio.charset.StandardCharsets')
const JavaString = Java.type('java.lang.String')

@JSPlugin({ author: 'MiaoWoo', servers: [constants.ServerType.Bukkit], source: __filename })
export class MiaoGUI extends interfaces.Plugin {
    @inject(server.Server)
    private server: server.Server
    @inject(channel.Channel)
    @optional()
    private channel: channel.Channel

    private CHANNEL_NAME = `${MiaoGUI.name}:NORMAL`.toLowerCase();
    private channelOff: { off: () => void }

    enable() {
        this.channelOff = this.channel?.listen(this, this.CHANNEL_NAME, (data) => {
            this.logger.info('MiaoGUI', new JavaString(data))
        })
    }

    disable() {
        this.channelOff?.off()
    }

    @Cmd()
    mgui(sender: any, command: string, args: string[]) {
        let cmd = args[0] || 'help'
        let cmdKey = 'cmd' + cmd
        if (!this[cmdKey]) {
            console.sender(sender, '§4未知的子命令: §c' + cmd)
            console.sender(sender, `§6请执行 §b/${command} §ahelp §6查看帮助!`)
            return
        }
        args.shift()
        this[cmdKey](sender, ...args)
    }

    cmdhhelp(sender: any) {
        this.logger.sender(sender, '')
    }

    cmdrun(sender: any, ...args: string[]) {
        this.send(sender, "run", { cmd: args.join(' ') })
    }

    cmdconfig(sender: org.bukkit.entity.Player) {
        this.send(sender, "config")
    }

    cmdopen(sender: any, name: string) {
        this.send(sender, "open", { name })
    }

    cmdopenfor(sender: any, target: string, name: string) {
        let player = this.server.getPlayer(target)
        if (!player) { return this.logger.sender(sender, `§c玩家 ${target} 不在线或不存在!`) }
        this.send(player, "open", { name })
    }

    cmdadd(sender: any, type: string, ...param: string[]) {
        if (!type) return this.logger.sender(sender, '§c组件类型不得为空!')
        this.send(sender, "add", { type, param })
    }

    cmdclear(sender: org.bukkit.entity.Player) {
        this.send(sender, "clear")
    }

    @Tab()
    tabmgui(args: string[]) {
        if (args.length == 1) return ['open', 'openfor', 'config', 'add', 'clear']
        if (args.length == 2) {
            switch (args[0]) {
                case "add":
                    return ['text', 'image', 'broadcast']
            }
        }
    }

    private send(target: any, type: string, data: any = {}) {
        this.channel?.send(target, this.CHANNEL_NAME, new JavaString(JSON.stringify({ type, data })).getBytes(StandardCharsets.UTF_8))
    }
}
