declare namespace java {
    namespace security {
        namespace spec {
            // @ts-ignore
            abstract class EncodedKeySpec extends java.lang.Object {
                /**
                 * Creates a new EncodedKeySpec with the given encoded key.
                 */
                // @ts-ignore
                constructor(encodedKey: number)
                /**
                 * Returns the encoded key.
                 */
                // @ts-ignore
                public getEncoded(): number[];
                /**
                 * Returns the name of the encoding format associated with this
                 * key specification.
                 * <p>If the opaque representation of a key
                 * (see {@link java.security.Key Key}) can be transformed
                 * (see {@link java.security.KeyFactory KeyFactory})
                 * into this key specification (or a subclass of it),
                 * {@code getFormat} called
                 * on the opaque key returns the same value as the
                 * {@code getFormat} method
                 * of this key specification.
                 */
                // @ts-ignore
                public abstract getFormat(): string;
            }
        }
    }
}
