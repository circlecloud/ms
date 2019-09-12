declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                abstract class PlayerChannelEvent {
                    constructor(player: org.bukkit.entity.Player, channel: string)
                    public getChannel(): string;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
