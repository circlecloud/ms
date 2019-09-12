declare namespace org {
    namespace bukkit {
        namespace entity {
            class Cat {
                /**
                 * Gets the current type of this cat.
                 */
                public getCatType(): org.bukkit.entity.Cat.Type;
                /**
                 * Sets the current type of this cat.
                 */
                public setCatType(type: org.bukkit.entity.Cat.Type): void;
                /**
                 * Get the collar color of this cat
                 */
                public getCollarColor(): org.bukkit.DyeColor;
                /**
                 * Set the collar color of this cat
                 */
                public setCollarColor(color: org.bukkit.DyeColor): void;
            }
        }
    }
}
