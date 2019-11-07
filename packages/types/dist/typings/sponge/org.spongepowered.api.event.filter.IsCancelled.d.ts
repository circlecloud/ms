declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace filter {
                    // @ts-ignore
                    interface IsCancelled {
                        /**
                         * Gets the required cancellation state of the event for the annotated
                         * listener to be called.
                         */
                        // @ts-ignore
                         value(): org.spongepowered.api.util.Tristate;
                    }
                }
            }
        }
    }
}
