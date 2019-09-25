declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    namespace ExplosionEvent {
                        // @ts-ignore
                        interface Detonate extends org.spongepowered.api.event.world.ExplosionEvent, org.spongepowered.api.event.world.TargetWorldEvent, org.spongepowered.api.event.entity.AffectEntityEvent {
                            /**
                             * Gets the list of calculated affected locations for blocks that will
                             * be removed due to the explosion. Note that the list is mutable.
                             * However, adding new locations may cause unknown effects.
                             */
                            // @ts-ignore
                             getAffectedLocations(): any[] /*java.util.List*/;
                        }
                    }
                }
            }
        }
    }
}
