declare namespace org {
    namespace bukkit {
        namespace entity {
            class IronGolem {
                /**
                 * Gets whether this iron golem was built by a player.
                 */
                public isPlayerCreated(): boolean;
                /**
                 * Sets whether this iron golem was built by a player or not.
                 */
                public setPlayerCreated(playerCreated: boolean): void;
            }
        }
    }
}
