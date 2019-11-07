declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    // @ts-ignore
                    interface ConstructPortalEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the position location of a portal.
                         */
                        // @ts-ignore
                         getPortalLocation(): org.spongepowered.api.world.Location;
                    }
                }
            }
        }
    }
}
