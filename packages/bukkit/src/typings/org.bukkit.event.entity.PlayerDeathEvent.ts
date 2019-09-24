declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class PlayerDeathEvent {
                    constructor(player: org.bukkit.entity.Player, drops: any[] /*java.util.List*/, droppedExp: number, deathMessage: string)
                    constructor(player: org.bukkit.entity.Player, drops: any[] /*java.util.List*/, droppedExp: number, newExp: number, deathMessage: string)
                    constructor(player: org.bukkit.entity.Player, drops: any[] /*java.util.List*/, droppedExp: number, newExp: number, newTotalExp: number, newLevel: number, deathMessage: string)
                    public getEntity(): org.bukkit.entity.Player;
                    /**
                     * Set the death message that will appear to everyone on the server.
                     */
                    public setDeathMessage(deathMessage: string): void;
                    /**
                     * Get the death message that will appear to everyone on the server.
                     */
                    public getDeathMessage(): string;
                    /**
                     * Gets how much EXP the Player should have at respawn.
                     * <p>
                     * This does not indicate how much EXP should be dropped, please see
                     * {@link #getDroppedExp()} for that.
                     */
                    public getNewExp(): number;
                    /**
                     * Sets how much EXP the Player should have at respawn.
                     * <p>
                     * This does not indicate how much EXP should be dropped, please see
                     * {@link #setDroppedExp(int)} for that.
                     */
                    public setNewExp(exp: number): void;
                    /**
                     * Gets the Level the Player should have at respawn.
                     */
                    public getNewLevel(): number;
                    /**
                     * Sets the Level the Player should have at respawn.
                     */
                    public setNewLevel(level: number): void;
                    /**
                     * Gets the Total EXP the Player should have at respawn.
                     */
                    public getNewTotalExp(): number;
                    /**
                     * Sets the Total EXP the Player should have at respawn.
                     */
                    public setNewTotalExp(totalExp: number): void;
                    /**
                     * Gets if the Player should keep all EXP at respawn.
                     * <p>
                     * This flag overrides other EXP settings
                     */
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
                    public setKeepLevel(keepLevel: boolean): void;
                    /**
                     * Sets if the Player keeps inventory on death.
                     * <p>
                     * <b>This doesn't prevent prevent the items from dropping.
                     * {@code getDrops().clear()} should be used stop the
                     * items from dropping.</b>
                     */
                    public setKeepInventory(keepInventory: boolean): void;
                    /**
                     * Gets if the Player keeps inventory on death.
                     */
                    public getKeepInventory(): boolean;
                }
            }
        }
    }
}
