import { plugin as pluginApi } from '@ms/api'
import { plugin, interfaces, cmd, listener, tab } from '@ms/plugin'
import { inject } from '@ms/container';

import * as reflect from '@ms/common/dist/reflect';
import http from '@ms/common/dist/http';

@plugin({ name: 'Test', version: '1.0.0', author: 'MiaoWoo', source: __filename })
export class Test extends interfaces.Plugin {
    @inject(pluginApi.PluginManager)
    private PluginManager: pluginApi.PluginManager;

    load() {
        this.logger.log('Test Plugin load from MiaoScript Plugin System...');
    }

    enable() {
        this.logger.log('Test Plugin enable from MiaoScript Plugin System...');
    }

    disable() {
        this.logger.log('Test Plugin disable from MiaoScript Plugin System...');
    }

    @cmd()
    test(sender: any, command: string, args: string[]) {
        switch (args[0]) {
            case "run":
                var script = args.slice(1).join(' ');
                console.sender(sender, '§b运行脚本:§r', script);
                console.sender(sender, '§a返回结果:§r', eval(script) || '§4没有返回结果!');
                break;
            case "reload":
                this.PluginManager.reload(this);
                break;
            case "yaml":
                let yaml = require("js-yaml");
                this.logger.log(yaml.safeDump({ key: 'value', map: { k1: 1, k2: '2' } }));
                break;
            case "speed":
                this.logger.sender(sender, sender.location);
                break;
            case "top":
                let loc = sender.location;
                let topY = loc.world.getHighestBlockYAt(loc);
                loc.y = topY;
                sender.teleport(loc);
                break;
            case "up":
                if (!sender.openInventory) { return; }
                let player = sender;
                let location = player.location;
                player.velocity = player.velocity.setY(0.5);
                setTimeout(() => location.block.type = Java.type('org.bukkit.Material').STONE, 8);
                break;
            case "add":
                break;
            case "get":
                let result = http.get('https://www.baidu.com');
                this.logger.sender(sender, JSON.stringify(result));
                // 好了 扯结束 继续咸鱼
                break;
            case "ws":
                let Sponge = Java.type('org.spongepowered.api.Sponge');
                // let promise = reflect.on(Bukkit.server).get('console').get('field_147144_o').get('field_151274_e').get().get(0);
                console.log(reflect.on(Sponge.server).get('field_147144_o').get())
                // let channel = reflect.on(promise).get('channel').get().pipeline().first();
                // console.log(channel);
                break;
            default:
                this.logger.log(sender, command, args);
                sender.sendMessage(JSON.stringify({ command, ...args }))
        }
    }

    @tab()
    tabtest(_sender: any, _command: string, _args: string[]) {
        return ['run', 'reload', 'channel', 'add', 'yaml', 'speed', 'top', 'up']
    }

    @listener({ servers: ['bukkit'] })
    playerjoin(event: any) {
        this.logger.console('PlayerJoinEvent: ', event.player.name)
    }
}
