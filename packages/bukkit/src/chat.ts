import { chat } from '@ccms/api'
import { provideSingleton } from '@ccms/container'
import bukkitChat from './internal/chat'

@provideSingleton(chat.Chat)
export class BukkitChat extends chat.Chat {
    get handle(): any {
        return bukkitChat
    }
    sendJson(sender: any, json: string | object, type = 0) {
        bukkitChat.send(sender, typeof json === "string" ? json : JSON.stringify(json), type)
    }
    sendMessage(sender: any, message: string) {
        this.sendJson(sender, { text: message }, 0)
    }
    sendActionBar(sender: any, message: string) {
        this.sendJson(sender, { text: message }, 2)
    }
    sendTitle(sender: any, title: string, subtitle: string = '', fadeIn: number = 20, time: number = 100, fadeOut: number = 20) {
        try {
            sender.sendTitle(title, subtitle, fadeIn, time, fadeOut)
        } catch (error: any) {
            sender.sendTitle(title, subtitle)
        }
    }
}
