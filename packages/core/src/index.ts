import '@ms/ployfill'
import i18n from '@ms/i18n'

let containerStartTime = Date.now();
console.i18n("ms.core.ioc.initialize");
import { plugin, server, task } from '@ms/api'
import { DefaultContainer as container, inject, provideSingleton, ContainerInstance, buildProviderModule } from '@ms/container'
console.i18n("ms.core.ioc.completed", { time: (Date.now() - containerStartTime) / 1000 })

@provideSingleton(MiaoScriptCore)
class MiaoScriptCore {
    @inject(server.Console)
    private Console: Console;
    @inject(task.TaskManager)
    private taskManager: task.TaskManager;
    @inject(plugin.PluginFolder)
    private pluginFolder: string;
    @inject(plugin.PluginManager)
    private pluginManager: plugin.PluginManager;

    enable() {
        this.loadServerConsole();
        this.loadTaskFunction();
        global.level = "TRACE"
        this.loadPlugins();
        return () => this.disable();
    }

    loadServerConsole() {
        // @ts-ignore
        console = new this.Console();
    }

    loadTaskFunction() {
        //@ts-ignore
        global.setTimeout = (func: Function, tick: number, async: boolean = false) => this.taskManager.create(func).later(tick).async(async).submit()
        //@ts-ignore
        global.setInterval = (func: Function, tick: number, async: boolean = false) => this.taskManager.create(func).timer(tick).async(async).submit()
    }

    loadPlugins() {
        let loadPluginStartTime = new Date().getTime()
        console.i18n("ms.core.plugin.initialize")
        this.pluginManager.scan(this.pluginFolder);
        this.pluginManager.build();
        this.pluginManager.load();
        this.pluginManager.enable();
        console.i18n("ms.core.plugin.completed", { time: (new Date().getTime() - loadPluginStartTime) / 1000 })
    }

    disable() {
        console.i18n("ms.core.engine.disable")
        this.pluginManager.disable();
    }
}

function detectServer() {
    try {
        Java.type("org.bukkit.Bukkit");
        return 'bukkit'
    } catch (ex) {
    }
    try {
        Java.type("org.spongepowered.api.Sponge");
        return 'sponge'
    } catch (ex) {
    }
    try {
        Java.type("cn.nukkit.Nukkit");
        return 'nukkit'
    } catch (ex) {
    }
    try {
        Java.type("net.md_5.bungee.api.ProxyServer");
        return 'bungee'
    } catch (ex) {
    }
    throw Error('Unknow Server Type...')
}

function initialize() {
    let corePackageStartTime = new Date().getTime()
    container.bind(ContainerInstance).toConstantValue(container);
    container.bind(plugin.PluginInstance).toConstantValue(base.getInstance());
    container.bind(plugin.PluginFolder).toConstantValue('plugins');
    let type = detectServer();
    console.i18n("ms.core.initialize.detect", { type });
    container.bind(server.ServerType).toConstantValue(type);
    console.i18n("ms.core.package.initialize", { type });
    require(`@ms/${type}`).default(container);
    require('@ms/plugin')
    container.load(buildProviderModule());
    console.i18n("ms.core.package.completed", { type, time: (Date.now() - corePackageStartTime) / 1000 });
    let disable = container.get<MiaoScriptCore>(MiaoScriptCore).enable()
    console.i18n("ms.core.engine.completed", { time: (Date.now() - corePackageStartTime) / 1000 });
    return disable;
}

export default initialize();
