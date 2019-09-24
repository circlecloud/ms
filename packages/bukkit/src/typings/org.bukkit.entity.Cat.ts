declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Cat extends org.bukkit.entity.Animals, org.bukkit.entity.Tameable, org.bukkit.entity.Sittable {
                /**
                 * Gets the current type of this cat.
                 */
                 getCatType(): org.bukkit.entity.Cat.Type;
                /**
                 * Sets the current type of this cat.
                 */
                 setCatType(type: org.bukkit.entity.Cat.Type): void;
                /**
                 * Get the collar color of this cat
                 */
                 getCollarColor(): org.bukkit.DyeColor;
                /**
                 * Set the collar color of this cat
                 */
                 setCollarColor(color: org.bukkit.DyeColor): void;
            }
        }
    }
}
