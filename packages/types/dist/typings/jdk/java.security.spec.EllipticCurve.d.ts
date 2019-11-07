// @ts-nocheck
declare namespace java {
    namespace security {
        namespace spec {
            // @ts-ignore
             class EllipticCurve extends java.lang.Object {
                /**
                 * Creates an elliptic curve with the specified elliptic field
                 * {@code field} and the coefficients {@code a} and
                 * {@code b}.
                 */
                // @ts-ignore
                constructor(field: java.security.spec.ECField, a: java.math.BigInteger, b: java.math.BigInteger)
                /**
                 * Creates an elliptic curve with the specified elliptic field
                 * {@code field}, the coefficients {@code a} and
                 * {@code b}, and the {@code seed} used for curve generation.
                 */
                // @ts-ignore
                constructor(field: java.security.spec.ECField, a: java.math.BigInteger, b: java.math.BigInteger, seed: number)
                /**
                 * Returns the finite field {@code field} that this
                 * elliptic curve is over.
                 */
                // @ts-ignore
                public getField(): java.security.spec.ECField;
                /**
                 * Returns the first coefficient {@code a} of the
                 * elliptic curve.
                 */
                // @ts-ignore
                public getA(): java.math.BigInteger;
                /**
                 * Returns the second coefficient {@code b} of the
                 * elliptic curve.
                 */
                // @ts-ignore
                public getB(): java.math.BigInteger;
                /**
                 * Returns the seeding bytes {@code seed} used
                 * during curve generation. May be null if not specified.
                 */
                // @ts-ignore
                public getSeed(): number[];
                /**
                 * Compares this elliptic curve for equality with the
                 * specified object.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * Returns a hash code value for this elliptic curve.
                 */
                // @ts-ignore
                public hashCode(): number;
            }
        }
    }
}
