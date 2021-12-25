const JavaString = Java.type('java.lang.String')
export const MessageProperties = org.springframework.amqp.core.MessageProperties
export const ChannelAwareMessageListener = Java.type('org.springframework.amqp.rabbit.listener.api.ChannelAwareMessageListener')
export const AmqpRejectAndDontRequeueException = org.springframework.amqp.AmqpRejectAndDontRequeueException
export const Channel: com.rabbitmq.client.Channel = Java.type('com.rabbitmq.client.Channel')
export const Message = org.springframework.amqp.core.Message
export type MessageHandler<T> = (content: T, message: org.springframework.amqp.core.Message, channel: com.rabbitmq.client.Channel) => any
export abstract class ChannelAwareMessageListenerAdapter<T = any> {
    private _Handler: org.springframework.amqp.rabbit.listener.api.ChannelAwareMessageListener
    constructor(manual: boolean = false) {
        let ChannelAwareMessageListenerImpl = Java.extend(ChannelAwareMessageListener, {
            onMessage: (message: org.springframework.amqp.core.Message, channel: com.rabbitmq.client.Channel) => {
                let content = new JavaString(message.getBody(), message.getMessageProperties().getContentEncoding() || "UTF-8")
                try {
                    if (message.getMessageProperties().getContentType() == MessageProperties.CONTENT_TYPE_JSON) {
                        content = JSON.parse(content)
                    }
                } catch (error: any) {
                    if (manual) {
                        channel.basicReject(message.getMessageProperties().getDeliveryTag(), true)
                    } else {
                        throw new AmqpRejectAndDontRequeueException(`${error}`, error)
                    }
                }
                manual ? this.manualOnMessage(content, message, channel) : this.onMessage(content, message, channel)
            }
        })
        this._Handler = new ChannelAwareMessageListenerImpl()
    }
    abstract onMessage(content: T, message: org.springframework.amqp.core.Message, channel: com.rabbitmq.client.Channel): any
    onError(error: Error, message: org.springframework.amqp.core.Message, channel: com.rabbitmq.client.Channel): any { }
    getHandler() {
        return this._Handler
    }
    private manualOnMessage(content: T, message: org.springframework.amqp.core.Message, channel: com.rabbitmq.client.Channel) {
        let deliveryTag = message.getMessageProperties().getDeliveryTag()
        try {
            if (this.onMessage(content, message, channel)) {
                channel.basicAck(deliveryTag, false)
            } else if (message.getMessageProperties().getRedelivered()) {
                channel.basicReject(deliveryTag, true)
            } else {
                channel.basicNack(deliveryTag, false, true)
            }
        } catch (error: any) {
            channel.basicReject(deliveryTag, this.onError(error, message, channel))
        }
    }
}
