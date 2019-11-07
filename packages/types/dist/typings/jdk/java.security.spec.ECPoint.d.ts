declare namespace java {
    namespace security {
        namespace spec {
            // @ts-ignore
             class ECPoint extends java.lang.Object {
                /**
                 * Creates an ECPoint from the specified affine x-coordinate
                 * {@code x} and affine y-coordinate {@code y}.
                 */
                // @ts-ignore
                constructor(x: java.math.BigInteger, y: java.math.BigInteger)
                // @ts-ignore
                public static POINT_INFINITY: java.security.spec.ECPoint;
                /**
                 * Returns the affine x-coordinate {@code x}.
                 * Note: POINT_INFINITY has a null affine x-coordinate.
                 */
                // @ts-ignore
                public getAffineX(): java.math.BigInteger;
                /**
                 * Returns the affine y-coordinate {@code y}.
                 * Note: POINT_INFINITY has a null affine y-coordinate.
                 */
                // @ts-ignore
                public getAffineY(): java.math.BigInteger;
                /**
                 * Compares this elliptic curve point for equality with
                 * the specified object.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * Returns a hash code value for this elliptic curve point.
                 */
                // @ts-ignore
                public hashCode(): number;
            }
        }
    }
}
