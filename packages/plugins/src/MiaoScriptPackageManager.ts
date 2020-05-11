import { plugin as pluginApi, task, server } from '@ccms/api'

import { Translate } from '@ccms/i18n'
import { inject } from '@ccms/container';
import { interfaces, plugin, cmd, tab } from '@ccms/plugin'

import * as fs from '@ccms/common/dist/fs'
import http from '@ccms/common/dist/http'

let help = [
    '§6========= §6[§aMiaoScriptPackageManager§6] 帮助 §aBy §bMiaoWoo §6=========',
    '§6/mpm §ainstall §e<插件名称>  §6-  §3安装仓库插件',
    '§6/mpm §aload §e<插件名称>     §6-  §3安装本地插件',
    '§6/mpm §aunload §e<插件名称>   §6-  §3卸载已安装插件',
    '§6/mpm §areload §e<插件名称>   §6-  §3重载已安装插件(无名称则重载自身)',
    '§6/mpm §alist [i]            §6-  §3列出仓库插件[已安装的插件]',
    '§6/mpm §aupdate §e[插件名称]   §6-  §3更新插件(无名称则更新源)',
    '§6/mpm §aupgrade §e[插件名称]  §6-  §3升级插件/框架(§4无名称则升级框架§3)',
    '§6/mpm §arun §e<JS代码>        §6-  §3运行JS代码',
    '§6/mpm §adeploy §e<插件名称>   §6-  §3发布插件',
    '§6/mpm §crestart             §6-  §4重启MiaoScript脚本引擎'
];

