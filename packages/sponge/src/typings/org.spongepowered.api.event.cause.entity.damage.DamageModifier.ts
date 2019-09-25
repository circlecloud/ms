declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            // @ts-ignore
                            interface DamageModifier {
                                /**
                                 * Creates a new {@link Builder} for constructing a {@link DamageModifier}.
                                 */
                                // @ts-ignore
                                 builder(): org.spongepowered.api.event.cause.entity.damage.DamageModifier.Builder;
                                /**
                                 * Gets the {@link DamageModifierType} for this {@link DamageModifier}.
                                 */
                                // @ts-ignore
                                 getType(): org.spongepowered.api.event.cause.entity.damage.DamageModifierType;
                                /**
                                 * Gets the cause of this {@link DamageModifier}.
                                 */
                                // @ts-ignore
                                 getCause(): org.spongepowered.api.event.cause.Cause;
                                /**
                                 * Gets the contributing {@link ItemStackSnapshot} that provided the
                                 * "reason" for this {@link DamageModifier} to exist. An example of a
                                 * contributing {@link ItemStack} is if an {@link ItemTypes#DIAMOND_SWORD}
                                 * provided an {@link Enchantment} that provided a
                                 * {@link DamageModifierTypes#WEAPON_ENCHANTMENT}, this modifier would have
                                 * the {@link ItemStackSnapshot} for the weapon used. Some modifiers however,
                                 * do not require an {@link ItemStack} to be the contributing factor for
                                 * this modifier to exist.
                                 */
                                // @ts-ignore
                                 getContributingItem(): any;
                            }
                        }
                    }
                }
            }
        }
    }
}
