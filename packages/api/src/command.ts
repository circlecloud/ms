import { injectable } from "@ms/container";

export namespace command {
    @injectable()
    export abstract class Command {
        on(plugin: any, name: string, exec: { cmd: Function, tab?: Function }) {
            var cmd = this.create(plugin, name);
            console.debug(`[${plugin.description.name}] register command ${name}(${cmd})...`)
            if (exec.cmd && typeof exec.cmd === "function") {
                this.onCommand(plugin, cmd, exec.cmd);
            } else {
                throw Error("CommandExec Must be a function... Input: " + exec.cmd)
            }
            if (exec.tab && typeof exec.tab === "function") {
                this.onTabComplete(plugin, cmd, exec.tab);
            }
        }
        off(plugin: any, name: string) {
            console.debug(`[${plugin.description.name}] unregister command ${name}...`)
            this.remove(plugin, name);
        }
        /**
         * Create Server Command Object
         */
        protected abstract create(plugin: any, command: string);
        protected abstract remove(plugin: any, command: string);
        protected abstract onCommand(plugin: any, command: any, executor: Function);
        protected abstract onTabComplete(plugin: any, command: any, tabCompleter: Function);

        protected setExecutor(plugin: any, command: any, executor: Function) {
            return (sender: any, _: any, command: string, args: string[]) => {
                try {
                    return executor(sender, command, Java.from(args));
                } catch (ex) {
                    console.console(`§6玩家 §a${sender.name} §6执行 §b${plugin.description.name} §6插件 §d${command} ${Java.from(args).join(' ')} §6命令时发生异常 §4${ex}`);
                    console.ex(ex);
                    console.sender(sender, [`§6执行 §b${plugin.description.name} §6插件 §d${command} ${Java.from(args).join(' ')} §6命令时发生异常`, ...console.stack(ex)])
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
                    console.console(`§6玩家 §a${sender.name} §6执行 §b${plugin.description.name} §6插件 §d${command} ${Java.from(args).join(' ')} §6补全时发生异常 §4${ex}`);
                    console.ex(ex);
                    console.sender(sender, [`§6执行 §b${plugin.description.name} §6插件 §d${command} ${Java.from(args).join(' ')} §6补全时发生异常 §4${ex}`, ...console.stack(ex)]);
                    return [];
                }
            }
        }

        protected copyPartialMatches(complete: string[], token: string, array: string[] = []): string[] {
            if (!token) { return complete }
            complete.forEach(function(e) {
                if (typeof e === "string" && e.toLowerCase().startsWith(token.toLowerCase())) {
                    array.push(e)
                }
            });
            return array
        }
    }
}
