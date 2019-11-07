declare namespace org {
    namespace bukkit {
        namespace event {
            namespace weather {
                // @ts-ignore
                 class LightningStrikeEvent extends org.bukkit.event.weather.WeatherEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(world: org.bukkit.World, bolt: org.bukkit.entity.LightningStrike)
                    // @ts-ignore
                    constructor(world: org.bukkit.World, bolt: org.bukkit.entity.LightningStrike, cause: org.bukkit.event.weather.LightningStrikeEvent.Cause)
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the bolt which is striking the earth.
                     */
                    // @ts-ignore
                    public getLightning(): org.bukkit.entity.LightningStrike;
                    /**
                     * Gets the cause of this lightning strike.
                     */
                    // @ts-ignore
                    public getCause(): org.bukkit.event.weather.LightningStrikeEvent.Cause;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
