declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    // @ts-ignore
                    interface MoveEntityEvent extends org.spongepowered.api.event.entity.TargetEntityEvent, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the transform that the {@link Entity} came from.
                         */
                        // @ts-ignore
                         getFromTransform(): org.spongepowered.api.entity.Transform;
                        /**
                         * Gets the new transform that the {@link Entity} will change to.
                         */
                        // @ts-ignore
                         getToTransform(): org.spongepowered.api.entity.Transform;
                        /**
                         * Sets the new transform that the {@link Entity} will change to.
                         */
                        // @ts-ignore
                         setToTransform(transform: org.spongepowered.api.entity.Transform): void;
                    }
                }
            }
        }
    }
}
