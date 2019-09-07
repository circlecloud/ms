import { MiaoScriptConsole } from '@ms/api'

let Bukkit = Java.type("org.bukkit.Bukkit");
let CommandSender = Java.type("org.bukkit.command.CommandSender");

export class BukkitConsole extends MiaoScriptConsole {
    sender(sender, ...args) {
        if (!(sender instanceof CommandSender)) {
            this.error("第一个参数未实现 org.bukkit.command.CommandSender 无法发送消息!")
            return;
        }
        if (args[0].toString() === "[object Array]") {
            args[0].forEach(line => sender.sendMessage(this.prefix + line))
        } else {
            sender.sendMessage(this.prefix + args.join(' '));
        }
    }
    console(...args): void {
        this.sender(Bukkit.consoleSender, args.join(' '));
    }
}
