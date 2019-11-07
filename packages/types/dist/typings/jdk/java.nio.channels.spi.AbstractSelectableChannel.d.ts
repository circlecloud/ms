declare namespace java {
    namespace nio {
        namespace channels {
            namespace spi {
                // @ts-ignore
                abstract class AbstractSelectableChannel extends java.nio.channels.SelectableChannel {
                    /**
                     * Initializes a new instance of this class.
                     */
                    // @ts-ignore
                    constructor(provider: java.nio.channels.spi.SelectorProvider)
                    /**
                     * Returns the provider that created this channel.
                     */
                    // @ts-ignore
                    public provider(): java.nio.channels.spi.SelectorProvider;
                    // @ts-ignore
                    public isRegistered(): boolean;
                    // @ts-ignore
                    public keyFor(sel: java.nio.channels.Selector): java.nio.channels.SelectionKey;
                    /**
                     * Registers this channel with the given selector, returning a selection key.
                     * <p>  This method first verifies that this channel is open and that the
                     * given initial interest set is valid.
                     * <p> If this channel is already registered with the given selector then
                     * the selection key representing that registration is returned after
                     * setting its interest set to the given value.
                     * <p> Otherwise this channel has not yet been registered with the given
                     * selector, so the {@link AbstractSelector#register register} method of
                     * the selector is invoked while holding the appropriate locks.  The
                     * resulting key is added to this channel's key set before being returned.
                     * </p>
                     */
                    // @ts-ignore
                    public register(sel: java.nio.channels.Selector, ops: number, att: java.lang.Object): java.nio.channels.SelectionKey;
                    /**
                     * Closes this channel.
                     * <p> This method, which is specified in the {@link
                     * AbstractInterruptibleChannel} class and is invoked by the {@link
                     * java.nio.channels.Channel#close close} method, in turn invokes the
                     * {@link #implCloseSelectableChannel implCloseSelectableChannel} method in
                     * order to perform the actual work of closing this channel.  It then
                     * cancels all of this channel's keys.  </p>
                     */
                    // @ts-ignore
                    protected implCloseChannel(): void;
                    /**
                     * Closes this selectable channel.
                     * <p> This method is invoked by the {@link java.nio.channels.Channel#close
                     * close} method in order to perform the actual work of closing the
                     * channel.  This method is only invoked if the channel has not yet been
                     * closed, and it is never invoked more than once.
                     * <p> An implementation of this method must arrange for any other thread
                     * that is blocked in an I/O operation upon this channel to return
                     * immediately, either by throwing an exception or by returning normally.
                     * </p>
                     */
                    // @ts-ignore
                    protected abstract implCloseSelectableChannel(): void;
                    // @ts-ignore
                    public isBlocking(): boolean;
                    // @ts-ignore
                    public blockingLock(): java.lang.Object;
                    /**
                     * Adjusts this channel's blocking mode.
                     * <p> If the given blocking mode is different from the current blocking
                     * mode then this method invokes the {@link #implConfigureBlocking
                     * implConfigureBlocking} method, while holding the appropriate locks, in
                     * order to change the mode.  </p>
                     */
                    // @ts-ignore
                    public configureBlocking(block: boolean): java.nio.channels.SelectableChannel;
                    /**
                     * Adjusts this channel's blocking mode.
                     * <p> This method is invoked by the {@link #configureBlocking
                     * configureBlocking} method in order to perform the actual work of
                     * changing the blocking mode.  This method is only invoked if the new mode
                     * is different from the current mode.  </p>
                     */
                    // @ts-ignore
                    protected abstract implConfigureBlocking(block: boolean): void;
                }
            }
        }
    }
}
