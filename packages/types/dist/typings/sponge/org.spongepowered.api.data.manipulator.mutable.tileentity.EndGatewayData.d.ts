declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace tileentity {
                            // @ts-ignore
                            interface EndGatewayData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the {@link Value} for the exit portal location of
                                 * the {@link EndGateway}.
                                 */
                                // @ts-ignore
                                 exitPosition(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the {@link Value} for the "should use exact teleport location"
                                 * state of the {@link EndGateway}.
                                 */
                                // @ts-ignore
                                 exactTeleport(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the {@link Value} for the age of the {@link EndGateway}.
                                 */
                                // @ts-ignore
                                 age(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the {@link Value} for the teleport cooldown of the {@link EndGateway}.
                                 */
                                // @ts-ignore
                                 teleportCooldown(): org.spongepowered.api.data.value.mutable.Value;
                            }
                        }
                    }
                }
            }
        }
    }
}
