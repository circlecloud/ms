const JavaString = Java.type('java.lang.String')
const MessageProperties = org.springframework.amqp.core.MessageProperties
const Message = org.springframework.amqp.core.Message

export const MessageConverter = Java.type('org.springframework.amqp.support.converter.MessageConverter')

export class MessageConverterAdapter {
    private _Handler: org.springframework.amqp.support.converter.MessageConverter
    constructor() {
        var MessageConverterImpl = Java.extend(MessageConverter, {
            toMessage: (object: any, messageProperties: org.springframework.amqp.core.MessageProperties) => this.toMessage(object, messageProperties),
            fromMessage: (message: org.springframework.amqp.core.Message) => this.fromMessage(message)
        })
        this._Handler = new MessageConverterImpl()
    }
    toMessage(object: any, messageProperties: org.springframework.amqp.core.MessageProperties) {
        if (typeof object == "string") {
            messageProperties.setContentType(MessageProperties.CONTENT_TYPE_TEXT_PLAIN)
            return new Message(new JavaString(object).getBytes(), messageProperties)
        } else {
            messageProperties.setContentType(MessageProperties.CONTENT_TYPE_JSON)
            return new Message(new JavaString(JSON.stringify(object)).getBytes(), messageProperties)
        }
    }
    fromMessage(message: org.springframework.amqp.core.Message) {
        if (message.getMessageProperties().getContentType() == MessageProperties.CONTENT_TYPE_TEXT_PLAIN) {
            return new JavaString(message.getBody(), message.getMessageProperties().getContentEncoding())
        }
        if (message.getMessageProperties().getContentType() == MessageProperties.CONTENT_TYPE_JSON) {
            return JSON.parse(new JavaString(message.getBody(), message.getMessageProperties().getContentEncoding()))
        }
        return message
    }
    getHandler() {
        return this._Handler
    }
}
