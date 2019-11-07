declare namespace java {
    namespace security {
        namespace spec {
            // @ts-ignore
             class X509EncodedKeySpec extends java.security.spec.EncodedKeySpec {
                /**
                 * Creates a new X509EncodedKeySpec with the given encoded key.
                 */
                // @ts-ignore
                constructor(encodedKey: number)
                /**
                 * Returns the key bytes, encoded according to the X.509 standard.
                 */
                // @ts-ignore
                public getEncoded(): number[];
                /**
                 * Returns the name of the encoding format associated with this
                 * key specification.
                 */
                // @ts-ignore
                public getFormat(): string;
            }
        }
    }
}
