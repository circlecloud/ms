// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace MoveEntityEvent {
                        // @ts-ignore
                        interface Teleport extends org.spongepowered.api.event.entity.MoveEntityEvent {
                            /**
                             * Gets whether the entity teleporting will maintain its velocity
                             * after teleport.
                             */
                            // @ts-ignore
                             getKeepsVelocity(): boolean;
                            /**
                             * Sets whether the entity teleporting will maintain its velocity
                             * after teleport.
                             */
                            // @ts-ignore
                             setKeepsVelocity(keepsVelocity: boolean): void;
                            /**
                             * This method exists solely to provide backwards-compatibility with existing plugins
                             * using the old Teleport Event. It should not be called directly - instead,
                             * plugins should use {@link SpongeEventFactory#createMoveEntityEventTeleport(Cause, Transform, Transform, Entity, boolean)}
                             */
                            // @ts-ignore
                             createMoveEntityEventTeleport(cause: org.spongepowered.api.event.cause.Cause, fromTransform: org.spongepowered.api.entity.Transform, toTransform: org.spongepowered.api.entity.Transform, targetEntity: org.spongepowered.api.entity.Entity): org.spongepowered.api.event.entity.MoveEntityEvent.Teleport;
                        }
                    }
                }
            }
        }
    }
}
