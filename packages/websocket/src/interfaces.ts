export interface InnerClient {
    id: string
    send(text: string)
    close()
}
