// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace channels {
            namespace spi {
                // @ts-ignore
                abstract class AbstractSelector extends java.nio.channels.Selector {
                    /**
                     * Initializes a new instance of this class.
                     */
                    // @ts-ignore
                    constructor(provider: java.nio.channels.spi.SelectorProvider)
                    /**
                     * Closes this selector.
                     * <p> If the selector has already been closed then this method returns
                     * immediately.  Otherwise it marks the selector as closed and then invokes
                     * the {@link #implCloseSelector implCloseSelector} method in order to
                     * complete the close operation.  </p>
                     */
                    // @ts-ignore
                    public close(): void;
                    /**
                     * Closes this selector.
                     * <p> This method is invoked by the {@link #close close} method in order
                     * to perform the actual work of closing the selector.  This method is only
                     * invoked if the selector has not yet been closed, and it is never invoked
                     * more than once.
                     * <p> An implementation of this method must arrange for any other thread
                     * that is blocked in a selection operation upon this selector to return
                     * immediately as if by invoking the {@link
                     * java.nio.channels.Selector#wakeup wakeup} method. </p>
                     */
                    // @ts-ignore
                    protected abstract implCloseSelector(): void;
                    // @ts-ignore
                    public isOpen(): boolean;
                    /**
                     * Returns the provider that created this channel.
                     */
                    // @ts-ignore
                    public provider(): java.nio.channels.spi.SelectorProvider;
                    /**
                     * Retrieves this selector's cancelled-key set.
                     * <p> This set should only be used while synchronized upon it.  </p>
                     */
                    // @ts-ignore
                    protected cancelledKeys(): java.util.Set;
                    /**
                     * Registers the given channel with this selector.
                     * <p> This method is invoked by a channel's {@link
                     * AbstractSelectableChannel#register register} method in order to perform
                     * the actual work of registering the channel with this selector.  </p>
                     */
                    // @ts-ignore
                    protected abstract register(ch: java.nio.channels.spi.AbstractSelectableChannel, ops: number, att: java.lang.Object): java.nio.channels.SelectionKey;
                    /**
                     * Removes the given key from its channel's key set.
                     * <p> This method must be invoked by the selector for each channel that it
                     * deregisters.  </p>
                     */
                    // @ts-ignore
                    protected deregister(key: java.nio.channels.spi.AbstractSelectionKey): void;
                    /**
                     * Marks the beginning of an I/O operation that might block indefinitely.
                     * <p> This method should be invoked in tandem with the {@link #end end}
                     * method, using a <tt>try</tt>&nbsp;...&nbsp;<tt>finally</tt> block as
                     * shown <a href="#be">above</a>, in order to implement interruption for
                     * this selector.
                     * <p> Invoking this method arranges for the selector's {@link
                     * Selector#wakeup wakeup} method to be invoked if a thread's {@link
                     * Thread#interrupt interrupt} method is invoked while the thread is
                     * blocked in an I/O operation upon the selector.  </p>
                     */
                    // @ts-ignore
                    protected begin(): void;
                    /**
                     * Marks the end of an I/O operation that might block indefinitely.
                     * <p> This method should be invoked in tandem with the {@link #begin begin}
                     * method, using a <tt>try</tt>&nbsp;...&nbsp;<tt>finally</tt> block as
                     * shown <a href="#be">above</a>, in order to implement interruption for
                     * this selector.  </p>
                     */
                    // @ts-ignore
                    protected end(): void;
                }
            }
        }
    }
}
