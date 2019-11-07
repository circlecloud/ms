// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace animal {
                        // @ts-ignore
                        interface Llama extends org.spongepowered.api.entity.living.animal.Horse, org.spongepowered.api.entity.projectile.ProjectileLauncher {
                            /**
                             * Gets the {@link Value} for the {@link Keys#LLAMA_STRENGTH llama strength}
                             * when attacking.
                             */
                            // @ts-ignore
                             strength(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                            /**
                             * Gets the {@link Value} for the {@link Keys#LLAMA_VARIANT llama variant}.
                             */
                            // @ts-ignore
                             llamaVariant(): org.spongepowered.api.data.value.mutable.Value;
                        }
                    }
                }
            }
        }
    }
}
