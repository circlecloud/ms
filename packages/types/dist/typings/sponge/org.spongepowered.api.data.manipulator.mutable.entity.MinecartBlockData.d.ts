// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface MinecartBlockData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the {@link BlockState} represented by the {@link Minecart}.
                                 */
                                // @ts-ignore
                                 block(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the offset of the represented block, in "pixels".
                                 * <p>Positive values move the block upwards in relation to the minecart,
                                 * and negative values move the block downwards.</p>
                                 */
                                // @ts-ignore
                                 offset(): org.spongepowered.api.data.value.mutable.Value;
                            }
                        }
                    }
                }
            }
        }
    }
}
