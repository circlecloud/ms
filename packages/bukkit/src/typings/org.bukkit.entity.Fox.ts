declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Fox extends org.bukkit.entity.Animals, org.bukkit.entity.Sittable {
                /**
                 * Gets the current type of this fox.
                 */
                 getFoxType(): org.bukkit.entity.Fox.Type;
                /**
                 * Sets the current type of this fox.
                 */
                 setFoxType(type: org.bukkit.entity.Fox.Type): void;
                /**
                 * Checks if this animal is crouching
                 */
                 isCrouching(): boolean;
                /**
                 * Sets if this animal is crouching.
                 */
                 setCrouching(crouching: boolean): void;
                /**
                 * Sets if this animal is sleeping.
                 */
                 setSleeping(sleeping: boolean): void;
            }
        }
    }
}
