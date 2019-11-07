declare namespace java {
    namespace nio {
        namespace file {
            namespace WatchEvent {
                // @ts-ignore
                interface Kind {
                    /**
                     * Returns the name of the event kind.
                     */
                    // @ts-ignore
                     name(): string;
                    /**
                     * Returns the type of the {@link WatchEvent#context context} value.
                     */
                    // @ts-ignore
                     type(): java.lang.Class;
                }
            }
        }
    }
}
