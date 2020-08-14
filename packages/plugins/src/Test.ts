import { plugin as pluginApi } from '@ccms/api'
import { plugin, interfaces, cmd, listener, tab } from '@ccms/plugin'
import { inject } from '@ccms/container'

import * as reflect from '@ccms/common/dist/reflect'
import http from '@ccms/common/dist/http'

const ByteArrayInputStream = Java.type("java.io.ByteArrayInputStream")
const ByteArrayOutputStream = Java.type("java.io.ByteArrayOutputStream")
const StandardCharsets = Java.type("java.nio.charset.StandardCharsets")
const GZIPInputStream = Java.type("java.util.zip.GZIPInputStream")
const GZIPOutputStream = Java.type("java.util.zip.GZIPOutputStream")
const JavaString = Java.type('java.lang.String')
const ByteArray = Java.type("byte[]")

class MiaoMessage {
    // public static final String CHANNEL = "MiaoChat:Default".toLowerCase();
    public static CHANNEL: string = "MiaoChat:Default".toLowerCase()
    // private static final int MAX_MESSAGE_LENGTH = 32000;
    private static MAX_MESSAGE_LENGTH = 32000;

    private static copy(input, output) {
        let buffer = new ByteArray(1024)
        let n: number
        while ((n = input.read(buffer)) != -1) {
            output.write(buffer, 0, n)
        }
        input.close()
        output.close()
    }
    public static encode(input: any): any {
        let baos = new ByteArrayOutputStream()
        MiaoMessage.copy(new ByteArrayInputStream(new JavaString(JSON.stringify(input)).getBytes(StandardCharsets.UTF_8)), new GZIPOutputStream(baos))
        if (baos.size() > MiaoMessage.MAX_MESSAGE_LENGTH) { return null }
        return baos.toByteArray()
    }
    public static decode(input: any): any {
        let baos = new ByteArrayOutputStream()
        MiaoMessage.copy(new GZIPInputStream(new ByteArrayInputStream(input)), baos)
        return JSON.parse(baos.toString(StandardCharsets.UTF_8.name()))
    }
}

@plugin({ name: 'Test', version: '1.0.0', author: 'MiaoWoo', source: __filename })
export class Test extends interfaces.Plugin {
    @inject(pluginApi.PluginManager)
    private PluginManager: pluginApi.PluginManager

    load() {
        this.logger.log('Test Plugin load from MiaoScript Plugin System...')
    }

    enable() {
        this.logger.log('Test Plugin enable from MiaoScript Plugin System...')
    }

    disable() {
        this.logger.log('Test Plugin disable from MiaoScript Plugin System...')
    }

    @cmd()
    test(sender: any, command: string, args: string[]) {
        switch (args[0]) {
            case "run":
                var script = args.slice(1).join(' ')
                console.sender(sender, '§b运行脚本:§r', script)
                console.sender(sender, '§a返回结果:§r', eval(script) || '§4没有返回结果!')
                break
            case "reload":
                this.PluginManager.reload(this)
                break
            case "yaml":
                let yaml = require("js-yaml")
                this.logger.log(yaml.safeDump({ key: 'value', map: { k1: 1, k2: '2' } }))
                break
            case "speed":
                this.logger.sender(sender, sender.location)
                break
            case "top":
                let loc = sender.location
                let topY = loc.world.getHighestBlockYAt(loc)
                loc.y = topY
                sender.teleport(loc)
                break
            case "up":
                if (!sender.openInventory) { return }
                let player = sender
                let location = player.location
                player.velocity = player.velocity.setY(0.5)
                setTimeout(() => location.block.type = Java.type('org.bukkit.Material').STONE, 8)
                break
            case "add":
                break
            case "get":
                let result = http.get('https://www.baidu.com')
                this.logger.sender(sender, JSON.stringify(result))
                // 好了 扯结束 继续咸鱼
                break
            case "ws":
                let Sponge = Java.type('org.spongepowered.api.Sponge')
                // let promise = reflect.on(Bukkit.server).get('console').get('field_147144_o').get('field_151274_e').get().get(0);
                console.log(reflect.on(Sponge.server).get('field_147144_o').get())
                // let channel = reflect.on(promise).get('channel').get().pipeline().first();
                // console.log(channel);
                break
            default:
                this.logger.log(sender, command, args)
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
