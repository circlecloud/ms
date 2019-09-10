import { plugin, server, MiaoScriptConsole } from '@ms/api'
import { injectable, inject, postConstruct, Container } from '@ms/container'
import * as fs from '@ms/common/dist/fs'

import { getPluginMetadatas } from './utils'
import { interfaces } from './interfaces';

@injectable()
export class PluginManagerImpl implements plugin.PluginManager {
    @inject(plugin.PluginInstance)
    private pluginInstance: any;
    @inject(server.ServerType)
    private serverType: string;
    @inject(server.Console)
    private Console: MiaoScriptConsole;

    private pluginMap: Map<string, interfaces.Plugin>;

    @postConstruct()
    init() {
        if (this.pluginInstance !== null) {
            // 如果plugin不等于null 则代表是正式环境
            console.info(`Initialization MiaoScript Plugin System: ${this.pluginInstance} ...`);
            this.pluginMap = new Map();
        }
    }

    scan(folder: string): void {
        var plugin = fs.file(root, folder);
        var files = []
            // load common plugin
            .concat(this.scanFloder(plugin))
            // load space plugin
            .concat(this.scanFloder(fs.file(plugin, this.serverType)))
        this.loadPlugins(files);
    }

    load(container: Container): void {
        this.buildPlugins(container);
    }

    enable(): void {
        this.pluginMap.forEach(pl => this.runCatch(pl, 'load'));
        this.pluginMap.forEach(pl => this.runCatch(pl, 'enable'));
    }

    disable(): void {
        throw new Error("Method not implemented.");
    }

    private runCatch(pl: any, func: string) {
        try {
            pl[func].call(pl);
        } catch (ex) {
            console.console(`§6插件 §b${pl.description.name} §6执行 §d${func} §6方法时发生错误 §4${ex}`);
            console.ex(ex);
        }
    }

    private scanFloder(plugin: any): string[] {
        var files = [];
        console.info(`Start Scan Plugins in ${plugin} ...`);
        this.checkUpdateFolder(plugin);
        fs.list(plugin).forEach(function searchPlugin(file) {
            files.push(file.toFile());
        });
        return files;
    }

    /**
     * 更新插件
     * @param path
     */
    private checkUpdateFolder(path) {
        var update = fs.file(path, "update");
        if (!update.exists()) {
            update.mkdirs();
        }
    }

    private loadPlugins(files: any[]): void {
        this.loadJsPlugins(files);
    }

    /**
    * JS类型插件预加载
    */
    private loadJsPlugins(files: any[]) {
        files.filter(file => file.name.endsWith(".js")).forEach(file => {
            try {
                this.loadPlugin(file)
            } catch (ex) {
                console.console(`§6插件 §b${file.name} §6初始化时发生错误 §4${ex.message}`);
                console.ex(ex);
            }
        })
    }

    private loadPlugin(file: any) {
        this.updatePlugin(file);
        this.createPlugin(file);
    }

    private updatePlugin(file: any) {
        var update = fs.file(fs.file(file.parentFile, 'update'), file.name);
        if (update.exists()) {
            console.info(`Auto Update Plugin ${file.name} ...`);
            fs.move(update, file, true);
        }
    }

    private createPlugin(file) {
        //@ts-ignore
        require(file, {
            cache: false
        });
    }

    private beforeLoadHook(origin) {
        var result = origin;
        // // 注入 console 对象         // 给插件注入单独的 console
        // result += '\nvar console = new Console(); module.exports.console = console;';
        // // 插件注入 self 对象
        // result += '\nvar self = {}; module.exports.self = self;';
        return result;
    }

    private buildPlugins(container: Container) {
        let pluginMetadatas = getPluginMetadatas();
        for (const metadata of pluginMetadatas) {
            container.bind(plugin.Plugin).to(metadata.target).inSingletonScope().whenTargetNamed(metadata.name);
            this.pluginMap.set(metadata.name, container.getNamed(plugin.Plugin, metadata.name));
            let pluginInstance = this.pluginMap.get(metadata.name)
            pluginInstance.description = metadata;
            // @ts-ignore
            pluginInstance.logger = new this.Console(metadata.name);
        }
    }
}
