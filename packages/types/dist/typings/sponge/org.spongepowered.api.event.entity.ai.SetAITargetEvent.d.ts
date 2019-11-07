// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace ai {
                        // @ts-ignore
                        interface SetAITargetEvent extends org.spongepowered.api.event.entity.living.TargetAgentEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Gets the {@link Agent}s new target {@link Entity}.
                             */
                            // @ts-ignore
                             getTarget(): java.util.Optional;
                            /**
                             * Sets the {@link Agent}s new target {@link Entity}.
                             * <p>This target is set after the event when it is not cancelled.</p>
                             * <p>Setting a {@code null} target removes the target.</p>
                             */
                            // @ts-ignore
                             setTarget(target: org.spongepowered.api.entity.Entity): void;
                        }
                    }
                }
            }
        }
    }
}
