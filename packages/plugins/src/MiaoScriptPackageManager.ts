import { plugin as pluginApi, task, server } from '@ccms/api'

import { Translate } from '@ccms/i18n'
import { inject } from '@ccms/container';
import { interfaces, plugin, cmd, tab } from '@ccms/plugin'

import * as fs from '@ccms/common/dist/fs'
import http from '@ccms/common/dist/http'

let help = [
    '§6========= §6[§aMiaoScriptPackageManager§6] 帮助 §aBy §b喵♂呜 §6=========',
    '§6/mpm §ainstall §e<插件名称> §6- §3安装插件',
    '§6/mpm §auninstall §e<插件名称> §6- §3卸载插件',
    '§6/mpm §alist [install]§6- §3列出仓库插件[已安装的插件]',
    '§6/mpm §aupdate §e<插件名称> §6- §3更新插件(无插件名称则更新源)',
    '§6/mpm §aupgrade §e<插件名称> §6- §3及时更新插件(update需要重启生效)',
    '§6/mpm §areload §e<插件名称> §6- §3重载插件(无插件名称则重载自身)',
    '§6/mpm §arun §e<JS代码> §6- §3运行JS代码',
    '§6/mpm §acreate §e<插件名称> [作者] [版本] [主命令] §6- §3通过模板创建名称',
    '§6/mpm §crestart §6- §4重启MiaoScript脚本引擎'
];

let langMap = {
    'list.header.install': '§6当前 §bMiaoScript §6已安装下列插件:',
    'list.header': '§6当前 §bMiaoScriptPackageCenter §6中存在下列插件:',
    'list.body': '§6插件名称: §b{name} §6版本: §a{version} §6作者: §3{author}',
    'plugin.not.exists': '§6插件 §b{name} §c不存在!',
    'plugin.unload.finish': '§6插件 §b{name} §a已卸载!',
    'plugin.reload.finish': '§6插件 §b{name} §a重载完成!',
    'plugin.name.empty': '§c请输入插件名称!',
    'cloud.update.finish': '§6成功从 §aMiaoScriptPackageCenter §6获取到 §a{length} §6个插件!',
    'cloud.not.exists': '§6当前 §aMiaoScriptPackageCenter §c不存在 §a{name} §c插件!'
}

let fallbackMap = langMap

@plugin({ name: 'MiaoScriptPackageManager', prefix: 'PM', version: '1.0.0', author: 'MiaoWoo', source: __filename })
export class MiaoScriptPackageManager extends interfaces.Plugin {
    @inject(pluginApi.PluginManager)
    private pluginManager: pluginApi.PluginManager;
    @inject(task.TaskManager)
    private taskManager: task.TaskManager;
    @inject(server.ServerType)
    private serverType: string;
    @inject(server.Server)
    private server: server.Server

    private packageCache: any[] = [];
    private packageNameCache: string[] = [];

    private translate: Translate;

    load() {
        this.translate = new Translate({
            langMap,
            fallbackMap
        })
        this.updateRepo(this.server.getConsoleSender())
    }

    @cmd()
    mpm(sender: any, command: string, args: string[]) {
        this.taskManager.create(() => this.main(sender, command, args)).async().submit();
    }

    i18n(sender: any, name: string, params?: any) {
        this.logger.sender(sender, this.translate.translate(name, params))
    }

    main(sender: any, command: string, args: string[]) {
        let cmdKey = 'cmd' + args[0]
        if (!this[cmdKey] || args[0] === 'help') {
            this.logger.sender(sender, help);
            return;
        }
        args.shift()
        this[cmdKey](sender, ...args);
    }

    cmdlist(sender, type: string = 'cloud') {
        if (type == "install") {
            this.i18n(sender, 'list.header.install')
            this.pluginManager.getPlugins().forEach((plugin) => {
                this.i18n(sender, 'list.body', plugin.description);
            })
        } else {
            this.i18n(sender, 'list.header')
            for (var pkgName in this.packageCache) {
                this.i18n(sender, 'list.body', this.packageCache[pkgName]);
            }
        }
    }

    cmdinstall(sender: any, name: string) {
        if (!name) { return this.i18n(sender, 'plugin.name.empty') }
        this.download(sender, name);
    }

    cmdupdate(sender: any, name: string) {
        if (name) {
            this.update(sender, name);
        } else {
            this.updateRepo(sender)
        }
    }

    cmdunload(sender: any, name: string) {
        if (this.checkPlugin(sender, name)) {
            this.pluginManager.disable(name)
            this.i18n(sender, 'plugin.unload.finish', { name })
        }
    }

    cmdreload(sender: any, name: string) {
        if (this.checkPlugin(sender, name)) {
            this.pluginManager.reload(name);
            this.i18n(sender, 'plugin.reload.finish', { name })
        }
    }

    checkPlugin(sender: any, name: string) {
        if (name && this.pluginManager.getPlugins().has(name)) { return true }
        this.i18n(sender, 'plugin.not.exists', { name })
        return false
    }

    cmdrestart(sender: any) {
        if (this.serverType === "sponge") {
            setTimeout(() => this.server.dispatchConsoleCommand('sponge plugins reload'), 0)
            return
        }
        try {
            this.logger.sender(sender, '§6Reloading §3MiaoScript Engine...');
            ScriptEngineContextHolder.disableEngine();
            ScriptEngineContextHolder.enableEngine();
            this.logger.sender(sender, '§3MiaoScript Engine §6Reload §aSuccessful...');
        } catch (ex) {
            this.logger.sender(sender, "§3MiaoScript Engine §6Reload §cError! ERR: " + ex);
            this.logger.sender(sender, this.logger.stack(ex));
        }
    }

    cmdrun(sender, ...args: any[]) {
        try {
            var script = args.join(' ');
            this.logger.sender(sender, '§b运行脚本:§r', script);
            this.logger.sender(sender, '§a返回结果:§r', eval(script) || '§4没有返回结果!');
        } catch (ex) {
            this.logger.sender(sender, this.logger.stack(ex));
        }
    }

    update(sender: any, name: string) {
        if (!this.packageNameCache.includes(name)) {
            this.i18n(sender, 'cloud.not.exists', { name })
        }
    }

    @tab()
    tabmpm(sender, command, args) {
        if (args.length === 1) return ['list', 'install', 'update', 'upgrade', 'reload', 'restart', 'run', 'help', 'create'];
        if (args.length > 1) {
            switch (args[0]) {
                case "list":
                    return ["install", "cloud"]
                case "install":
                    return this.packageNameCache;
                case "update":
                case "upgrade":
                case "load":
                case "unload":
                case "reload":
                    return [...this.pluginManager.getPlugins().keys()];
            }
        }
    }

    updateRepo(sender: any) {
        this.taskManager.create(() => {
            let result = http.get('http://ms.yumc.pw/api/plugin');
            for (const pl of result.data) {
                this.packageCache[pl.name] = pl;
            }
            this.packageNameCache = Object.keys(this.packageCache);
            this.i18n(sender, 'cloud.update.finish', { length: this.packageNameCache.length })
        }).async().submit();
    }

    download(sender, name) {

    }
}
