import { ConnectionFactoryAdapter } from "./connection"
import { RabbitTemplateAdapter } from "./template"

export const RabbitAdmin = Java.type('org.springframework.amqp.rabbit.core.RabbitAdmin')

export class RabbitAdminAdapter {
    private _Handler: org.springframework.amqp.rabbit.core.RabbitAdmin
    constructor(config: RabbitTemplateAdapter | org.springframework.amqp.rabbit.core.RabbitTemplate | ConnectionFactoryAdapter | org.springframework.amqp.rabbit.connection.ConnectionFactory) {
        this._Handler = new RabbitAdmin((config instanceof RabbitTemplateAdapter || config instanceof ConnectionFactoryAdapter) ? config.getHandler() : config)
    }
    getHandler(): org.springframework.amqp.rabbit.core.RabbitAdmin {
        return this._Handler
    }
}
