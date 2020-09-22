import { chat } from '@ccms/api'
import { provideSingleton } from '@ccms/container'

const Sponge = org.spongepowered.api.Sponge
const ChatTypes = org.spongepowered.api.text.chat.ChatTypes
const TextSerializers = org.spongepowered.api.text.serializer.TextSerializers

@provideSingleton(chat.Chat)
export class SpongeChat extends chat.Chat {
    sendJson(sender: any, json: string | object) {
        sender.sendMessage(TextSerializers.JSON.deserialize(typeof json === "string" ? json : JSON.stringify(json)))
    }
    sendMessage(sender: any, message: string) {
        sender.sendMessage(TextSerializers.FORMATTING_CODE.deserialize(message))
    }
    sendActionBar(sender: any, message: string) {
        sender.sendMessage(ChatTypes.ACTION_BAR, TextSerializers.FORMATTING_CODE.deserialize(message))
    }
    sendTitle(sender: any, title: string, subtitle: string = '', fadeIn: number = 20, time: number = 100, fadeOut: number = 20) {
        sender.sendTitle(title, subtitle, fadeIn, time, fadeOut)
    }
}
