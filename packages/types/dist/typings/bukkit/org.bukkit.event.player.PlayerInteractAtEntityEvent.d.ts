declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerInteractAtEntityEvent extends org.bukkit.event.player.PlayerInteractEntityEvent {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, clickedEntity: org.bukkit.entity.Entity, position: org.bukkit.util.Vector)
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, clickedEntity: org.bukkit.entity.Entity, position: org.bukkit.util.Vector, hand: org.bukkit.inventory.EquipmentSlot)
                    // @ts-ignore
                    public getClickedPosition(): org.bukkit.util.Vector;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
