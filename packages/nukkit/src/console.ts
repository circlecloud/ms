import { MiaoScriptConsole } from '@ccms/api'

let Nukkit = base.getInstance().getServer()
let LogLevel = Java.type('cn.nukkit.utils.LogLevel')
let CommandSender = Java.type('cn.nukkit.command.CommandSender')

export class NukkitConsole extends MiaoScriptConsole {
    sender(sender, ...args) {
        if (!(sender instanceof CommandSender)) {
            this.error(`First parameter ${sender} not instanceof cn.nukkit.command.CommandSender can't send message!`)
            return
        }
        if (Object.prototype.toString.call(args[0]) === "[object Array]") {
            args[0].forEach(line => sender.sendMessage(this.prefix + line))
        } else {
            sender.sendMessage(this.prefix + args.join(' '))
        }
    }
    console(...args: string[]): void {
        this.sender(Nukkit.getConsoleSender(), args.join(' '))
    }
    error(...args: any[]) {
        this.logger.log(LogLevel.ERROR, this.name + args.join(' '))
    }
}
