declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                // @ts-ignore
                interface EventManager {
                    /**
                     * Registers {@link Event} methods annotated with @{@link Listener} in the
                     * specified object.
                     * <p>Only methods that are public will be registered and the class must be
                     * public as well.</p>
                     */
                    // @ts-ignore
                     registerListeners(plugin: any, obj: any): void;
                    /**
                     * Registers an event listener for a specific event class.
                     * <p>Normally, the annotation-based way in
                     * {@link #registerListeners(Object, Object)} should be preferred over this way. This
                     * method exists primarily to support dynamic event registration like needed
                     * in scripting plugins.</p>
                     */
                    // @ts-ignore
                     registerListener(plugin: any, eventClass: any, listener: org.spongepowered.api.event.EventListener): void;
                    /**
                     * Registers an event listener for a specific event {@link TypeToken}.
                     * <p>Normally, the annotation-based way in
                     * {@link #registerListeners(Object, Object)} should be preferred over this way. This
                     * method exists primarily to support dynamic event registration like needed
                     * in scripting plugins.</p>
                     */
                    // @ts-ignore
                     registerListener(plugin: any, eventType: any, listener: org.spongepowered.api.event.EventListener): void;
                    /**
                     * Registers an event listener with the specified order for a specific event
                     * class.
                     * <p>Normally, the annotation-based way in
                     * {@link #registerListeners(Object, Object)} should be preferred over this way. This
                     * method exists primarily to support dynamic event registration like needed
                     * in scripting plugins.</p>
                     */
                    // @ts-ignore
                     registerListener(plugin: any, eventClass: any, order: org.spongepowered.api.event.Order, listener: org.spongepowered.api.event.EventListener): void;
                    /**
                     * Registers an event listener with the specified order for a specific event
                     * {@link TypeToken}.
                     * <p>Normally, the annotation-based way in
                     * {@link #registerListeners(Object, Object)} should be preferred over this way. This
                     * method exists primarily to support dynamic event registration like needed
                     * in scripting plugins.</p>
                     */
                    // @ts-ignore
                     registerListener(plugin: any, eventType: any, order: org.spongepowered.api.event.Order, listener: org.spongepowered.api.event.EventListener): void;
                    /**
                     * Registers an event listener with the specified order for a specific event
                     * class.
                     * <p>Normally, the annotation-based way in
                     * {@link #registerListeners(Object, Object)} should be preferred over this way. This
                     * method exists primarily to support dynamic event registration like needed
                     * in scripting plugins.</p>
                     */
                    // @ts-ignore
                     registerListener(plugin: any, eventClass: any, order: org.spongepowered.api.event.Order, beforeModifications: boolean, listener: org.spongepowered.api.event.EventListener): void;
                    /**
                     * Registers an event listener with the specified order for a specific event
                     * class.
                     * <p>Normally, the annotation-based way in
                     * {@link #registerListeners(Object, Object)} should be preferred over this way. This
                     * method exists primarily to support dynamic event registration like needed
                     * in scripting plugins.</p>
                     */
                    // @ts-ignore
                     registerListener(plugin: any, eventType: any, order: org.spongepowered.api.event.Order, beforeModifications: boolean, listener: org.spongepowered.api.event.EventListener): void;
                    /**
                     * Un-registers an object from receiving {@link Event}s.
                     */
                    // @ts-ignore
                     unregisterListeners(obj: any): void;
                    /**
                     * Un-registers all event listeners of a plugin.
                     */
                    // @ts-ignore
                     unregisterPluginListeners(plugin: any): void;
                    /**
                     * Calls a {@link Event} to all listeners that listen to it.
                     */
                    // @ts-ignore
                     post(event: org.spongepowered.api.event.Event): boolean;
                }
            }
        }
    }
}
