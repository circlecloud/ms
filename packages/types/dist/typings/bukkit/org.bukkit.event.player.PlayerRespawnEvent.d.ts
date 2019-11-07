declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                 class PlayerRespawnEvent extends org.bukkit.event.player.PlayerEvent {
                    // @ts-ignore
                    constructor(respawnPlayer: org.bukkit.entity.Player, respawnLocation: org.bukkit.Location, isBedSpawn: boolean)
                    /**
                     * Gets the current respawn location
                     */
                    // @ts-ignore
                    public getRespawnLocation(): org.bukkit.Location;
                    /**
                     * Sets the new respawn location
                     */
                    // @ts-ignore
                    public setRespawnLocation(respawnLocation: org.bukkit.Location): void;
                    /**
                     * Gets whether the respawn location is the player's bed.
                     */
                    // @ts-ignore
                    public isBedSpawn(): boolean;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
