// @ts-nocheck
declare namespace java {
    namespace security {
        namespace spec {
            // @ts-ignore
             class ECFieldF2m extends java.lang.Object {
                /**
                 * Creates an elliptic curve characteristic 2 finite
                 * field which has 2^{@code m} elements with normal basis.
                 */
                // @ts-ignore
                constructor(m: number)
                /**
                 * Creates an elliptic curve characteristic 2 finite
                 * field which has 2^{@code m} elements with
                 * polynomial basis.
                 * The reduction polynomial for this field is based
                 * on {@code rp} whose i-th bit corresponds to
                 * the i-th coefficient of the reduction polynomial.<p>
                 * Note: A valid reduction polynomial is either a
                 * trinomial (X^{@code m} + X^{@code k} + 1
                 * with {@code m} &gt; {@code k} &gt;= 1) or a
                 * pentanomial (X^{@code m} + X^{@code k3}
                 * + X^{@code k2} + X^{@code k1} + 1 with
                 * {@code m} &gt; {@code k3} &gt; {@code k2}
                 * &gt; {@code k1} &gt;= 1).
                 */
                // @ts-ignore
                constructor(m: number, rp: java.math.BigInteger)
                /**
                 * Creates an elliptic curve characteristic 2 finite
                 * field which has 2^{@code m} elements with
                 * polynomial basis. The reduction polynomial for this
                 * field is based on {@code ks} whose content
                 * contains the order of the middle term(s) of the
                 * reduction polynomial.
                 * Note: A valid reduction polynomial is either a
                 * trinomial (X^{@code m} + X^{@code k} + 1
                 * with {@code m} &gt; {@code k} &gt;= 1) or a
                 * pentanomial (X^{@code m} + X^{@code k3}
                 * + X^{@code k2} + X^{@code k1} + 1 with
                 * {@code m} &gt; {@code k3} &gt; {@code k2}
                 * &gt; {@code k1} &gt;= 1), so {@code ks} should
                 * have length 1 or 3.
                 */
                // @ts-ignore
                constructor(m: number, ks: number)
                /**
                 * Returns the field size in bits which is {@code m}
                 * for this characteristic 2 finite field.
                 */
                // @ts-ignore
                public getFieldSize(): number;
                /**
                 * Returns the value {@code m} of this characteristic
                 * 2 finite field.
                 */
                // @ts-ignore
                public getM(): number;
                /**
                 * Returns a BigInteger whose i-th bit corresponds to the
                 * i-th coefficient of the reduction polynomial for polynomial
                 * basis or null for normal basis.
                 */
                // @ts-ignore
                public getReductionPolynomial(): java.math.BigInteger;
                /**
                 * Returns an integer array which contains the order of the
                 * middle term(s) of the reduction polynomial for polynomial
                 * basis or null for normal basis.
                 */
                // @ts-ignore
                public getMidTermsOfReductionPolynomial(): number[];
                /**
                 * Compares this finite field for equality with the
                 * specified object.
                 */
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                /**
                 * Returns a hash code value for this characteristic 2
                 * finite field.
                 */
                // @ts-ignore
                public hashCode(): number;
            }
        }
    }
}
