import { ConnectionFactoryAdapter } from "./connection"
import { RabbitTemplateAdapter } from "./template"
import { JSClass } from "@ccms/container"

export const RabbitAdmin = Java.type('org.springframework.amqp.rabbit.core.RabbitAdmin')

export class RabbitAdminAdapter {
    @JSClass('org.springframework.amqp.rabbit.core.RabbitAdmin')
    private RabbitAdmin: org.springframework.amqp.rabbit.core.RabbitAdmin
    private _Handler: org.springframework.amqp.rabbit.core.RabbitAdmin
    constructor(config: RabbitTemplateAdapter | org.springframework.amqp.rabbit.core.RabbitTemplate | ConnectionFactoryAdapter | org.springframework.amqp.rabbit.connection.ConnectionFactory) {
        this._Handler = new RabbitAdmin((config instanceof RabbitTemplateAdapter || config instanceof ConnectionFactoryAdapter) ? config.getHandler() : config)
    }
    getHandler(): org.springframework.amqp.rabbit.core.RabbitAdmin {
        return this._Handler
    }
}
