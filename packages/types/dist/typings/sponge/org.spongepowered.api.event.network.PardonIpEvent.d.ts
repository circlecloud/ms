// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace network {
                    // @ts-ignore
                    interface PardonIpEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the ban pardoned in this event.
                         */
                        // @ts-ignore
                         getBan(): org.spongepowered.api.util.ban.Ban.Ip;
                    }
                }
            }
        }
    }
}
