/// <reference types="@ms/types/dist/typings/bukkit" />
/// <reference types="@ms/types/dist/typings/sponge" />
import { plugin as pluginApi, server } from '@ms/api'
import { plugin, interfaces, cmd } from '@ms/plugin'
import { DefaultContainer as container, inject, postConstruct } from '@ms/container'
import * as reflect from '@ms/common/dist/reflect'

let clients: any[] = []
let SPLIT_LINE = '\\M\\W\\S|T|S|S/L/T/'
const refList: Array<{ server: string, future: string }> = [
    { server: 'an', future: 'g' },
    { server: 'getServerConnection', future: 'f' },
    { server: 'func_147137_ag', future: 'field_151274_e' }
]

const Callable = Java.type('java.util.concurrent.Callable')

@plugin({ name: 'WebSocket', version: '1.0.0', author: 'MiaoWoo', source: __filename })
export class WebSocket extends interfaces.Plugin {
    @inject(pluginApi.PluginManager)
    private PluginManager: pluginApi.PluginManager
    @inject(server.ServerType)
    private ServerType: string
    @inject(pluginApi.PluginInstance)
    private pluginInstance: any
    private pipeline: any

    @cmd()
    ws(sender: any, command: string, args: string[]) {
        switch (args[0]) {
            case "reload":
                this.PluginManager.reload(this)
                break
            default:
        }
    }

    disable() {
        if (this.pipeline) {
            this.pipeline.remove('miao_detect')
            clients.forEach(c => c.close())
            container.unbind('onmessage')
        }
    }

    bukkitenable() {
        let Bukkit = Java.type('org.bukkit.Bukkit')
        let consoleServer = reflect.on(Bukkit.getServer()).get('console').get()
        this.injectMiaoDetect(this.reflectPromise(consoleServer))
    }

    spongeenable() {
        let Sponge = Java.type('org.spongepowered.api.Sponge')
        let consoleServer = reflect.on(Sponge.getServer()).get()
        this.injectMiaoDetect(this.reflectPromise(consoleServer))
    }

    reflectPromise(consoleServer) {
        for (const ref of refList) {
            try { return reflect.on(consoleServer).call(ref.server).get(ref.future).get().get(0) } catch (error) { }
        }
    }

    injectMiaoDetect(promise) {
        if (!promise) { throw Error(`Can't found ServerConnection or ChannelFuture !`) }
        this.pipeline = reflect.on(promise).get('channel').get().pipeline()
        this.pipeline.addFirst('miao_detect', new MiaoDetectHandler())
        container.bind('onmessage').toFunction(this.onmessage.bind(this))
    }

    onmessage(ctx: any, msg: any) {
        let text: string = msg.text()
        const [type, content] = text.split('\\M\\W\\S|T|S|S/L/T/')
        try {
            var result = this[type](ctx, content)
        } catch (ex) {
            var result = '§4代码执行异常\n' + console.stack(ex).join('\n')
        }
        result && this.sendResult(ctx, "log", result)
    }

    execCommand(ctx: any, cmd: string) {
        switch (this.ServerType) {
            case "bukkit":
                org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), cmd)
                break
            case "sponge":
                break
        }
        return `§6命令: §b${cmd} §a执行成功!`
    }

    execCode(ctx: any, code: string) {
        switch (this.ServerType) {
            case "bukkit":
                return org.bukkit.Bukkit.getScheduler().callSyncMethod(this.pluginInstance, new Callable({ call: () => eval(code) })).get() || '无返回结果'
            case "sponge":
                return ''
        }
    }

    execDetect(ctx: any, cmd: string) {
        switch (cmd) {
            case "type":
                let version = this.ServerType == 'bukkit' ? org.bukkit.Bukkit.getServer().getVersion() : org.spongepowered.api.Sponge.getPlatform().getMinecraftVersion()
                this.sendResult(ctx, "type", this.ServerType)
                return `Currect Server Version is ${version}`
        }
    }

    sendResult(ctx: any, type: string, msg: string) {
        ctx.writeAndFlush(new TextWebSocketFrame(`${type}${SPLIT_LINE}${msg}`))
    }
}

