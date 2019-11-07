// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Fox extends org.bukkit.entity.Animals, org.bukkit.entity.Sittable {
                /**
                 * Gets the current type of this fox.
                 */
                // @ts-ignore
                 getFoxType(): org.bukkit.entity.Fox.Type;
                /**
                 * Sets the current type of this fox.
                 */
                // @ts-ignore
                 setFoxType(type: org.bukkit.entity.Fox.Type): void;
                /**
                 * Checks if this animal is crouching
                 */
                // @ts-ignore
                 isCrouching(): boolean;
                /**
                 * Sets if this animal is crouching.
                 */
                // @ts-ignore
                 setCrouching(crouching: boolean): void;
                /**
                 * Sets if this animal is sleeping.
                 */
                // @ts-ignore
                 setSleeping(sleeping: boolean): void;
            }
        }
    }
}
