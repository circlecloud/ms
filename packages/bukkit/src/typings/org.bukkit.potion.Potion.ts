declare namespace org {
    namespace bukkit {
        namespace potion {
            class Potion {
                /**
                 * Construct a new potion of the given type. Unless the type is {@link
                 * PotionType#WATER}, it will be level one, without extended duration.
                 * Don't use this constructor to create a no-effect potion other than
                 * water bottle.
                 */
                constructor(type: org.bukkit.potion.PotionType)
                /**
                 * Create a new potion of the given type and level.
                 */
                constructor(type: org.bukkit.potion.PotionType, level: number)
                /**
                 * Create a new potion of the given type and level.
                 */
                constructor(type: org.bukkit.potion.PotionType, level: number, splash: boolean)
                /**
                 * Create a new potion of the given type and level.
                 */
                constructor(type: org.bukkit.potion.PotionType, level: number, splash: boolean, extended: boolean)
                /**
                 * Chain this to the constructor to make the potion a splash potion.
                 */
                public splash(): org.bukkit.potion.Potion;
                /**
                 * Chain this to the constructor to extend the potion's duration.
                 */
                public extend(): org.bukkit.potion.Potion;
                /**
                 * Applies the effects of this potion to the given {@link ItemStack}. The
                 * ItemStack must be a potion.
                 */
                public apply(to: org.bukkit.inventory.ItemStack): void;
                /**
                 * Applies the effects that would be applied by this potion to the given
                 * {@link LivingEntity}.
                 */
                public apply(to: org.bukkit.entity.LivingEntity): void;
                public equals(obj: any): boolean;
                /**
                 * Returns a collection of {@link PotionEffect}s that this {@link Potion}
                 * would confer upon a {@link LivingEntity}.
                 */
                public getEffects(): any[] /*java.util.Collection*/;
                /**
                 * Returns the level of this potion.
                 */
                public getLevel(): number;
                /**
                 * Returns the {@link PotionType} of this potion.
                 */
                public getType(): org.bukkit.potion.PotionType;
                /**
                 * Returns whether this potion has an extended duration.
                 */
                public hasExtendedDuration(): boolean;
                public hashCode(): number;
                /**
                 * Returns whether this potion is a splash potion.
                 */
                public isSplash(): boolean;
                /**
                 * Set whether this potion has extended duration. This will cause the
                 * potion to have roughly 8/3 more duration than a regular potion.
                 */
                public setHasExtendedDuration(isExtended: boolean): void;
                /**
                 * Sets whether this potion is a splash potion. Splash potions can be
                 * thrown for a radius effect.
                 */
                public setSplash(isSplash: boolean): void;
                /**
                 * Sets the {@link PotionType} of this potion.
                 */
                public setType(type: org.bukkit.potion.PotionType): void;
                /**
                 * Sets the level of this potion.
                 */
                public setLevel(level: number): void;
                /**
                 * Converts this potion to a valid potion damage short, usable for potion
                 * item stacks.
                 */
                public toDamageValue(): number;
                /**
                 * Converts this potion to an {@link ItemStack} with the specified amount
                 * and a correct damage value.
                 */
                public toItemStack(amount: number): org.bukkit.inventory.ItemStack;
                public static fromDamage(damage: number): org.bukkit.potion.Potion;
                public static fromItemStack(item: org.bukkit.inventory.ItemStack): org.bukkit.potion.Potion;
                /**
                 * Returns an instance of {@link PotionBrewer}.
                 */
                public static getBrewer(): org.bukkit.potion.PotionBrewer;
                /**
                 * Sets the current instance of {@link PotionBrewer}. Generally not to be
                 * used from within a plugin.
                 */
                public static setPotionBrewer(other: org.bukkit.potion.PotionBrewer): void;
                public getNameId(): number;
            }
        }
    }
}
