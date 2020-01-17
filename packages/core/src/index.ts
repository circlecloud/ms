import '@ms/nashorn'

import { plugin, server, task, MiaoScriptConsole } from '@ms/api'
import { PluginManagerImpl } from '@ms/plugin'
import { XMLHttpRequest as xhr } from '@ms/ployfill'
import { DefaultContainer as container, injectable, inject, ContainerInstance } from '@ms/container'

let startTime = new Date().getTime();

@injectable()
class MiaoScriptCore {
    @inject(server.Console)
    private Console: Console;
    @inject(task.TaskManager)
    private taskManager: task.TaskManager;
    @inject(plugin.PluginManager)
    private pluginManager: plugin.PluginManager;

    enable() {
        this.loadServerConsole();
        this.loadTaskFunction();
        this.loadPlugins();
        console.log('MiaoScript engine loading completed... Done (' + (new Date().getTime() - startTime) / 1000 + 's)!');
        return () => this.disable();
    }

    loadServerConsole() {
        // @ts-ignore
        console = new this.Console();
        XMLHttpRequest = xhr;
    }

    loadTaskFunction() {
        //@ts-ignore
        global.setTimeout = (func: Function, tick: number, async: boolean = false) => this.taskManager.create(func).later(tick).async(async).submit()
        //@ts-ignore
        global.setInterval = (func: Function, tick: number, async: boolean = false) => this.taskManager.create(func).timer(tick).async(async).submit()
    }

    loadPlugins() {
        this.pluginManager.scan('plugins');
        this.pluginManager.build();
        this.pluginManager.load();
        this.pluginManager.enable();
    }

    disable() {
        this.pluginManager.disable();
    }
}

function detectServer() {
    let type = 'unknow'
    try {
        Java.type("org.bukkit.Bukkit");
        type = 'bukkit';
        console.info(`Detect Bukkit Compatible set ServerType to ${type} ...`)
    } catch (ex) {
    }
    try {
        Java.type("org.spongepowered.api.Sponge");
        type = 'sponge';
        console.info(`Detect Sponge Compatible set ServerType to ${type} ...`)
    } catch (ex) {
    }
    try {
        Java.type("net.md_5.bungee.api.ProxyServer");
        type = 'bungee';
        console.info(`Detect Sponge Compatible set ServerType to ${type} ...`)
    } catch (ex) {
    }
    if (type === 'unknow') { throw Error('Unknow Server Type...') }
    return type;
}

function init() {
    console.info('Initialization MiaoScript Core Package @ms/core. Please wait...')
    container.bind(ContainerInstance).toConstantValue(container);
    container.bind(plugin.PluginInstance).toConstantValue(base.getInstance());
    let type = detectServer();
    require(`@ms/${type}`);
    container.bind(plugin.PluginManager).to(PluginManagerImpl).inSingletonScope();
    container.bind(MiaoScriptCore).to(MiaoScriptCore).inSingletonScope();
    console.log(`Initialization MiaoScript Sub Package @ms/${type} loading completed... cost (${(new Date().getTime() - startTime) / 1000}s)!`);
}

init();

export default container.get<MiaoScriptCore>(MiaoScriptCore).enable();
