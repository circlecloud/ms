declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                // @ts-ignore
                interface ShulkerBullet extends org.spongepowered.api.entity.projectile.EntityTargetingProjectile, org.spongepowered.api.entity.projectile.DamagingProjectile {
                    /**
                     * Gets a copy of the {@link DirectionalData} being used for this
                     * {@link ShulkerBullet} entity.
                     */
                    // @ts-ignore
                     getDirectionalData(): org.spongepowered.api.data.manipulator.mutable.block.DirectionalData;
                    /**
                     * Gets the {@link Value} for the current direction this
                     * {@link ShulkerBullet} is going to.
                     */
                    // @ts-ignore
                     direction(): org.spongepowered.api.data.value.mutable.Value;
                }
            }
        }
    }
}
