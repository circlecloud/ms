import { MiaoScriptConsole } from '@ccms/api'

let Bukkit = org.bukkit.Bukkit;

export class BukkitConsole extends MiaoScriptConsole {
    sender(sender, ...args) {
        if (!(sender instanceof Java.type('org.bukkit.command.CommandSender'))) {
            this.error(`First parameter ${sender} not instanceof org.bukkit.command.CommandSender can't send message!`)
            return;
        }
        if (Object.prototype.toString.call(args[0]) === "[object Array]") {
            args[0].forEach(line => sender.sendMessage(this.prefix + line))
        } else {
            sender.sendMessage(this.prefix + args.join(' '));
        }
    }
    console(...args: string[]): void {
        this.sender(Bukkit.getConsoleSender(), args.join(' '));
    }
}
