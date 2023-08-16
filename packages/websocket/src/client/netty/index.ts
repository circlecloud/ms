
import { WebSocketHeader } from '../interface'
import { Transport } from '../transport'
import { WebSocketClientHandler } from './handler'

const URI = Java.type('java.net.URI')
const Bootstrap = Java.type('io.netty.bootstrap.Bootstrap')
const ChannelFutureListener = Java.type('io.netty.channel.ChannelFutureListener')

const NioEventLoopGroup = Java.type('io.netty.channel.nio.NioEventLoopGroup')
const NioSocketChannel = Java.type('io.netty.channel.socket.nio.NioSocketChannel')

const WebSocketClientHandshakerFactory = Java.type('io.netty.handler.codec.http.websocketx.WebSocketClientHandshakerFactory')
const WebSocketVersion = Java.type('io.netty.handler.codec.http.websocketx.WebSocketVersion')

const HttpClientCodec = Java.type('io.netty.handler.codec.http.HttpClientCodec')
const HttpObjectAggregator = Java.type('io.netty.handler.codec.http.HttpObjectAggregator')
const TextWebSocketFrame = Java.type('io.netty.handler.codec.http.websocketx.TextWebSocketFrame')
const CloseWebSocketFrame = Java.type('io.netty.handler.codec.http.websocketx.CloseWebSocketFrame')

const ChannelInitializer = Java.type('io.netty.channel.ChannelInitializer')
const DefaultHttpHeaders = Java.type('io.netty.handler.codec.http.DefaultHttpHeaders')

const AtomicInteger = Java.type("java.util.concurrent.atomic.AtomicInteger")
const channelCount = new AtomicInteger(0)

var SslContextBuilder: any
var InsecureTrustManagerFactory: any
var SSLContext: any
var SslHandler: any
try {
    SslContextBuilder = Java.type('io.netty.handler.ssl.SslContextBuilder')
    InsecureTrustManagerFactory = Java.type('io.netty.handler.ssl.util.InsecureTrustManagerFactory')
} catch (error: any) {
    SSLContext = Java.type('javax.net.ssl.SSLContext')
    SslHandler = Java.type('io.netty.handler.ssl.SslHandler')
}

var group: any
var socketChannelClass: any
try {
    const Epoll = Java.type('io.netty.channel.epoll.Epoll')
    const epull = Epoll.isAvailable()
    const EpollEventLoopGroup = Java.type('io.netty.channel.epoll.EpollEventLoopGroup')
    const EpollSocketChannel = Java.type('io.netty.channel.epoll.EpollSocketChannel')
    group = epull ? new EpollEventLoopGroup() : new NioEventLoopGroup()
    socketChannelClass = epull ? EpollSocketChannel.class : NioSocketChannel.class
} catch (error: any) {
    group = new NioEventLoopGroup()
    socketChannelClass = NioSocketChannel.class
}

process.on('exit', () => group.shutdownGracefully())

export class NettyWebSocket extends Transport {
    private _uri: any
    private _schema: string
    private _host: string
    private _port: number
    private channel: any
    private b: any

    private handler: any

    constructor(url: string, subProtocol: string = '', headers: WebSocketHeader = {}) {
        super(url, subProtocol, headers)
        if (!url) {
            throw new Error("Failed to construct 'WebSocket': The URL '" + url + "' is invalid.")
        }
        this._uri = URI.create(this._url)
        this._schema = this._uri.getScheme() ?? 'ws'
        if (["wss", "ws"].indexOf(this._schema) == -1) {
            throw new Error("Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '" + this._schema + "' is not allowed.")
        }
        this._host = this._uri.getHost()
        if (!this._host) {
            throw new Error("Failed to construct 'WebSocket': The Host '" + this._host + "' is invalid.")
        }
        this._port = this._uri.getPort()
        if (this._port == -1) {
            if (this._schema == "wss") {
                this._port = 443
            } else if (this._schema == "ws") {
                this._port = 80
            }
        }
        console.debug(`constructor NettyWebSocket url: ${url} scheme: ${this._schema} host: ${this._host} port: ${this._port} header: ${JSON.stringify(headers)}`)
    }
    getId() {
        return `${this.channel?.id()}` || `NettyWebSocket#${channelCount.incrementAndGet()}`
    }
    doConnect() {
        let uri = URI.create(this._url)
        let headers = new DefaultHttpHeaders()
        for (const key of Object.getOwnPropertyNames(this._headers || {})) {
            headers.add(key, this._headers[key])
        }
        // Connect with V13 (RFC 6455 aka HyBi-17). You can change it to V08 or V00.
        // If you change it to V00, ping is not supported and remember to change
        // HttpResponseDecoder to WebSocketHttpResponseDecoder in the pipeline.
        this.handler = new WebSocketClientHandler(WebSocketClientHandshakerFactory
            .newHandshaker(uri, WebSocketVersion.V13, null, false, headers), this)
        this.b = new Bootstrap()
        this.b.group(group)
            .channel(socketChannelClass)
            .handler(new ChannelInitializer({
                initChannel: (ch: any) => {
                    let pipeline = ch.pipeline()
                    if (this._schema == "wss") {
                        if (SslContextBuilder) {
                            let sslCtx = SslContextBuilder.forClient().trustManager(InsecureTrustManagerFactory.INSTANCE).build()
                            pipeline.addLast('ssl', sslCtx.newHandler(ch.alloc(), this._host, this._port))
                        } else {
                            let sslEngine = SSLContext.getDefault().createSSLEngine()
                            sslEngine.setUseClientMode(true)
                            pipeline.addLast("ssl", new SslHandler(sslEngine))
                        }
                    }
                    pipeline.addLast("http-codec", new HttpClientCodec())
                    pipeline.addLast("aggregator", new HttpObjectAggregator(65536))
                    pipeline.addLast("websocket", this.handler.getHandler())
                }
            }))
        try {
            this.channel = this.b.connect(this._host, this._port).sync().channel()
            this.handler.handshakeFuture.sync()
        } catch (error) {
            // ignore connect error
            // tigger error at handshakeFuture
        }
    }
    doSend(text: string) {
        this.channel.writeAndFlush(new TextWebSocketFrame(text))
    }
    doClose(code: number, reason: string, wasClean: boolean = false) {
        console.debug(`Netty Client doClose code: ${code} reason: ${reason}`)
        if (this.readyState == WebSocket.CLOSING) {
            if (!this._closeFrameSent) {
                console.debug(`Netty Client doClose send close frame code: ${code} reason: ${reason}`)
                this.channel?.writeAndFlush(new CloseWebSocketFrame(code, reason))
                this._closeFrameSent = true
            }
            if (!this._closeFrameReceived && !wasClean) { return console.debug(`Netty Client doClose wait server send close`) }
        }
        this.channel?.closeFuture().addListener(new ChannelFutureListener(() => {
            this.onclose({ code, reason })
        }))
    }
    abortHandshake(reason: Error): void {
        this.handler.abortHandshake(reason)
    }
    getChannel() {
        return this.channel
    }
}
