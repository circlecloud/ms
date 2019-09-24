declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Boat extends org.bukkit.entity.Vehicle {
                /**
                 * Gets the wood type of the boat.
                 */
                 getWoodType(): org.bukkit.TreeSpecies;
                /**
                 * Sets the wood type of the boat.
                 */
                 setWoodType(species: org.bukkit.TreeSpecies): void;
                /**
                 * Gets the maximum speed of a boat. The speed is unrelated to the
                 * velocity.
                 */
                 getMaxSpeed(): number;
                /**
                 * Sets the maximum speed of a boat. Must be nonnegative. Default is 0.4D.
                 */
                 setMaxSpeed(speed: number): void;
                /**
                 * Gets the deceleration rate (newSpeed = curSpeed * rate) of occupied
                 * boats. The default is 0.2.
                 */
                 getOccupiedDeceleration(): number;
                /**
                 * Sets the deceleration rate (newSpeed = curSpeed * rate) of occupied
                 * boats. Setting this to a higher value allows for quicker acceleration.
                 * The default is 0.2.
                 */
                 setOccupiedDeceleration(rate: number): void;
                /**
                 * Gets the deceleration rate (newSpeed = curSpeed * rate) of unoccupied
                 * boats. The default is -1. Values below 0 indicate that no additional
                 * deceleration is imposed.
                 */
                 getUnoccupiedDeceleration(): number;
                /**
                 * Sets the deceleration rate (newSpeed = curSpeed * rate) of unoccupied
                 * boats. Setting this to a higher value allows for quicker deceleration
                 * of boats when a player disembarks. The default is -1. Values below 0
                 * indicate that no additional deceleration is imposed.
                 */
                 setUnoccupiedDeceleration(rate: number): void;
                /**
                 * Get whether boats can work on land.
                 */
                 getWorkOnLand(): boolean;
                /**
                 * Set whether boats can work on land.
                 */
                 setWorkOnLand(workOnLand: boolean): void;
            }
        }
    }
}
