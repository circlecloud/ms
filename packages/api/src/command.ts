import { PluginInfo } from './typings/plugin';
export namespace command {
    export abstract class Command {
        on(plugin: PluginInfo, name: string, exec: { cmd: Function, tab?: Function }) {
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
        /**
         * Create Server Command Object
         */
        abstract create(plugin: object, opts: { name: string });
        abstract onCommand(plugin: object, command: any, opts: { name: string });
        abstract onTabComplete(plugin: object, command: any, opts: { name: string });
    }
}
