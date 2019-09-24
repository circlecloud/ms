import { plugin, interfaces } from '@ms/plugin'
import { DefaultContainer as container } from '@ms/container';
import * as ref from '@ms/common/dist/reflect'

@plugin({ name: 'WebSocket', version: '1.0.0', author: 'MiaoWoo', source: __filename })
export class WebSocket extends interfaces.Plugin {
    private channel: any;
    private childHandler: any;

    load() {
        this.logger.log('Test Plugin load from MiaoScript Plugin System...');
    }
    enable() {
        this.logger.log('Test Plugin enable from MiaoScript Plugin System...');
    }
    disable() {
        this.logger.log('Test Plugin disable from MiaoScript Plugin System...');
    }

    bukkitload() {
        this.logger.log('Load When ServerType is Bukkit!')
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

    bukkitdisable() {
        ref.on(this.channel).set('childHandler', this.childHandler);
        container.unbind('handle')
    }

    spongeload() {
        this.logger.log('Load When ServerType is Sponge!')
    }
    spongeenable() {
        this.logger.log('Enable When ServerType is Sponge!')
    }
    spongedisable() {
        this.logger.log('Disable When ServerType is Sponge!')
    }
}
