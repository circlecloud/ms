declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerLocaleChangeEvent extends org.bukkit.event.player.PlayerEvent {
                    constructor(who: org.bukkit.entity.Player, locale: string)
                    public getLocale(): string;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
