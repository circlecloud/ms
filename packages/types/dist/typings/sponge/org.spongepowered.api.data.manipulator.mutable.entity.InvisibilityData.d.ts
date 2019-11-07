// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface InvisibilityData extends org.spongepowered.api.data.manipulator.DataManipulator {
                                /**
                                 * Gets the {@link Value} of the "invisible" state of an {@link Entity}.
                                 * <p>Note that this is different from the {@link #vanish()} state as when an
                                 * {@link Entity} is "invisible", update packets are still sent to all clients
                                 * and the server.</p>
                                 */
                                // @ts-ignore
                                 invisible(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the {@link Value} of the "vanish" state of an {@link Entity}.
                                 * <p>The presence of a vanished entity will not be made known to a client;
                                 * no packets pertaining to this entity are sent. Client-side, this entity
                                 * will cease to exist. Server-side it may still be targeted by hostile
                                 * entities or collide with other entities.</p>
                                 * <p>Vanishing an {@link Entity} ridden by other entities (see
                                 * {@link PassengerData}) will cause problems.</p>
                                 */
                                // @ts-ignore
                                 vanish(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the {@link Value} of whether an {@link Entity} that is "vanished" will
                                 * be ignored for collision detection. The collision detection can affect
                                 * collisions with other {@link Entity entities}, blocks, etc.
                                 */
                                // @ts-ignore
                                 ignoresCollisionDetection(): org.spongepowered.api.data.value.mutable.Value;
                                /**
                                 * Gets the {@link Value} of whether an {@link Entity} that is "vanished" will
                                 * be ignored when other {@link Entity entities} are processing possible "targets"
                                 * for their AI.
                                 */
                                // @ts-ignore
                                 untargetable(): org.spongepowered.api.data.value.mutable.Value;
                            }
                        }
                    }
                }
            }
        }
    }
}
