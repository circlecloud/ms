// @ts-nocheck
declare namespace java {
    namespace security {
        namespace spec {
            // @ts-ignore
             class ECFieldFp extends java.lang.Object {
                /**
                 * Creates an elliptic curve prime finite field
                 * with the specified prime {@code p}.
                 */
                // @ts-ignore
                constructor(p: java.math.BigInteger)
                /**
                 * Returns the field size in bits which is size of prime p
                 * for this prime finite field.
                 */
                // @ts-ignore
                public getFieldSize(): number;
                /**
                 * Returns the prime {@code p} of this prime finite field.
                 */
                // @ts-ignore
                public getP(): java.math.BigInteger;
                /**
                 * Compares this prime finite field for equality with the
                 * specified object.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * Returns a hash code value for this prime finite field.
                 */
                // @ts-ignore
                public hashCode(): number;
            }
        }
    }
}
