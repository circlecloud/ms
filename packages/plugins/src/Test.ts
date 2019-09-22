import { plugin as pluginApi } from '@ms/api'
import { plugin, interfaces, cmd, listener, tab } from '@ms/plugin'
import { inject, DefaultContainer as container } from '@ms/container';
import * as ref from '@ms/common/dist/reflect'

@plugin({ name: 'Test', version: '1.0.0', author: 'MiaoWoo', source: __filename })
export class Test extends interfaces.Plugin {
    @inject(pluginApi.PluginManager)
    private PluginManager: pluginApi.PluginManager;

    private channel: any;
    private childHandler: any;

    load() {
        this.logger.log('Test Plugin load from MiaoScript Plugin System...');
    }

    enable() {
        this.logger.log('Test Plugin enable from MiaoScript Plugin System...');
    }

    bukkitenable() {
        let Bukkit = Java.type('org.bukkit.Bukkit');
        let promise = ref.on(Bukkit.getServer()).get('console').get('serverConnection').get('f').get().get(0);
        this.channel = ref.on(promise).get('channel').get().pipeline().first();
        this.childHandler = ref.on(this.channel).get('childHandler').get();
        let ChannelHandler = Java.extend(Java.type('io.netty.channel.ChannelInitializer'), {
            initChannel: function(channel: any) {
                container.get<any>('handle')(channel);
            }
        })
        //=======================
        let ChannelInboundHandlerAdapter = Java.type('io.netty.channel.ChannelInboundHandlerAdapter');
        let CharsetUtil = Java.type('io.netty.util.CharsetUtil')
        let MiaoDetectHandler = Java.extend(ChannelInboundHandlerAdapter, {
            channelRead: function(ctx: any, msg: any) {
                msg.markReaderIndex();
                console.log(msg.readChar());
                msg.resetReaderIndex();
                let message: string = msg.toString(CharsetUtil.UTF_8);
                console.log(message);
                let channel = ctx.channel();
                let pipeline = channel.pipeline();
                if (message.indexOf('HTTP/1.1') > 0) {
                    'timeout legacy_query splitter decoder prepender encoder packet_handler'.split(' ').forEach(f => channel.pipeline().remove(f))
                    let HttpServerCodec = Java.type('io.netty.handler.codec.http.HttpServerCodec');
                    let ChunkedWriteHandler = Java.type('io.netty.handler.stream.ChunkedWriteHandler');
                    let HttpObjectAggregator = Java.type('io.netty.handler.codec.http.HttpObjectAggregator');
                    let WebSocketServerProtocolHandler = Java.type('io.netty.handler.codec.http.websocketx.WebSocketServerProtocolHandler');

                    let SimpleChannelInboundHandler = Java.type('io.netty.channel.SimpleChannelInboundHandler');
                    let TextWebSocketFrame = Java.type('io.netty.handler.codec.http.websocketx.TextWebSocketFrame');
                    let textWsHandler;
                    let TextWebSocketFrameHandler = Java.extend(SimpleChannelInboundHandler, {
                        userEventTriggered: (ctx: any, msg: any) => {
                            ctx.writeAndFlush(new TextWebSocketFrame(`Client ${ctx.channel} connect successful...`))
                            //@ts-ignore
                            Java.super(textWsHandler).userEventTriggered(ctx, msg);
                        },
                        channelRead0: (ctx: any, msg: any) => {
                            console.log(msg);
                            console.log(typeof msg);
                            console.log(msg.class);
                            ctx.writeAndFlush(msg.retain())
                        }
                    })
                    textWsHandler = new TextWebSocketFrameHandler()
                    pipeline.addLast('http', new HttpServerCodec());
                    pipeline.addLast('chunk', new ChunkedWriteHandler());
                    pipeline.addLast('httpobj', new HttpObjectAggregator(64 * 1024));
                    pipeline.addLast('websocket', new WebSocketServerProtocolHandler("/ws"));
                    pipeline.addLast('websocket_handler', textWsHandler);
                }
                pipeline.remove('miaowebsocket');
                console.log(`Connect Complate. channel: ${channel}, pipeline: ${Java.from(channel.pipeline().names()).join(' ')}`)
                msg.resetReaderIndex();
                ctx.fireChannelRead(msg);
            }
        })
        ref.on(this.channel).set('childHandler', new ChannelHandler());
        container.bind('handle').toFunction(channel => {
            ref.on(this.childHandler).call('initChannel', channel);
            console.log(`channel: ${channel}, pipeline: ${Java.from(channel.pipeline().names()).join(' ')}`)
            let pipeline = channel.pipeline();

            pipeline.addFirst('miaowebsocket', new MiaoDetectHandler());

            console.log(`channel: ${channel}, pipeline: ${Java.from(channel.pipeline().names()).join(' ')}`)
        });
    }

    disable() {
        this.logger.log('Test Plugin disable from MiaoScript Plugin System...');
    }

    bukkitdisable() {
        ref.on(this.channel).set('childHandler', this.childHandler);
        container.unbind('handle')
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
            case "channel":
                console.sender(sender, Java.from(sender.handle.playerConnection.networkManager.channel.pipeline().names()).join(' '))
                break;
            case "add":

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
                var player = sender;
                var location = player.location;
                player.velocity = player.velocity.setY(0.5);
                setTimeout(() => location.block.type = Java.type('org.bukkit.Material').STONE, 8);
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

    @listener({ servertype: 'bukkit' })
    playerjoin(event: any) {
        this.logger.console('PlayerJoinEvent: ', event.player.name)
    }
}
