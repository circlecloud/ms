// @ts-nocheck
declare namespace java {
    namespace security {
        namespace spec {
            // @ts-ignore
             class ECPublicKeySpec extends java.lang.Object {
                /**
                 * Creates a new ECPublicKeySpec with the specified
                 * parameter values.
                 */
                // @ts-ignore
                constructor(w: java.security.spec.ECPoint, params: java.security.spec.ECParameterSpec)
                /**
                 * Returns the public point W.
                 */
                // @ts-ignore
                public getW(): java.security.spec.ECPoint;
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
