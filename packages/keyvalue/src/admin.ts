import { JSClass } from "@ccms/container"
import { RabbitAdminAdapter, MessageListenerContainerAdapter, AcknowledgeMode, MessageHandler, ChannelAwareMessageListenerAdapter } from "./adapter"

export class AmqpAdmin {
    @JSClass('org.springframework.amqp.core.TopicExchange')
    private TopicExchange: typeof org.springframework.amqp.core.TopicExchange
    @JSClass('org.springframework.amqp.core.Queue')
    private Queue: typeof org.springframework.amqp.core.Queue
    @JSClass('org.springframework.amqp.core.Binding')
    private Binding: typeof org.springframework.amqp.core.Binding
    @JSClass('org.springframework.amqp.rabbit.core.RabbitAdmin')
    private RabbitAdmin: typeof org.springframework.amqp.rabbit.core.RabbitAdmin
    @JSClass('org.springframework.amqp.core.Binding.DestinationType')
    private DestinationType: org.springframework.amqp.core.Binding.DestinationType

    private amqpAdmin: org.springframework.amqp.rabbit.core.RabbitAdmin

    constructor(amqpAdmin: org.springframework.amqp.rabbit.core.RabbitAdmin | any) {
        if (amqpAdmin instanceof this.RabbitAdmin) {
            this.amqpAdmin = amqpAdmin
        } else if (amqpAdmin instanceof RabbitAdminAdapter) {
            this.amqpAdmin = amqpAdmin.getHandler()
        } else {
            this.amqpAdmin = new RabbitAdminAdapter(amqpAdmin).getHandler()
        }
    }

    getHandler() {
        return this.amqpAdmin
    }

    getQueueProperties(name: string) {
        return this.amqpAdmin.getQueueProperties(name)
    }

    declareExchange(name: string) {
        let exchange = new this.TopicExchange(name, true, false)
        this.amqpAdmin.declareExchange(exchange)
        return this
    }

    declareQueue(name: string) {
        let queue = new this.Queue(name, true)
        this.amqpAdmin.declareQueue(queue)
        return this
    }

    declareBinding(queue: string, exchange: string, routerKey: string, argument: any = null) {
        let binding = new this.Binding(queue, this.DestinationType.QUEUE, exchange, routerKey, argument)
        this.amqpAdmin.declareBinding(binding)
        return this
    }

    declareQueueAndBindExchange(queue: string, exchange: string, routerKey: string) {
        return this.declareQueue(queue).declareExchange(exchange).declareBinding(queue, exchange, routerKey)
    }

    createContainer<T>(queue: string, listener: MessageHandler<T>, acknowledgeMode = AcknowledgeMode.AUTO) {
        let connection = this.amqpAdmin.getRabbitTemplate().getConnectionFactory()
        return new MessageListenerContainerAdapter({
            connectionFactory: connection,
            queueNames: [queue],
            messageListener: new SimpleMessageHandler(listener),
            acknowledgeMode: acknowledgeMode
        }).getHandler()
    }

    send()
    send() {

    }

    getTemplate() {
        return this.amqpAdmin.getRabbitTemplate()
    }

    close() {
        this.getTemplate().stop()
    }
}

export class SimpleMessageHandler extends ChannelAwareMessageListenerAdapter {
    constructor(private handler: MessageHandler<any>) {
        super()
    }
    onMessage(content: any, message: org.springframework.amqp.core.Message, channel: com.rabbitmq.client.Channel) {
        return this.handler(content, message, channel)
    }
}