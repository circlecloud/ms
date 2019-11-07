declare namespace org {
    namespace bukkit {
        namespace plugin {
            // @ts-ignore
             class TimedRegisteredListener extends org.bukkit.plugin.RegisteredListener {
                // @ts-ignore
                constructor(pluginListener: org.bukkit.event.Listener, eventExecutor: org.bukkit.plugin.EventExecutor, eventPriority: org.bukkit.event.EventPriority, registeredPlugin: org.bukkit.plugin.Plugin, listenCancelled: boolean)
                // @ts-ignore
                public callEvent(event: org.bukkit.event.Event): void;
                /**
                 * Resets the call count and total time for this listener
                 */
                // @ts-ignore
                public reset(): void;
                /**
                 * Gets the total times this listener has been called
                 */
                // @ts-ignore
                public getCount(): number;
                /**
                 * Gets the total time calls to this listener have taken
                 */
                // @ts-ignore
                public getTotalTime(): number;
                /**
                 * Gets the class of the events this listener handled. If it handled
                 * multiple classes of event, the closest shared superclass will be
                 * returned, such that for any event this listener has handled,
                 * <code>this.getEventClass().isAssignableFrom(event.getClass())</code>
                 * and no class <code>this.getEventClass().isAssignableFrom(clazz)
                 * {@literal && this.getEventClass() != clazz &&}
                 * event.getClass().isAssignableFrom(clazz)</code> for all handled events.
                 */
                // @ts-ignore
                public getEventClass(): java.lang.Class;
                /**
                 * Gets whether this listener has handled multiple events, such that for
                 * some two events, <code>eventA.getClass() != eventB.getClass()</code>.
                 */
                // @ts-ignore
                public hasMultiple(): boolean;
            }
        }
    }
}
