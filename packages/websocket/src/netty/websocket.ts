import '@ms/api'

const MiaoWebSocket = 'miaowebsocket'
const CharsetUtil = Java.type('io.netty.util.CharsetUtil')
const ChannelInboundHandlerAdapter = Java.type('io.netty.channel.ChannelInboundHandlerAdapter')

export default abstract class WebSocketHandlerAdapter {
    private _Handler;
    constructor() {
        this._Handler = Java.extend(ChannelInboundHandlerAdapter, {
            channelRead: this.channelRead
        })
    }
    abstract channelRead(ctx: any, msg: any);
    getHandler() {
        return this._Handler;
    }
}
