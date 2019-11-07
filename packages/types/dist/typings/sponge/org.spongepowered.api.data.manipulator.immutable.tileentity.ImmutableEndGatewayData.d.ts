declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace tileentity {
                            // @ts-ignore
                            interface ImmutableEndGatewayData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * Gets the {@link ImmutableValue} for the exit portal location of
                                 * the {@link EndGateway}.
                                 */
                                // @ts-ignore
                                 exitPortal(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the {@link ImmutableValue} for the "should use exact teleport
                                 * location" state of the {@link EndGateway}.
                                 */
                                // @ts-ignore
                                 exactTeleport(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the {@link ImmutableValue} for the age of the {@link EndGateway}.
                                 */
                                // @ts-ignore
                                 age(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the {@link ImmutableValue} for the teleport cooldown of the
                                 * {@link EndGateway}.
                                 */
                                // @ts-ignore
                                 teleportCooldown(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
