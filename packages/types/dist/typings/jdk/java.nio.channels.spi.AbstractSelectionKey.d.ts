declare namespace java {
    namespace nio {
        namespace channels {
            namespace spi {
                // @ts-ignore
                abstract class AbstractSelectionKey extends java.nio.channels.SelectionKey {
                    /**
                     * Initializes a new instance of this class.
                     */
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public isValid(): boolean;
                    /**
                     * Cancels this key.
                     * <p> If this key has not yet been cancelled then it is added to its
                     * selector's cancelled-key set while synchronized on that set.  </p>
                     */
                    // @ts-ignore
                    public cancel(): void;
                }
            }
        }
    }
}
