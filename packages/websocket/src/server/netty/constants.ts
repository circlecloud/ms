const AttributeKey = Java.type('io.netty.util.AttributeKey');

export enum Keys {
    Detect = "miao_detect",
    Handler = "miaowebsocket",
    Default = "DefaultChannelPipeline"
}

let RequestAttributeKey: any
try { RequestAttributeKey = AttributeKey.valueOf('request') } catch (error: any) { }
export enum AttributeKeys {
    Request = RequestAttributeKey
}
