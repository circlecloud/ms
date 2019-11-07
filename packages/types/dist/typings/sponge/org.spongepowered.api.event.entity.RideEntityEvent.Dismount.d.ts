declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace RideEntityEvent {
                        // @ts-ignore
                        interface Dismount extends org.spongepowered.api.event.entity.RideEntityEvent {
                            /**
                             * Gets the {@link DismountType} when entity is dismounted.
                             */
                            // @ts-ignore
                             getDismountType(): org.spongepowered.api.event.cause.entity.dismount.DismountType;
                        }
                    }
                }
            }
        }
    }
}
