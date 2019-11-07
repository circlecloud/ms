// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
            interface AsynchronousChannel {
                /**
                 * Closes this channel.
                 * <p> Any outstanding asynchronous operations upon this channel will
                 * complete with the exception {@link AsynchronousCloseException}. After a
                 * channel is closed, further attempts to initiate asynchronous I/O
                 * operations complete immediately with cause {@link ClosedChannelException}.
                 * <p>  This method otherwise behaves exactly as specified by the {@link
                 * Channel} interface.
                 */
                // @ts-ignore
                 close(): void;
            }
        }
    }
}
