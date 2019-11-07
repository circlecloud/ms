// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
            interface InterruptibleChannel {
                /**
                 * Closes this channel.
                 * <p> Any thread currently blocked in an I/O operation upon this channel
                 * will receive an {@link AsynchronousCloseException}.
                 * <p> This method otherwise behaves exactly as specified by the {@link
                 * Channel#close Channel} interface.  </p>
                 */
                // @ts-ignore
                 close(): void;
            }
        }
    }
}
