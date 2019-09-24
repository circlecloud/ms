declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface WitherSkull extends org.bukkit.entity.Fireball {
                /**
                 * Sets the charged status of the wither skull.
                 */
                 setCharged(charged: boolean): void;
                /**
                 * Gets whether or not the wither skull is charged.
                 */
                 isCharged(): boolean;
            }
        }
    }
}
