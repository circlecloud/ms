declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface ItemFrame extends org.bukkit.entity.Hanging {
                /**
                 * Get the item in this frame
                 */
                 getItem(): org.bukkit.inventory.ItemStack;
                /**
                 * Set the item in this frame
                 */
                 setItem(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Set the item in this frame
                 */
                 setItem(item: org.bukkit.inventory.ItemStack, playSound: boolean): void;
                /**
                 * Get the rotation of the frame's item
                 */
                 getRotation(): org.bukkit.Rotation;
                /**
                 * Set the rotation of the frame's item
                 */
                 setRotation(rotation: org.bukkit.Rotation): void;
            }
        }
    }
}
