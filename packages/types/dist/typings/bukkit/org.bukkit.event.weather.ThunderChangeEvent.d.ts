// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace weather {
                // @ts-ignore
                 class ThunderChangeEvent extends org.bukkit.event.weather.WeatherEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(world: org.bukkit.World, to: boolean)
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the state of thunder that the world is being set to
                     */
                    // @ts-ignore
                    public toThunderState(): boolean;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
