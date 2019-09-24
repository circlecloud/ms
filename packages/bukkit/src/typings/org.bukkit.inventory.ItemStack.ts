declare namespace org {
    namespace bukkit {
        namespace inventory {
            // @ts-ignore
             class ItemStack implements org.bukkit.configuration.serialization.ConfigurationSerializable {
                constructor()
                /**
                 * Defaults stack size to 1, with no extra data
                 */
                constructor(type: org.bukkit.Material)
                /**
                 * An item stack with no extra data
                 */
                constructor(type: org.bukkit.Material, amount: number)
                /**
                 * An item stack with the specified damage / durability
                 */
                constructor(type: org.bukkit.Material, amount: number, damage: number)
                constructor(type: org.bukkit.Material, amount: number, damage: number, data: any)
                /**
                 * Creates a new item stack derived from the specified stack
                 */
                constructor(stack: org.bukkit.inventory.ItemStack)
                /**
                 * Gets the type of this item
                 */
                public getType(): org.bukkit.Material;
                /**
                 * Sets the type of this item
                 * <p>
                 * Note that in doing so you will reset the MaterialData for this stack
                 */
                public setType(type: org.bukkit.Material): void;
                /**
                 * Gets the amount of items in this stack
                 */
                public getAmount(): number;
                /**
                 * Sets the amount of items in this stack
                 */
                public setAmount(amount: number): void;
                /**
                 * Gets the MaterialData for this stack of items
                 */
                public getData(): org.bukkit.material.MaterialData;
                /**
                 * Sets the MaterialData for this stack of items
                 */
                public setData(data: org.bukkit.material.MaterialData): void;
                /**
                 * Sets the durability of this item
                 */
                public setDurability(durability: number): void;
                /**
                 * Gets the durability of this item
                 */
                public getDurability(): number;
                /**
                 * Get the maximum stacksize for the material hold in this ItemStack.
                 * (Returns -1 if it has no idea)
                 */
                public getMaxStackSize(): number;
                public toString(): string;
                public equals(obj: any): boolean;
                /**
                 * This method is the same as equals, but does not consider stack size
                 * (amount).
                 */
                public isSimilar(stack: org.bukkit.inventory.ItemStack): boolean;
                public clone(): org.bukkit.inventory.ItemStack;
                public hashCode(): number;
                /**
                 * Checks if this ItemStack contains the given {@link Enchantment}
                 */
                public containsEnchantment(ench: org.bukkit.enchantments.Enchantment): boolean;
                /**
                 * Gets the level of the specified enchantment on this item stack
                 */
                public getEnchantmentLevel(ench: org.bukkit.enchantments.Enchantment): number;
                /**
                 * Gets a map containing all enchantments and their levels on this item.
                 */
                public getEnchantments(): Map<any, any> /*java.util.Map*/;
                /**
                 * Adds the specified enchantments to this item stack.
                 * <p>
                 * This method is the same as calling {@link
                 * #addEnchantment(org.bukkit.enchantments.Enchantment, int)} for each
                 * element of the map.
                 */
                public addEnchantments(enchantments: Map<any, any> /*java.util.Map*/): void;
                /**
                 * Adds the specified {@link Enchantment} to this item stack.
                 * <p>
                 * If this item stack already contained the given enchantment (at any
                 * level), it will be replaced.
                 */
                public addEnchantment(ench: org.bukkit.enchantments.Enchantment, level: number): void;
                /**
                 * Adds the specified enchantments to this item stack in an unsafe manner.
                 * <p>
                 * This method is the same as calling {@link
                 * #addUnsafeEnchantment(org.bukkit.enchantments.Enchantment, int)} for
                 * each element of the map.
                 */
                public addUnsafeEnchantments(enchantments: Map<any, any> /*java.util.Map*/): void;
                /**
                 * Adds the specified {@link Enchantment} to this item stack.
                 * <p>
                 * If this item stack already contained the given enchantment (at any
                 * level), it will be replaced.
                 * <p>
                 * This method is unsafe and will ignore level restrictions or item type.
                 * Use at your own discretion.
                 */
                public addUnsafeEnchantment(ench: org.bukkit.enchantments.Enchantment, level: number): void;
                /**
                 * Removes the specified {@link Enchantment} if it exists on this
                 * ItemStack
                 */
                public removeEnchantment(ench: org.bukkit.enchantments.Enchantment): number;
                public serialize(): Map<any, any> /*java.util.Map*/;
                /**
                 * Required method for configuration serialization
                 */
                public static deserialize(args: Map<any, any> /*java.util.Map*/): org.bukkit.inventory.ItemStack;
                /**
                 * Get a copy of this ItemStack's {@link ItemMeta}.
                 */
                public getItemMeta(): org.bukkit.inventory.meta.ItemMeta;
                /**
                 * Checks to see if any meta data has been defined.
                 */
                public hasItemMeta(): boolean;
                /**
                 * Set the ItemMeta of this ItemStack.
                 */
                public setItemMeta(itemMeta: org.bukkit.inventory.meta.ItemMeta): boolean;
            }
        }
    }
}
