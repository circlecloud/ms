declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Vehicle extends org.bukkit.entity.Entity {
                /**
                 * Gets the vehicle's velocity.
                 */
                // @ts-ignore
                 getVelocity(): org.bukkit.util.Vector;
                /**
                 * Sets the vehicle's velocity.
                 */
                // @ts-ignore
                 setVelocity(vel: org.bukkit.util.Vector): void;
            }
        }
    }
}
