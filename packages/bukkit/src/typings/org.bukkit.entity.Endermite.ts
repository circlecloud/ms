declare namespace org {
    namespace bukkit {
        namespace entity {
            class Endermite {
                /**
                 * Gets whether this Endermite was spawned by a player.
                 * An Endermite spawned by a player will be attacked by nearby Enderman.
                 */
                public isPlayerSpawned(): boolean;
                /**
                 * Sets whether this Endermite was spawned by a player.
                 * An Endermite spawned by a player will be attacked by nearby Enderman.
                 */
                public setPlayerSpawned(playerSpawned: boolean): void;
            }
        }
    }
}
