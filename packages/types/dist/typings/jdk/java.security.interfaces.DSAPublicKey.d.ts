declare namespace java {
    namespace security {
        namespace interfaces {
            // @ts-ignore
            interface DSAPublicKey {
                // @ts-ignore
                 serialVersionUID: number;
                /**
                 * Returns the value of the public key, {@code y}.
                 */
                // @ts-ignore
                 getY(): java.math.BigInteger;
            }
        }
    }
}
