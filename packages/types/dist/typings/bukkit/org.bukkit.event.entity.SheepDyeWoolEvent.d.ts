// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class SheepDyeWoolEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(sheep: org.bukkit.entity.Sheep, color: org.bukkit.DyeColor)
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Sheep;
                    /**
                     * Gets the DyeColor the sheep is being dyed
                     */
                    // @ts-ignore
                    public getColor(): org.bukkit.DyeColor;
                    /**
                     * Sets the DyeColor the sheep is being dyed
                     */
                    // @ts-ignore
                    public setColor(color: org.bukkit.DyeColor): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
