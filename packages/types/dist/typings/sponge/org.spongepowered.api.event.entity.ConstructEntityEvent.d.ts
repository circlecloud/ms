// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    // @ts-ignore
                    interface ConstructEntityEvent extends org.spongepowered.api.event.Event {
                        /**
                         * Gets the {@link Transform} that the {@link Entity} will be constructed with.
                         */
                        // @ts-ignore
                         getTransform(): org.spongepowered.api.entity.Transform;
                        /**
                         * Gets the {@link EntityType} of the target {@link Entity} that is going to be
                         * constructed.
                         */
                        // @ts-ignore
                         getTargetType(): org.spongepowered.api.entity.EntityType;
                    }
                }
            }
        }
    }
}
