declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                class CauldronLevelChangeEvent {
                    constructor(block: org.bukkit.block.Block, entity: org.bukkit.entity.Entity, reason: org.bukkit.event.block.CauldronLevelChangeEvent.ChangeReason, oldLevel: number, newLevel: number)
                    /**
                     * Get entity which did this. May be null.
                     */
                    public getEntity(): org.bukkit.entity.Entity;
                    public getReason(): org.bukkit.event.block.CauldronLevelChangeEvent.ChangeReason;
                    public getOldLevel(): number;
                    public getNewLevel(): number;
                    public setNewLevel(newLevel: number): void;
                    public isCancelled(): boolean;
                    public setCancelled(cancelled: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
