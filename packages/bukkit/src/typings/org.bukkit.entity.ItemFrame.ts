declare namespace org {
    namespace bukkit {
        namespace entity {
            class ItemFrame {
                /**
                 * Get the item in this frame
                 */
                public getItem(): org.bukkit.inventory.ItemStack;
                /**
                 * Set the item in this frame
                 */
                public setItem(item: org.bukkit.inventory.ItemStack): void;
                /**
                 * Set the item in this frame
                 */
                public setItem(item: org.bukkit.inventory.ItemStack, playSound: boolean): void;
                /**
                 * Get the rotation of the frame's item
                 */
                public getRotation(): org.bukkit.Rotation;
                /**
                 * Set the rotation of the frame's item
                 */
                public setRotation(rotation: org.bukkit.Rotation): void;
            }
        }
    }
}
