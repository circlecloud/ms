declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    namespace ChangeBlockEvent {
                        // @ts-ignore
                        interface Pre extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                            /**
                             * Represents a list of one or more {@link Location}'s where
                             * {@link BlockState} changes can occur.
                             * <p>Canceling this event will prevent block logic from running
                             * and also stop {@link BlockSnapshot}'s from being generated.</p>
                             * <p>Note: This event is not intended to always be fired before
                             * changing a {@link BlockState} but rather it is primarily used to
                             * prevent one or more {@link BlockState}'s from being changed.</p>
                             */
                            // @ts-ignore
                             getLocations(): java.util.List;
                        }
                    }
                }
            }
        }
    }
}
