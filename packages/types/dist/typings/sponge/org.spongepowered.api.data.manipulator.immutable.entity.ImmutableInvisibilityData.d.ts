// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            // @ts-ignore
                            interface ImmutableInvisibilityData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator {
                                /**
                                 * Gets the {@link ImmutableValue} of the "invisible" state of an
                                 * {@link Entity}.
                                 * <p>Note that this is different from the {@link #vanish()} state as when an
                                 * {@link Entity} is "invisible", update packets are still sent to all clients
                                 * and the server. Likewise, no </p>
                                 */
                                // @ts-ignore
                                 invisible(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the {@link ImmutableValue} of the "vanish" state of an
                                 * {@link Entity}.
                                 */
                                // @ts-ignore
                                 vanish(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the {@link Value} of whether an {@link Entity} that is "vanished" will
                                 * be ignored for collision detection. The collision detection can affect
                                 * collisions with other {@link Entity entities}, blocks, etc.
                                 */
                                // @ts-ignore
                                 ignoresCollisionDetection(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                                /**
                                 * Gets the {@link Value} of whether an {@link Entity} that is "vanished" will
                                 * be ignored when other {@link Entity entities} are processing possible "targets"
                                 * for their AI.
                                 */
                                // @ts-ignore
                                 untargetable(): org.spongepowered.api.data.value.immutable.ImmutableValue;
                            }
                        }
                    }
                }
            }
        }
    }
}
