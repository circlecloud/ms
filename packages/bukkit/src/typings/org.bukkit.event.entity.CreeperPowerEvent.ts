declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class CreeperPowerEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    constructor(creeper: org.bukkit.entity.Creeper, bolt: org.bukkit.entity.LightningStrike, cause: org.bukkit.event.entity.CreeperPowerEvent.PowerCause)
                    constructor(creeper: org.bukkit.entity.Creeper, cause: org.bukkit.event.entity.CreeperPowerEvent.PowerCause)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getEntity(): org.bukkit.entity.Creeper;
                    /**
                     * Gets the lightning bolt which is striking the Creeper.
                     */
                    public getLightning(): org.bukkit.entity.LightningStrike;
                    /**
                     * Gets the cause of the creeper being (un)powered.
                     */
                    public getCause(): org.bukkit.event.entity.CreeperPowerEvent.PowerCause;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
