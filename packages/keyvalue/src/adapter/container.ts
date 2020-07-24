import { ConnectionFactoryAdapter, ConnectionFactory } from "./connection"
import { ChannelAwareMessageListenerAdapter, ChannelAwareMessageListener } from "./listener"

export const SimpleMessageListenerContainer = org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer
export const AcknowledgeMode: org.springframework.amqp.core.AcknowledgeMode = Java.type('org.springframework.amqp.core.AcknowledgeMode')
interface ContainerConfig {
    connectionFactory: ConnectionFactoryAdapter | typeof ConnectionFactory
    queueNames: string[]
    messageListener: ChannelAwareMessageListenerAdapter | typeof ChannelAwareMessageListener
    maxConcurrentConsumers?: number
    concurrentConsumers?: number
    acknowledgeMode?: org.springframework.amqp.core.AcknowledgeMode
}

export class MessageListenerContainerAdapter {
    private _Handler: org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer
    constructor(config: ContainerConfig) {
        config = { concurrentConsumers: 5, maxConcurrentConsumers: 10, acknowledgeMode: AcknowledgeMode.AUTO, ...config }
        this._Handler = new SimpleMessageListenerContainer(config.connectionFactory instanceof ConnectionFactoryAdapter ? config.connectionFactory.getHandler() : config.connectionFactory)
        //@ts-ignore
        this._Handler.setQueueNames(config.queueNames)
        this._Handler.setMaxConcurrentConsumers(config.maxConcurrentConsumers)
        this._Handler.setConcurrentConsumers(config.concurrentConsumers)
        this._Handler.setAcknowledgeMode(config.acknowledgeMode)
        this._Handler.setMessageListener(config.messageListener instanceof ChannelAwareMessageListenerAdapter ? config.messageListener.getHandler() : config.messageListener)
    }
    getHandler() {
        return this._Handler
    }
}