declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace living {
                        namespace humanoid {
                            namespace player {
                                // @ts-ignore
                                interface RespawnPlayerEvent extends org.spongepowered.api.event.entity.living.humanoid.player.TargetPlayerEvent {
                                    /**
                                     * The original {@link Player} that this new player is a clone of.
                                     * <p>When a player dies, or leaves The End, their {@link Player} is re-created.</p>
                                     */
                                    // @ts-ignore
                                     getOriginalPlayer(): org.spongepowered.api.entity.living.player.Player;
                                    /**
                                     * Gets a copy of the transform that the entity came from.
                                     */
                                    // @ts-ignore
                                     getFromTransform(): org.spongepowered.api.entity.Transform;
                                    /**
                                     * Gets the new transform that the {@link Player} will change to.
                                     */
                                    // @ts-ignore
                                     getToTransform(): org.spongepowered.api.entity.Transform;
                                    /**
                                     * Sets the new transform that the entity will change to.
                                     */
                                    // @ts-ignore
                                     setToTransform(respawnTransform: org.spongepowered.api.entity.Transform): void;
                                    /**
                                     * Gets whether the transform was set by a bed or not.
                                     */
                                    // @ts-ignore
                                     isBedSpawn(): boolean;
                                    /**
                                     * Gets whether this event was fired because the {@link Player} died.
                                     */
                                    // @ts-ignore
                                     isDeath(): boolean;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
