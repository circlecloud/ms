import '@ms/nashorn'

import { plugin, server, task } from '@ms/api'
import { DefaultContainer as container, injectable, inject, postConstruct } from '@ms/container'
import { PluginManagerImpl } from '@ms/plugin'

@injectable()
class MiaoScriptCore {
    @inject(server.Console)
    private Console: Console;
    @inject(task.TaskManager)
    private taskManager: task.TaskManager;
    @inject(plugin.PluginManager)
    private pluginManager: plugin.PluginManager;

    enable() {
        try {
            this.loadServerConsole();
            this.loadTaskFunction();
            this.loadPlugins();
        } catch (error) {
            console.console(`§cMiaoScript start error please contact plugin author!`);
            console.ex(error);
        }
        return () => this.disable();
    }

    loadServerConsole() {
        //@ts-ignore
        global.console = new this.Console();
    }

    loadTaskFunction() {
        //@ts-ignore
        global.setTimeout = (func: Function, tick: number) => this.taskManager.create(func).later(tick).run()
        //@ts-ignore
        global.setInterval = (func: Function, tick: number) => this.taskManager.create(func).timer(tick).run()
    }

    loadPlugins() {
        this.pluginManager.scan('plugins');
        this.pluginManager.build(container);
        this.pluginManager.load();
        this.pluginManager.enable();
    }

    disable() {
        this.pluginManager.disable();
    }
}

function init() {
    try {
        Java.type("org.bukkit.Bukkit");
        require('@ms/bukkit');
    } catch (ex) {
    }

    try {
        Java.type("org.spongepowered.api.Sponge");
        require('@ms/sponge');
    } catch (ex) {
    }

    container.bind(plugin.PluginManager).to(PluginManagerImpl).inSingletonScope();
    container.bind(MiaoScriptCore).to(MiaoScriptCore).inSingletonScope();
}

init();

export default container.get<MiaoScriptCore>(MiaoScriptCore).enable();
