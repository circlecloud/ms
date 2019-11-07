// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace potion {
            // @ts-ignore
             class Potion extends java.lang.Object {
                /**
                 * Construct a new potion of the given type. Unless the type is {@link
                 * PotionType#WATER}, it will be level one, without extended duration.
                 * Don't use this constructor to create a no-effect potion other than
                 * water bottle.
                 */
                // @ts-ignore
                constructor(type: org.bukkit.potion.PotionType)
                /**
                 * Create a new potion of the given type and level.
                 */
                // @ts-ignore
                constructor(type: org.bukkit.potion.PotionType, level: number)
                /**
                 * Create a new potion of the given type and level.
                 */
                // @ts-ignore
                constructor(type: org.bukkit.potion.PotionType, level: number, splash: boolean)
                /**
                 * Create a new potion of the given type and level.
                 */
                // @ts-ignore
                constructor(type: org.bukkit.potion.PotionType, level: number, splash: boolean, extended: boolean)
                /**
                 * Chain this to the constructor to make the potion a splash potion.
                 */
                // @ts-ignore
                public splash(): org.bukkit.potion.Potion;
                /**
                 * Chain this to the constructor to extend the potion's duration.
                 */
                // @ts-ignore
                public extend(): org.bukkit.potion.Potion;
                /**
                 * Applies the effects of this potion to the given {@link ItemStack}. The
                 * ItemStack must be a potion.
                 */
                // @ts-ignore
                public apply(to: org.bukkit.inventory.ItemStack): void;
                /**
                 * Applies the effects that would be applied by this potion to the given
                 * {@link LivingEntity}.
                 */
                // @ts-ignore
                public apply(to: org.bukkit.entity.LivingEntity): void;
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * Returns a collection of {@link PotionEffect}s that this {@link Potion}
                 * would confer upon a {@link LivingEntity}.
                 */
                // @ts-ignore
                public getEffects(): java.util.Collection;
                /**
                 * Returns the level of this potion.
                 */
                // @ts-ignore
                public getLevel(): number;
                /**
                 * Returns the {@link PotionType} of this potion.
                 */
                // @ts-ignore
                public getType(): org.bukkit.potion.PotionType;
                /**
                 * Returns whether this potion has an extended duration.
                 */
                // @ts-ignore
                public hasExtendedDuration(): boolean;
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns whether this potion is a splash potion.
                 */
                // @ts-ignore
                public isSplash(): boolean;
                /**
                 * Set whether this potion has extended duration. This will cause the
                 * potion to have roughly 8/3 more duration than a regular potion.
                 */
                // @ts-ignore
                public setHasExtendedDuration(isExtended: boolean): void;
                /**
                 * Sets whether this potion is a splash potion. Splash potions can be
                 * thrown for a radius effect.
                 */
                // @ts-ignore
                public setSplash(isSplash: boolean): void;
                /**
                 * Sets the {@link PotionType} of this potion.
                 */
                // @ts-ignore
                public setType(type: org.bukkit.potion.PotionType): void;
                /**
                 * Sets the level of this potion.
                 */
                // @ts-ignore
                public setLevel(level: number): void;
                /**
                 * Converts this potion to a valid potion damage short, usable for potion
                 * item stacks.
                 */
                // @ts-ignore
                public toDamageValue(): number;
                /**
                 * Converts this potion to an {@link ItemStack} with the specified amount
                 * and a correct damage value.
                 */
                // @ts-ignore
                public toItemStack(amount: number): org.bukkit.inventory.ItemStack;
                // @ts-ignore
                public static fromDamage(damage: number): org.bukkit.potion.Potion;
                // @ts-ignore
                public static fromItemStack(item: org.bukkit.inventory.ItemStack): org.bukkit.potion.Potion;
                /**
                 * Returns an instance of {@link PotionBrewer}.
                 */
                // @ts-ignore
                public static getBrewer(): org.bukkit.potion.PotionBrewer;
                /**
                 * Sets the current instance of {@link PotionBrewer}. Generally not to be
                 * used from within a plugin.
                 */
                // @ts-ignore
                public static setPotionBrewer(other: org.bukkit.potion.PotionBrewer): void;
                // @ts-ignore
                public getNameId(): number;
            }
        }
    }
}
