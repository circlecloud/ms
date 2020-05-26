import { EventEmitter } from 'events'

import { ServerOptions } from '../socket-io'
import { ServerEvent } from '../socket-io/constants'
import { SocketIO } from '../socket-io/interfaces'
import { ProxyBeanName } from './constants'
import { TomcatClient } from './client'

const WebSocketServerProxy = Java.type("com.sixi.framework.scriptservice.websocket.WebSocketServerProxy")
const ThreadPoolExecutor = Java.type('java.util.concurrent.ThreadPoolExecutor')
const ThreadPoolTaskExecutor = Java.type('org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor')

interface TomcatWebSocketSession {
    getId: () => number
}

class TomcatWebSocketServer extends EventEmitter {
    private beanFactory: any
    private executor: any
    private allClients: { [key: string]: SocketIO.EngineSocket }

    constructor(beanFactory: any, options: ServerOptions) {
        super()
        this.allClients = {}
        this.beanFactory = beanFactory
        this.initThreadPool()
        try { this.beanFactory.destroySingleton(ProxyBeanName) } catch (error) { }
        let NashornWebSocketServerProxy = Java.extend(WebSocketServerProxy, {
            onOpen: (session: TomcatWebSocketSession) => {
                let tomcatClient = new TomcatClient(this, session)
                this.allClients[tomcatClient.id] = tomcatClient
                this.emit(ServerEvent.connect, tomcatClient)
            },
            onMessage: (message: any, session: TomcatWebSocketSession) => {
                this.executor.execute(() => {
                    this.emit(ServerEvent.message, this.allClients[session.getId()], message)
                })
            },
            onClose: (session: TomcatWebSocketSession, reason: any) => {
                this.emit(ServerEvent.disconnect, this.allClients[session.getId()], reason)
            },
            onError: (session: TomcatWebSocketSession, error: any) => {
                this.emit(ServerEvent.error, this.allClients[session.getId()], error)
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
        Object.values(this.allClients).forEach(client => client.close())
        this.beanFactory.destroySingleton(ProxyBeanName)
        this.executor.shutdown()
    }
}

export {
    TomcatWebSocketServer,
    ServerEvent,
    TomcatClient
}
