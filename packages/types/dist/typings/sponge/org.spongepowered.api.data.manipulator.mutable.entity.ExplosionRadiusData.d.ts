declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface ExplosionRadiusData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * The radius in blocks that the explosion will affect. This value may be
                                 * missing if the explosion radius is unknown such as when it is generated
                                 * randomly on detonation. Setting this value on such explosives will
                                 * override that behavior.
                                 */
                                // @ts-ignore
                                 explosionRadius(): org.spongepowered.api.data.value.mutable.OptionalValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
