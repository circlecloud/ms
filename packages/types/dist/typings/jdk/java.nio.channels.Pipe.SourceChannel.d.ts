declare namespace java {
    namespace nio {
        namespace channels {
            namespace Pipe {
                // @ts-ignore
                abstract class SourceChannel extends java.nio.channels.spi.AbstractSelectableChannel {
                    /**
                     * Constructs a new instance of this class.
                     */
                    // @ts-ignore
                    constructor(provider: java.nio.channels.spi.SelectorProvider)
                    /**
                     * Returns an operation set identifying this channel's supported
                     * operations.
                     * <p> Pipe-source channels only support reading, so this method
                     * returns {@link SelectionKey#OP_READ}.  </p>
                     */
                    // @ts-ignore
                    public validOps(): number;
                }
            }
        }
    }
}
