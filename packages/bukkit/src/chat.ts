import { chat } from '@ccms/api'
import { provideSingleton } from '@ccms/container'
import bukkitChat from './enhance/chat'

@provideSingleton(chat.Chat)
export class BukkitChat extends chat.Chat {
    sendMessage(sender: any, message: string) {
        bukkitChat.send(sender, { text: message }, 0)
    }
    sendActionBar(sender: any, message: string) {
        bukkitChat.send(sender, { text: message }, 2)
    }
    sendTitle(sender: any, title: string, subtitle: string = '', fadeIn: number = 1, time: number = 5, fadeOut: number = 1) {
        sender.sendTitle(title, subtitle, fadeIn, time, fadeOut)
    }
}
