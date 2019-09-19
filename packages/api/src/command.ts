import { injectable } from "@ms/container";

export namespace command {
    @injectable()
    export abstract class Command {
        on(plugin: any, name: string, exec: { cmd: Function, tab?: Function }) {
            var cmd = this.create(plugin, { name: name });
            console.debug(`插件 ${plugin.description.name} 创建命令 ${name}(${cmd})...`)
            if (exec.cmd && typeof exec.cmd === "function") {
                this.onCommand(plugin, cmd, exec.cmd)
            } else {
                throw Error("CommandExec Must be a function... Input: " + exec.cmd)
            }
            if (exec.tab && typeof exec.tab === "function") {
                this.onTabComplete(plugin, cmd, exec.tab)
            }
        }
        off(plugin: any, name: string) {

        }
        /**
         * Create Server Command Object
         */
        abstract create(name: string, opts: { name: string });
        abstract onCommand(plugin: object, command: any, opts: { name: string });
        abstract onTabComplete(plugin: object, command: any, opts: { name: string });
    }
}
