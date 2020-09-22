import { server } from '@ccms/api'
import { ioc, Container, reduceMetadata } from '@ccms/container'

import { SpringConsole } from './console'
import './event'
import './server'
import './command'
import './task'

const toString = {}.toString

export default function SpringImpl(container: Container) {
    try {
        require('@ccms/web')
        require('@ccms/amqp')
        require('@ccms/database')
        require('./internal/scanner/mysql-scanner')
    } catch (error) {
        console.ex(error)
    }
    const beanFactory = base.getInstance().getAutowireCapableBeanFactory()
    container.bind(server.Console).toConstantValue(SpringConsole)
    container.rebind(ioc.Autowired).toDynamicValue((ctx) => {
        var metadata: any = reduceMetadata(ctx)
        let key = toString.call(metadata.named)
        if (key === "[object Function]" || key === "[object Symbol]") { return container.get(metadata.named) }
        if (key === '[object jdk.internal.dynalink.beans.StaticClass]') { metadata.named = metadata.named.class }
        return beanFactory.getBean(metadata.named)
    })
}
