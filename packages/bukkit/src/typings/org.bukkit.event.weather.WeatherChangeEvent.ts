declare namespace org {
    namespace bukkit {
        namespace event {
            namespace weather {
                // @ts-ignore
                 class WeatherChangeEvent implements org.bukkit.event.Cancellable {
                    constructor(world: org.bukkit.World, to: boolean)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the state of weather that the world is being set to
                     */
                    public toWeatherState(): boolean;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
