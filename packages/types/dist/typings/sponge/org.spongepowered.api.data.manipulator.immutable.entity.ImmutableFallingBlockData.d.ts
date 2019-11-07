// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            // @ts-ignore
                            interface ImmutableFallingBlockData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * Gets the {@link ImmutableValue} for the damage to deal per block
                                 * the {@link FallingBlock} has fallen.
                                 */
                                // @ts-ignore
                                 fallDamagePerBlock(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the maximum damage the {@link FallingBlock} can deal to another
                                 * entity for falling on the entity.
                                 */
                                // @ts-ignore
                                 maxFallDamage(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the {@link BlockState} the falling block is representing.
                                 */
                                // @ts-ignore
                                 blockState(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets whether this falling block will try to place itself where
                                 * it lands.
                                 */
                                // @ts-ignore
                                 canPlaceAsBlock(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets whether this falling block can drop as an item if it lands in a
                                 * way that it can not be placed.
                                 */
                                // @ts-ignore
                                 canDropAsItem(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the time the block has been falling if spawning a entity in air
                                 * this will need to be set to 1 or it will be instantly removed.
                                 */
                                // @ts-ignore
                                 fallTime(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets whether this falling block will damage entities where it lands.
                                 */
                                // @ts-ignore
                                 canHurtEntities(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
