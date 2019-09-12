declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerLocaleChangeEvent {
                    constructor(who: org.bukkit.entity.Player, locale: string)
                    public getLocale(): string;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
