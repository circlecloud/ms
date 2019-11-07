// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                // @ts-ignore
                interface FallingBlock extends org.spongepowered.api.entity.Entity {
                    /**
                     * Gets a copy of the currently used {@link FallingBlockData}.
                     */
                    // @ts-ignore
                     getFallingBlockData(): org.spongepowered.api.data.manipulator.mutable.entity.FallingBlockData;
                    /**
                     * Gets the {@link Value} for the damage to deal per block the
                     * {@link FallingBlock} has fallen.
                     */
                    // @ts-ignore
                     fallDamagePerBlock(): org.spongepowered.api.data.value.mutable.Value;
                    /**
                     * Gets the maximum damage the {@link FallingBlock} can deal to another
                     * entity for falling on the entity.
                     */
                    // @ts-ignore
                     maxFallDamage(): org.spongepowered.api.data.value.mutable.Value;
                    /**
                     * Gets the {@link BlockState} the falling block is representing.
                     */
                    // @ts-ignore
                     blockState(): org.spongepowered.api.data.value.mutable.Value;
                    /**
                     * Gets whether this falling block will try to place itself where it lands.
                     */
                    // @ts-ignore
                     canPlaceAsBlock(): org.spongepowered.api.data.value.mutable.Value;
                    /**
                     * Gets whether this falling block can drop as an item if it lands in a way
                     * that it can not be placed.
                     */
                    // @ts-ignore
                     canDropAsItem(): org.spongepowered.api.data.value.mutable.Value;
                    /**
                     * Gets the time the block has been falling. Defaults to a value of 1.
                     */
                    // @ts-ignore
                     fallTime(): org.spongepowered.api.data.value.mutable.Value;
                    /**
                     * Gets whether this falling block will damage entities where it lands.
                     */
                    // @ts-ignore
                     canHurtEntities(): org.spongepowered.api.data.value.mutable.Value;
                }
            }
        }
    }
}
