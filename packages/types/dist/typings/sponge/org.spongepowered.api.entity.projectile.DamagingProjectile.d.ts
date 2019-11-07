declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace projectile {
                    // @ts-ignore
                    interface DamagingProjectile extends org.spongepowered.api.entity.projectile.Projectile {
                        /**
                         * Gets the damaging data for this {@link DamagingProjectile}.
                         * <p>The damaging data defines how much damage the projectile will deal
                         * upon hitting an {@link Entity}, before the explosion.</p>
                         */
                        // @ts-ignore
                         getDamagingData(): org.spongepowered.api.data.manipulator.mutable.entity.DamagingData;
                        /**
                         * Gets the damage this projectile will deal to a {@link Living}
                         * if hit.
                         */
                        // @ts-ignore
                         damage(): org.spongepowered.api.data.value.mutable.MutableBoundedValue;
                        /**
                         * Gets the {@link MapValue} for representing the custom damage values to
                         * use if the owner strikes an entity of that type.
                         * <p>Note that in events, the damage defined for the provided
                         * {@link EntityType} will take priority over the "default" damage as
                         * defined from {@link #damage()}.</p>
                         */
                        // @ts-ignore
                         damageForEntity(): org.spongepowered.api.data.value.mutable.MapValue;
                    }
                }
            }
        }
    }
}
