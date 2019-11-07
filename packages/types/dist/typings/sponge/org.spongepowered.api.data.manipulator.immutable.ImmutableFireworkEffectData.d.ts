// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        // @ts-ignore
                        interface ImmutableFireworkEffectData extends org.spongepowered.api.data.manipulator.immutable.ImmutableListData {
                            /**
                             * Gets the {@link ImmutableListValue} of {@link FireworkEffect}s.
                             * <p>Note that for {@link ItemTypes#FIREWORK_CHARGE} only the first effect
                             * will apply to the charge.</p>
                             */
                            // @ts-ignore
                             effects(): org.spongepowered.api.data.value.immutable.ImmutableListValue;
                        }
                    }
                }
            }
        }
    }
}
