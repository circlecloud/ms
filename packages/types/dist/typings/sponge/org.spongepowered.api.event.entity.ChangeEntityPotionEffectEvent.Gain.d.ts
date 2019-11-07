// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace ChangeEntityPotionEffectEvent {
                        // @ts-ignore
                        interface Gain extends org.spongepowered.api.event.entity.ChangeEntityPotionEffectEvent {
                            /**
                             * Gets the original potion effect involved in this event.
                             */
                            // @ts-ignore
                             getOriginalPotionEffect(): org.spongepowered.api.effect.potion.PotionEffect;
                            /**
                             * Sets the potion effect to be used in this event.
                             */
                            // @ts-ignore
                             setPotionEffect(effect: org.spongepowered.api.effect.potion.PotionEffect): void;
                        }
                    }
                }
            }
        }
    }
}
