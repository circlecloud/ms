declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                abstract class PlayerChannelEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, channel: string)
                    // @ts-ignore
                    public getChannel(): string;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
