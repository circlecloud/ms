declare namespace org {
    namespace bukkit {
        namespace inventory {
            class ItemFactory {
                /**
                 * This creates a new item meta for the material.
                 */
                public getItemMeta(material: org.bukkit.Material): org.bukkit.inventory.meta.ItemMeta;
                /**
                 * This method checks the item meta to confirm that it is applicable (no
                 * data lost if applied) to the specified ItemStack.
                 * <p>
                 * A {@link SkullMeta} would not be valid for a sword, but a normal {@link
                 * ItemMeta} from an enchanted dirt block would.
                 */
                public isApplicable(meta: org.bukkit.inventory.meta.ItemMeta, stack: org.bukkit.inventory.ItemStack): boolean;
                /**
                 * This method checks the item meta to confirm that it is applicable (no
                 * data lost if applied) to the specified Material.
                 * <p>
                 * A {@link SkullMeta} would not be valid for a sword, but a normal {@link
                 * ItemMeta} from an enchanted dirt block would.
                 */
                public isApplicable(meta: org.bukkit.inventory.meta.ItemMeta, material: org.bukkit.Material): boolean;
                /**
                 * This method is used to compare two item meta data objects.
                 */
                public equals(meta1: org.bukkit.inventory.meta.ItemMeta, meta2: org.bukkit.inventory.meta.ItemMeta): boolean;
                /**
                 * Returns an appropriate item meta for the specified stack.
                 * <p>
                 * The item meta returned will always be a valid meta for a given
                 * ItemStack of the specified material. It may be a more or less specific
                 * meta, and could also be the same meta or meta type as the parameter.
                 * The item meta returned will also always be the most appropriate meta.
                 * <p>
                 * Example, if a {@link SkullMeta} is being applied to a book, this method
                 * would return a {@link BookMeta} containing all information in the
                 * specified meta that is applicable to an {@link ItemMeta}, the highest
                 * common interface.
                 */
                public asMetaFor(meta: org.bukkit.inventory.meta.ItemMeta, stack: org.bukkit.inventory.ItemStack): org.bukkit.inventory.meta.ItemMeta;
                /**
                 * Returns an appropriate item meta for the specified material.
                 * <p>
                 * The item meta returned will always be a valid meta for a given
                 * ItemStack of the specified material. It may be a more or less specific
                 * meta, and could also be the same meta or meta type as the parameter.
                 * The item meta returned will also always be the most appropriate meta.
                 * <p>
                 * Example, if a {@link SkullMeta} is being applied to a book, this method
                 * would return a {@link BookMeta} containing all information in the
                 * specified meta that is applicable to an {@link ItemMeta}, the highest
                 * common interface.
                 */
                public asMetaFor(meta: org.bukkit.inventory.meta.ItemMeta, material: org.bukkit.Material): org.bukkit.inventory.meta.ItemMeta;
                /**
                 * Returns the default color for all leather armor.
                 */
                public getDefaultLeatherColor(): org.bukkit.Color;
                /**
                 * Apply a material change for an item meta. Do not use under any
                 * circumstances.
                 */
                public updateMaterial(meta: org.bukkit.inventory.meta.ItemMeta, material: org.bukkit.Material): org.bukkit.Material;
            }
        }
    }
}
