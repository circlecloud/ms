/// <reference types="@ccms/nashorn" />
/// <reference types="@javatypes/jdk" />
/// <reference types="@javatypes/spring-amqp" />
/// <reference types="@javatypes/spring-rabbit" />
/// <reference types="@javatypes/amqp-client" />

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
