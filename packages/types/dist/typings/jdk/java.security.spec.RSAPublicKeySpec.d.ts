// @ts-nocheck
declare namespace java {
    namespace security {
        namespace spec {
            // @ts-ignore
             class RSAPublicKeySpec extends java.lang.Object {
                /**
                 * Creates a new RSAPublicKeySpec.
                 */
                // @ts-ignore
                constructor(modulus: java.math.BigInteger, publicExponent: java.math.BigInteger)
                /**
                 * Returns the modulus.
                 */
                // @ts-ignore
                public getModulus(): java.math.BigInteger;
                /**
                 * Returns the public exponent.
                 */
                // @ts-ignore
                public getPublicExponent(): java.math.BigInteger;
            }
        }
    }
}
