
export interface WebSocketHeader {
    [key: string]: string
}

export type EventType =
    | ClientEvent.open
    | ClientEvent.message
    | ClientEvent.close
    | ClientEvent.error

export enum ClientEvent {
    open = 'open',
    message = 'message',
    close = 'close',
    error = 'error',
}

export interface Event {

}
export interface MessageEvent extends Event {
    data: any
    origin?: string
    lastEventId?: string
    source?: string
    ports?: string
}
export interface ErrorEvent extends Event {
    error: Error
}
export interface CloseEvent extends Event {
    code: number
    reason: string
}
