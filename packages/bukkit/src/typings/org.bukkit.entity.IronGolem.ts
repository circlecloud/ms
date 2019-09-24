declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface IronGolem extends org.bukkit.entity.Golem {
                /**
                 * Gets whether this iron golem was built by a player.
                 */
                 isPlayerCreated(): boolean;
                /**
                 * Sets whether this iron golem was built by a player or not.
                 */
                 setPlayerCreated(playerCreated: boolean): void;
            }
        }
    }
}
