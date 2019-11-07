// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    // @ts-ignore
                    interface HealEntityEvent extends org.spongepowered.api.event.entity.TargetEntityEvent, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the original amount to "heal" the targeted {@link Entity}.
                         */
                        // @ts-ignore
                         getOriginalHealAmount(): number;
                        /**
                         * Gets the original "final" amount of healing after all original
                         * {@link HealthModifier}s are applied to {@link #getOriginalHealAmount()}.
                         * The "final" heal amount is considered the amount gained by the
                         * {@link Entity}, if health is tracked.
                         */
                        // @ts-ignore
                         getOriginalFinalHealAmount(): number;
                        /**
                         * Gets an {@link Map} of all original {@link HealthModifier}s and their
                         * associated "modified" heal amount. Note that ordering is not retained.
                         */
                        // @ts-ignore
                         getOriginalHealingAmounts(): java.util.Map;
                        /**
                         * Gets the final heal amount that will be applied to the entity. The final
                         * heal amount is the end result of the {@link #getBaseHealAmount()} being
                         * applied in {@link DoubleUnaryOperator#applyAsDouble(double)} available
                         * from all the {@link Tuple}s of {@link HealthModifier} to
                         * {@link DoubleUnaryOperator} in {@link #getOriginalFunctions()}.
                         */
                        // @ts-ignore
                         getFinalHealAmount(): number;
                        /**
                         * Gets the original healing amount for the provided {@link HealthModifier}.
                         * If the provided {@link HealthModifier} was not included in
                         * {@link #getOriginalHealingAmounts()}, an {@link IllegalArgumentException}
                         * is thrown.
                         */
                        // @ts-ignore
                         getOriginalHealingModifierAmount(healthModifier: org.spongepowered.api.event.cause.entity.health.HealthModifier): number;
                        /**
                         * Gets the original {@link List} of {@link HealthFunction}s that was
                         * originally passed into the event.
                         */
                        // @ts-ignore
                         getOriginalFunctions(): java.util.List;
                        /**
                         * Gets the "base" healing amount to apply to the targeted {@link Entity}.
                         * The "base" heal amount is the original value before passing along the
                         * chain of {@link DoubleUnaryOperator}s for all known
                         * {@link HealthModifier}s.
                         */
                        // @ts-ignore
                         getBaseHealAmount(): number;
                        /**
                         * Sets the "base" healing amount to apply to the targeted {@link Entity}.
                         * The "base" heal amount is the original value passed along the chain of
                         * {@link DoubleUnaryOperator}s for all known {@link HealthModifier}s.
                         */
                        // @ts-ignore
                         setBaseHealAmount(healAmount: number): void;
                        /**
                         * Checks whether the provided {@link HealthModifier} is applicable to the
                         * current available {@link HealthModifier}s.
                         */
                        // @ts-ignore
                         isModifierApplicable(healthModifier: org.spongepowered.api.event.cause.entity.health.HealthModifier): boolean;
                        /**
                         * Gets the heal amount for the provided {@link HealthModifier}. Providing
                         * that {@link #isModifierApplicable(HealthModifier)} returns
                         * <code>true</code>, the cached "heal amount" for the
                         * {@link HealthModifier} is returned.
                         */
                        // @ts-ignore
                         getHealAmount(healthModifier: org.spongepowered.api.event.cause.entity.health.HealthModifier): number;
                        /**
                         * Sets the provided {@link DoubleUnaryOperator} to be used for the given
                         * {@link HealthModifier}. If the {@link HealthModifier} is already included
                         * in {@link #getModifiers()}, the {@link DoubleUnaryOperator} replaces the
                         * existing function. If there is no {@link HealthFunction} for the
                         * {@link HealthModifier}, a new one is created and added to the end of the
                         * list of {@link DoubleUnaryOperator}s to be applied to the
                         * {@link #getBaseHealAmount()}.
                         * <p>If needing to create a custom {@link HealthModifier} is required,
                         * usage of the
                         * {@link org.spongepowered.api.event.cause.entity.health.HealthModifier.Builder}
                         * is recommended.</p>
                         */
                        // @ts-ignore
                         setHealAmount(healthModifier: org.spongepowered.api.event.cause.entity.health.HealthModifier, func: java.util.function$.DoubleUnaryOperator): void;
                        /**
                         * Gets a list of simple {@link HealthFunction}s. All {@link HealthModifier}
                         * s are applicable to the entity based on the {@link HealingSource} and any
                         * possible invulnerabilities due to the {@link HealingSource}.
                         */
                        // @ts-ignore
                         getModifiers(): java.util.List;
                    }
                }
            }
        }
    }
}
