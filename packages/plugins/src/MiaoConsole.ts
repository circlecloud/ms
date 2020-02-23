/// <reference types="@ms/types/dist/typings/bukkit" />
/// <reference types="@ms/types/dist/typings/sponge" />
/// <reference types="@ms/types/dist/typings/bungee" />

import { plugin as pluginApi, server, task } from '@ms/api'
import { plugin, interfaces, cmd } from '@ms/plugin'
import { inject, Container, ContainerInstance, postConstruct } from '@ms/container'
import * as reflect from '@ms/common/dist/reflect'

let clients: any[] = []
let SPLIT_LINE = '\\M\\W\\S|T|S|S/L/T/'
let MessageHandle = Symbol.for('MiaoConsole:MessageHandle')
const refList: Array<{ server: string, future: string }> = [
    { server: 'an', future: 'g' },//spigot 1.12.2
    { server: 'getServerConnection', future: 'f' },//after spigot 1.14.4
    { server: 'func_147137_ag', future: 'field_151274_e' }//catserver 1.12.2
]

@plugin({ name: 'MiaoConsole', version: '1.0.0', author: 'MiaoWoo', source: __filename })
export class MiaoConsole extends interfaces.Plugin {
    public static GlobalContainer: Container
    public static GlobalLogger: Console

    @inject(ContainerInstance)
    private container: Container
    @inject(pluginApi.PluginManager)
    private PluginManager: pluginApi.PluginManager
    @inject(server.ServerType)
    private ServerType: string
    @inject(server.Server)
    private Server: server.Server
    @inject(task.TaskManager)
    private Task: task.TaskManager

    private pipeline: any

    @cmd()
    mconsole(sender: any, command: string, args: string[]) {
        switch (args[0]) {
            case "reload":
                this.PluginManager.reload(this)
                break
            default:
        }
    }

    enable() {
        MiaoConsole.GlobalLogger = this.logger
        MiaoConsole.GlobalContainer = this.container
    }

    disable() {
        if (this.pipeline) {
            if (this.pipeline.names().contains('miao_detect')) {
                this.pipeline.remove('miao_detect')
            }
            clients.forEach(c => c.close())
            this.container.unbind(MessageHandle)
        }
    }

    bukkitenable() {
        let Bukkit = Java.type('org.bukkit.Bukkit')
        let consoleServer = reflect.on(Bukkit.getServer()).get('console').get()
        this.reflectChannel(this.reflectPromise(consoleServer))
        this.injectMiaoDetect()
    }

    spongeenable() {
        let Sponge = Java.type('org.spongepowered.api.Sponge')
        let consoleServer = reflect.on(Sponge.getServer()).get()
        this.reflectChannel(this.reflectPromise(consoleServer))
        this.injectMiaoDetect()
    }

    bungeeenable() {
        let wait = this.Task.create(() => {
            try {
                // @ts-ignore
                this.pipeline = reflect.on(base.getInstance().getProxy()).get('listeners').get().toArray()[0].pipeline()
                this.injectMiaoDetect()
                wait.cancel();
            } catch (ex) {
                this.logger.warn('Wait BungeeCord start ready to get netty channel pipeline. Err: ' + ex)
            }
        }).later(300).timer(500).submit()
    }

    reflectPromise(consoleServer) {
        for (const ref of refList) {
            try { return reflect.on(consoleServer).call(ref.server).get(ref.future).get().get(0) } catch (error) { }
        }
    }

    reflectChannel(promise) {
        if (!promise) { throw Error(`Can't found ServerConnection or ChannelFuture !`) }
        this.pipeline = reflect.on(promise).get('channel').get().pipeline()
    }

    injectMiaoDetect() {
        this.pipeline.addFirst('miao_detect', new MiaoDetectHandler())
        this.container.bind(MessageHandle).toFunction(this.onmessage.bind(this))
        this.logger.info('Netty Channel Pipeline Inject MiaoDetectHandler Successful!')
    }

    onmessage(ctx: any, msg: any) {
        let text: string = msg.text()
        const [type, content] = text.split(SPLIT_LINE)
        try {
            var result = this[type](ctx, content)
        } catch (ex) {
            var result = '§4代码执行异常\n' + console.stack(ex).join('\n')
        }
        result && this.sendResult(ctx, "log", result)
    }

    execCommand(ctx: any, cmd: string) {
        setTimeout(() => this.Server.dispatchConsoleCommand(cmd), 0)
        return `§6命令: §b${cmd} §a执行成功!`
    }

    execCode(ctx: any, code: string) {
        return this.Task.callSyncMethod(() => eval(code)) + '';
    }

    execDetect(ctx: any, cmd: string) {
        switch (cmd) {
            case "type":
                this.sendResult(ctx, "type", this.ServerType)
                return `Currect Server Version is ${this.Server.getVersion()}`
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
const Runnable = Java.type('java.lang.Runnable')
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
            ctx.executor().execute(new Runnable({
                run: () => {
                    if (HttpHeaders.is100ContinueExpected(request)) {
                        ctx.writeAndFlush(new DefaultFullHttpResponse(HttpVersion.HTTP_1_1, HttpResponseStatus.CONTINUE))
                    }
                    let filename = request.getUri().split('?')[0].substr(1)
                    let file = new File('/home/project/WebWorkSpace/MiaoConsole', filename || 'index.html')
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
            }))
        }
    }
})
const TextWebSocketFrameMatcher = TypeParameterMatcher.get(base.getClass('io.netty.handler.codec.http.websocketx.TextWebSocketFrame'))
const TextWebSocketFrameHandler = Java.extend(SimpleChannelInboundHandler, {
    userEventTriggered: (ctx: any, evt: any) => {
        if (evt == 'HANDSHAKE_COMPLETE') {
            clients.push(ctx.channel())
            MiaoConsole.GlobalLogger.console(`new client §b${ctx.channel().id()} §aconnected...`)
        }
    },
    acceptInboundMessage: (msg: any) => {
        return TextWebSocketFrameMatcher.match(msg)
    },
    channelRead0: (ctx: any, msg: any) => {
        MiaoConsole.GlobalContainer.get<any>(MessageHandle)(ctx, msg)
    }
})
const WebSocketHandler = Java.extend(ChannelInboundHandlerAdapter, {
    channelRead: function(ctx: any, msg: any) {
        msg.markReaderIndex()
        let message: string = msg.toString(CharsetUtil.UTF_8)
        let channel = ctx.channel()
        let pipeline = channel.pipeline()
        if (message.indexOf('HTTP/1.1') > 0) {
            pipeline.names().forEach(f => {
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