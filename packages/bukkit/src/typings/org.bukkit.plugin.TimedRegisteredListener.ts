declare namespace org {
    namespace bukkit {
        namespace plugin {
            // @ts-ignore
             class TimedRegisteredListener {
                constructor(pluginListener: org.bukkit.event.Listener, eventExecutor: org.bukkit.plugin.EventExecutor, eventPriority: org.bukkit.event.EventPriority, registeredPlugin: org.bukkit.plugin.Plugin, listenCancelled: boolean)
                public callEvent(event: org.bukkit.event.Event): void;
                /**
                 * Resets the call count and total time for this listener
                 */
                public reset(): void;
                /**
                 * Gets the total times this listener has been called
                 */
                public getCount(): number;
                /**
                 * Gets the total time calls to this listener have taken
                 */
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
                public getEventClass(): any;
                /**
                 * Gets whether this listener has handled multiple events, such that for
                 * some two events, <code>eventA.getClass() != eventB.getClass()</code>.
                 */
                public hasMultiple(): boolean;
            }
        }
    }
}
