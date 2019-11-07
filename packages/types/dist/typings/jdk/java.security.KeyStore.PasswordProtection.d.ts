// @ts-nocheck
declare namespace java {
    namespace security {
        namespace KeyStore {
            // @ts-ignore
             class PasswordProtection extends java.lang.Object {
                /**
                 * Creates a password parameter.
                 * <p> The specified {@code password} is cloned before it is stored
                 * in the new {@code PasswordProtection} object.
                 */
                // @ts-ignore
                constructor(password: string)
                /**
                 * Creates a password parameter and specifies the protection algorithm
                 * and associated parameters to use when encrypting a keystore entry.
                 * <p>
                 * The specified {@code password} is cloned before it is stored in the
                 * new {@code PasswordProtection} object.
                 */
                // @ts-ignore
                constructor(password: string, protectionAlgorithm: string, protectionParameters: java.security.spec.AlgorithmParameterSpec)
                /**
                 * Gets the name of the protection algorithm.
                 * If none was set then the keystore provider will use its default
                 * protection algorithm. The name of the default protection algorithm
                 * for a given keystore type is set using the
                 * {@code 'keystore.<type>.keyProtectionAlgorithm'} security property.
                 * For example, the
                 * {@code keystore.PKCS12.keyProtectionAlgorithm} property stores the
                 * name of the default key protection algorithm used for PKCS12
                 * keystores. If the security property is not set, an
                 * implementation-specific algorithm will be used.
                 */
                // @ts-ignore
                public getProtectionAlgorithm(): string;
                /**
                 * Gets the parameters supplied for the protection algorithm.
                 */
                // @ts-ignore
                public getProtectionParameters(): java.security.spec.AlgorithmParameterSpec;
                /**
                 * Gets the password.
                 * <p>Note that this method returns a reference to the password.
                 * If a clone of the array is created it is the caller's
                 * responsibility to zero out the password information
                 * after it is no longer needed.
                 */
                // @ts-ignore
                public getPassword(): string[];
                /**
                 * Clears the password.
                 */
                // @ts-ignore
                public destroy(): void;
                /**
                 * Determines if password has been cleared.
                 */
                // @ts-ignore
                public isDestroyed(): boolean;
            }
        }
    }
}
