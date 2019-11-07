declare namespace java {
    namespace security {
        namespace spec {
            // @ts-ignore
             class RSAPrivateKeySpec extends java.lang.Object {
                /**
                 * Creates a new RSAPrivateKeySpec.
                 */
                // @ts-ignore
                constructor(modulus: java.math.BigInteger, privateExponent: java.math.BigInteger)
                /**
                 * Returns the modulus.
                 */
                // @ts-ignore
                public getModulus(): java.math.BigInteger;
                /**
                 * Returns the private exponent.
                 */
                // @ts-ignore
                public getPrivateExponent(): java.math.BigInteger;
            }
        }
    }
}
