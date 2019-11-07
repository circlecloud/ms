// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class CauldronLevelChangeEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, entity: org.bukkit.entity.Entity, reason: org.bukkit.event.block.CauldronLevelChangeEvent.ChangeReason, oldLevel: number, newLevel: number)
                    /**
                     * Get entity which did this. May be null.
                     */
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Entity;
                    // @ts-ignore
                    public getReason(): org.bukkit.event.block.CauldronLevelChangeEvent.ChangeReason;
                    // @ts-ignore
                    public getOldLevel(): number;
                    // @ts-ignore
                    public getNewLevel(): number;
                    // @ts-ignore
                    public setNewLevel(newLevel: number): void;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancelled: boolean): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
