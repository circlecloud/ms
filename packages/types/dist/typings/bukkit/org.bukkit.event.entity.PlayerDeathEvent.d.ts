declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class PlayerDeathEvent extends org.bukkit.event.entity.EntityDeathEvent {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, drops: java.util.List, droppedExp: number, deathMessage: string)
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, drops: java.util.List, droppedExp: number, newExp: number, deathMessage: string)
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, drops: java.util.List, droppedExp: number, newExp: number, newTotalExp: number, newLevel: number, deathMessage: string)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Player;
                    /**
                     * Set the death message that will appear to everyone on the server.
                     */
                    // @ts-ignore
                    public setDeathMessage(deathMessage: string): void;
                    /**
                     * Get the death message that will appear to everyone on the server.
                     */
                    // @ts-ignore
                    public getDeathMessage(): string;
                    /**
                     * Gets how much EXP the Player should have at respawn.
                     * <p>
                     * This does not indicate how much EXP should be dropped, please see
                     * {@link #getDroppedExp()} for that.
                     */
                    // @ts-ignore
                    public getNewExp(): number;
                    /**
                     * Sets how much EXP the Player should have at respawn.
                     * <p>
                     * This does not indicate how much EXP should be dropped, please see
                     * {@link #setDroppedExp(int)} for that.
                     */
                    // @ts-ignore
                    public setNewExp(exp: number): void;
                    /**
                     * Gets the Level the Player should have at respawn.
                     */
                    // @ts-ignore
                    public getNewLevel(): number;
                    /**
                     * Sets the Level the Player should have at respawn.
                     */
                    // @ts-ignore
                    public setNewLevel(level: number): void;
                    /**
                     * Gets the Total EXP the Player should have at respawn.
                     */
                    // @ts-ignore
                    public getNewTotalExp(): number;
                    /**
                     * Sets the Total EXP the Player should have at respawn.
                     */
                    // @ts-ignore
                    public setNewTotalExp(totalExp: number): void;
                    /**
                     * Gets if the Player should keep all EXP at respawn.
                     * <p>
                     * This flag overrides other EXP settings
                     */
                    // @ts-ignore
                    public getKeepLevel(): boolean;
                    /**
                     * Sets if the Player should keep all EXP at respawn.
                     * <p>
                     * This overrides all other EXP settings
                     * <p>
                     * <b>This doesn't prevent prevent the EXP from dropping.
                     * {@link #setDroppedExp(int)} should be used stop the
                     * EXP from dropping.</b>
                     */
                    // @ts-ignore
                    public setKeepLevel(keepLevel: boolean): void;
                    /**
                     * Sets if the Player keeps inventory on death.
                     * <p>
                     * <b>This doesn't prevent prevent the items from dropping.
                     * {@code getDrops().clear()} should be used stop the
                     * items from dropping.</b>
                     */
                    // @ts-ignore
                    public setKeepInventory(keepInventory: boolean): void;
                    /**
                     * Gets if the Player keeps inventory on death.
                     */
                    // @ts-ignore
                    public getKeepInventory(): boolean;
                }
            }
        }
    }
}
