// @ts-nocheck
declare namespace java {
    namespace security {
        namespace interfaces {
            // @ts-ignore
            interface RSAMultiPrimePrivateCrtKey {
                // @ts-ignore
                 serialVersionUID: number;
                /**
                 * Returns the public exponent.
                 */
                // @ts-ignore
                 getPublicExponent(): java.math.BigInteger;
                /**
                 * Returns the primeP.
                 */
                // @ts-ignore
                 getPrimeP(): java.math.BigInteger;
                /**
                 * Returns the primeQ.
                 */
                // @ts-ignore
                 getPrimeQ(): java.math.BigInteger;
                /**
                 * Returns the primeExponentP.
                 */
                // @ts-ignore
                 getPrimeExponentP(): java.math.BigInteger;
                /**
                 * Returns the primeExponentQ.
                 */
                // @ts-ignore
                 getPrimeExponentQ(): java.math.BigInteger;
                /**
                 * Returns the crtCoefficient.
                 */
                // @ts-ignore
                 getCrtCoefficient(): java.math.BigInteger;
                /**
                 * Returns the otherPrimeInfo or null if there are only
                 * two prime factors (p and q).
                 */
                // @ts-ignore
                 getOtherPrimeInfo(): java.security.spec.RSAOtherPrimeInfo[];
            }
        }
    }
}
