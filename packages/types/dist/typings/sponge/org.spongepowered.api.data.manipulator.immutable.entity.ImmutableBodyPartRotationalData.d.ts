declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            // @ts-ignore
                            interface ImmutableBodyPartRotationalData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * Gets the {@link ImmutableMapValue} of {@link BodyPart}s to
                                 * {@link Vector3d} rotations.
                                 */
                                // @ts-ignore
                                 partRotation(): org.spongepowered.api.data.value.immutable.ImmutableMapValue;
                                /**
                                 * Gets the individual {@link ImmutableValue} of the {@link Vector3d}
                                 * rotation for {@link BodyParts#HEAD}.
                                 */
                                // @ts-ignore
                                 headDirection(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the individual {@link ImmutableValue} of the {@link Vector3d}
                                 * rotation for {@link BodyParts#CHEST}.
                                 */
                                // @ts-ignore
                                 bodyRotation(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the individual {@link ImmutableValue} of the {@link Vector3d}
                                 * rotation for {@link BodyParts#LEFT_ARM}.
                                 */
                                // @ts-ignore
                                 leftArmDirection(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the individual {@link ImmutableValue} of the {@link Vector3d}
                                 * rotation for {@link BodyParts#RIGHT_ARM}.
                                 */
                                // @ts-ignore
                                 rightArmDirection(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the individual {@link ImmutableValue} of the {@link Vector3d}
                                 * rotation for {@link BodyParts#LEFT_LEG}.
                                 */
                                // @ts-ignore
                                 leftLegDirection(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the individual {@link ImmutableValue} of the {@link Vector3d}
                                 * rotation for {@link BodyParts#RIGHT_LEG}.
                                 */
                                // @ts-ignore
                                 rightLegDirection(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
