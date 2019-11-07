// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    // @ts-ignore
                    interface AttackEntityEvent extends org.spongepowered.api.event.entity.TargetEntityEvent, org.spongepowered.api.event.Cancellable {
                        // @ts-ignore
                         SOURCE: string;
                        // @ts-ignore
                         HARD_HAT_ARMOR: string;
                        // @ts-ignore
                         SHIELD: string;
                        // @ts-ignore
                         GENERAL_ARMOR: string;
                        // @ts-ignore
                         HELMET: string;
                        // @ts-ignore
                         CHESTPLATE: string;
                        // @ts-ignore
                         LEGGINGS: string;
                        // @ts-ignore
                         BOOTS: string;
                        // @ts-ignore
                         RESISTANCE: string;
                        // @ts-ignore
                         ABSORPTION: string;
                        // @ts-ignore
                         CREATOR: string;
                        // @ts-ignore
                         NOTIFIER: string;
                        /**
                         * Gets the original "raw" amount of damage to deal to the targeted
                         * {@link Entity}.
                         */
                        // @ts-ignore
                         getOriginalDamage(): number;
                        /**
                         * Gets the original "final" amount of damage after all original
                         * {@link DamageModifier}s are applied to {@link #getOriginalDamage()}.
                         * The "final" damage is considered the amount of health being lost by
                         * the {@link Entity}, if health is tracked.
                         */
                        // @ts-ignore
                         getOriginalFinalDamage(): number;
                        /**
                         * Gets an {@link ImmutableMap} of all original {@link DamageModifier}s
                         * and their associated "modified" damage. Note that ordering is not
                         * retained.
                         */
                        // @ts-ignore
                         getOriginalDamages(): java.util.Map;
                        /**
                         * Gets the original damage for the provided {@link DamageModifier}. If
                         * the provided {@link DamageModifier} was not included in
                         * {@link #getOriginalDamages()}, an {@link IllegalArgumentException} is
                         * thrown.
                         */
                        // @ts-ignore
                         getOriginalModifierDamage(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier): number;
                        /**
                         * Gets the original {@link List} of {@link DamageModifier} to
                         * {@link Function} that was originally passed into the event.
                         */
                        // @ts-ignore
                         getOriginalFunctions(): java.util.List;
                        /**
                         * Gets the "base" damage to deal to the targeted {@link Entity}. The
                         * "base" damage is the original value before passing along the chain of
                         * {@link Function}s for all known {@link DamageModifier}s.
                         */
                        // @ts-ignore
                         getBaseOutputDamage(): number;
                        /**
                         * Sets the "base" damage to deal to the targeted {@link Entity}. The
                         * "base" damage is the original value before passing along the chain of
                         * {@link Function}s for all known {@link DamageModifier}s.
                         */
                        // @ts-ignore
                         setBaseOutputDamage(baseDamage: number): void;
                        /**
                         * Gets the final damage that will be passed into the proceeding
                         * {@link AttackEntityEvent}. The final damage is the end result of the
                         * {@link #getBaseOutputDamage()} being applied in {@link Function#apply(Object)}
                         * available from all the {@link Tuple}s of {@link DamageModifier} to
                         * {@link Function} in {@link #getOriginalFunctions()}.
                         */
                        // @ts-ignore
                         getFinalOutputDamage(): number;
                        /**
                         * Checks whether the provided {@link DamageModifier} is applicable to the
                         * current available {@link DamageModifier}s.
                         */
                        // @ts-ignore
                         isModifierApplicable(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier): boolean;
                        /**
                         * Gets the damage for the provided {@link DamageModifier}. Providing that
                         * {@link #isModifierApplicable(DamageModifier)} returns <code>true</code>,
                         * the cached "damage" for the {@link DamageModifier} is returned.
                         */
                        // @ts-ignore
                         getOutputDamage(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier): number;
                        /**
                         * Sets the provided {@link Function} to be used for the given
                         * {@link DamageModifier}. If the {@link DamageModifier} is already
                         * included in {@link #getModifiers()}, the {@link Function} replaces
                         * the existing function. If there is no {@link Tuple} for the
                         * {@link DamageModifier}, a new one is created and added to the end
                         * of the list of {@link Function}s to be applied to the
                         * {@link #getBaseOutputDamage()}.
                         * <p>If needing to create a custom {@link DamageModifier} is required,
                         * usage of the
                         * {@link org.spongepowered.api.event.cause.entity.damage.DamageModifier.Builder}
                         * is recommended.</p>
                         */
                        // @ts-ignore
                         setOutputDamage(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: java.util.function$.DoubleUnaryOperator): void;
                        /**
                         * Adds the provided {@link DamageModifier} and {@link Function} to the
                         * list of modifiers, such that the {@link Set} containing
                         * {@link DamageModifierType}s provided in {@code before} will appear
                         * after the provided damage modifier.
                         */
                        // @ts-ignore
                         addDamageModifierBefore(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: java.util.function$.DoubleUnaryOperator, before: java.util.Set): void;
                        /**
                         * Adds the provided {@link DamageModifier} and {@link Function} to the list
                         * of modifiers, such that the modifier will appear in order after any
                         * current modifiers whose type are included in the provided {@link Set}
                         * of {@link DamageModifierType}s.
                         */
                        // @ts-ignore
                         addDamageModifierAfter(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: java.util.function$.DoubleUnaryOperator, after: java.util.Set): void;
                        /**
                         * Gets a list of simple {@link Tuple}s of {@link DamageModifier} keyed to
                         * their representative {@link Function}s. All {@link DamageModifier}s are
                         * applicable to the entity based on the {@link DamageSource} and any
                         * possible invulnerabilities due to the {@link DamageSource}.
                         */
                        // @ts-ignore
                         getModifiers(): java.util.List;
                        /**
                         * Gets the knock back modifier. The modifier itself will apply to the
                         * momentum of the attacked entity.
                         */
                        // @ts-ignore
                         getKnockbackModifier(): number;
                        /**
                         * Sets the knock back modifier. The modifier itself will apply to the
                         * momentum of the attacked entity.
                         */
                        // @ts-ignore
                         setKnockbackModifier(modifier: number): void;
                    }
                }
            }
        }
    }
}
