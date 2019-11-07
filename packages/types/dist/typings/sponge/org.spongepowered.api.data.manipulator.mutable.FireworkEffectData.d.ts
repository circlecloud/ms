// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        // @ts-ignore
                        interface FireworkEffectData extends org.spongepowered.api.data.manipulator.mutable.ListData {
                            /**
                             * Gets the {@link ListValue} of {@link FireworkEffect}s.
                             * <p>Note that for {@link ItemTypes#FIREWORK_CHARGE} only the first effect
                             * will apply to the charge.</p>
                             */
                            // @ts-ignore
                             effects(): org.spongepowered.api.data.value.mutable.ListValue;
                        }
                    }
                }
            }
        }
    }
}
