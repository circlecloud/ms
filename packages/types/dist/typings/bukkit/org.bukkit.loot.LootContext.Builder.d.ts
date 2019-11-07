declare namespace org {
    namespace bukkit {
        namespace loot {
            namespace LootContext {
                // @ts-ignore
                 class Builder extends java.lang.Object {
                    /**
                     * Creates a new LootContext.Builder instance to facilitate easy
                     * creation of {@link LootContext}s.
                     */
                    // @ts-ignore
                    constructor(location: org.bukkit.Location)
                    /**
                     * Set how much luck to have when generating loot.
                     */
                    // @ts-ignore
                    public luck(luck: number): org.bukkit.loot.LootContext.Builder;
                    /**
                     * Set the {@link org.bukkit.enchantments.Enchantment#LOOT_BONUS_MOBS}
                     * level equivalent to use when generating loot. Values less than or
                     * equal to 0 will force the {@link LootTable} to only return a single
                     * {@link org.bukkit.inventory.ItemStack} per pool.
                     */
                    // @ts-ignore
                    public lootingModifier(modifier: number): org.bukkit.loot.LootContext.Builder;
                    /**
                     * The entity that was killed.
                     */
                    // @ts-ignore
                    public lootedEntity(lootedEntity: org.bukkit.entity.Entity): org.bukkit.loot.LootContext.Builder;
                    /**
                     * Set the {@link org.bukkit.entity.HumanEntity} that killed
                     * {@link #getLootedEntity()}. This entity will be used to get the
                     * looting level if {@link #lootingModifier(int)} is not set.
                     */
                    // @ts-ignore
                    public killer(killer: org.bukkit.entity.HumanEntity): org.bukkit.loot.LootContext.Builder;
                    /**
                     * Create a new {@link LootContext} instance using the supplied
                     * parameters.
                     */
                    // @ts-ignore
                    public build(): org.bukkit.loot.LootContext;
                }
            }
        }
    }
}
