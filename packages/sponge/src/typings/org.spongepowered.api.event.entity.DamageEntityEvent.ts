declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    // @ts-ignore
                    interface DamageEntityEvent extends org.spongepowered.api.event.entity.TargetEntityEvent, org.spongepowered.api.event.Cancellable {
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
                         getOriginalDamages(): Map<any, any> /*java.util.Map*/;
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
                         * {@link DamageFunction} that was originally passed into the event.
                         */
                        // @ts-ignore
                         getOriginalFunctions(): any[] /*java.util.List*/;
                        /**
                         * Gets the "base" damage to deal to the targeted {@link Entity}. The
                         * "base" damage is the original value before passing along the chain of
                         * {@link DamageFunction}s for all known {@link DamageModifier}s.
                         */
                        // @ts-ignore
                         getBaseDamage(): number;
                        /**
                         * Sets the "base" damage to deal to the targeted {@link Entity}. The
                         * "base" damage is the original value before passing along the chain of
                         * {@link DamageFunction}s for all known {@link DamageModifier}s.
                         */
                        // @ts-ignore
                         setBaseDamage(baseDamage: number): void;
                        /**
                         * Gets the final damage that will be passed into the proceeding
                         * {@link DamageEntityEvent}. The final damage is the end result of the
                         * {@link #getBaseDamage()} being applied in {@link DoubleUnaryOperator#applyAsDouble(double)}
                         * available from all the {@link Tuple}s of {@link DamageModifier} to
                         * {@link DamageFunction} in {@link #getOriginalFunctions()}.
                         */
                        // @ts-ignore
                         getFinalDamage(): number;
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
                         getDamage(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier): number;
                        /**
                         * Sets the provided {@link DamageFunction} to be used for the given
                         * {@link DamageModifier}. If the {@link DamageModifier} is already
                         * included in {@link #getModifiers()}, the {@link DoubleUnaryOperator} replaces
                         * the existing function. If there is no {@link Tuple} for the
                         * {@link DamageModifier}, a new one is created and added to the end
                         * of the list of {@link DoubleUnaryOperator}s to be applied to the
                         * {@link #getBaseDamage()}.
                         * <p>If needing to create a custom {@link DamageModifier} is required,
                         * usage of the {@link Builder} is recommended.</p>
                         */
                        // @ts-ignore
                         setDamage(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: any): void;
                        /**
                         * Adds the provided {@link DamageModifier} and {@link DoubleUnaryOperator} to the
                         * list of modifiers, such that the {@link Set} containing
                         * {@link DamageModifierType}s provided in {@code before} will appear
                         * after the provided damage modifier.
                         */
                        // @ts-ignore
                         addDamageModifierBefore(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: any, before: any[] /*java.util.Set*/): void;
                        /**
                         * Adds the provided {@link DamageModifier} and {@link DoubleUnaryOperator} to the list
                         * of modifiers, such that the modifier will appear in order after any
                         * current modifiers whose type are included in the provided {@link Set} of
                         * {@link DamageModifierType}s.
                         */
                        // @ts-ignore
                         addModifierAfter(damageModifier: org.spongepowered.api.event.cause.entity.damage.DamageModifier, func: any, after: any[] /*java.util.Set*/): void;
                        /**
                         * Gets a list of simple {@link Tuple}s of {@link DamageModifier} keyed to
                         * their representative {@link DamageFunction}s. All {@link DamageModifier}s are
                         * applicable to the entity based on the {@link DamageSource} and any
                         * possible invulnerabilities due to the {@link DamageSource}.
                         */
                        // @ts-ignore
                         getModifiers(): any[] /*java.util.List*/;
                        /**
                         * Returns whether or not this event will cause the entity to die if the
                         * event is not cancelled. Only supported for living entities, returns false
                         * if {@link #getTargetEntity()} is not a living entity.
                         */
                        // @ts-ignore
                         willCauseDeath(): boolean;
                    }
                }
            }
        }
    }
}
