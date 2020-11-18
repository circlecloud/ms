import { EventEmitter } from 'events'

import { ServerOptions } from '../socket-io'
import { ServerEvent } from '../socket-io/constants'
import { ProxyBeanName } from './constants'
import { TomcatClient } from './client'

const WebSocketServerProxy = Java.type("pw.yumc.MiaoScript.websocket.WebSocketProxy")
const ThreadPoolExecutor = Java.type('java.util.concurrent.ThreadPoolExecutor')
const ThreadPoolTaskExecutor = Java.type('org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor')

type TomcatWebSocketSession = javax.websocket.Session

class TomcatWebSocketServer extends EventEmitter {
    private beanFactory: any
    private executor: any
    private clients: Map<string, any>

    constructor(beanFactory: any, options: ServerOptions) {
        super()
        this.clients = new Map()
        this.beanFactory = beanFactory
        this.initThreadPool()
        try { this.beanFactory.destroySingleton(ProxyBeanName) } catch (error) { }
        let NashornWebSocketServerProxy = Java.extend(WebSocketServerProxy, {
            onOpen: (session: TomcatWebSocketSession) => {
                let cid = `${session?.getId()}`
                let tomcatClient = new TomcatClient(this, session)
                this.clients.set(cid, tomcatClient)
                this.emit(ServerEvent.connect, tomcatClient)
            },
            onMessage: (session: TomcatWebSocketSession, message: string) => {
                let cid = `${session?.getId()}`
                if (this.clients.has(cid)) {
                    this.executor.execute(() => this.emit(ServerEvent.message, this.clients.get(cid), message))
                } else {
                    console.error(`unknow client ${session} reciver message ${message}`)
                }
            },
            onClose: (session: TomcatWebSocketSession, reason: any) => {
                let cid = `${session?.getId()}`
                if (this.clients.has(cid)) {
                    this.emit(ServerEvent.disconnect, this.clients.get(cid), reason)
                } else {
                    console.error(`unknow client ${session} disconnect cause ${reason}`)
                }
            },
            onError: (session: TomcatWebSocketSession, error: Error) => {
                let cid = `${session?.getId()}`
                if (this.clients.has(cid)) {
                    this.emit(ServerEvent.error, this.clients.get(cid), error)
                } else {
                    console.error(`unknow client ${session} cause error ${error}`)
                    console.ex(error)
                }
            },
        })
        this.beanFactory.registerSingleton(ProxyBeanName, new NashornWebSocketServerProxy())
    }
    private initThreadPool() {
        this.executor = new ThreadPoolTaskExecutor()
        this.executor.setCorePoolSize(10)
        this.executor.setMaxPoolSize(100)
        this.executor.setQueueCapacity(500)
        this.executor.setKeepAliveSeconds(60)
        this.executor.setThreadNamePrefix("@ccms/websocket-")
        this.executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy())
        this.executor.initialize()
    }
    close() {
        this.clients.forEach(client => client.close())
        this.beanFactory.destroySingleton(ProxyBeanName)
        this.executor.shutdown()
    }
}

export {
    TomcatWebSocketServer,
    ServerEvent,
    TomcatClient
}
