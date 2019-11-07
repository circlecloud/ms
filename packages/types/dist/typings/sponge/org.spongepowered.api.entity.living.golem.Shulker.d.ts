declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace golem {
                        // @ts-ignore
                        interface Shulker extends org.spongepowered.api.entity.living.golem.Golem, org.spongepowered.api.entity.projectile.source.ProjectileSource {
                            /**
                             * Gets a copy of the {@link DyeableData} representing the color of this
                             * {@link Shulker} entity.
                             */
                            // @ts-ignore
                             getDyeData(): org.spongepowered.api.data.manipulator.mutable.DyeableData;
                            /**
                             * Gets the current {@link Value} of {@link DyeColor} for this
                             * {@link Shulker}.
                             */
                            // @ts-ignore
                             color(): org.spongepowered.api.data.value.mutable.Value;
                            /**
                             * Gets a copy of the {@link DirectionalData} representing the direction this
                             * {@link Shulker} is oriented towards.
                             */
                            // @ts-ignore
                             getDirectionalData(): org.spongepowered.api.data.manipulator.mutable.block.DirectionalData;
                            /**
                             * Gets the current {@link Value} of {@link Direction} for this {@link Shulker}.
                             */
                            // @ts-ignore
                             direction(): org.spongepowered.api.data.value.mutable.Value;
                            /**
                             * Launches a new {@link EntityTargetingProjectile} from this {@link Shulker}.
                             */
                            // @ts-ignore
                             launchWithTarget(projectileClass: java.lang.Class, target: org.spongepowered.api.entity.Entity): java.util.Optional;
                        }
                    }
                }
            }
        }
    }
}
