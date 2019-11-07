declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
            abstract class Pipe extends java.lang.Object {
                /**
                 * Initializes a new instance of this class.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns this pipe's source channel.
                 */
                // @ts-ignore
                public abstract source(): java.nio.channels.Pipe.SourceChannel;
                /**
                 * Returns this pipe's sink channel.
                 */
                // @ts-ignore
                public abstract sink(): java.nio.channels.Pipe.SinkChannel;
                /**
                 * Opens a pipe.
                 * <p> The new pipe is created by invoking the {@link
                 * java.nio.channels.spi.SelectorProvider#openPipe openPipe} method of the
                 * system-wide default {@link java.nio.channels.spi.SelectorProvider}
                 * object.  </p>
                 */
                // @ts-ignore
                public static open(): java.nio.channels.Pipe;
            }
        }
    }
}
