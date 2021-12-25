import { JavaServerOptions, WebSocketServer } from '../'
import { Request } from '../request'

import { TomcatClient } from './client'
import { ProxyBeanName } from './constants'

const ThreadPoolExecutor = Java.type('java.util.concurrent.ThreadPoolExecutor')

type TomcatWebSocketSession = javax.websocket.Session

class TomcatWebSocketServer extends WebSocketServer {
    private executor: any

    constructor(beanFactory: any, options: JavaServerOptions) {
        super(beanFactory, options)
    }

    protected initialize(): void {
        this.initThreadPool()
        try { this.instance.destroySingleton(ProxyBeanName) } catch (error: any) { }
        let NashornWebSocketServerProxy = Java.extend(Java.type("pw.yumc.MiaoScript.websocket.WebSocketProxy"), {
            onOpen: (session: TomcatWebSocketSession) => {
                this.onconnect(session)
            },
            onMessage: (session: TomcatWebSocketSession, message: string) => {
                this.onmessage(session, message)
            },
            onClose: (session: TomcatWebSocketSession, reason: any) => {
                this.ondisconnect(session, reason)
            },
            onError: (session: TomcatWebSocketSession, error: Error) => {
                this.onerror(session, error)
            },
        })
        this.instance.registerSingleton(ProxyBeanName, new NashornWebSocketServerProxy())
    }

    protected getId(session) {
        return session?.getId() + ''
    }

    protected getRequest(session) {
        let request = new Request(session.getRequestURI(), "GET")
        request.connection = {
            remoteAddress: ''
        }
        return request
    }

    protected getSocket(session) {
        return new TomcatClient(session)
    }

    protected doClose() {
        this.instance.destroySingleton(ProxyBeanName)
        this.executor.shutdown()
    }

    private initThreadPool() {
        const ThreadPoolTaskExecutor = Java.type('org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor')
        this.executor = new ThreadPoolTaskExecutor()
        this.executor.setCorePoolSize(10)
        this.executor.setMaxPoolSize(100)
        this.executor.setQueueCapacity(500)
        this.executor.setKeepAliveSeconds(60)
        this.executor.setThreadNamePrefix("@ccms/websocket-")
        this.executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy())
        this.executor.initialize()
    }
}

export {
    TomcatWebSocketServer,
    TomcatClient
}
