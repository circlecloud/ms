declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace living {
                        namespace humanoid {
                            // @ts-ignore
                            interface ChangeLevelEvent extends org.spongepowered.api.event.entity.living.humanoid.TargetHumanoidEvent, org.spongepowered.api.event.Cancellable {
                                /**
                                 * Gets the original level of the human.
                                 */
                                // @ts-ignore
                                 getOriginalLevel(): number;
                                /**
                                 * Gets the new level of the human.
                                 */
                                // @ts-ignore
                                 getLevel(): number;
                                /**
                                 * Sets the new level of the human.
                                 * <p>Technically, this can be set to the same level to
                                 * cancel effects of the level being changed.</p>
                                 */
                                // @ts-ignore
                                 setLevel(level: number): void;
                            }
                        }
                    }
                }
            }
        }
    }
}
