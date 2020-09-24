import i18n from '@ccms/i18n'
import { injectable } from "@ccms/container"
import { plugin } from './interfaces'

export namespace command {
    @injectable()
    export abstract class Command {
        /**
         * 注册插件命令
         * @param plugin 插件
         * @param name 命令
         * @param exec 执行器
         */
        on(plugin: plugin.Plugin, name: string, exec: { cmd: Function, tab?: Function }) {
            var cmd = this.create(plugin, name)
            if (!cmd) { throw Error(`Plugin ${plugin.description.name} can't create Command ${name}!`) }
            console.debug(i18n.translate("ms.api.command.register", { plugin: plugin.description.name, name, cmd }))
            if (exec.cmd && typeof exec.cmd === "function") {
                this.onCommand(plugin, cmd, exec.cmd)
            } else {
                throw Error(i18n.translate("ms.api.command.register.input.error", { exec: exec.cmd }))
            }
            if (exec.tab && typeof exec.tab === "function") {
                this.onTabComplete(plugin, cmd, exec.tab)
            }
        }
        public tabComplete(sender: any, input: string, index?: number): string[] {
            throw new Error("Method not implemented.")
        }
        /**
         * 取消命令注册
         * @param plugin 插件
         * @param name 命令
         */
        off(plugin: plugin.Plugin, name: string) {
            console.debug(i18n.translate("ms.api.command.unregister", { plugin: plugin.description.name, name }))
            this.remove(plugin, name)
        }

        protected abstract create(plugin: plugin.Plugin, command: string): any
        protected abstract remove(plugin: plugin.Plugin, command: string): void
        protected abstract onCommand(plugin: plugin.Plugin, command: any, executor: Function)
        protected abstract onTabComplete(plugin: plugin.Plugin, command: any, tabCompleter: Function)
        protected setExecutor(plugin: plugin.Plugin, command: any, executor: Function) {
            return (sender: any, _: any, command: string, args: string[]) => {
                try {
                    return executor(sender, command, Java.from(args))
                } catch (ex) {
                    console.i18n("ms.api.command.execute.error", { player: sender.name, plugin: plugin.description.name, command, args: Java.from(args).join(' '), ex })
                    console.ex(ex)
                    if (sender.name != 'CONSOLE') {
                        console.sender(sender, [i18n.translate("ms.api.command.execute.error", { player: sender.name, plugin: plugin.description.name, command, args: Java.from(args).join(' '), ex }), ...console.stack(ex)])
                    }
                    return true
                }
            }
        }
        protected setTabCompleter(plugin: plugin.Plugin, command: any, tabCompleter: Function) {
            return (sender: any, _: any, command: string, args: string[]) => {
                try {
                    var token = args[args.length - 1]
                    var complete = tabCompleter(sender, command, Java.from(args)) || []
                    return this.copyPartialMatches(complete, token)
                } catch (ex) {
                    console.i18n("ms.api.command.tab.completer.error", { player: sender.name, plugin: plugin.description.name, command, args: Java.from(args).join(' '), ex })
                    console.ex(ex)
                    console.sender(sender, [i18n.translate("ms.api.command.tab.completer.error", { player: sender.name, plugin: plugin.description.name, command, args: Java.from(args).join(' '), ex }), ...console.stack(ex)])
                    return []
                }
            }
        }
        protected copyPartialMatches(complete: string[], token: string, array: string[] = []): string[] {
            if (!token) { return complete }
            complete.forEach(function (e) {
                if (typeof e === "string" && e.toLowerCase().startsWith(token.toLowerCase())) {
                    array.push(e)
                }
            })
            return array
        }
    }
}
