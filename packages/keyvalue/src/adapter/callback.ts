export const ConfirmCallback = Java.type('org.springframework.amqp.rabbit.core.RabbitTemplate.ConfirmCallback')
export const ReturnCallback = Java.type('org.springframework.amqp.rabbit.core.RabbitTemplate.ReturnCallback')

export abstract class ConfirmCallbackAdapter {
    private _Handler: org.springframework.amqp.rabbit.core.RabbitTemplate.ConfirmCallback
    constructor() {
        let ConfirmCallbackImpl = Java.extend(ReturnCallback, {
            confirm: (correlationData: org.springframework.amqp.rabbit.connection.CorrelationData, ack: boolean, cause: string) => this.confirm(correlationData, ack, cause)
        })
        this._Handler = new ConfirmCallbackImpl()
    }
    abstract confirm(correlationData: org.springframework.amqp.rabbit.connection.CorrelationData, ack: boolean, cause: string)
    getHandler() {
        return this._Handler
    }
}

export abstract class ReturnCallbackAdapter {
    private _Handler: org.springframework.amqp.rabbit.core.RabbitTemplate.ReturnCallback
    constructor() {
        let ReturnCallbackImpl = Java.extend(ReturnCallback, {
            returnedMessage: (message: org.springframework.amqp.core.Message, replyCode: number, replyText: string, exchange: string, routingKey: string) => this.returnedMessage(message, replyCode, replyText, exchange, routingKey)
        })
        this._Handler = new ReturnCallbackImpl()
    }
    abstract returnedMessage(message: org.springframework.amqp.core.Message, replyCode: number, replyText: string, exchange: string, routingKey: string)
    getHandler() {
        return this._Handler
    }
}
