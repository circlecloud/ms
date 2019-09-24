declare namespace org {
    namespace bukkit {
        namespace event {
            // @ts-ignore
             class HandlerList {
                /**
                 * Create a new handler list and initialize using EventPriority.
                 * <p>
                 * The HandlerList is then added to meta-list for use in bakeAll()
                 */
                constructor()
                /**
                 * Bake all handler lists. Best used just after all normal event
                 * registration is complete, ie just after all plugins are loaded if
                 * you're using fevents in a plugin system.
                 */
                public static bakeAll(): void;
                /**
                 * Unregister all listeners from all handler lists.
                 */
                public static unregisterAll(): void;
                /**
                 * Unregister a specific plugin's listeners from all handler lists.
                 */
                public static unregisterAll(plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Unregister a specific listener from all handler lists.
                 */
                public static unregisterAll(listener: org.bukkit.event.Listener): void;
                /**
                 * Register a new listener in this handler list
                 */
                public register(listener: org.bukkit.plugin.RegisteredListener): void;
                /**
                 * Register a collection of new listeners in this handler list
                 */
                public registerAll(listeners: any[] /*java.util.Collection*/): void;
                /**
                 * Remove a listener from a specific order slot
                 */
                public unregister(listener: org.bukkit.plugin.RegisteredListener): void;
                /**
                 * Remove a specific plugin's listeners from this handler
                 */
                public unregister(plugin: org.bukkit.plugin.Plugin): void;
                /**
                 * Remove a specific listener from this handler
                 */
                public unregister(listener: org.bukkit.event.Listener): void;
                /**
                 * Bake HashMap and ArrayLists to 2d array - does nothing if not necessary
                 */
                public bake(): void;
                /**
                 * Get the baked registered listeners associated with this handler list
                 */
                public getRegisteredListeners(): org.bukkit.plugin.RegisteredListener[];
                /**
                 * Get a specific plugin's registered listeners associated with this
                 * handler list
                 */
                public static getRegisteredListeners(plugin: org.bukkit.plugin.Plugin): any;
                /**
                 * Get a list of all handler lists for every event type
                 */
                public static getHandlerLists(): any;
            }
        }
    }
}
