import { injectable } from '@ccms/container'

export namespace chat {
    @injectable()
    export abstract class Chat {
        /**
         * sendJsonChat
         * @param sender reciver
         * @param json json
         * @param type chat Type 0: chat 1: system 2: actionBar
         */
        sendJson(sender: any, json: string | object, type = 0) {
            throw new Error("Method not implemented.")
        }
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
