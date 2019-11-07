// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace CauseStackManager {
                    // @ts-ignore
                    interface StackFrame {
                        /**
                         * Gets the current {@link Cause} object from the current cause stack.
                         */
                        // @ts-ignore
                         getCurrentCause(): org.spongepowered.api.event.cause.Cause;
                        /**
                         * Gets an {@link EventContext} object on the current contextual
                         * information.
                         */
                        // @ts-ignore
                         getCurrentContext(): org.spongepowered.api.event.cause.EventContext;
                        /**
                         * Pushes an object to the current cause stack which will associate
                         * it with all events through from api actions until it is
                         * popped off again.
                         */
                        // @ts-ignore
                         pushCause(obj: java.lang.Object): org.spongepowered.api.event.CauseStackManager.StackFrame;
                        /**
                         * Pops the most recently pushed cause object off of the stack and
                         * returns it.
                         */
                        // @ts-ignore
                         popCause(): java.lang.Object;
                        /**
                         * Adds the given object to the current context under the given key.
                         */
                        // @ts-ignore
                         addContext(key: org.spongepowered.api.event.cause.EventContextKey, value: java.lang.Object): org.spongepowered.api.event.CauseStackManager.StackFrame;
                        /**
                         * Removes the given context key from the current context.
                         */
                        // @ts-ignore
                         removeContext(key: org.spongepowered.api.event.cause.EventContextKey): java.util.Optional;
                        // @ts-ignore
                         close(): void;
                    }
                }
            }
        }
    }
}
