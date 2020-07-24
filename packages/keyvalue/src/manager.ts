import { amqp } from "@ccms/api"
import { provideSingleton } from "@ccms/container"

import { ConnectionFactoryAdapter, RabbitTemplateAdapter, RabbitAdminAdapter } from "./adapter"
import { AmqpAdmin } from "./admin"

@provideSingleton(amqp.Manager)
export class AmqpManager {
    createConnection(url: string, username: string, password: string) {
        return new ConnectionFactoryAdapter({ url, username, password })
    }
    createTemplate(adapter: ConnectionFactoryAdapter) {
        return new RabbitTemplateAdapter({ connectionFactory: adapter })
    }
    createAdmin(adapter: RabbitTemplateAdapter | ConnectionFactoryAdapter) {
        return new AmqpAdmin(new RabbitAdminAdapter(adapter))
    }
}
