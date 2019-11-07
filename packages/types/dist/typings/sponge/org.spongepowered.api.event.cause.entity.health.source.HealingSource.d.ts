// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace health {
                            namespace source {
                                // @ts-ignore
                                interface HealingSource {
                                    /**
                                     * Creates a new {@link Builder} to construct a new {@link HealingSource}.
                                     */
                                    // @ts-ignore
                                     builder(): org.spongepowered.api.event.cause.entity.health.source.HealingSource.Builder;
                                    /**
                                     * Gets the {@link HealingType} for this source.
                                     */
                                    // @ts-ignore
                                     getHealingType(): org.spongepowered.api.event.cause.entity.health.HealingType;
                                    /**
                                     * Gets whether this {@link HealingSource}'s healing amount is scaled by
                                     * {@link Difficulty}.
                                     */
                                    // @ts-ignore
                                     isDifficultyScaled(): boolean;
                                    /**
                                     * Gets whether this {@link HealingSource} is considered to be magical
                                     * healing, such as potions, or other sources.
                                     */
                                    // @ts-ignore
                                     isMagic(): boolean;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
