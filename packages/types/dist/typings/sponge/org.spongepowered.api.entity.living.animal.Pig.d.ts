// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace animal {
                        // @ts-ignore
                        interface Pig extends org.spongepowered.api.entity.living.animal.Animal {
                            /**
                             * Gets the {@link PigSaddleData} for this {@link Pig}.
                             */
                            // @ts-ignore
                             getPigSaddleData(): org.spongepowered.api.data.manipulator.mutable.entity.PigSaddleData;
                            /**
                             * Gets the {@link Value} for whether this {@link Pig} is saddled.
                             */
                            // @ts-ignore
                             saddled(): org.spongepowered.api.data.value.mutable.Value;
                        }
                    }
                }
            }
        }
    }
}
