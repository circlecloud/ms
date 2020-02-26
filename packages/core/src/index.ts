import '@ms/ployfill'
let containerStartTime = new Date().getTime()
console.log(`Initialization MiaoScript IOC Container @ms/container. Please wait...`)
import { plugin, server, task } from '@ms/api'
import { DefaultContainer as container, inject, provideSingleton, ContainerInstance, buildProviderModule } from '@ms/container'
console.log('MiaoScript IOC Container @ms/container loading completed(' + (new Date().getTime() - containerStartTime) / 1000 + 's)!');

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
        console.log(`Initialization MiaoScript Plugin System. Please wait...`)
        this.pluginManager.scan(this.pluginFolder);
        this.pluginManager.build();
        this.pluginManager.load();
        this.pluginManager.enable();
        console.log('MiaoScript Plugin System loading completed(' + (new Date().getTime() - loadPluginStartTime) / 1000 + 's)!');
    }

    disable() {
        console.log("Disable MiaoScript Engine...")
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
    console.info(`Detect Compatible Server set ServerType to ${type} ...`)
    container.bind(server.ServerType).toConstantValue(type);
    console.log(`Initialization MiaoScript Package @ms/core @ms/${type} @ms/plugin. Please wait...`)
    require(`@ms/${type}`).default(container);
    require('@ms/plugin')
    container.load(buildProviderModule());
    console.log(`MiaoScript Package @ms/core @ms/${type} @ms/plugin loading completed(` + (new Date().getTime() - corePackageStartTime) / 1000 + 's)!');
    let disable = container.get<MiaoScriptCore>(MiaoScriptCore).enable()
    console.log('MiaoScript ScriptEngine loading completed... Done (' + (new Date().getTime() - global.NashornEngineStartTime) / 1000 + 's)!');
    return disable;
}

export default initialize();
