// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace loot {
            // @ts-ignore
             class LootContext extends java.lang.Object {
                // @ts-ignore
                public static DEFAULT_LOOT_MODIFIER: number;
                /**
                 * The {@link Location} to store where the loot will be generated.
                 */
                // @ts-ignore
                public getLocation(): org.bukkit.Location;
                /**
                 * Represents the {@link org.bukkit.potion.PotionEffectType#LUCK} that an
                 * entity can have. The higher the value the better chance of receiving more
                 * loot.
                 */
                // @ts-ignore
                public getLuck(): number;
                /**
                 * Represents the
                 * {@link org.bukkit.enchantments.Enchantment#LOOT_BONUS_MOBS} the
                 * {@link #getKiller()} entity has on their equipped item.
                 * This value is only set via
                 * {@link LootContext.Builder#lootingModifier(int)}. If not set, the
                 * {@link #getKiller()} entity's looting level will be used instead.
                 */
                // @ts-ignore
                public getLootingModifier(): number;
                /**
                 * Get the {@link Entity} that was killed. Can be null.
                 */
                // @ts-ignore
                public getLootedEntity(): org.bukkit.entity.Entity;
                /**
                 * Get the {@link HumanEntity} who killed the {@link #getLootedEntity()}.
                 * Can be null.
                 */
                // @ts-ignore
                public getKiller(): org.bukkit.entity.HumanEntity;
            }
        }
    }
}
