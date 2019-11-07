// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace animal {
                        // @ts-ignore
                        interface Ocelot extends org.spongepowered.api.entity.living.animal.Animal {
                            /**
                             * Gets a copy of the current {@link OcelotData} being represented by
                             * this {@link Ocelot}.
                             */
                            // @ts-ignore
                             getOcelotData(): org.spongepowered.api.data.manipulator.mutable.entity.OcelotData;
                            /**
                             * Gets the {@link Value} for the {@link OcelotType} of this
                             * {@link Ocelot}.
                             */
                            // @ts-ignore
                             variant(): org.spongepowered.api.data.value.mutable.Value;
                        }
                    }
                }
            }
        }
    }
}
