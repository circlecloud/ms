declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
            interface Channel {
                /**
                 * Tells whether or not this channel is open.
                 */
                // @ts-ignore
                 isOpen(): boolean;
                /**
                 * Closes this channel.
                 * <p> After a channel is closed, any further attempt to invoke I/O
                 * operations upon it will cause a {@link ClosedChannelException} to be
                 * thrown.
                 * <p> If this channel is already closed then invoking this method has no
                 * effect.
                 * <p> This method may be invoked at any time.  If some other thread has
                 * already invoked it, however, then another invocation will block until
                 * the first invocation is complete, after which it will return without
                 * effect. </p>
                 */
                // @ts-ignore
                 close(): void;
            }
        }
    }
}
