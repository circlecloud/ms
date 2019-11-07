// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace living {
                        namespace humanoid {
                            // @ts-ignore
                            interface AnimateHandEvent extends org.spongepowered.api.event.entity.living.humanoid.TargetHumanoidEvent, org.spongepowered.api.event.Cancellable {
                                /**
                                 * Gets the {@link HandType} used for animation.
                                 */
                                // @ts-ignore
                                 getHandType(): org.spongepowered.api.data.type.HandType;
                            }
                        }
                    }
                }
            }
        }
    }
}
