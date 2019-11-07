declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface FallingBlockData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the {@link Value} for the damage to deal per block
                                 * the {@link FallingBlock} has fallen.
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
                                 * Gets whether this falling block will try to place itself where
                                 * it lands.
                                 */
                                // @ts-ignore
                                 canPlaceAsBlock(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets whether this falling block can drop as an item if it lands in a
                                 * way that it can not be placed.
                                 */
                                // @ts-ignore
                                 canDropAsItem(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the number of ticks the block has been falling for.
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
        }
    }
}
