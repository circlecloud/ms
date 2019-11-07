declare namespace java {
    namespace nio {
        namespace channels {
            namespace Pipe {
                // @ts-ignore
                abstract class SinkChannel extends java.nio.channels.spi.AbstractSelectableChannel {
                    /**
                     * Initializes a new instance of this class.
                     */
                    // @ts-ignore
                    constructor(provider: java.nio.channels.spi.SelectorProvider)
                    /**
                     * Returns an operation set identifying this channel's supported
                     * operations.
                     * <p> Pipe-sink channels only support writing, so this method returns
                     * {@link SelectionKey#OP_WRITE}.  </p>
                     */
                    // @ts-ignore
                    public validOps(): number;
                }
            }
        }
    }
}
