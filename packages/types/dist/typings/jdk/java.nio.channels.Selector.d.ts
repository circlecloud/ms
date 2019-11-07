declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
            abstract class Selector extends java.lang.Object {
                /**
                 * Initializes a new instance of this class.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Opens a selector.
                 * <p> The new selector is created by invoking the {@link
                 * java.nio.channels.spi.SelectorProvider#openSelector openSelector} method
                 * of the system-wide default {@link
                 * java.nio.channels.spi.SelectorProvider} object.  </p>
                 */
                // @ts-ignore
                public static open(): java.nio.channels.Selector;
                /**
                 * Tells whether or not this selector is open.
                 */
                // @ts-ignore
                public abstract isOpen(): boolean;
                /**
                 * Returns the provider that created this channel.
                 */
                // @ts-ignore
                public abstract provider(): java.nio.channels.spi.SelectorProvider;
                /**
                 * Returns this selector's key set.
                 * <p> The key set is not directly modifiable.  A key is removed only after
                 * it has been cancelled and its channel has been deregistered.  Any
                 * attempt to modify the key set will cause an {@link
                 * UnsupportedOperationException} to be thrown.
                 * <p> The key set is <a href="#ksc">not thread-safe</a>. </p>
                 */
                // @ts-ignore
                public abstract keys(): java.util.Set;
                /**
                 * Returns this selector's selected-key set.
                 * <p> Keys may be removed from, but not directly added to, the
                 * selected-key set.  Any attempt to add an object to the key set will
                 * cause an {@link UnsupportedOperationException} to be thrown.
                 * <p> The selected-key set is <a href="#ksc">not thread-safe</a>. </p>
                 */
                // @ts-ignore
                public abstract selectedKeys(): java.util.Set;
                /**
                 * Selects a set of keys whose corresponding channels are ready for I/O
                 * operations.
                 * <p> This method performs a non-blocking <a href="#selop">selection
                 * operation</a>.  If no channels have become selectable since the previous
                 * selection operation then this method immediately returns zero.
                 * <p> Invoking this method clears the effect of any previous invocations
                 * of the {@link #wakeup wakeup} method.  </p>
                 */
                // @ts-ignore
                public abstract selectNow(): number;
                /**
                 * Selects a set of keys whose corresponding channels are ready for I/O
                 * operations.
                 * <p> This method performs a blocking <a href="#selop">selection
                 * operation</a>.  It returns only after at least one channel is selected,
                 * this selector's {@link #wakeup wakeup} method is invoked, the current
                 * thread is interrupted, or the given timeout period expires, whichever
                 * comes first.
                 * <p> This method does not offer real-time guarantees: It schedules the
                 * timeout as if by invoking the {@link Object#wait(long)} method. </p>
                 */
                // @ts-ignore
                public abstract select(timeout: number): number;
                /**
                 * Causes the first selection operation that has not yet returned to return
                 * immediately.
                 * <p> If another thread is currently blocked in an invocation of the
                 * {@link #select()} or {@link #select(long)} methods then that invocation
                 * will return immediately.  If no selection operation is currently in
                 * progress then the next invocation of one of these methods will return
                 * immediately unless the {@link #selectNow()} method is invoked in the
                 * meantime.  In any case the value returned by that invocation may be
                 * non-zero.  Subsequent invocations of the {@link #select()} or {@link
                 * #select(long)} methods will block as usual unless this method is invoked
                 * again in the meantime.
                 * <p> Invoking this method more than once between two successive selection
                 * operations has the same effect as invoking it just once.  </p>
                 */
                // @ts-ignore
                public abstract wakeup(): java.nio.channels.Selector;
                /**
                 * Closes this selector.
                 * <p> If a thread is currently blocked in one of this selector's selection
                 * methods then it is interrupted as if by invoking the selector's {@link
                 * #wakeup wakeup} method.
                 * <p> Any uncancelled keys still associated with this selector are
                 * invalidated, their channels are deregistered, and any other resources
                 * associated with this selector are released.
                 * <p> If this selector is already closed then invoking this method has no
                 * effect.
                 * <p> After a selector is closed, any further attempt to use it, except by
                 * invoking this method or the {@link #wakeup wakeup} method, will cause a
                 * {@link ClosedSelectorException} to be thrown. </p>
                 */
                // @ts-ignore
                public abstract close(): void;
            }
        }
    }
}
