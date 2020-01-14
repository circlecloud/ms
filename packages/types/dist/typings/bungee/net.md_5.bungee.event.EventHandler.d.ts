declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace event {
                // @ts-ignore
                interface EventHandler {
                    /**
                     * Define the priority of the event handler.
                     * <p>
                     * Event handlers are called in order of priority:
                     * <ol>
                     * <li>LOWEST</li>
                     * <li>LOW</li>
                     * <li>NORMAL</li>
                     * <li>HIGH</li>
                     * <li>HIGHEST</li>
                     * </ol>
                     */
                    // @ts-ignore
                     priority(): number;
                }
            }
        }
    }
}
