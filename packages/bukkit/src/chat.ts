import { chat } from '@ccms/api'
import { provideSingleton } from '@ccms/container'
import bukkitChat from './enhance/chat'

@provideSingleton(chat.Chat)
export class BukkitChat extends chat.Chat {
    sendMessage(sender: any, message: string) {
        bukkitChat.send(sender, JSON.stringify({ text: message }), 0)
    }
    sendActionBar(sender: any, message: string) {
        bukkitChat.send(sender, JSON.stringify({ text: message }), 2)
    }
    sendTitle(sender: any, title: string, subtitle: string = '', fadeIn: number = 20, time: number = 100, fadeOut: number = 20) {
        sender.sendTitle(title, subtitle, fadeIn, time, fadeOut)
    }
}
