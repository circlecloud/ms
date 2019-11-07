// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace channels {
            namespace spi {
                // @ts-ignore
                abstract class AbstractInterruptibleChannel extends java.lang.Object {
                    /**
                     * Initializes a new instance of this class.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Closes this channel.
                     * <p> If the channel has already been closed then this method returns
                     * immediately.  Otherwise it marks the channel as closed and then invokes
                     * the {@link #implCloseChannel implCloseChannel} method in order to
                     * complete the close operation.  </p>
                     */
                    // @ts-ignore
                    public close(): void;
                    /**
                     * Closes this channel.
                     * <p> This method is invoked by the {@link #close close} method in order
                     * to perform the actual work of closing the channel.  This method is only
                     * invoked if the channel has not yet been closed, and it is never invoked
                     * more than once.
                     * <p> An implementation of this method must arrange for any other thread
                     * that is blocked in an I/O operation upon this channel to return
                     * immediately, either by throwing an exception or by returning normally.
                     * </p>
                     */
                    // @ts-ignore
                    protected abstract implCloseChannel(): void;
                    // @ts-ignore
                    public isOpen(): boolean;
                    /**
                     * Marks the beginning of an I/O operation that might block indefinitely.
                     * <p> This method should be invoked in tandem with the {@link #end end}
                     * method, using a <tt>try</tt>&nbsp;...&nbsp;<tt>finally</tt> block as
                     * shown <a href="#be">above</a>, in order to implement asynchronous
                     * closing and interruption for this channel.  </p>
                     */
                    // @ts-ignore
                    protected begin(): void;
                    /**
                     * Marks the end of an I/O operation that might block indefinitely.
                     * <p> This method should be invoked in tandem with the {@link #begin
                     * begin} method, using a <tt>try</tt>&nbsp;...&nbsp;<tt>finally</tt> block
                     * as shown <a href="#be">above</a>, in order to implement asynchronous
                     * closing and interruption for this channel.  </p>
                     */
                    // @ts-ignore
                    protected end(completed: boolean): void;
                }
            }
        }
    }
}
