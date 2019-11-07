declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace action {
                    // @ts-ignore
                    interface InteractEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the point of interaction where the interaction occurred as
                         * a {@link Vector3d}.
                         */
                        // @ts-ignore
                         getInteractionPoint(): java.util.Optional;
                    }
                }
            }
        }
    }
}
