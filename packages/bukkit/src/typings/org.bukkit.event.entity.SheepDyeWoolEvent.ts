declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                class SheepDyeWoolEvent {
                    constructor(sheep: org.bukkit.entity.Sheep, color: org.bukkit.DyeColor)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getEntity(): org.bukkit.entity.Sheep;
                    /**
                     * Gets the DyeColor the sheep is being dyed
                     */
                    public getColor(): org.bukkit.DyeColor;
                    /**
                     * Sets the DyeColor the sheep is being dyed
                     */
                    public setColor(color: org.bukkit.DyeColor): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
