declare namespace org {
    namespace bukkit {
        namespace event {
            namespace weather {
                // @ts-ignore
                 class LightningStrikeEvent extends org.bukkit.event.weather.WeatherEvent implements org.bukkit.event.Cancellable {
                    constructor(world: org.bukkit.World, bolt: org.bukkit.entity.LightningStrike)
                    constructor(world: org.bukkit.World, bolt: org.bukkit.entity.LightningStrike, cause: org.bukkit.event.weather.LightningStrikeEvent.Cause)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the bolt which is striking the earth.
                     */
                    public getLightning(): org.bukkit.entity.LightningStrike;
                    /**
                     * Gets the cause of this lightning strike.
                     */
                    public getCause(): org.bukkit.event.weather.LightningStrikeEvent.Cause;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
