declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class CreeperPowerEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(creeper: org.bukkit.entity.Creeper, bolt: org.bukkit.entity.LightningStrike, cause: org.bukkit.event.entity.CreeperPowerEvent.PowerCause)
                    // @ts-ignore
                    constructor(creeper: org.bukkit.entity.Creeper, cause: org.bukkit.event.entity.CreeperPowerEvent.PowerCause)
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Creeper;
                    /**
                     * Gets the lightning bolt which is striking the Creeper.
                     */
                    // @ts-ignore
                    public getLightning(): org.bukkit.entity.LightningStrike;
                    /**
                     * Gets the cause of the creeper being (un)powered.
                     */
                    // @ts-ignore
                    public getCause(): org.bukkit.event.entity.CreeperPowerEvent.PowerCause;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
