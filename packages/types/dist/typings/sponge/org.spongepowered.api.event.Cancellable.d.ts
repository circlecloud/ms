declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                // @ts-ignore
                interface Cancellable {
                    /**
                     * Gets if the {@link Event} has been cancelled.
                     */
                    // @ts-ignore
                     isCancelled(): boolean;
                    /**
                     * Sets the cancelled state of the {@link Event}.
                     */
                    // @ts-ignore
                     setCancelled(cancel: boolean): void;
                }
            }
        }
    }
}