let langMap = {
    'main.command.not.exists': '§4未知的子命令: §c{command}',
    'main.command.help.tip': '§6请执行 §b/{command} §ahelp §6查看帮助!',
    'list.install.header': '§6当前 §bMiaoScript §6已安装下列插件:',
    'list.install.body': '§6插件名称: §b{name} §6版本: §a{version} §6作者: §3{author}',
    'list.header': '§6当前 §bMiaoScriptPackageCenter §6中存在下列插件:',
    'list.body': '§6插件名称: §b{name} §6版本: §a{version} §6作者: §3{author} §6更新时间: §9{updated_at}',
    'plugin.not.exists': '§6插件 §b{name} §c不存在!',
    'plugin.unload.finish': '§6插件 §b{name} §a已卸载!',
    'plugin.reload.finish': '§6插件 §b{name} §a重载完成!',
    'plugin.name.empty': '§c请输入插件名称!',
    'cloud.update.finish': '§6成功从 §aMiaoScriptPackageCenter §6获取到 §a{length} §6个插件!',
    'cloud.not.exists': '§6当前 §aMiaoScriptPackageCenter §c不存在 §a{name} §c插件!',
    'download.start': '§6开始下载插件: §b{name}',
    'download.url': '§6插件下载地址: §b{url}',
    'download.finish': '§6插件 §b{name} §a下载完毕 开始加载 ...',
    'install.finish': '§6插件 §b{name} §a安装成功!',
    'update.finish': '§6插件 §b{name} §a更新成功!',
    'deploy.token.not.exists': '§4请先配置发布Token!',
    'deploy.success': '§6插件 §b{name} §a发布成功! §6服务器返回: §a{msg}',
    'deploy.fail': '§6插件 §b{name} §c发布失败! §6服务器返回: §c{msg}',
    'run.script': '§b运行脚本:§r {script}',
    'run.result': '§a返回结果:§r {result}',
    'run.noresult': '§4没有返回结果!',
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
    @inject(pluginApi.PluginFolder)
    private pluginFolder: string;

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
        if (!this[cmdKey]) {
            this.i18n(sender, 'main.command.not.exists', { command: args[0] })
            this.i18n(sender, 'main.command.help.tip', { command })
            return;
        }
        args.shift()
        this[cmdKey](sender, ...args);
    }

    cmdhelp(sender: any) {
        this.logger.sender(sender, help);
    }

    cmdload(sender: any, name: string) {
        let pluginFile = fs.concat(__dirname + '', name);
        if (!fs.exists(pluginFile)) {
            this.i18n(sender, 'plugin.not.exists', { name: `${name}(${pluginFile})` })
            return;
        }
        this.pluginManager.loadFromFile(fs.file(pluginFile));
    }

    cmdlist(sender: any, type: string = 'cloud') {
        if (type == "install") {
            this.i18n(sender, 'list.install.header')
            this.pluginManager.getPlugins().forEach((plugin) => {
                this.i18n(sender, 'list.install.body', plugin.description);
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

    cmdupgrade(sender: any, name: string) {
        if (name == "system") {
            let enginePath = fs.path(fs.file(fs.concat(root, 'node_modules', '@ccms')))
            if (enginePath.startsWith(root)) {
                base.delete(enginePath);
                this.cmdrestart(sender);
            }
        }
        if (this.checkPlugin(sender, name)) {
            this.update(sender, name);
            this.pluginManager.reload(name);
        }
    }

    cmdunload(sender: any, name: string) {
        if (this.checkPlugin(sender, name)) {
            this.pluginManager.disable(name)
            this.i18n(sender, 'plugin.unload.finish', { name })
        }
    }

    cmdreload(sender: any, name: string) {
        name = name || this.description.name
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

    checkCloudPlugin(sender: any, name: string) {
        if (name && this.packageNameCache.includes(name)) { return true }
        this.i18n(sender, 'cloud.not.exists', { name })
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
            Packages.java.lang.System.gc();
            ScriptEngineContextHolder.enableEngine();
            this.logger.sender(sender, '§3MiaoScript Engine §6Reload §aSuccessful...');
        } catch (ex) {
            this.logger.sender(sender, "§3MiaoScript Engine §6Reload §cError! ERR: " + ex);
            this.logger.sender(sender, this.logger.stack(ex));
        }
    }

    cmdrun(sender: any, ...args: any[]) {
        try {
            var script = args.join(' ');
            this.i18n(sender, 'run.script', { script })
            this.i18n(sender, 'run.result', { result: eval(script) || this.translate.translate('run.noresult') })
        } catch (ex) {
            this.logger.sender(sender, this.logger.stack(ex));
        }
    }

    cmddeploy(sender: any, name: any) {
        if (!process.env.AccessToken) { return this.i18n(sender, 'deploy.token.not.exists') }
        this.taskManager.create(() => {
            if (this.checkPlugin(sender, name)) {
                let plugin: interfaces.Plugin = this.pluginManager.getPlugins().get(name);
                let result = http.post("http://ms.yumc.pw/api/plugin/deploy?access_token=" + process.env.AccessToken, {
                    name,
                    author: plugin.description.author,
                    version: plugin.description.version,
                    source: base.read(plugin.description.source.toString())
                })
                this.i18n(sender, result.code == 200 ? 'deploy.success' : 'deploy.fail', { name, msg: result.msg })
            }
        }).async().submit()
    }

    update(sender: any, name: string) {
        if (this.checkCloudPlugin(sender, name)) {
            this.download(sender, name, true);
        }
    }

    @tab()
    tabmpm(sender: any, command: any, args: string | any[]) {
        if (args.length === 1) { return ['list', 'install', 'update', 'upgrade', 'reload', 'restart', 'run', 'help', 'create', 'deploy'] }
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
                case "deploy":
                    return [...this.pluginManager.getPlugins().keys()];
            }
        }
    }

    updateRepo(sender: any) {
        this.taskManager.create(() => {
            let result = http.get('http://ms.yumc.pw/api/plugin/list');
            for (const pl of result.data) { this.packageCache[pl.name] = pl; }
            this.packageNameCache = Object.keys(this.packageCache);
            this.i18n(sender, 'cloud.update.finish', { length: this.packageNameCache.length })
        }).async().submit();
    }

    download(sender: any, name: string, update: boolean = false) {
        this.taskManager.create(() => {
            this.i18n(sender, 'download.start', { name })
            this.i18n(sender, 'download.url', { url: this.packageCache[name].url })
            let pluginFile = update ? fs.concat(this.pluginFolder, 'update', name + '.js') : fs.concat(this.pluginFolder, name + '.js')
            http.download(this.packageCache[name].url, pluginFile)
            this.i18n(sender, 'download.finish', { name })
            this.pluginManager.loadFromFile(pluginFile)
            this.i18n(sender, update ? 'update.finish' : 'install.finish', { name })
        }).async().submit()
    }
}
