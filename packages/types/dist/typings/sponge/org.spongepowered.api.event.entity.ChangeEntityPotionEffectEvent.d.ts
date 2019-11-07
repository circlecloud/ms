declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    // @ts-ignore
                    interface ChangeEntityPotionEffectEvent extends org.spongepowered.api.event.entity.TargetEntityEvent, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets a copy of all current effects applied on the entity.
                         */
                        // @ts-ignore
                         getCurrentEffects(): java.util.List;
                        /**
                         * Gets the potion effect involved in this event.
                         */
                        // @ts-ignore
                         getPotionEffect(): org.spongepowered.api.effect.potion.PotionEffect;
                    }
                }
            }
        }
    }
}
