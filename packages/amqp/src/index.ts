/// <reference types="@ccms/nashorn" />
/// <reference types="@ccms/types/dist/typings/jdk" />
/// <reference types="@ccms/types/dist/typings/spring" />
/// <reference types="@ccms/types/dist/typings/spring/amqp" />
/// <reference types="@ccms/types/dist/typings/rabbitmq" />

import { amqp } from '@ccms/api'
import { getContainer, reduceMetadata } from '@ccms/container'

function init() {
    const beanFactory = base.getInstance().getAutowireCapableBeanFactory()
    getContainer().bind(amqp.rabbit.Template).toDynamicValue((ctx) => {
        let metadata = reduceMetadata(ctx)
        if (!metadata.named) {
            return beanFactory.getBean('rabbitTemplate')
        } else {
            return beanFactory.getBean(`${metadata.named}-rabbitTemplate`)
        }
    })
    getContainer().bind(amqp.rabbit.Admin).toDynamicValue((ctx) => {
        let metadata = reduceMetadata(ctx)
        if (!metadata.named) {
            return beanFactory.getBean('rabbitAdmin')
        } else {
            return beanFactory.getBean(`${metadata.named}-rabbitAdmin`)
        }
    })
}
init()

export * from './admin'
export * from './adapter'
export * from './manager'
export * from './constants'
