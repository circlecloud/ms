// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace explosive {
                    // @ts-ignore
                    interface Explosive extends org.spongepowered.api.entity.Entity {
                        /**
                         * Returns the {@link ExplosionRadiusData} for this explosive.
                         */
                        // @ts-ignore
                         getExplosionRadiusData(): org.spongepowered.api.data.manipulator.mutable.entity.ExplosionRadiusData;
                        /**
                         * The radius in blocks that the explosion will affect. This value may be
                         * missing if the explosion radius is unknown such as when it is generated
                         * randomly on detonation. Setting this value on such explosives will
                         * override that behavior.
                         */
                        // @ts-ignore
                         explosionRadius(): org.spongepowered.api.data.value.mutable.OptionalValue;
                        /**
                         * Detonates this explosive as soon as possible.
                         */
                        // @ts-ignore
                         detonate(): void;
                    }
                }
            }
        }
    }
}
