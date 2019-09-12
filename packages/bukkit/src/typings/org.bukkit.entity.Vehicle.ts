declare namespace org {
    namespace bukkit {
        namespace entity {
            class Vehicle {
                /**
                 * Gets the vehicle's velocity.
                 */
                public getVelocity(): org.bukkit.util.Vector;
                /**
                 * Sets the vehicle's velocity.
                 */
                public setVelocity(vel: org.bukkit.util.Vector): void;
            }
        }
    }
}
