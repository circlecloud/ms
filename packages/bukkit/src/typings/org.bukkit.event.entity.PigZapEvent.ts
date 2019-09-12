declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class PigZapEvent {
                    constructor(pig: org.bukkit.entity.Pig, bolt: org.bukkit.entity.LightningStrike, pigzombie: org.bukkit.entity.PigZombie)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getEntity(): org.bukkit.entity.Pig;
                    /**
                     * Gets the bolt which is striking the pig.
                     */
                    public getLightning(): org.bukkit.entity.LightningStrike;
                    /**
                     * Gets the zombie pig that will replace the pig, provided the event is
                     * not cancelled first.
                     */
                    public getPigZombie(): org.bukkit.entity.PigZombie;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
