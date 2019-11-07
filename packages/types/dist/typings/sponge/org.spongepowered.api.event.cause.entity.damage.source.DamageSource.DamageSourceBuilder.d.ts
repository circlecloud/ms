// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            namespace source {
                                namespace DamageSource {
                                    // @ts-ignore
                                    interface DamageSourceBuilder extends org.spongepowered.api.util.ResettableBuilder {
                                        /**
                                         * Sets this {@link DamageSource}'s damage to be scaled
                                         * by {@link Difficulty}.
                                         */
                                        // @ts-ignore
                                         scalesWithDifficulty(): org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder;
                                        /**
                                         * Sets this {@link DamageSource} as dealing damage that
                                         * bypasses armor modifiers.
                                         * <p>This sets the exhaustion increase caused
                                         * by this source to 0. You can override this
                                         * with {@link #exhaustion(double)}.</p>
                                         */
                                        // @ts-ignore
                                         bypassesArmor(): org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder;
                                        /**
                                         * Sets this {@link DamageSource} as an explosion.
                                         */
                                        // @ts-ignore
                                         explosion(): org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder;
                                        /**
                                         * Sets whether this {@link DamageSource}'s damage is absolute and
                                         * will ignore potion effects and enchantments.
                                         * <p>This sets the exhaustion increase caused
                                         * by this source to 0. You can override this
                                         * with {@link #exhaustion(double)}.</p>
                                         */
                                        // @ts-ignore
                                         absolute(): org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder;
                                        /**
                                         * Sets this {@link DamageSource} as considered to be magical
                                         * damage. An example is potions.
                                         */
                                        // @ts-ignore
                                         magical(): org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder;
                                        /**
                                         * Sets this {@link DamageSource} as considered to damage creative, or
                                         * otherwise "normally unharmable" players.
                                         */
                                        // @ts-ignore
                                         creative(): org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder;
                                        /**
                                         * Sets the amount of exhaustion this {@link DamageSource} will
                                         * add to the entity, generally only to players.
                                         * <p>In vanilla gameplay, the default is 0.1, unless if the damage
                                         * is absolute or bypasses armor, where the exhaustion gets set to 0.
                                         * This builder follows this mechanic, but if you set the exhaustion
                                         * through this method that will be overridden.</p>
                                         * <p>If you don't set this exhaustion manually, calling
                                         * {@link #absolute()} or {@link #bypassesArmor()} will
                                         * set this 0 and if you don't this will default to 0.1.</p>
                                         */
                                        // @ts-ignore
                                         exhaustion(exhaustion: number): org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder;
                                        /**
                                         * Sets the {@link DamageType} of this source.
                                         * <p>This is required to be set.</p>
                                         */
                                        // @ts-ignore
                                         type(damageType: org.spongepowered.api.event.cause.entity.damage.DamageType): org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder;
                                        /**
                                         * Builds an instance of this damage source, based on
                                         * the values you inputted into the builder.
                                         */
                                        // @ts-ignore
                                         build(): org.spongepowered.api.event.cause.entity.damage.source.DamageSource;
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
