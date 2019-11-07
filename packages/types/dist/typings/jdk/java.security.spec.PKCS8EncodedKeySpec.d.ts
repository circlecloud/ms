// @ts-nocheck
declare namespace java {
    namespace security {
        namespace spec {
            // @ts-ignore
             class PKCS8EncodedKeySpec extends java.security.spec.EncodedKeySpec {
                /**
                 * Creates a new PKCS8EncodedKeySpec with the given encoded key.
                 */
                // @ts-ignore
                constructor(encodedKey: number)
                /**
                 * Returns the key bytes, encoded according to the PKCS #8 standard.
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
