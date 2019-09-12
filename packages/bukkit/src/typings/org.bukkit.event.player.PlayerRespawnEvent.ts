declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                class PlayerRespawnEvent {
                    constructor(respawnPlayer: org.bukkit.entity.Player, respawnLocation: org.bukkit.Location, isBedSpawn: boolean)
                    /**
                     * Gets the current respawn location
                     */
                    public getRespawnLocation(): org.bukkit.Location;
                    /**
                     * Sets the new respawn location
                     */
                    public setRespawnLocation(respawnLocation: org.bukkit.Location): void;
                    /**
                     * Gets whether the respawn location is the player's bed.
                     */
                    public isBedSpawn(): boolean;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
