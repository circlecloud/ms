import { plugin as pluginApi, task } from '@ms/api'

import { inject } from '@ms/container';
import { plugin, cmd, tab } from '@ms/plugin'

let help = [
    '§6========= §6[§aMiaoScriptPackageManager§6] 帮助 §aBy §b喵♂呜 §6=========',
    '§6/mpm §ainstall §e<插件名称> §6- §3安装插件',
    '§6/mpm §alist [install]§6- §3列出仓库插件[已安装的插件]',
    '§6/mpm §aupdate §e<插件名称> §6- §3更新插件(无插件名称则更新源)',
    '§6/mpm §aupgrade §e<插件名称> §6- §3及时更新插件(update需要重启生效)',
    '§6/mpm §areload §e<插件名称> §6- §3重载插件(无插件名称则重载自身)',
    '§6/mpm §arun §e<JS代码> §6- §3运行JS代码',
    '§6/mpm §acreate §e<插件名称> [作者] [版本] [主命令] §6- §3通过模板创建名称',
    '§6/mpm §crestart §6- §4重启MiaoScript脚本引擎'
];

@plugin({ name: 'MiaoScriptPackageManager', prefix: 'PM', version: '1.0.0', author: 'MiaoWoo', source: __filename })
export class MiaoScriptPackageManager {
    @inject(pluginApi.PluginManager)
    private pluginManager: pluginApi.PluginManager;
    @inject(task.TaskManager)
    private taskManager: task.TaskManager;

    private pluginCache = [];
    private packageCache = [];
    private packageNameCache = [];

    load() {
        this.taskManager.create(() => {
            this.pluginCache = [...this.pluginManager.getPlugins().keys()];
            // JSON.parse(http.get(self.config.center)).data.forEach(function cachePackageName(pkg) {
            //     packageCache[pkg.name] = pkg;
            // })
            // packageNameCache = Object.keys(packageCache);
        }).async().submit();
    }

    enable() {

    }

    @cmd()
    mpm(sender: any, command: string, args: string[]) {
        this.taskManager.create(() => this.main(sender, command, args)).async().submit();
    }

    main(sender: any, command: string, args: string[]) {
        if (!args[0] || args[1] === 'help') {
            console.sender(sender, help);
            return;
        }
        switch (args[0]) {
            case "list":
                if (args[1]) {
                    console.sender(sender, '§6当前 §bMiaoScript §6已安装下列插件:');
                    this.pluginCache.forEach(function listInfo(pluginName) {
                        // var desc = manager.plugins[pluginName].description;
                        // console.sender(sender, `§6插件名称: §b${desc.name} §6版本: §a${desc.version|| '1.0'} §6作者: §3${desc.author || '未知'}`)
                    })
                } else {
                    console.sender(sender, '§6当前 §bMiaoScriptPackageCenter §6中存在下列插件:');
                    for (var pkgName in this.packageCache) {
                        var pkg = this.packageCache[pkgName];
                        // console.sender(sender, '§6插件名称: §b%s §6版本: §a%s §6作者: §3%s'.format(pkg.name, pkg.version || '1.0', pkg.author || '未知'))
                    }
                }
                break;
            case "install":
                // if (args.length > 1) {
                //     download(sender, args[1]);
                // } else {
                //     console.sender(sender, '§c请输入插件名称!')
                // }
                break;
            case "update":
                // if (args.length > 1) {
                //     update(sender, args[1]);
                // } else {
                //     load();
                //     console.sender(sender, "§a仓库缓存刷新成功 共存在 §b" + Object.keys(packageCache).length + " §a个插件!")
                // }
                break;
            case "upgrade":
                break;
            case "delete":
                // if (args.length > 1) {
                //     del(sender, args[1]);
                // } else {
                //     console.sender(sender, '§c请输入插件名称!')
                // }
                break;
            case "reload":
                // if (args.length > 1) {
                //     var pname = args[1];
                //     if (pluginCache.indexOf(pname) !== -1) {
                //         manager.reload(pname)
                //         console.sender(sender, '§6插件 §b%s §a重载完成!'.format(pname))
                //     } else {
                //         console.sender(sender, '§c插件 §b%s §c不存在!'.format(pname))
                //     }
                // } else {
                //     self.reloadConfig();
                //     load();
                // }
                break;
            case "restart":
                try {
                    console.sender(sender, '§6Reloading §3MiaoScript Engine...');
                    ScriptEngineContextHolder.disableEngine();
                    ScriptEngineContextHolder.enableEngine();
                    console.sender(sender, '§3MiaoScript Engine §6Reload §aSuccessful...');
                } catch (ex) {
                    console.sender(sender, "§3MiaoScript Engine §6Reload §cError! ERR: " + ex);
                    console.sender(sender, console.stack(ex));
                }
                break;
            case "run":
                args.shift();
                try {
                    var script = args.join(' ')
                    console.sender(sender, '§b运行脚本:§r', script)
                    console.sender(sender, '§a返回结果:§r', eval(script) || '§4没有返回结果!');
                } catch (ex) {
                    console.sender(sender, console.stack(ex))
                }
                break;
            case "create":
                // var name = args[1];
                // if (!name) {
                //     console.sender(sender, '§4参数错误 /mpm create <插件名称> [作者] [版本] [主命令]');
                //     return;
                // }
                // var result = template.create(http.get(self.config.template)).render({
                //     name: name,
                //     author: args[2] || 'MiaoWoo',
                //     version: args[3] || '1.0',
                //     command: args[4] || name.toLowerCase(),
                // });
                // fs.save(fs.file(__dirname, name + '.js'), result);
                // console.sender(sender, '§6插件 §a' + name + ' §6已生成到插件目录...');
                break;
            default:
                console.sender(sender, help);
                break;
        }
    }

    @tab()
    tabmpm(sender, command, args) {
        if (args.length === 1) return ['list', 'install', 'update', 'upgrade', 'reload', 'restart', 'run', 'help', 'create'];
        if (args.length > 1) {
            switch (args[0]) {
                case "install":
                    return this.packageNameCache;
                case "update":
                case "upgrade":
                case "reload":
                    return this.pluginCache;
            }
        }
    }
}