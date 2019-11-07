// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace material {
            // @ts-ignore
            interface Colorable {
                /**
                 * Gets the color of this object.
                 * <br>
                 * This may be null to represent the default color of an object, if the
                 * object has a special default color (e.g Shulkers).
                 */
                // @ts-ignore
                 getColor(): org.bukkit.DyeColor;
                /**
                 * Sets the color of this object to the specified DyeColor.
                 * <br>
                 * This may be null to represent the default color of an object, if the
                 * object has a special default color (e.g Shulkers).
                 */
                // @ts-ignore
                 setColor(color: org.bukkit.DyeColor): void;
            }
        }
    }
}
