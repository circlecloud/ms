// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface BodyPartRotationalData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the {@link MapValue} of {@link BodyPart}s to {@link Vector3d}
                                 * rotations.
                                 */
                                // @ts-ignore
                                 partRotation(): org.spongepowered.api.data.value.mutable.MapValue;
                                /**
                                 * Gets the direction the headpiece is aiming at.
                                 */
                                // @ts-ignore
                                 headDirection(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the direction the body is aiming at.
                                 */
                                // @ts-ignore
                                 bodyRotation(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the direction the left arm is aiming at.
                                 */
                                // @ts-ignore
                                 leftArmDirection(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the direction the right arm is aiming at.
                                 */
                                // @ts-ignore
                                 rightArmDirection(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the direction the left leg is aiming at.
                                 */
                                // @ts-ignore
                                 leftLegDirection(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the direction the right leg is aiming at.
                                 */
                                // @ts-ignore
                                 rightLegDirection(): org.spongepowered.api.data.value.mutable.Value;
                            }
                        }
                    }
                }
            }
        }
    }
}
