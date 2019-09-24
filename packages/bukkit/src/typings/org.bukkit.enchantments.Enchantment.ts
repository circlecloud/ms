declare namespace org {
    namespace bukkit {
        namespace enchantments {
            // @ts-ignore
            abstract class Enchantment implements org.bukkit.Keyed {
                constructor(key: org.bukkit.NamespacedKey)
                public static PROTECTION_ENVIRONMENTAL: org.bukkit.enchantments.Enchantment;
                public static PROTECTION_FIRE: org.bukkit.enchantments.Enchantment;
                public static PROTECTION_FALL: org.bukkit.enchantments.Enchantment;
                public static PROTECTION_EXPLOSIONS: org.bukkit.enchantments.Enchantment;
                public static PROTECTION_PROJECTILE: org.bukkit.enchantments.Enchantment;
                public static OXYGEN: org.bukkit.enchantments.Enchantment;
                public static WATER_WORKER: org.bukkit.enchantments.Enchantment;
                public static THORNS: org.bukkit.enchantments.Enchantment;
                public static DEPTH_STRIDER: org.bukkit.enchantments.Enchantment;
                public static FROST_WALKER: org.bukkit.enchantments.Enchantment;
                public static BINDING_CURSE: org.bukkit.enchantments.Enchantment;
                public static DAMAGE_ALL: org.bukkit.enchantments.Enchantment;
                public static DAMAGE_UNDEAD: org.bukkit.enchantments.Enchantment;
                public static DAMAGE_ARTHROPODS: org.bukkit.enchantments.Enchantment;
                public static KNOCKBACK: org.bukkit.enchantments.Enchantment;
                public static FIRE_ASPECT: org.bukkit.enchantments.Enchantment;
                public static LOOT_BONUS_MOBS: org.bukkit.enchantments.Enchantment;
                public static SWEEPING_EDGE: org.bukkit.enchantments.Enchantment;
                public static DIG_SPEED: org.bukkit.enchantments.Enchantment;
                public static SILK_TOUCH: org.bukkit.enchantments.Enchantment;
                public static DURABILITY: org.bukkit.enchantments.Enchantment;
                public static LOOT_BONUS_BLOCKS: org.bukkit.enchantments.Enchantment;
                public static ARROW_DAMAGE: org.bukkit.enchantments.Enchantment;
                public static ARROW_KNOCKBACK: org.bukkit.enchantments.Enchantment;
                public static ARROW_FIRE: org.bukkit.enchantments.Enchantment;
                public static ARROW_INFINITE: org.bukkit.enchantments.Enchantment;
                public static LUCK: org.bukkit.enchantments.Enchantment;
                public static LURE: org.bukkit.enchantments.Enchantment;
                public static LOYALTY: org.bukkit.enchantments.Enchantment;
                public static IMPALING: org.bukkit.enchantments.Enchantment;
                public static RIPTIDE: org.bukkit.enchantments.Enchantment;
                public static CHANNELING: org.bukkit.enchantments.Enchantment;
                public static MULTISHOT: org.bukkit.enchantments.Enchantment;
                public static QUICK_CHARGE: org.bukkit.enchantments.Enchantment;
                public static PIERCING: org.bukkit.enchantments.Enchantment;
                public static MENDING: org.bukkit.enchantments.Enchantment;
                public static VANISHING_CURSE: org.bukkit.enchantments.Enchantment;
                public getKey(): org.bukkit.NamespacedKey;
                /**
                 * Gets the unique name of this enchantment
                 */
                public abstract getName(): string;
                /**
                 * Gets the maximum level that this Enchantment may become.
                 */
                public abstract getMaxLevel(): number;
                /**
                 * Gets the level that this Enchantment should start at
                 */
                public abstract getStartLevel(): number;
                /**
                 * Gets the type of {@link ItemStack} that may fit this Enchantment.
                 */
                public abstract getItemTarget(): org.bukkit.enchantments.EnchantmentTarget;
                /**
                 * Checks if this enchantment is a treasure enchantment.
                 * <br>
                 * Treasure enchantments can only be received via looting, trading, or
                 * fishing.
                 */
                public abstract isTreasure(): boolean;
                /**
                 * Checks if this enchantment is a cursed enchantment
                 * <br>
                 * Cursed enchantments are found the same way treasure enchantments are
                 */
                public abstract isCursed(): boolean;
                /**
                 * Check if this enchantment conflicts with another enchantment.
                 */
                public abstract conflictsWith(other: org.bukkit.enchantments.Enchantment): boolean;
                /**
                 * Checks if this Enchantment may be applied to the given {@link
                 * ItemStack}.
                 * <p>
                 * This does not check if it conflicts with any enchantments already
                 * applied to the item.
                 */
                public abstract canEnchantItem(item: org.bukkit.inventory.ItemStack): boolean;
                public equals(obj: any): boolean;
                public hashCode(): number;
                public toString(): string;
                /**
                 * Registers an enchantment with the given ID and object.
                 * <p>
                 * Generally not to be used from within a plugin.
                 */
                public static registerEnchantment(enchantment: org.bukkit.enchantments.Enchantment): void;
                /**
                 * Checks if this is accepting Enchantment registrations.
                 */
                public static isAcceptingRegistrations(): boolean;
                /**
                 * Stops accepting any enchantment registrations
                 */
                public static stopAcceptingRegistrations(): void;
                /**
                 * Gets the Enchantment at the specified key
                 */
                public static getByKey(key: org.bukkit.NamespacedKey): org.bukkit.enchantments.Enchantment;
                /**
                 * Gets the Enchantment at the specified name
                 */
                public static getByName(name: string): org.bukkit.enchantments.Enchantment;
                /**
                 * Gets an array of all the registered {@link Enchantment}s
                 */
                public static values(): org.bukkit.enchantments.Enchantment[];
            }
        }
    }
}
