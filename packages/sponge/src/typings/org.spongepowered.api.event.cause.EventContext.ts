declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    // @ts-ignore
                     class EventContext {
                        /**
                         * Gets an empty context.
                         */
                        // @ts-ignore
                        public static empty(): org.spongepowered.api.event.cause.EventContext;
                        /**
                         * Creates a new {@link EventContext} from the given map of entries.
                         */
                        // @ts-ignore
                        public static of(entries: Map<any, any> /*java.util.Map*/): org.spongepowered.api.event.cause.EventContext;
                        /**
                         * Creates a new builder for creating an {@link EventContext}.
                         */
                        // @ts-ignore
                        public static builder(): org.spongepowered.api.event.cause.EventContext.Builder;
                        /**
                         * Gets the value corresponding to the given key from the context.
                         */
                        // @ts-ignore
                        public get(key: org.spongepowered.api.event.cause.EventContextKey): any;
                        /**
                         * Gets the value corresponding to the given key from the context.
                         * <p>If the key is not available, {@link NoSuchElementException} will be
                         * thrown.</p>
                         */
                        // @ts-ignore
                        public require(key: org.spongepowered.api.event.cause.EventContextKey): any;
                        /**
                         * Gets whether the provided {@link EventContextKey} is included in this
                         * context.
                         */
                        // @ts-ignore
                        public containsKey(key: org.spongepowered.api.event.cause.EventContextKey): boolean;
                        /**
                         * Gets all {@link EventContextKey}s present in this context.
                         */
                        // @ts-ignore
                        public keySet(): any[] /*java.util.Set*/;
                        /**
                         * Gets this event context as a {@link Map} of EventContextKeys to Objects.
                         */
                        // @ts-ignore
                        public asMap(): Map<any, any> /*java.util.Map*/;
                        // @ts-ignore
                        public equals(object: any): boolean;
                        // @ts-ignore
                        public hashCode(): number;
                        // @ts-ignore
                        public toString(): string;
                    }
                }
            }
        }
    }
}
