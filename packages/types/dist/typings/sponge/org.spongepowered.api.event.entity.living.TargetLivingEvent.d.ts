declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace living {
                        // @ts-ignore
                        interface TargetLivingEvent extends org.spongepowered.api.event.entity.TargetEntityEvent {
                            // @ts-ignore
                             getTargetEntity(): org.spongepowered.api.entity.living.Living;
                        }
                    }
                }
            }
        }
    }
}
