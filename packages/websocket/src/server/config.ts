import { EventEmitter } from 'events'

export interface NettyWebSocketServerOptions {
    event: EventEmitter,
    path?: string;
}
