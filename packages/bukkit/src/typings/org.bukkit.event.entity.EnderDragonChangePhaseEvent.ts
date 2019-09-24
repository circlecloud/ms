declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EnderDragonChangePhaseEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    constructor(enderDragon: org.bukkit.entity.EnderDragon, currentPhase: org.bukkit.entity.EnderDragon.Phase, newPhase: org.bukkit.entity.EnderDragon.Phase)
                    public getEntity(): org.bukkit.entity.EnderDragon;
                    /**
                     * Gets the current phase that the dragon is in. This method will return null
                     * when a dragon is first spawned and hasn't yet been assigned a phase.
                     */
                    public getCurrentPhase(): org.bukkit.entity.EnderDragon.Phase;
                    /**
                     * Gets the new phase that the dragon will switch to.
                     */
                    public getNewPhase(): org.bukkit.entity.EnderDragon.Phase;
                    /**
                     * Sets the new phase for the ender dragon.
                     */
                    public setNewPhase(newPhase: org.bukkit.entity.EnderDragon.Phase): void;
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