const ChannelInboundHandlerAdapter = Java.type('io.netty.channel.ChannelInboundHandlerAdapter')
const CharsetUtil = Java.type('io.netty.util.CharsetUtil')
const TextWebSocketFrame = Java.type('io.netty.handler.codec.http.websocketx.TextWebSocketFrame')
const MiaoDetectHandler = Java.extend(ChannelInboundHandlerAdapter, {
    channelRead: (ctx: any, channel: any) => {
        channel.pipeline().addFirst('miaowebsocket', new WebSocketHandler())
        ctx.fireChannelRead(channel)
    }
})
const TypeParameterMatcher = Java.type('io.netty.util.internal.TypeParameterMatcher')
const DefaultHttpResponse = Java.type('io.netty.handler.codec.http.DefaultHttpResponse')
const DefaultFullHttpResponse = Java.type('io.netty.handler.codec.http.DefaultFullHttpResponse')
const HttpHeaders = Java.type('io.netty.handler.codec.http.HttpHeaders')
const HttpVersion = Java.type('io.netty.handler.codec.http.HttpVersion')
const HttpResponseStatus = Java.type('io.netty.handler.codec.http.HttpResponseStatus')
const LastHttpContent = Java.type('io.netty.handler.codec.http.LastHttpContent')
const HttpServerCodec = Java.type('io.netty.handler.codec.http.HttpServerCodec')
const ChunkedWriteHandler = Java.type('io.netty.handler.stream.ChunkedWriteHandler')
const HttpObjectAggregator = Java.type('io.netty.handler.codec.http.HttpObjectAggregator')
const WebSocketServerProtocolHandler = Java.type('io.netty.handler.codec.http.websocketx.WebSocketServerProtocolHandler')
const SimpleChannelInboundHandler = Java.type('io.netty.channel.SimpleChannelInboundHandler')
const FullHttpRequestMatcher = TypeParameterMatcher.get(base.getClass('io.netty.handler.codec.http.FullHttpRequest'))
const File = Java.type('java.io.File')
const RandomAccessFile = Java.type('java.io.RandomAccessFile')
const DefaultFileRegion = Java.type('io.netty.channel.DefaultFileRegion')
const ChannelFutureListener = Java.type('io.netty.channel.ChannelFutureListener')
const HttpRequestHandler = Java.extend(SimpleChannelInboundHandler, {
    acceptInboundMessage: (msg: any) => {
        return FullHttpRequestMatcher.match(msg)
    },
    channelRead0: (ctx: any, request: any) => {
        if ('/ws' == request.getUri()) {
            ctx.fireChannelRead(request.retain())
        } else {
            if (HttpHeaders.is100ContinueExpected(request)) {
                ctx.writeAndFlush(new DefaultFullHttpResponse(HttpVersion.HTTP_1_1, HttpResponseStatus.CONTINUE))
            }
            let filename = request.getUri().split('?')[0].substr(1)
            let file = new File('/home/project/TSWorkSpace/ms/packages/plugins/public', filename || 'index.html')
            if (!file.exists() || !file.isFile()) {
                ctx.write(new DefaultHttpResponse(request.getProtocolVersion(), HttpResponseStatus.NOT_FOUND))
                ctx.writeAndFlush(LastHttpContent.EMPTY_LAST_CONTENT).addListener(ChannelFutureListener.CLOSE)
                return
            }
            let response = new DefaultHttpResponse(request.getProtocolVersion(), HttpResponseStatus.OK)
            response.headers().set(HttpHeaders.Names.CONTENT_TYPE, "text/html charset=UTF-8")
            let raf = new RandomAccessFile(file, 'r')
            let keepAlive = HttpHeaders.isKeepAlive(request)
            if (keepAlive) {
                response.headers().set(HttpHeaders.Names.CONTENT_LENGTH, file.length())
                response.headers().set(HttpHeaders.Names.CONNECTION, HttpHeaders.Values.KEEP_ALIVE)
            }
            ctx.write(response)
            ctx.write(new DefaultFileRegion(raf.getChannel(), 0, raf.length()))
            let future = ctx.writeAndFlush(LastHttpContent.EMPTY_LAST_CONTENT)
            if (!keepAlive) {
                future.addListener(ChannelFutureListener.CLOSE)
            }
        }
    }
})
const TextWebSocketFrameMatcher = TypeParameterMatcher.get(base.getClass('io.netty.handler.codec.http.websocketx.TextWebSocketFrame'))
const TextWebSocketFrameHandler = Java.extend(SimpleChannelInboundHandler, {
    userEventTriggered: (ctx: any, evt: any) => {
        if (evt == 'HANDSHAKE_COMPLETE') {
            clients.push(ctx.channel())
            console.console(`§6[§cMS§6][§bWebSocket§6]§r new client §b${ctx.channel().id()} §aconnected...`)
        }
    },
    acceptInboundMessage: (msg: any) => {
        return TextWebSocketFrameMatcher.match(msg)
    },
    channelRead0: (ctx: any, msg: any) => {
        container.get<any>('onmessage')(ctx, msg)
    }
})
const WebSocketHandler = Java.extend(ChannelInboundHandlerAdapter, {
    channelRead: function(ctx: any, msg: any) {
        msg.markReaderIndex()
        let message: string = msg.toString(CharsetUtil.UTF_8)
        let channel = ctx.channel()
        let pipeline = channel.pipeline()
        if (message.indexOf('HTTP/1.1') > 0) {
            channel.pipeline().names().forEach(f => {
                if (f == 'miaowebsocket' || f.indexOf('DefaultChannelPipeline') > -1) { return }
                pipeline.remove(f)
            })
            pipeline.addLast('http', new HttpServerCodec())
            pipeline.addLast('chunk', new ChunkedWriteHandler())
            pipeline.addLast('httpobj', new HttpObjectAggregator(64 * 1024))
            pipeline.addLast('http_request', new HttpRequestHandler())
            pipeline.addLast('websocket', new WebSocketServerProtocolHandler("/ws"))
            pipeline.addLast('websocket_handler', new TextWebSocketFrameHandler())
        }
        pipeline.remove('miaowebsocket')
        msg.resetReaderIndex()
        ctx.fireChannelRead(msg)
    }
})
