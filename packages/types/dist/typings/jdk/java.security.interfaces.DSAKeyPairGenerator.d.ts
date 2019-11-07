// @ts-nocheck
declare namespace java {
    namespace security {
        namespace interfaces {
            // @ts-ignore
            interface DSAKeyPairGenerator {
                /**
                 * Initializes the key pair generator using the DSA family parameters
                 * (p,q and g) and an optional SecureRandom bit source. If a
                 * SecureRandom bit source is needed but not supplied, i.e. null, a
                 * default SecureRandom instance will be used.
                 */
                // @ts-ignore
                 initialize(params: java.security.interfaces.DSAParams, random: java.security.SecureRandom): void;
                /**
                 * Initializes the key pair generator for a given modulus length
                 * (instead of parameters), and an optional SecureRandom bit source.
                 * If a SecureRandom bit source is needed but not supplied, i.e.
                 * null, a default SecureRandom instance will be used.
                 * <p>If {@code genParams} is true, this method generates new
                 * p, q and g parameters. If it is false, the method uses precomputed
                 * parameters for the modulus length requested. If there are no
                 * precomputed parameters for that modulus length, an exception will be
                 * thrown. It is guaranteed that there will always be
                 * default parameters for modulus lengths of 512 and 1024 bits.
                 */
                // @ts-ignore
                 initialize(modlen: number, genParams: boolean, random: java.security.SecureRandom): void;
            }
        }
    }
}
