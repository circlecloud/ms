
import { WebSocketHeader } from '../interface'
import { Transport } from '../transport'
import { WebSocketClientHandler } from './handler'

const URI = Java.type('java.net.URI')
const Epoll = Java.type('io.netty.channel.epoll.Epoll')
const Bootstrap = Java.type('io.netty.bootstrap.Bootstrap')
const ChannelFutureListener = Java.type('io.netty.channel.ChannelFutureListener')

const NioEventLoopGroup = Java.type('io.netty.channel.nio.NioEventLoopGroup')
const NioSocketChannel = Java.type('io.netty.channel.socket.nio.NioSocketChannel')

const EpollEventLoopGroup = Java.type('io.netty.channel.epoll.EpollEventLoopGroup')
const EpollSocketChannel = Java.type('io.netty.channel.epoll.EpollSocketChannel')

const WebSocketClientHandshakerFactory = Java.type('io.netty.handler.codec.http.websocketx.WebSocketClientHandshakerFactory')
const WebSocketVersion = Java.type('io.netty.handler.codec.http.websocketx.WebSocketVersion')

const HttpClientCodec = Java.type('io.netty.handler.codec.http.HttpClientCodec')
const HttpObjectAggregator = Java.type('io.netty.handler.codec.http.HttpObjectAggregator')
const TextWebSocketFrame = Java.type('io.netty.handler.codec.http.websocketx.TextWebSocketFrame')
const CloseWebSocketFrame = Java.type('io.netty.handler.codec.http.websocketx.CloseWebSocketFrame')

const ChannelInitializer = Java.type('io.netty.channel.ChannelInitializer')
const DefaultHttpHeaders = Java.type('io.netty.handler.codec.http.DefaultHttpHeaders')

const epull = Epoll.isAvailable()
const group = epull ? new EpollEventLoopGroup() : new NioEventLoopGroup()
const socketChannelClass = epull ? EpollSocketChannel.class : NioSocketChannel.class
process.on('exit', () => group.shutdownGracefully())

export class NettyWebSocket extends Transport {
    private channel: any
    private b = new Bootstrap();

    constructor(url: string, subProtocol: string = '', headers: WebSocketHeader = {}) {
        super(url, subProtocol, headers)
    }
    getId() {
        return this.channel?.id() + ''
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
        let handler = new WebSocketClientHandler(WebSocketClientHandshakerFactory
            .newHandshaker(uri, WebSocketVersion.V13, null, false, headers), this)
        this.b.group(group)
            .channel(socketChannelClass)
            .handler(new ChannelInitializer({
                initChannel: (ch: any) => {
                    let pipeline = ch.pipeline()
                    pipeline.addLast("http-codec", new HttpClientCodec())
                    pipeline.addLast("aggregator", new HttpObjectAggregator(65536))
                    pipeline.addLast("websocket", handler.getHandler())
                }
            }))
        this.b.connect(uri.getHost(), uri.getPort()).addListener(new ChannelFutureListener((future: any) => {
            this.channel = future.sync().channel()
            this.onconnection({})
            handler.handshakeFuture.addListener(new ChannelFutureListener((future: any) => {
                try {
                    future.sync()
                    this.onconnect({})
                } catch (error) {
                    console.debug(error)
                }
            }))
        }))
    }
    doSend(text: string) {
        this.channel.writeAndFlush(new TextWebSocketFrame(text))
    }
    doClose(code: number, reason: string) {
        this.channel.writeAndFlush(new CloseWebSocketFrame())
        this.channel.close()
        this.channel.closeFuture().addListener(new ChannelFutureListener(() => console.debug(`NettyWebSocket close code: ${code} reason: ${reason}`)))
    }
    getChannel() {
        return this.channel
    }
}
