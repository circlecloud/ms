declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace living {
                        namespace humanoid {
                            namespace player {
                                // @ts-ignore
                                interface TargetPlayerEvent extends org.spongepowered.api.event.entity.living.humanoid.TargetHumanoidEvent {
                                    /**
                                     * Gets the target {@link Player}.
                                     */
                                    // @ts-ignore
                                     getTargetEntity(): org.spongepowered.api.entity.living.player.Player;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
