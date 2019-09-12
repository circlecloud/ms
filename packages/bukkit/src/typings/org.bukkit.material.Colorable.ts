declare namespace org {
    namespace bukkit {
        namespace material {
            class Colorable {
                /**
                 * Gets the color of this object.
                 * <br>
                 * This may be null to represent the default color of an object, if the
                 * object has a special default color (e.g Shulkers).
                 */
                public getColor(): org.bukkit.DyeColor;
                /**
                 * Sets the color of this object to the specified DyeColor.
                 * <br>
                 * This may be null to represent the default color of an object, if the
                 * object has a special default color (e.g Shulkers).
                 */
                public setColor(color: org.bukkit.DyeColor): void;
            }
        }
    }
}
