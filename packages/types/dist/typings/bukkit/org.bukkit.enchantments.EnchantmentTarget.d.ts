declare namespace org {
    namespace bukkit {
        namespace enchantments {
            // @ts-ignore
             class EnchantmentTarget extends java.lang.Enum {
                // @ts-ignore
                public static ALL: org.bukkit.enchantments.EnchantmentTarget;
                // @ts-ignore
                public static ARMOR: org.bukkit.enchantments.EnchantmentTarget;
                // @ts-ignore
                public static ARMOR_FEET: org.bukkit.enchantments.EnchantmentTarget;
                // @ts-ignore
                public static ARMOR_LEGS: org.bukkit.enchantments.EnchantmentTarget;
                // @ts-ignore
                public static ARMOR_TORSO: org.bukkit.enchantments.EnchantmentTarget;
                // @ts-ignore
                public static ARMOR_HEAD: org.bukkit.enchantments.EnchantmentTarget;
                // @ts-ignore
                public static WEAPON: org.bukkit.enchantments.EnchantmentTarget;
                // @ts-ignore
                public static TOOL: org.bukkit.enchantments.EnchantmentTarget;
                // @ts-ignore
                public static BOW: org.bukkit.enchantments.EnchantmentTarget;
                // @ts-ignore
                public static FISHING_ROD: org.bukkit.enchantments.EnchantmentTarget;
                // @ts-ignore
                public static BREAKABLE: org.bukkit.enchantments.EnchantmentTarget;
                // @ts-ignore
                public static WEARABLE: org.bukkit.enchantments.EnchantmentTarget;
                // @ts-ignore
                public static TRIDENT: org.bukkit.enchantments.EnchantmentTarget;
                // @ts-ignore
                public static CROSSBOW: org.bukkit.enchantments.EnchantmentTarget;
                // @ts-ignore
                public static values(): org.bukkit.enchantments.EnchantmentTarget[];
                // @ts-ignore
                public static valueOf(name: string): org.bukkit.enchantments.EnchantmentTarget;
                /**
                 * Check whether this target includes the specified item.
                 */
                // @ts-ignore
                public includes(item: org.bukkit.Material): boolean;
                /**
                 * Check whether this target includes the specified item.
                 */
                // @ts-ignore
                public includes(item: org.bukkit.inventory.ItemStack): boolean;
            }
        }
    }
}
