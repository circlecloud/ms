// @ts-nocheck
declare namespace java {
    namespace security {
        namespace spec {
            // @ts-ignore
             class DSAPublicKeySpec extends java.lang.Object {
                /**
                 * Creates a new DSAPublicKeySpec with the specified parameter values.
                 */
                // @ts-ignore
                constructor(y: java.math.BigInteger, p: java.math.BigInteger, q: java.math.BigInteger, g: java.math.BigInteger)
                /**
                 * Returns the public key {@code y}.
                 */
                // @ts-ignore
                public getY(): java.math.BigInteger;
                /**
                 * Returns the prime {@code p}.
                 */
                // @ts-ignore
                public getP(): java.math.BigInteger;
                /**
                 * Returns the sub-prime {@code q}.
                 */
                // @ts-ignore
                public getQ(): java.math.BigInteger;
                /**
                 * Returns the base {@code g}.
                 */
                // @ts-ignore
                public getG(): java.math.BigInteger;
            }
        }
    }
}
