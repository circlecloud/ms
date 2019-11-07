// @ts-nocheck
declare namespace java {
    namespace security {
        namespace spec {
            // @ts-ignore
             class RSAMultiPrimePrivateCrtKeySpec extends java.security.spec.RSAPrivateKeySpec {
                /**
                 * Creates a new {@code RSAMultiPrimePrivateCrtKeySpec}
                 * given the modulus, publicExponent, privateExponent,
                 * primeP, primeQ, primeExponentP, primeExponentQ,
                 * crtCoefficient, and otherPrimeInfo as defined in PKCS#1 v2.1.
                 * <p>Note that the contents of {@code otherPrimeInfo}
                 * are copied to protect against subsequent modification when
                 * constructing this object.
                 */
                // @ts-ignore
                constructor(modulus: java.math.BigInteger, publicExponent: java.math.BigInteger, privateExponent: java.math.BigInteger, primeP: java.math.BigInteger, primeQ: java.math.BigInteger, primeExponentP: java.math.BigInteger, primeExponentQ: java.math.BigInteger, crtCoefficient: java.math.BigInteger, otherPrimeInfo: java.security.spec.RSAOtherPrimeInfo)
                /**
                 * Returns the public exponent.
                 */
                // @ts-ignore
                public getPublicExponent(): java.math.BigInteger;
                /**
                 * Returns the primeP.
                 */
                // @ts-ignore
                public getPrimeP(): java.math.BigInteger;
                /**
                 * Returns the primeQ.
                 */
                // @ts-ignore
                public getPrimeQ(): java.math.BigInteger;
                /**
                 * Returns the primeExponentP.
                 */
                // @ts-ignore
                public getPrimeExponentP(): java.math.BigInteger;
                /**
                 * Returns the primeExponentQ.
                 */
                // @ts-ignore
                public getPrimeExponentQ(): java.math.BigInteger;
                /**
                 * Returns the crtCoefficient.
                 */
                // @ts-ignore
                public getCrtCoefficient(): java.math.BigInteger;
                /**
                 * Returns a copy of the otherPrimeInfo or null if there are
                 * only two prime factors (p and q).
                 */
                // @ts-ignore
                public getOtherPrimeInfo(): java.security.spec.RSAOtherPrimeInfo[];
            }
        }
    }
}
