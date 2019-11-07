// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace hanging {
                    // @ts-ignore
                    interface Hanging extends org.spongepowered.api.entity.Entity {
                        /**
                         * Gets a copy of the {@link DirectionalData} being used for this
                         * {@link Hanging} entity.
                         */
                        // @ts-ignore
                         getDirectionalData(): org.spongepowered.api.data.manipulator.mutable.block.DirectionalData;
                        /**
                         * Gets the {@link Value} for the current "facing" {@link Direction}.
                         */
                        // @ts-ignore
                         direction(): org.spongepowered.api.data.value.mutable.Value;
                    }
                }
            }
        }
    }
}
