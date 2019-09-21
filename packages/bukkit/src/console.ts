import { MiaoScriptConsole } from '@ms/api'

let Bukkit = org.bukkit.Bukkit;

export class BukkitConsole extends MiaoScriptConsole {
    sender(sender, ...args) {
        if (!(sender instanceof org.bukkit.command.CommandSender)) {
            this.error("第一个参数未实现 org.bukkit.command.CommandSender 无法发送消息!")
            return;
        }
        if (Object.prototype.toString.call(args[0]) === "[object Array]") {
            args[0].forEach(line => sender.sendMessage(this.prefix + line))
        } else {
            sender.sendMessage(this.prefix + args.join(' '));
        }
    }
    console(...args): void {
        this.sender(Bukkit.getConsoleSender(), args.join(' '));
    }
}
