declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace projectile {
                    // @ts-ignore
                    interface EntityTargetingProjectile extends org.spongepowered.api.entity.projectile.Projectile {
                        /**
                         * Gets the targeted entity data for this {@link EntityTargetingProjectile}.
                         * <p>The targeted entity data defines which entity this projectile will target.</p>
                         */
                        // @ts-ignore
                         getTargetData(): org.spongepowered.api.data.manipulator.mutable.entity.TargetedEntityData;
                        /**
                         * Gets the entity this projectile will target.
                         */
                        // @ts-ignore
                         target(): org.spongepowered.api.data.value.mutable.Value;
                    }
                }
            }
        }
    }
}
