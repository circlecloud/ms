declare namespace java {
    namespace security {
        namespace spec {
            // @ts-ignore
             class ECPrivateKeySpec extends java.lang.Object {
                /**
                 * Creates a new ECPrivateKeySpec with the specified
                 * parameter values.
                 */
                // @ts-ignore
                constructor(s: java.math.BigInteger, params: java.security.spec.ECParameterSpec)
                /**
                 * Returns the private value S.
                 */
                // @ts-ignore
                public getS(): java.math.BigInteger;
                /**
                 * Returns the associated elliptic curve domain
                 * parameters.
                 */
                // @ts-ignore
                public getParams(): java.security.spec.ECParameterSpec;
            }
        }
    }
}
