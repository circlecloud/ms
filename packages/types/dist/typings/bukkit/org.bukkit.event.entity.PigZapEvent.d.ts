// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class PigZapEvent extends org.bukkit.event.entity.EntityTransformEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(pig: org.bukkit.entity.Pig, bolt: org.bukkit.entity.LightningStrike, pigzombie: org.bukkit.entity.PigZombie)
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Pig;
                    /**
                     * Gets the bolt which is striking the pig.
                     */
                    // @ts-ignore
                    public getLightning(): org.bukkit.entity.LightningStrike;
                    /**
                     * Gets the zombie pig that will replace the pig, provided the event is
                     * not cancelled first.
                     */
                    // @ts-ignore
                    public getPigZombie(): org.bukkit.entity.PigZombie;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
