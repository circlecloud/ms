declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                // @ts-ignore
                interface Event {
                    /**
                     * Gets the cause for the event.  The Cause of the event
                     * is an object which implements the Iterable interface.
                     * So, when investigating the Cause of the event a common
                     * idiom is to use operations (functions) on the result
                     * of getCause as follows:
                     * Use-case: Getting the Player (if any) responsible:
                     * {@code Optional<Player> optPlayer = event.getCause().first(Player.class);}
                     */
                    // @ts-ignore
                     getCause(): org.spongepowered.api.event.cause.Cause;
                    /**
                     * Gets the source of the event (the first object in the cause).
                     */
                    // @ts-ignore
                     getSource(): any;
                    /**
                     * Gets the context of the event.
                     */
                    // @ts-ignore
                     getContext(): org.spongepowered.api.event.cause.EventContext;
                }
            }
        }
    }
}
