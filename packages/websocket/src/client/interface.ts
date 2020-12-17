
export interface WebSocketHeader {
    [key: string]: string
}

export type EventType =
    | 'close'
    | 'error'
    | 'message'
    | 'open'
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
