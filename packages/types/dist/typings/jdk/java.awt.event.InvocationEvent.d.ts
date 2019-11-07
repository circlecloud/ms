declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
             class InvocationEvent extends java.awt.AWTEvent {
                /**
                 * Constructs an <code>InvocationEvent</code> with the specified
                 * source which will execute the runnable's <code>run</code>
                 * method when dispatched.
                 * <p>This is a convenience constructor.  An invocation of the form
                 * <tt>InvocationEvent(source, runnable)</tt>
                 * behaves in exactly the same way as the invocation of
                 * <tt>{@link #InvocationEvent(Object, Runnable, Object, boolean) InvocationEvent}(source, runnable, null, false)</tt>.
                 * <p> This method throws an <code>IllegalArgumentException</code>
                 * if <code>source</code> is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.lang.Object, runnable: java.lang.Runnable)
                /**
                 * Constructs an <code>InvocationEvent</code> with the specified
                 * source which will execute the runnable's <code>run</code>
                 * method when dispatched.  If notifier is non-<code>null</code>,
                 * <code>notifyAll()</code> will be called on it
                 * immediately after <code>run</code> has returned or thrown an exception.
                 * <p>An invocation of the form <tt>InvocationEvent(source,
                 * runnable, notifier, catchThrowables)</tt>
                 * behaves in exactly the same way as the invocation of
                 * <tt>{@link #InvocationEvent(Object, int, Runnable, Object, boolean) InvocationEvent}(source, InvocationEvent.INVOCATION_DEFAULT, runnable, notifier, catchThrowables)</tt>.
                 * <p>This method throws an <code>IllegalArgumentException</code>
                 * if <code>source</code> is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.lang.Object, runnable: java.lang.Runnable, notifier: java.lang.Object, catchThrowables: boolean)
                /**
                 * Constructs an <code>InvocationEvent</code> with the specified
                 * source which will execute the runnable's <code>run</code>
                 * method when dispatched.  If listener is non-<code>null</code>,
                 * <code>listener.run()</code> will be called immediately after
                 * <code>run</code> has returned, thrown an exception or the event
                 * was disposed.
                 * <p>This method throws an <code>IllegalArgumentException</code>
                 * if <code>source</code> is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.lang.Object, runnable: java.lang.Runnable, listener: java.lang.Runnable, catchThrowables: boolean)
                /**
                 * Constructs an <code>InvocationEvent</code> with the specified
                 * source and ID which will execute the runnable's <code>run</code>
                 * method when dispatched.  If notifier is non-<code>null</code>,
                 * <code>notifyAll</code> will be called on it immediately after
                 * <code>run</code> has returned or thrown an exception.
                 * <p>This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.lang.Object, id: number, runnable: java.lang.Runnable, notifier: java.lang.Object, catchThrowables: boolean)
                // @ts-ignore
                public static INVOCATION_FIRST: number;
                // @ts-ignore
                public static INVOCATION_DEFAULT: number;
                // @ts-ignore
                public static INVOCATION_LAST: number;
                // @ts-ignore
                protected runnable: java.lang.Runnable;
                // @ts-ignore
                protected notifier: java.lang.Object;
                // @ts-ignore
                protected catchExceptions: boolean;
                /**
                 * Executes the Runnable's <code>run()</code> method and notifies the
                 * notifier (if any) when <code>run()</code> has returned or thrown an exception.
                 */
                // @ts-ignore
                public dispatch(): void;
                /**
                 * Returns any Exception caught while executing the Runnable's <code>run()
                 * </code> method.
                 */
                // @ts-ignore
                public getException(): java.lang.Exception;
                /**
                 * Returns any Throwable caught while executing the Runnable's <code>run()
                 * </code> method.
                 */
                // @ts-ignore
                public getThrowable(): java.lang.Throwable;
                /**
                 * Returns the timestamp of when this event occurred.
                 */
                // @ts-ignore
                public getWhen(): number;
                /**
                 * Returns {@code true} if the event is dispatched or any exception is
                 * thrown while dispatching, {@code false} otherwise. The method should
                 * be called by a waiting thread that calls the {@code notifier.wait()} method.
                 * Since spurious wakeups are possible (as explained in {@link Object#wait()}),
                 * this method should be used in a waiting loop to ensure that the event
                 * got dispatched:
                 * <pre>
                 * while (!event.isDispatched()) {
                 * notifier.wait();
                 * }
                 * </pre>
                 * If the waiting thread wakes up without dispatching the event,
                 * the {@code isDispatched()} method returns {@code false}, and
                 * the {@code while} loop executes once more, thus, causing
                 * the awakened thread to revert to the waiting mode.
                 * <p>
                 * If the {@code notifier.notifyAll()} happens before the waiting thread
                 * enters the {@code notifier.wait()} method, the {@code while} loop ensures
                 * that the waiting thread will not enter the {@code notifier.wait()} method.
                 * Otherwise, there is no guarantee that the waiting thread will ever be woken
                 * from the wait.
                 */
                // @ts-ignore
                public isDispatched(): boolean;
                /**
                 * Returns a parameter string identifying this event.
                 * This method is useful for event-logging and for debugging.
                 */
                // @ts-ignore
                public paramString(): string;
            }
        }
    }
}
