export namespace chat {
    export abstract class Chat {
        sendMessage(sender: any, message: string) {
            throw new Error("Method not implemented.")
        }
        sendActionBar(sender: any, message: string) {
            throw new Error("Method not implemented.")
        }
        clearActionBar(sender: any) {
            this.sendActionBar(sender, '')
        }
        sendTitle(sender: any, title: string, subtitle: string = '', fadeIn: number = 1, time: number = 5, fadeOut: number = 1) {
            throw new Error("Method not implemented.")
        }
        clearTitle(sender: any) {
            this.sendTitle(sender, '', '', 0, 0, 0)
        }
    }
}
