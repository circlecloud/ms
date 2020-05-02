import '@ccms/nashorn'
import { plugin, MiaoScriptConsole } from '@ccms/api'
import { inject, injectable } from "@ccms/container";

let CommandSender = Java.type("net.md_5.bungee.api.CommandSender")

@injectable()
export class BungeeConsole extends MiaoScriptConsole {
    @inject(plugin.PluginInstance)
    private pluginInstance: any
    private proxyServer: net.md_5.bungee.api.ProxyServer = base.getInstance().getProxy();

    sender(sender, ...args) {
        if (!(sender instanceof CommandSender)) {
            this.error('第一个参数未实现 net.md_5.bungee.api.CommandSender 无法发送消息!')
            return
        }
        if (Object.prototype.toString.call(args[0]) === '[object Array]') {
            args[0].forEach(line => sender.sendMessage(this.prefix + line))
        } else {
            sender.sendMessage(this.prefix + args.join(' '));
        }
    }
    console(...args): void {
        this.sender(this.proxyServer.getConsole(), args.join(' '));
    }
}
