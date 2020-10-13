export namespace amqp {
    export const Manager = Symbol('AmqpManager')
    export namespace rabbit {
        export const Admin = Symbol('RabbitAdmin')
        export const Template = Symbol('RabbitTemplate')
    }
}