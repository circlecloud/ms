declare namespace org {
    namespace bukkit {
        namespace entity {
            class Fox {
                /**
                 * Gets the current type of this fox.
                 */
                public getFoxType(): org.bukkit.entity.Fox.Type;
                /**
                 * Sets the current type of this fox.
                 */
                public setFoxType(type: org.bukkit.entity.Fox.Type): void;
                /**
                 * Checks if this animal is crouching
                 */
                public isCrouching(): boolean;
                /**
                 * Sets if this animal is crouching.
                 */
                public setCrouching(crouching: boolean): void;
                /**
                 * Sets if this animal is sleeping.
                 */
                public setSleeping(sleeping: boolean): void;
            }
        }
    }
}
