declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace projectile {
                    // @ts-ignore
                    interface EyeOfEnder extends org.spongepowered.api.entity.projectile.Projectile {
                        /**
                         * Gets a copy of the {@link TargetedLocationData} this {@link EyeOfEnder}
                         * is "flying" towards.
                         */
                        // @ts-ignore
                         getTargetLocationData(): org.spongepowered.api.data.manipulator.mutable.TargetedLocationData;
                        /**
                         * Gets the {@link Value} for the targeted {@link Location}.
                         */
                        // @ts-ignore
                         target(): org.spongepowered.api.data.value.mutable.Value;
                    }
                }
            }
        }
    }
}
