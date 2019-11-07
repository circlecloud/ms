// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface ItemFrame extends org.bukkit.entity.Hanging {
                /**
                 * Get the item in this frame
                 */
                // @ts-ignore
                 getItem(): org.bukkit.inventory.ItemStack;
                /**
                 * Set the item in this frame
                 */
                // @ts-ignore
                 setItem(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Set the item in this frame
                 */
                // @ts-ignore
                 setItem(item: org.bukkit.inventory.ItemStack, playSound: boolean): void;
                /**
                 * Get the rotation of the frame's item
                 */
                // @ts-ignore
                 getRotation(): org.bukkit.Rotation;
                /**
                 * Set the rotation of the frame's item
                 */
                // @ts-ignore
                 setRotation(rotation: org.bukkit.Rotation): void;
            }
        }
    }
}
