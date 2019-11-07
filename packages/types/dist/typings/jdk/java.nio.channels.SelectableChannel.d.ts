// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
            abstract class SelectableChannel extends java.nio.channels.spi.AbstractInterruptibleChannel {
                /**
                 * Initializes a new instance of this class.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the provider that created this channel.
                 */
                // @ts-ignore
                public abstract provider(): java.nio.channels.spi.SelectorProvider;
                /**
                 * Returns an <a href="SelectionKey.html#opsets">operation set</a>
                 * identifying this channel's supported operations.  The bits that are set
                 * in this integer value denote exactly the operations that are valid for
                 * this channel.  This method always returns the same value for a given
                 * concrete channel class.
                 */
                // @ts-ignore
                public abstract validOps(): number;
                /**
                 * Tells whether or not this channel is currently registered with any
                 * selectors.  A newly-created channel is not registered.
                 * <p> Due to the inherent delay between key cancellation and channel
                 * deregistration, a channel may remain registered for some time after all
                 * of its keys have been cancelled.  A channel may also remain registered
                 * for some time after it is closed.  </p>
                 */
                // @ts-ignore
                public abstract isRegistered(): boolean;
                /**
                 * Retrieves the key representing the channel's registration with the given
                 * selector.
                 */
                // @ts-ignore
                public abstract keyFor(sel: java.nio.channels.Selector): java.nio.channels.SelectionKey;
                /**
                 * Registers this channel with the given selector, returning a selection
                 * key.
                 * <p> If this channel is currently registered with the given selector then
                 * the selection key representing that registration is returned.  The key's
                 * interest set will have been changed to <tt>ops</tt>, as if by invoking
                 * the {@link SelectionKey#interestOps(int) interestOps(int)} method.  If
                 * the <tt>att</tt> argument is not <tt>null</tt> then the key's attachment
                 * will have been set to that value.  A {@link CancelledKeyException} will
                 * be thrown if the key has already been cancelled.
                 * <p> Otherwise this channel has not yet been registered with the given
                 * selector, so it is registered and the resulting new key is returned.
                 * The key's initial interest set will be <tt>ops</tt> and its attachment
                 * will be <tt>att</tt>.
                 * <p> This method may be invoked at any time.  If this method is invoked
                 * while another invocation of this method or of the {@link
                 * #configureBlocking(boolean) configureBlocking} method is in progress
                 * then it will first block until the other operation is complete.  This
                 * method will then synchronize on the selector's key set and therefore may
                 * block if invoked concurrently with another registration or selection
                 * operation involving the same selector. </p>
                 * <p> If this channel is closed while this operation is in progress then
                 * the key returned by this method will have been cancelled and will
                 * therefore be invalid. </p>
                 */
                // @ts-ignore
                public abstract register(sel: java.nio.channels.Selector, ops: number, att: java.lang.Object): java.nio.channels.SelectionKey;
                /**
                 * Registers this channel with the given selector, returning a selection
                 * key.
                 * <p> An invocation of this convenience method of the form
                 * <blockquote><tt>sc.register(sel, ops)</tt></blockquote>
                 * behaves in exactly the same way as the invocation
                 * <blockquote><tt>sc.{@link
                 * #register(java.nio.channels.Selector,int,java.lang.Object)
                 * register}(sel, ops, null)</tt></blockquote>
                 */
                // @ts-ignore
                public register(sel: java.nio.channels.Selector, ops: number): java.nio.channels.SelectionKey;
                /**
                 * Adjusts this channel's blocking mode.
                 * <p> If this channel is registered with one or more selectors then an
                 * attempt to place it into blocking mode will cause an {@link
                 * IllegalBlockingModeException} to be thrown.
                 * <p> This method may be invoked at any time.  The new blocking mode will
                 * only affect I/O operations that are initiated after this method returns.
                 * For some implementations this may require blocking until all pending I/O
                 * operations are complete.
                 * <p> If this method is invoked while another invocation of this method or
                 * of the {@link #register(Selector, int) register} method is in progress
                 * then it will first block until the other operation is complete. </p>
                 */
                // @ts-ignore
                public abstract configureBlocking(block: boolean): java.nio.channels.SelectableChannel;
                /**
                 * Tells whether or not every I/O operation on this channel will block
                 * until it completes.  A newly-created channel is always in blocking mode.
                 * <p> If this channel is closed then the value returned by this method is
                 * not specified. </p>
                 */
                // @ts-ignore
                public abstract isBlocking(): boolean;
                /**
                 * Retrieves the object upon which the {@link #configureBlocking
                 * configureBlocking} and {@link #register register} methods synchronize.
                 * This is often useful in the implementation of adaptors that require a
                 * specific blocking mode to be maintained for a short period of time.
                 */
                // @ts-ignore
                public abstract blockingLock(): java.lang.Object;
            }
        }
    }
}
