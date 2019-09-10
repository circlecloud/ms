import '@ms/nashorn'
import { MiaoScriptConsole } from '@ms/api'

let Sponge = Java.type('org.spongepowered.api.Sponge');
var Text = Java.type('org.spongepowered.api.text.Text');
let CommandSource = Java.type('org.spongepowered.api.command.CommandSource');

export class SpongeConsole extends MiaoScriptConsole {
    sender(sender, ...args) {
        if (!(sender instanceof CommandSource)) {
            this.error('第一个参数未实现 org.spongepowered.api.command.CommandSource 无法发送消息!')
            return
        }
        if (args[0].toString() === '[object Array]') {
            args[0].forEach(line => sender.sendMessage(Text.of(this.prefix + line)))
        } else {
            sender.sendMessage(Text.of(this.prefix + args.join(' ')));
        }
    }
    console(...args): void {
        this.sender(Sponge.server.console, args.join(' '));
    }
    warn(...args) {
        this.logger.warn(this.name + args.join(' '));
    }
    error(...args) {
        this.logger.error(this.name + args.join(' '));
    }
}
