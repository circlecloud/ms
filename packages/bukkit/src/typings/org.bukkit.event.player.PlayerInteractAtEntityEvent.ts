declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerInteractAtEntityEvent {
                    constructor(who: org.bukkit.entity.Player, clickedEntity: org.bukkit.entity.Entity, position: org.bukkit.util.Vector)
                    constructor(who: org.bukkit.entity.Player, clickedEntity: org.bukkit.entity.Entity, position: org.bukkit.util.Vector, hand: org.bukkit.inventory.EquipmentSlot)
                    public getClickedPosition(): org.bukkit.util.Vector;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
