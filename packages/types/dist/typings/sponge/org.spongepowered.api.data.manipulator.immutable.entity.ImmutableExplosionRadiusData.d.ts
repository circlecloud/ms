// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            // @ts-ignore
                            interface ImmutableExplosionRadiusData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * The radius in blocks that the explosion will affect. This value may be
                                 * missing if the explosion radius is unknown such as when it is generated
                                 * randomly on detonation. Setting this value on such explosives will
                                 * override that behavior.
                                 */
                                // @ts-ignore
                                 explosionRadius(): org.spongepowered.api.data.value.immutable.ImmutableOptionalValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
