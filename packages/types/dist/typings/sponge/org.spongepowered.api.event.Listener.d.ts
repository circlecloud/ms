declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                // @ts-ignore
                interface Listener {
                    /**
                     * The order this listener should be called in relation to other listeners
                     * in the {@link EventManager}.
                     */
                    // @ts-ignore
                     order(): org.spongepowered.api.event.Order;
                    /**
                     * Whether this listener should be called before any other server mods, such
                     * as Forge mods. All Sponge event listeners are called after mods, unless
                     * they specify the {@code #beforeModifications()} flag to be true.
                     */
                    // @ts-ignore
                     beforeModifications(): boolean;
                }
            }
        }
    }
}
