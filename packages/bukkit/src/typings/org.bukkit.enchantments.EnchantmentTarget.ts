declare namespace org {
    namespace bukkit {
        namespace enchantments {
            // @ts-ignore
             class EnchantmentTarget {
                public static ALL: org.bukkit.enchantments.EnchantmentTarget;
                public static ARMOR: org.bukkit.enchantments.EnchantmentTarget;
                public static ARMOR_FEET: org.bukkit.enchantments.EnchantmentTarget;
                public static ARMOR_LEGS: org.bukkit.enchantments.EnchantmentTarget;
                public static ARMOR_TORSO: org.bukkit.enchantments.EnchantmentTarget;
                public static ARMOR_HEAD: org.bukkit.enchantments.EnchantmentTarget;
                public static WEAPON: org.bukkit.enchantments.EnchantmentTarget;
                public static TOOL: org.bukkit.enchantments.EnchantmentTarget;
                public static BOW: org.bukkit.enchantments.EnchantmentTarget;
                public static FISHING_ROD: org.bukkit.enchantments.EnchantmentTarget;
                public static BREAKABLE: org.bukkit.enchantments.EnchantmentTarget;
                public static WEARABLE: org.bukkit.enchantments.EnchantmentTarget;
                public static TRIDENT: org.bukkit.enchantments.EnchantmentTarget;
                public static CROSSBOW: org.bukkit.enchantments.EnchantmentTarget;
                public static values(): org.bukkit.enchantments.EnchantmentTarget[];
                public static valueOf(name: string): org.bukkit.enchantments.EnchantmentTarget;
                /**
                 * Check whether this target includes the specified item.
                 */
                public includes(item: org.bukkit.Material): boolean;
                /**
                 * Check whether this target includes the specified item.
                 */
                public includes(item: org.bukkit.inventory.ItemStack): boolean;
            }
        }
    }
}
