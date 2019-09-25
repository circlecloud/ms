declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace impl {
                    // @ts-ignore
                    abstract class AbstractEvent implements org.spongepowered.api.event.Event {
                        constructor()
                        // @ts-ignore
                        public currentOrder: org.spongepowered.api.event.Order;
                        /**
                         * Called once all fields have been set by the generated
                         * constructor in a subclass.
                         * <p>This method should be used
                         * to initialize any fields that depend on parameters
                         * passed to the constructor.</p>
                         */
                        // @ts-ignore
                        protected init(): void;
                    }
                }
            }
        }
    }
}
