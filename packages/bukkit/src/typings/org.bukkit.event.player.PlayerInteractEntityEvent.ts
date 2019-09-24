declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerInteractEntityEvent implements org.bukkit.event.Cancellable {
                    constructor(who: org.bukkit.entity.Player, clickedEntity: org.bukkit.entity.Entity)
                    constructor(who: org.bukkit.entity.Player, clickedEntity: org.bukkit.entity.Entity, hand: org.bukkit.inventory.EquipmentSlot)
                    protected clickedEntity: org.bukkit.entity.Entity;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the entity that was right-clicked by the player.
                     */
                    public getRightClicked(): org.bukkit.entity.Entity;
                    /**
                     * The hand used to perform this interaction.
                     */
                    public getHand(): org.bukkit.inventory.EquipmentSlot;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
