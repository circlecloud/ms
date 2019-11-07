declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace living {
                        namespace humanoid {
                            namespace player {
                                // @ts-ignore
                                interface CooldownEvent extends org.spongepowered.api.event.entity.living.humanoid.player.TargetPlayerEvent {
                                    /**
                                     * Gets the associated item type whose cooldown is being set or removed.
                                     */
                                    // @ts-ignore
                                     getItemType(): org.spongepowered.api.item.ItemType;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
