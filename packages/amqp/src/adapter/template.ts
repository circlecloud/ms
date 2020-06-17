import { MessageConverterAdapter } from "./converter"
import { ConnectionFactoryAdapter } from "./connection"
import { ConfirmCallbackAdapter, ReturnCallbackAdapter } from "./callback"

export const RabbitTemplate = Java.type('org.springframework.amqp.rabbit.core.RabbitTemplate')

interface TemplateConfig {
    connectionFactory: ConnectionFactoryAdapter | org.springframework.amqp.rabbit.connection.ConnectionFactory
    confirmCallback?: ConfirmCallbackAdapter
    returnCallback?: ReturnCallbackAdapter
    messageConverter?: MessageConverterAdapter
}
export class RabbitTemplateAdapter {
    private _Handler: org.springframework.amqp.rabbit.core.RabbitTemplate
    constructor(config: TemplateConfig) {
        config = { messageConverter: new MessageConverterAdapter(), ...config }
        console.debug(JSON.stringify(config))
        this._Handler = new RabbitTemplate(config.connectionFactory instanceof ConnectionFactoryAdapter ? config.connectionFactory.getHandler() : config.connectionFactory)
        config.returnCallback && this._Handler.setReturnCallback(config.returnCallback.getHandler())
        config.confirmCallback && this._Handler.setConfirmCallback(config.confirmCallback.getHandler())
        config.messageConverter && this._Handler.setMessageConverter(config.messageConverter.getHandler())
    }

    getHandler() {
        return this._Handler
    }
}
