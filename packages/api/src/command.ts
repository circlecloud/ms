import i18n from '@ms/i18n'
import { injectable } from "@ms/container";

export namespace command {
    @injectable()
    export abstract class Command {
        /**
         * 注册插件命令
         * @param plugin 插件
         * @param name 命令
         * @param exec 执行器
         */
        on(plugin: any, name: string, exec: { cmd: Function, tab?: Function }) {
            var cmd = this.create(plugin, name);
            console.debug(i18n.translate("ms.api.command.register", { plugin: plugin.description.name, name, cmd }))
            if (exec.cmd && typeof exec.cmd === "function") {
                this.onCommand(plugin, cmd, exec.cmd);
            } else {
                throw Error(i18n.translate("ms.api.command.register.input.error", { exec: exec.cmd }))
            }
            if (exec.tab && typeof exec.tab === "function") {
                this.onTabComplete(plugin, cmd, exec.tab);
            }
        }
        /**
         * 取消命令注册
         * @param plugin 插件
         * @param name 命令
         */
        off(plugin: any, name: string) {
            console.debug(i18n.translate("ms.api.command.unregister", { plugin: plugin.description.name, name }))
            this.remove(plugin, name);
        }

        protected abstract create(plugin: any, command: string);
        protected abstract remove(plugin: any, command: string);
        protected abstract onCommand(plugin: any, command: any, executor: Function);
        protected abstract onTabComplete(plugin: any, command: any, tabCompleter: Function);
        protected setExecutor(plugin: any, command: any, executor: Function) {
            return (sender: any, _: any, command: string, args: string[]) => {
                try {
                    return executor(sender, command, Java.from(args));
                } catch (ex) {
                    console.i18n("ms.api.command.execute.error", { sender: sender.name, plugin: plugin.description.name, command, args: Java.from(args).join(' '), ex })
                    console.ex(ex);
                    console.sender(sender, [i18n.translate("ms.api.command.execute.error", { sender: sender.name, plugin: plugin.description.name, command, args: Java.from(args).join(' '), ex }), ...console.stack(ex)])
                    return true;
                }
            }
        }
        protected setTabCompleter(plugin: any, command: any, tabCompleter: Function) {
            return (sender: any, _: any, command: string, args: string[]) => {
                try {
                    var token = args[args.length - 1];
                    var complete = tabCompleter(sender, command, Java.from(args)) || [];
                    return this.copyPartialMatches(complete, token);
                } catch (ex) {
                    console.i18n("ms.api.command.tab.completer.error", { sender: sender.name, plugin: plugin.description.name, command, args: Java.from(args).join(' '), ex })
                    console.ex(ex);
                    console.sender(sender, [i18n.translate("ms.api.command.tab.completer.error", { sender: sender.name, plugin: plugin.description.name, command, args: Java.from(args).join(' '), ex }), ...console.stack(ex)]);
                    return [];
                }
            }
        }
        protected copyPartialMatches(complete: string[], token: string, array: string[] = []): string[] {
            if (!token) { return complete }
            complete.forEach(function (e) {
                if (typeof e === "string" && e.toLowerCase().startsWith(token.toLowerCase())) {
                    array.push(e)
                }
            });
            return array
        }
    }
}
