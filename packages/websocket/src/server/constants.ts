export enum ServerEvent {
    detect = 'detect',
    connect = 'connect',
    connection = 'connection',
    message = 'message',
    error = 'error',
    disconnect = 'disconnect'
}

const AttributeKey = Java.type('io.netty.util.AttributeKey');

export enum Keys {
    Detect = "miao_detect",
    Handler = "miaowebsocket",
    Default = "DefaultChannelPipeline"
}

export enum AttributeKeys {
    Request = AttributeKey.valueOf('request')
}