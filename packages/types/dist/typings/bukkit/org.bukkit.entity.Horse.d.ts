// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Horse extends org.bukkit.entity.AbstractHorse {
                /**
                 * Gets the horse's color.
                 * <p>
                 * Colors only apply to horses, not to donkeys, mules, skeleton horses
                 * or undead horses.
                 */
                // @ts-ignore
                 getColor(): org.bukkit.entity.Horse.Color;
                /**
                 * Sets the horse's color.
                 * <p>
                 * Attempting to set a color for any donkey, mule, skeleton horse or
                 * undead horse will not result in a change.
                 */
                // @ts-ignore
                 setColor(color: org.bukkit.entity.Horse.Color): void;
                /**
                 * Gets the horse's style.
                 * Styles determine what kind of markings or patterns a horse has.
                 * <p>
                 * Styles only apply to horses, not to donkeys, mules, skeleton horses
                 * or undead horses.
                 */
                // @ts-ignore
                 getStyle(): org.bukkit.entity.Horse.Style;
                /**
                 * Sets the style of this horse.
                 * Styles determine what kind of markings or patterns a horse has.
                 * <p>
                 * Attempting to set a style for any donkey, mule, skeleton horse or
                 * undead horse will not result in a change.
                 */
                // @ts-ignore
                 setStyle(style: org.bukkit.entity.Horse.Style): void;
                // @ts-ignore
                 isCarryingChest(): boolean;
                // @ts-ignore
                 setCarryingChest(chest: boolean): void;
                // @ts-ignore
                 getInventory(): org.bukkit.inventory.HorseInventory;
            }
        }
    }
}
