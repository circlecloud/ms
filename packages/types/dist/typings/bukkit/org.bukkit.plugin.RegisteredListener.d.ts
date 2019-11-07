// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace plugin {
            // @ts-ignore
             class RegisteredListener extends java.lang.Object {
                // @ts-ignore
                constructor(listener: org.bukkit.event.Listener, executor: org.bukkit.plugin.EventExecutor, priority: org.bukkit.event.EventPriority, plugin: org.bukkit.plugin.Plugin, ignoreCancelled: boolean)
                /**
                 * Gets the listener for this registration
                 */
                // @ts-ignore
                public getListener(): org.bukkit.event.Listener;
                /**
                 * Gets the plugin for this registration
                 */
                // @ts-ignore
                public getPlugin(): org.bukkit.plugin.Plugin;
                /**
                 * Gets the priority for this registration
                 */
                // @ts-ignore
                public getPriority(): org.bukkit.event.EventPriority;
                /**
                 * Calls the event executor
                 */
                // @ts-ignore
                public callEvent(event: org.bukkit.event.Event): void;
                /**
                 * Whether this listener accepts cancelled events
                 */
                // @ts-ignore
                public isIgnoringCancelled(): boolean;
            }
        }
    }
}
