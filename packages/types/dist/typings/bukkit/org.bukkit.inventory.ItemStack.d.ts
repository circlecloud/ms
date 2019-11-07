declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
             class ItemStack extends java.lang.Object implements org.bukkit.configuration.serialization.ConfigurationSerializable {
                // @ts-ignore
                constructor()
                /**
                 * Defaults stack size to 1, with no extra data
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * An item stack with no extra data
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, amount: number)
                /**
                 * An item stack with the specified damage / durability
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, amount: number, damage: number)
                // @ts-ignore
                constructor(type: org.bukkit.Material, amount: number, damage: number, data: java.lang.Byte)
                /**
                 * Creates a new item stack derived from the specified stack
                 */
                // @ts-ignore
                constructor(stack: org.bukkit.inventory.ItemStack)
                /**
                 * Gets the type of this item
                 */
                // @ts-ignore
                public getType(): org.bukkit.Material;
                /**
                 * Sets the type of this item
                 * <p>
                 * Note that in doing so you will reset the MaterialData for this stack
                 */
                // @ts-ignore
                public setType(type: org.bukkit.Material): void;
                /**
                 * Gets the amount of items in this stack
                 */
                // @ts-ignore
                public getAmount(): number;
                /**
                 * Sets the amount of items in this stack
                 */
                // @ts-ignore
                public setAmount(amount: number): void;
                /**
                 * Gets the MaterialData for this stack of items
                 */
                // @ts-ignore
                public getData(): org.bukkit.material.MaterialData;
                /**
                 * Sets the MaterialData for this stack of items
                 */
                // @ts-ignore
                public setData(data: org.bukkit.material.MaterialData): void;
                /**
                 * Sets the durability of this item
                 */
                // @ts-ignore
                public setDurability(durability: number): void;
                /**
                 * Gets the durability of this item
                 */
                // @ts-ignore
                public getDurability(): number;
                /**
                 * Get the maximum stacksize for the material hold in this ItemStack.
                 * (Returns -1 if it has no idea)
                 */
                // @ts-ignore
                public getMaxStackSize(): number;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * This method is the same as equals, but does not consider stack size
                 * (amount).
                 */
                // @ts-ignore
                public isSimilar(stack: org.bukkit.inventory.ItemStack): boolean;
                // @ts-ignore
                public clone(): org.bukkit.inventory.ItemStack;
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Checks if this ItemStack contains the given {@link Enchantment}
                 */
                // @ts-ignore
                public containsEnchantment(ench: org.bukkit.enchantments.Enchantment): boolean;
                /**
                 * Gets the level of the specified enchantment on this item stack
                 */
                // @ts-ignore
                public getEnchantmentLevel(ench: org.bukkit.enchantments.Enchantment): number;
                /**
                 * Gets a map containing all enchantments and their levels on this item.
                 */
                // @ts-ignore
                public getEnchantments(): java.util.Map;
                /**
                 * Adds the specified enchantments to this item stack.
                 * <p>
                 * This method is the same as calling {@link
                 * #addEnchantment(org.bukkit.enchantments.Enchantment, int)} for each
                 * element of the map.
                 */
                // @ts-ignore
                public addEnchantments(enchantments: java.util.Map): void;
                /**
                 * Adds the specified {@link Enchantment} to this item stack.
                 * <p>
                 * If this item stack already contained the given enchantment (at any
                 * level), it will be replaced.
                 */
                // @ts-ignore
                public addEnchantment(ench: org.bukkit.enchantments.Enchantment, level: number): void;
                /**
                 * Adds the specified enchantments to this item stack in an unsafe manner.
                 * <p>
                 * This method is the same as calling {@link
                 * #addUnsafeEnchantment(org.bukkit.enchantments.Enchantment, int)} for
                 * each element of the map.
                 */
                // @ts-ignore
                public addUnsafeEnchantments(enchantments: java.util.Map): void;
                /**
                 * Adds the specified {@link Enchantment} to this item stack.
                 * <p>
                 * If this item stack already contained the given enchantment (at any
                 * level), it will be replaced.
                 * <p>
                 * This method is unsafe and will ignore level restrictions or item type.
                 * Use at your own discretion.
                 */
                // @ts-ignore
                public addUnsafeEnchantment(ench: org.bukkit.enchantments.Enchantment, level: number): void;
                /**
                 * Removes the specified {@link Enchantment} if it exists on this
                 * ItemStack
                 */
                // @ts-ignore
                public removeEnchantment(ench: org.bukkit.enchantments.Enchantment): number;
                // @ts-ignore
                public serialize(): java.util.Map;
                /**
                 * Required method for configuration serialization
                 */
                // @ts-ignore
                public static deserialize(args: java.util.Map): org.bukkit.inventory.ItemStack;
                /**
                 * Get a copy of this ItemStack's {@link ItemMeta}.
                 */
                // @ts-ignore
                public getItemMeta(): org.bukkit.inventory.meta.ItemMeta;
                /**
                 * Checks to see if any meta data has been defined.
                 */
                // @ts-ignore
                public hasItemMeta(): boolean;
                /**
                 * Set the ItemMeta of this ItemStack.
                 */
                // @ts-ignore
                public setItemMeta(itemMeta: org.bukkit.inventory.meta.ItemMeta): boolean;
            }
        }
    }
}
