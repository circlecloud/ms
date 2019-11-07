// @ts-nocheck
declare namespace java {
    namespace security {
        namespace spec {
            // @ts-ignore
             class ECParameterSpec extends java.lang.Object {
                /**
                 * Creates elliptic curve domain parameters based on the
                 * specified values.
                 */
                // @ts-ignore
                constructor(curve: java.security.spec.EllipticCurve, g: java.security.spec.ECPoint, n: java.math.BigInteger, h: number)
                /**
                 * Returns the elliptic curve that this parameter defines.
                 */
                // @ts-ignore
                public getCurve(): java.security.spec.EllipticCurve;
                /**
                 * Returns the generator which is also known as the base point.
                 */
                // @ts-ignore
                public getGenerator(): java.security.spec.ECPoint;
                /**
                 * Returns the order of the generator.
                 */
                // @ts-ignore
                public getOrder(): java.math.BigInteger;
                /**
                 * Returns the cofactor.
                 */
                // @ts-ignore
                public getCofactor(): number;
            }
        }
    }
}
