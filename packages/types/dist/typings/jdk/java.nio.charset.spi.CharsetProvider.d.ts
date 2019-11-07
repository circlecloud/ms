// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace charset {
            namespace spi {
                // @ts-ignore
                abstract class CharsetProvider extends java.lang.Object {
                    /**
                     * Initializes a new charset provider.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates an iterator that iterates over the charsets supported by this
                     * provider.  This method is used in the implementation of the {@link
                     * java.nio.charset.Charset#availableCharsets Charset.availableCharsets}
                     * method.
                     */
                    // @ts-ignore
                    public abstract charsets(): java.util.Iterator;
                    /**
                     * Retrieves a charset for the given charset name.
                     */
                    // @ts-ignore
                    public abstract charsetForName(charsetName: string): java.nio.charset.Charset;
                }
            }
        }
    }
}
