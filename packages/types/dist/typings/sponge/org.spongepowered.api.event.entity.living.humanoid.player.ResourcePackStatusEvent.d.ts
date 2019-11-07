declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace living {
                        namespace humanoid {
                            namespace player {
                                // @ts-ignore
                                interface ResourcePackStatusEvent extends org.spongepowered.api.event.Event {
                                    /**
                                     * Get the player for this event.
                                     */
                                    // @ts-ignore
                                     getPlayer(): org.spongepowered.api.entity.living.player.Player;
                                    /**
                                     * Gets the pack that this status corresponds to.
                                     */
                                    // @ts-ignore
                                     getPack(): org.spongepowered.api.resourcepack.ResourcePack;
                                    /**
                                     * Gets the status of the sent pack.
                                     */
                                    // @ts-ignore
                                     getStatus(): org.spongepowered.api.event.entity.living.humanoid.player.ResourcePackStatusEvent.ResourcePackStatus;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
