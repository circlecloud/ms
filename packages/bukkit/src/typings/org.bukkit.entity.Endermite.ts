declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Endermite extends org.bukkit.entity.Monster {
                /**
                 * Gets whether this Endermite was spawned by a player.
                 * An Endermite spawned by a player will be attacked by nearby Enderman.
                 */
                 isPlayerSpawned(): boolean;
                /**
                 * Sets whether this Endermite was spawned by a player.
                 * An Endermite spawned by a player will be attacked by nearby Enderman.
                 */
                 setPlayerSpawned(playerSpawned: boolean): void;
            }
        }
    }
}
