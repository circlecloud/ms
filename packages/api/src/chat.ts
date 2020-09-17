import { injectable } from '@ccms/container'

export namespace chat {
    @injectable()
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
        sendTitle(sender: any, title: string, subtitle: string = '', fadeIn: number = 20, time: number = 100, fadeOut: number = 20) {
            throw new Error("Method not implemented.")
        }
        clearTitle(sender: any) {
            this.sendTitle(sender, '', '', 0, 0, 0)
        }
    }
}
