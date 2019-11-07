declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace user {
                    // @ts-ignore
                    interface TargetUserEvent extends org.spongepowered.api.event.Event {
                        /**
                         * Gets the targeted {@link User}.
                         */
                        // @ts-ignore
                         getTargetUser(): org.spongepowered.api.entity.living.player.User;
                    }
                }
            }
        }
    }
}
