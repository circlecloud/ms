// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace user {
                    // @ts-ignore
                    interface PardonUserEvent extends org.spongepowered.api.event.user.TargetUserEvent {
                        /**
                         * Gets the ban involved in this event.
                         */
                        // @ts-ignore
                         getBan(): org.spongepowered.api.util.ban.Ban.Profile;
                    }
                }
            }
        }
    }
}
