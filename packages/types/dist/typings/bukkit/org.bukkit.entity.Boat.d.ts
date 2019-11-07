declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Boat extends org.bukkit.entity.Vehicle {
                /**
                 * Gets the wood type of the boat.
                 */
                // @ts-ignore
                 getWoodType(): org.bukkit.TreeSpecies;
                /**
                 * Sets the wood type of the boat.
                 */
                // @ts-ignore
                 setWoodType(species: org.bukkit.TreeSpecies): void;
                /**
                 * Gets the maximum speed of a boat. The speed is unrelated to the
                 * velocity.
                 */
                // @ts-ignore
                 getMaxSpeed(): number;
                /**
                 * Sets the maximum speed of a boat. Must be nonnegative. Default is 0.4D.
                 */
                // @ts-ignore
                 setMaxSpeed(speed: number): void;
                /**
                 * Gets the deceleration rate (newSpeed = curSpeed * rate) of occupied
                 * boats. The default is 0.2.
                 */
                // @ts-ignore
                 getOccupiedDeceleration(): number;
                /**
                 * Sets the deceleration rate (newSpeed = curSpeed * rate) of occupied
                 * boats. Setting this to a higher value allows for quicker acceleration.
                 * The default is 0.2.
                 */
                // @ts-ignore
                 setOccupiedDeceleration(rate: number): void;
                /**
                 * Gets the deceleration rate (newSpeed = curSpeed * rate) of unoccupied
                 * boats. The default is -1. Values below 0 indicate that no additional
                 * deceleration is imposed.
                 */
                // @ts-ignore
                 getUnoccupiedDeceleration(): number;
                /**
                 * Sets the deceleration rate (newSpeed = curSpeed * rate) of unoccupied
                 * boats. Setting this to a higher value allows for quicker deceleration
                 * of boats when a player disembarks. The default is -1. Values below 0
                 * indicate that no additional deceleration is imposed.
                 */
                // @ts-ignore
                 setUnoccupiedDeceleration(rate: number): void;
                /**
                 * Get whether boats can work on land.
                 */
                // @ts-ignore
                 getWorkOnLand(): boolean;
                /**
                 * Set whether boats can work on land.
                 */
                // @ts-ignore
                 setWorkOnLand(workOnLand: boolean): void;
            }
        }
    }
}
