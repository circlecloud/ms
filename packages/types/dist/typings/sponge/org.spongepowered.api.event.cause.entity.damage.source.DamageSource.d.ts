// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            namespace source {
                                // @ts-ignore
                                interface DamageSource {
                                    /**
                                     * Creates a new {@link Builder builder} to build a {@link DamageSource}.
                                     */
                                    // @ts-ignore
                                     builder(): org.spongepowered.api.event.cause.entity.damage.source.DamageSource.Builder;
                                    /**
                                     * Gets the {@link DamageType} of this source.
                                     */
                                    // @ts-ignore
                                     getType(): org.spongepowered.api.event.cause.entity.damage.DamageType;
                                    /**
                                     * Gets whether this {@link DamageSource}'s damage is absolute and
                                     * will ignore potion effects and enchantments.
                                     */
                                    // @ts-ignore
                                     isAbsolute(): boolean;
                                    /**
                                     * Gets whether this {@link DamageSource} will deal damage that
                                     * bypasses any armor.
                                     */
                                    // @ts-ignore
                                     isBypassingArmor(): boolean;
                                    /**
                                     * Gets whether this {@link DamageSource}'s damage is scaled by
                                     * {@link Difficulty}.
                                     */
                                    // @ts-ignore
                                     isScaledByDifficulty(): boolean;
                                    /**
                                     * Gets whether this {@link DamageSource} is an explosion.
                                     */
                                    // @ts-ignore
                                     isExplosive(): boolean;
                                    /**
                                     * Gets whether this {@link DamageSource} is considered to be magical
                                     * damage, such as potions, or other sources.
                                     */
                                    // @ts-ignore
                                     isMagic(): boolean;
                                    /**
                                     * Gets whether this {@link DamageSource} is considered to damage creative, or
                                     * otherwise "normally unharmable" players. Usually associated with
                                     * {@link DamageTypes#VOID}.
                                     */
                                    // @ts-ignore
                                     doesAffectCreative(): boolean;
                                    /**
                                     * Gets the amount of exhaustion this {@link DamageSource} will
                                     * add to the entity, generally only to players.
                                     * <p>In vanilla gameplay this is set to 0.1 by default and
                                     * overridden to 0 if the source is set to be absolute or
                                     * as overriding armor.</p>
                                     */
                                    // @ts-ignore
                                     getExhaustion(): number;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
