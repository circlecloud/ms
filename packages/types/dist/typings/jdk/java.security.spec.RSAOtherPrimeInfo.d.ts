// @ts-nocheck
declare namespace java {
    namespace security {
        namespace spec {
            // @ts-ignore
             class RSAOtherPrimeInfo extends java.lang.Object {
                /**
                 * Creates a new {@code RSAOtherPrimeInfo}
                 * given the prime, primeExponent, and
                 * crtCoefficient as defined in PKCS#1.
                 */
                // @ts-ignore
                constructor(prime: java.math.BigInteger, primeExponent: java.math.BigInteger, crtCoefficient: java.math.BigInteger)
                /**
                 * Returns the prime.
                 */
                // @ts-ignore
                public getPrime(): java.math.BigInteger;
                /**
                 * Returns the prime's exponent.
                 */
                // @ts-ignore
                public getExponent(): java.math.BigInteger;
                /**
                 * Returns the prime's crtCoefficient.
                 */
                // @ts-ignore
                public getCrtCoefficient(): java.math.BigInteger;
            }
        }
    }
}
