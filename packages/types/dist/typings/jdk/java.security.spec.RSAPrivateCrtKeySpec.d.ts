// @ts-nocheck
declare namespace java {
    namespace security {
        namespace spec {
            // @ts-ignore
             class RSAPrivateCrtKeySpec extends java.security.spec.RSAPrivateKeySpec {
                /**
                 * Creates a new {@code RSAPrivateCrtKeySpec}
                 * given the modulus, publicExponent, privateExponent,
                 * primeP, primeQ, primeExponentP, primeExponentQ, and
                 * crtCoefficient as defined in PKCS#1.
                 */
                // @ts-ignore
                constructor(modulus: java.math.BigInteger, publicExponent: java.math.BigInteger, privateExponent: java.math.BigInteger, primeP: java.math.BigInteger, primeQ: java.math.BigInteger, primeExponentP: java.math.BigInteger, primeExponentQ: java.math.BigInteger, crtCoefficient: java.math.BigInteger)
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
            }
        }
    }
}
