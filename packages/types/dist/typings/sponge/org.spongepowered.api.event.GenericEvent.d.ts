declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                // @ts-ignore
                interface GenericEvent extends org.spongepowered.api.event.Event {
                    /**
                     * Gets the generic {@link TypeToken} used
                     * by this {@link Event}.
                     */
                    // @ts-ignore
                     getGenericType(): any;
                }
            }
        }
    }
}
