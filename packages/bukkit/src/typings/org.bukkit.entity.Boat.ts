declare namespace org {
    namespace bukkit {
        namespace entity {
            class Boat {
                /**
                 * Gets the wood type of the boat.
                 */
                public getWoodType(): org.bukkit.TreeSpecies;
                /**
                 * Sets the wood type of the boat.
                 */
                public setWoodType(species: org.bukkit.TreeSpecies): void;
                /**
                 * Gets the maximum speed of a boat. The speed is unrelated to the
                 * velocity.
                 */
                public getMaxSpeed(): number;
                /**
                 * Sets the maximum speed of a boat. Must be nonnegative. Default is 0.4D.
                 */
                public setMaxSpeed(speed: number): void;
                /**
                 * Gets the deceleration rate (newSpeed = curSpeed * rate) of occupied
                 * boats. The default is 0.2.
                 */
                public getOccupiedDeceleration(): number;
                /**
                 * Sets the deceleration rate (newSpeed = curSpeed * rate) of occupied
                 * boats. Setting this to a higher value allows for quicker acceleration.
                 * The default is 0.2.
                 */
                public setOccupiedDeceleration(rate: number): void;
                /**
                 * Gets the deceleration rate (newSpeed = curSpeed * rate) of unoccupied
                 * boats. The default is -1. Values below 0 indicate that no additional
                 * deceleration is imposed.
                 */
                public getUnoccupiedDeceleration(): number;
                /**
                 * Sets the deceleration rate (newSpeed = curSpeed * rate) of unoccupied
                 * boats. Setting this to a higher value allows for quicker deceleration
                 * of boats when a player disembarks. The default is -1. Values below 0
                 * indicate that no additional deceleration is imposed.
                 */
                public setUnoccupiedDeceleration(rate: number): void;
                /**
                 * Get whether boats can work on land.
                 */
                public getWorkOnLand(): boolean;
                /**
                 * Set whether boats can work on land.
                 */
                public setWorkOnLand(workOnLand: boolean): void;
            }
        }
    }
}
