declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace data {
                    // @ts-ignore
                    interface ChangeDataHolderEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the {@link DataHolder} targeted in this event.
                         */
                        // @ts-ignore
                         getTargetHolder(): org.spongepowered.api.data.DataHolder;
                    }
                }
            }
        }
    }
}
