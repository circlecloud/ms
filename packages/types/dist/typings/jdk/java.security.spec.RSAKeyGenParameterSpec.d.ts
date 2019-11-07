// @ts-nocheck
declare namespace java {
    namespace security {
        namespace spec {
            // @ts-ignore
             class RSAKeyGenParameterSpec extends java.lang.Object {
                /**
                 * Constructs a new {@code RSAParameterSpec} object from the
                 * given keysize and public-exponent value.
                 */
                // @ts-ignore
                constructor(keysize: number, publicExponent: java.math.BigInteger)
                // @ts-ignore
                public static F0: java.math.BigInteger;
                // @ts-ignore
                public static F4: java.math.BigInteger;
                /**
                 * Returns the keysize.
                 */
                // @ts-ignore
                public getKeysize(): number;
                /**
                 * Returns the public-exponent value.
                 */
                // @ts-ignore
                public getPublicExponent(): java.math.BigInteger;
            }
        }
    }
}
