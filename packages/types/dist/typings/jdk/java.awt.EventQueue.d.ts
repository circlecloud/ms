declare namespace java {
    namespace awt {
        // @ts-ignore
         class EventQueue extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Posts a 1.1-style event to the <code>EventQueue</code>.
             * If there is an existing event on the queue with the same ID
             * and event source, the source <code>Component</code>'s
             * <code>coalesceEvents</code> method will be called.
             */
            // @ts-ignore
            public postEvent(theEvent: java.awt.AWTEvent): void;
            /**
             * Removes an event from the <code>EventQueue</code> and
             * returns it.  This method will block until an event has
             * been posted by another thread.
             */
            // @ts-ignore
            public getNextEvent(): java.awt.AWTEvent;
            /**
             * Returns the first event on the <code>EventQueue</code>
             * without removing it.
             */
            // @ts-ignore
            public peekEvent(): java.awt.AWTEvent;
            /**
             * Returns the first event with the specified id, if any.
             */
            // @ts-ignore
            public peekEvent(id: number): java.awt.AWTEvent;
            /**
             * Dispatches an event. The manner in which the event is
             * dispatched depends upon the type of the event and the
             * type of the event's source object:
             * <table border=1 summary="Event types, source types, and dispatch methods">
             * <tr>
             * <th>Event Type</th>
             * <th>Source Type</th>
             * <th>Dispatched To</th>
             * </tr>
             * <tr>
             * <td>ActiveEvent</td>
             * <td>Any</td>
             * <td>event.dispatch()</td>
             * </tr>
             * <tr>
             * <td>Other</td>
             * <td>Component</td>
             * <td>source.dispatchEvent(AWTEvent)</td>
             * </tr>
             * <tr>
             * <td>Other</td>
             * <td>MenuComponent</td>
             * <td>source.dispatchEvent(AWTEvent)</td>
             * </tr>
             * <tr>
             * <td>Other</td>
             * <td>Other</td>
             * <td>No action (ignored)</td>
             * </tr>
             * </table>
             * <p>
             */
            // @ts-ignore
            protected dispatchEvent(event: java.awt.AWTEvent): void;
            /**
             * Returns the timestamp of the most recent event that had a timestamp, and
             * that was dispatched from the <code>EventQueue</code> associated with the
             * calling thread. If an event with a timestamp is currently being
             * dispatched, its timestamp will be returned. If no events have yet
             * been dispatched, the EventQueue's initialization time will be
             * returned instead.In the current version of
             * the JDK, only <code>InputEvent</code>s,
             * <code>ActionEvent</code>s, and <code>InvocationEvent</code>s have
             * timestamps; however, future versions of the JDK may add timestamps to
             * additional event types. Note that this method should only be invoked
             * from an application's {@link #isDispatchThread event dispatching thread}.
             * If this method is
             * invoked from another thread, the current system time (as reported by
             * <code>System.currentTimeMillis()</code>) will be returned instead.
             */
            // @ts-ignore
            public static getMostRecentEventTime(): number;
            /**
             * Returns the the event currently being dispatched by the
             * <code>EventQueue</code> associated with the calling thread. This is
             * useful if a method needs access to the event, but was not designed to
             * receive a reference to it as an argument. Note that this method should
             * only be invoked from an application's event dispatching thread. If this
             * method is invoked from another thread, null will be returned.
             */
            // @ts-ignore
            public static getCurrentEvent(): java.awt.AWTEvent;
            /**
             * Replaces the existing <code>EventQueue</code> with the specified one.
             * Any pending events are transferred to the new <code>EventQueue</code>
             * for processing by it.
             */
            // @ts-ignore
            public push(newEventQueue: java.awt.EventQueue): void;
            /**
             * Stops dispatching events using this <code>EventQueue</code>.
             * Any pending events are transferred to the previous
             * <code>EventQueue</code> for processing.
             * <p>
             * Warning: To avoid deadlock, do not declare this method
             * synchronized in a subclass.
             */
            // @ts-ignore
            protected pop(): void;
            /**
             * Creates a new {@code secondary loop} associated with this
             * event queue. Use the {@link SecondaryLoop#enter} and
             * {@link SecondaryLoop#exit} methods to start and stop the
             * event loop and dispatch the events from this queue.
             */
            // @ts-ignore
            public createSecondaryLoop(): java.awt.SecondaryLoop;
            /**
             * Returns true if the calling thread is
             * {@link Toolkit#getSystemEventQueue the current AWT EventQueue}'s
             * dispatch thread. Use this method to ensure that a particular
             * task is being executed (or not being) there.
             * <p>
             * Note: use the {@link #invokeLater} or {@link #invokeAndWait}
             * methods to execute a task in
             * {@link Toolkit#getSystemEventQueue the current AWT EventQueue}'s
             * dispatch thread.
             * <p>
             */
            // @ts-ignore
            public static isDispatchThread(): boolean;
            /**
             * Causes <code>runnable</code> to have its <code>run</code>
             * method called in the {@link #isDispatchThread dispatch thread} of
             * {@link Toolkit#getSystemEventQueue the system EventQueue}.
             * This will happen after all pending events are processed.
             */
            // @ts-ignore
            public static invokeLater(runnable: java.lang.Runnable): void;
            /**
             * Causes <code>runnable</code> to have its <code>run</code>
             * method called in the {@link #isDispatchThread dispatch thread} of
             * {@link Toolkit#getSystemEventQueue the system EventQueue}.
             * This will happen after all pending events are processed.
             * The call blocks until this has happened.  This method
             * will throw an Error if called from the
             * {@link #isDispatchThread event dispatcher thread}.
             */
            // @ts-ignore
            public static invokeAndWait(runnable: java.lang.Runnable): void;
        }
    }
}
