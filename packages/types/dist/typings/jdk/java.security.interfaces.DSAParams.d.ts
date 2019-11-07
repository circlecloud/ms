declare namespace java {
    namespace security {
        namespace interfaces {
            // @ts-ignore
            interface DSAParams {
                /**
                 * Returns the prime, {@code p}.
                 */
                // @ts-ignore
                 getP(): java.math.BigInteger;
                /**
                 * Returns the subprime, {@code q}.
                 */
                // @ts-ignore
                 getQ(): java.math.BigInteger;
                /**
                 * Returns the base, {@code g}.
                 */
                // @ts-ignore
                 getG(): java.math.BigInteger;
            }
        }
    }
}
