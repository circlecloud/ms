import { HttpRequestHandlerAdapter } from '../netty'
import { Keys, AttributeKeys } from './constants'

const DefaultHttpResponse = Java.type('io.netty.handler.codec.http.DefaultHttpResponse')
const DefaultFullHttpResponse = Java.type('io.netty.handler.codec.http.DefaultFullHttpResponse')
const HttpHeaders = Java.type('io.netty.handler.codec.http.HttpHeaders')
const HttpVersion = Java.type('io.netty.handler.codec.http.HttpVersion')
const HttpResponseStatus = Java.type('io.netty.handler.codec.http.HttpResponseStatus')
const LastHttpContent = Java.type('io.netty.handler.codec.http.LastHttpContent')

const File = Java.type('java.io.File')
const Runnable = Java.type('java.lang.Runnable')
const RandomAccessFile = Java.type('java.io.RandomAccessFile')
const DefaultFileRegion = Java.type('io.netty.channel.DefaultFileRegion')
const ChannelFutureListener = Java.type('io.netty.channel.ChannelFutureListener')

export type HttpRequestConfig = {
    root?: string;
    ws?: string;
}

export class HttpRequestHandler extends HttpRequestHandlerAdapter {
    private ws: string;
    private root: string;
    constructor(config: HttpRequestConfig = {
        root: root + '/wwwroot',
        ws: '/ws'
    }) {
        super()
        this.root = config.root;
        this.ws = config.ws;
    }
    channelRead0(ctx: any, request: any) {
        if (request.getUri().startsWith(this.ws)) {
            ctx.channel().attr(AttributeKeys.Request).set(request);
            ctx.fireChannelRead(request.retain())
        } else {
            ctx.executor().execute(new Runnable({
                run: () => {
                    if (HttpHeaders.is100ContinueExpected(request)) {
                        ctx.writeAndFlush(new DefaultFullHttpResponse(HttpVersion.HTTP_1_1, HttpResponseStatus.CONTINUE))
                    }
                    let filename = request.getUri().split('?')[0].substr(1)
                    let file = new File(this.root, filename || 'index.html')
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
}
