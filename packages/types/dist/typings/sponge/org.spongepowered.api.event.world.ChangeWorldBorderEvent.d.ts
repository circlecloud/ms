declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    // @ts-ignore
                    interface ChangeWorldBorderEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the border that was previously used as an {@link Optional}. There
                         * may be no border set for the target (especially, if it is a player), in
                         * which case, an empty {@code Optional} is returned.
                         */
                        // @ts-ignore
                         getPreviousBorder(): java.util.Optional;
                        /**
                         * Gets the border that will be used as an {@link Optional}. For some
                         * targets, the border may be unset and therefore they may not always have a
                         * border. It is in these instances that an empty {@code Optional} is
                         * returned.
                         */
                        // @ts-ignore
                         getNewBorder(): java.util.Optional;
                    }
                }
            }
        }
    }
}
