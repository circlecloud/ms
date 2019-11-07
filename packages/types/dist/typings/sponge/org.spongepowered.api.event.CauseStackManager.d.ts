declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                // @ts-ignore
                interface CauseStackManager {
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
                     * Pushes an object to the current cause stack which will associate it with
                     * all events through from api actions until it is popped off again.
                     */
                    // @ts-ignore
                     pushCause(obj: java.lang.Object): org.spongepowered.api.event.CauseStackManager;
                    /**
                     * Pops the most recently pushed cause object off of the stack and returns
                     * it.
                     */
                    // @ts-ignore
                     popCause(): java.lang.Object;
                    /**
                     * Pops the most recently <b>n</b> pushed cause objects off of the stack.
                     */
                    // @ts-ignore
                     popCauses(n: number): void;
                    /**
                     * Retrieves but does not remove the most recently pushed cause object.
                     */
                    // @ts-ignore
                     peekCause(): java.lang.Object;
                    /**
                     * Pushes a frame of the current cause stack and context state.
                     */
                    // @ts-ignore
                     pushCauseFrame(): org.spongepowered.api.event.CauseStackManager.StackFrame;
                    /**
                     * Replaces the current cause stack and context with the cause frame at the
                     * top of the frame stack.
                     * <p>The frame handle is required to ensure that frames are popped of in
                     * order and are not left in the stack. If an attempt is made to pop a frame
                     * which is not the head of the frame stack then an error will be thrown as
                     * this indicates that a frame was not popped properly.</p>
                     */
                    // @ts-ignore
                     popCauseFrame(handle: org.spongepowered.api.event.CauseStackManager.StackFrame): void;
                    /**
                     * Adds the given object to the current context under the given key.
                     */
                    // @ts-ignore
                     addContext(key: org.spongepowered.api.event.cause.EventContextKey, value: java.lang.Object): org.spongepowered.api.event.CauseStackManager;
                    /**
                     * Gets the context value with the given key.
                     */
                    // @ts-ignore
                     getContext(key: org.spongepowered.api.event.cause.EventContextKey): java.util.Optional;
                    /**
                     * Gets the context value with the given key.
                     * <p>If the key is not available, {@link NoSuchElementException} will be
                     * thrown.</p>
                     */
                    // @ts-ignore
                     requireContext(key: org.spongepowered.api.event.cause.EventContextKey): java.lang.Object;
                    /**
                     * Removes the given context key from the current context.
                     */
                    // @ts-ignore
                     removeContext(key: org.spongepowered.api.event.cause.EventContextKey): java.util.Optional;
                }
            }
        }
    }
}
