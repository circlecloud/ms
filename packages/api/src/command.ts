import i18n from '@ccms/i18n'
import { injectable } from "@ccms/container"
import { plugin } from './plugin'

export namespace command {
    @injectable()
    export abstract class Command {
        /**
         * first time script engine need optimize jit code
         * so ignore first slow exec notify
         */
        private cacheSlowKeys = {};

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
                    let time = Date.now()
                    let result = executor(sender, command, Java.from(args))
                    this.checkSlow(Date.now() - time,
                        "ms.api.command.execute.slow",
                        plugin, command, sender, args)
                    return result
                } catch (ex: any) {
                    this.printError(ex, "ms.api.command.execute.error",
                        plugin, command, sender, args)
                    return true
                }
            }
        }
        protected setTabCompleter(plugin: plugin.Plugin, command: any, tabCompleter: Function) {
            return (sender: any, _: any, command: string, args: string[]) => {
                try {
                    let time = Date.now()
                    var token = args[args.length - 1]
                    var complete = tabCompleter(sender, command, Java.from(args)) || []
                    let result = this.copyPartialMatches(complete, token)
                    this.checkSlow(Date.now() - time,
                        "ms.api.command.tab.completer.slow",
                        plugin, command, sender, args)
                    return result
                } catch (ex: any) {
                    this.printError(ex, "ms.api.command.tab.completer.error",
                        plugin, command, sender, args)
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

        private checkSlow(cost: number, key: string, plugin: plugin.Plugin, command: string, sender: any, args: any[]) {
            if (cost > global.ScriptSlowExecuteTime) {
                let completerKey = `${plugin.description.name}-${key}-${command}-${sender.name}`
                if (!this.cacheSlowKeys[completerKey]) {
                    return this.cacheSlowKeys[completerKey] = cost
                }
                console.i18n(key, {
                    player: sender.name,
                    plugin: plugin.description.name,
                    command,
                    args: Java.from(args).join(' '),
                    cost
                })
            }
        }
        private printError(error: Error, key: string, plugin: plugin.Plugin, command: string, sender: any, args: any[]) {
            let message = i18n.translate(key, {
                player: sender.name,
                plugin: plugin.description.name,
                command,
                args: Java.from(args).join(' '),
                error
            })
            console.console(message)
            console.ex(error)
            if (sender.name != 'CONSOLE') {
                console.sender(sender, [message, ...console.stack(error)])
            }
        }
    }
}
