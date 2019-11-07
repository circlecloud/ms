// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            // @ts-ignore
             class HandlerList extends java.lang.Object {
                /**
                 * Create a new handler list and initialize using EventPriority.
                 * <p>
                 * The HandlerList is then added to meta-list for use in bakeAll()
                 */
                // @ts-ignore
                constructor()
                /**
                 * Bake all handler lists. Best used just after all normal event
                 * registration is complete, ie just after all plugins are loaded if
                 * you're using fevents in a plugin system.
                 */
                // @ts-ignore
                public static bakeAll(): void;
                /**
                 * Unregister all listeners from all handler lists.
                 */
                // @ts-ignore
                public static unregisterAll(): void;
                /**
                 * Unregister a specific plugin's listeners from all handler lists.
                 */
                // @ts-ignore
                public static unregisterAll(plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Unregister a specific listener from all handler lists.
                 */
                // @ts-ignore
                public static unregisterAll(listener: org.bukkit.event.Listener): void;
                /**
                 * Register a new listener in this handler list
                 */
                // @ts-ignore
                public register(listener: org.bukkit.plugin.RegisteredListener): void;
                /**
                 * Register a collection of new listeners in this handler list
                 */
                // @ts-ignore
                public registerAll(listeners: java.util.Collection): void;
                /**
                 * Remove a listener from a specific order slot
                 */
                // @ts-ignore
                public unregister(listener: org.bukkit.plugin.RegisteredListener): void;
                /**
                 * Remove a specific plugin's listeners from this handler
                 */
                // @ts-ignore
                public unregister(plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Remove a specific listener from this handler
                 */
                // @ts-ignore
                public unregister(listener: org.bukkit.event.Listener): void;
                /**
                 * Bake HashMap and ArrayLists to 2d array - does nothing if not necessary
                 */
                // @ts-ignore
                public bake(): void;
                /**
                 * Get the baked registered listeners associated with this handler list
                 */
                // @ts-ignore
                public getRegisteredListeners(): org.bukkit.plugin.RegisteredListener[];
                /**
                 * Get a specific plugin's registered listeners associated with this
                 * handler list
                 */
                // @ts-ignore
                public static getRegisteredListeners(plugin: org.bukkit.plugin.Plugin): java.util.ArrayList;
                /**
                 * Get a list of all handler lists for every event type
                 */
                // @ts-ignore
                public static getHandlerLists(): java.util.ArrayList;
            }
        }
    }
}
