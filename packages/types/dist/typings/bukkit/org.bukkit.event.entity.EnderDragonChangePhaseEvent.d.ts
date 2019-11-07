// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EnderDragonChangePhaseEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(enderDragon: org.bukkit.entity.EnderDragon, currentPhase: org.bukkit.entity.EnderDragon.Phase, newPhase: org.bukkit.entity.EnderDragon.Phase)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.EnderDragon;
                    /**
                     * Gets the current phase that the dragon is in. This method will return null
                     * when a dragon is first spawned and hasn't yet been assigned a phase.
                     */
                    // @ts-ignore
                    public getCurrentPhase(): org.bukkit.entity.EnderDragon.Phase;
                    /**
                     * Gets the new phase that the dragon will switch to.
                     */
                    // @ts-ignore
                    public getNewPhase(): org.bukkit.entity.EnderDragon.Phase;
                    /**
                     * Sets the new phase for the ender dragon.
                     */
                    // @ts-ignore
                    public setNewPhase(newPhase: org.bukkit.entity.EnderDragon.Phase): void;
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
