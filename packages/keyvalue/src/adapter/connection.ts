import threadPool from '@ccms/common/dist/thread-pool'

export const ConnectionFactory = Java.type('org.springframework.amqp.rabbit.connection.ConnectionFactory')
const CachingConnectionFactory = Java.type('org.springframework.amqp.rabbit.connection.CachingConnectionFactory')
interface ConnectionConfig {
    url: string,
    username?: string,
    password?: string,
    publisherConfirms?: boolean
    cacheSize?: number
}

export class ConnectionFactoryAdapter {
    private _Handler: org.springframework.amqp.rabbit.connection.CachingConnectionFactory

    constructor(config: ConnectionConfig) {
        if (!config.url) { throw new Error('Connection UrI Can\'t be undefiend!') }
        config = { publisherConfirms: true, cacheSize: 50, ...config }
        this._Handler = new CachingConnectionFactory(new java.net.URI(config.url))
        config.username && this._Handler.setUsername(config.username)
        config.password && this._Handler.setPassword(config.password)
        this._Handler.setPublisherConfirms(config.publisherConfirms)
        this._Handler.setExecutor(threadPool.create({
            groupName: '@ccms/amqp-rabbit'
        }))
        this._Handler.setChannelCacheSize(config.cacheSize)
    }
    getHandler() {
        return this._Handler
    }
}
