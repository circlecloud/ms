declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace living {
                        namespace humanoid {
                            namespace player {
                                namespace CooldownEvent {
                                    // @ts-ignore
                                    interface Set extends org.spongepowered.api.event.entity.living.humanoid.player.CooldownEvent, org.spongepowered.api.event.Cancellable {
                                        /**
                                         * Gets the cooldown the item type had beforehand, if it had one at all.
                                         */
                                        // @ts-ignore
                                         getStartingCooldown(): java.util.OptionalInt;
                                        /**
                                         * Gets the original new set cooldown at the beginning of the event.
                                         */
                                        // @ts-ignore
                                         getOriginalNewCooldown(): number;
                                        /**
                                         * Gets the new cooldown the item type has for the player.
                                         */
                                        // @ts-ignore
                                         getNewCooldown(): number;
                                        /**
                                         * Sets the new cooldown for the item type for the player.
                                         */
                                        // @ts-ignore
                                         setNewCooldown(ticks: number): void;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
