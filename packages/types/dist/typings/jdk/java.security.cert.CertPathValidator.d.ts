declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
             class CertPathValidator extends java.lang.Object {
                /**
                 * Creates a {@code CertPathValidator} object of the given algorithm,
                 * and encapsulates the given provider implementation (SPI object) in it.
                 */
                // @ts-ignore
                constructor(validatorSpi: java.security.cert.CertPathValidatorSpi, provider: java.security.Provider, algorithm: string)
                /**
                 * Returns a {@code CertPathValidator} object that implements the
                 * specified algorithm.
                 * <p> This method traverses the list of registered security Providers,
                 * starting with the most preferred Provider.
                 * A new CertPathValidator object encapsulating the
                 * CertPathValidatorSpi implementation from the first
                 * Provider that supports the specified algorithm is returned.
                 * <p> Note that the list of registered providers may be retrieved via
                 * the {@link Security#getProviders() Security.getProviders()} method.
                 */
                // @ts-ignore
                public static getInstance(algorithm: string): java.security.cert.CertPathValidator;
                /**
                 * Returns a {@code CertPathValidator} object that implements the
                 * specified algorithm.
                 * <p> A new CertPathValidator object encapsulating the
                 * CertPathValidatorSpi implementation from the specified provider
                 * is returned.  The specified provider must be registered
                 * in the security provider list.
                 * <p> Note that the list of registered providers may be retrieved via
                 * the {@link Security#getProviders() Security.getProviders()} method.
                 */
                // @ts-ignore
                public static getInstance(algorithm: string, provider: string): java.security.cert.CertPathValidator;
                /**
                 * Returns a {@code CertPathValidator} object that implements the
                 * specified algorithm.
                 * <p> A new CertPathValidator object encapsulating the
                 * CertPathValidatorSpi implementation from the specified Provider
                 * object is returned.  Note that the specified Provider object
                 * does not have to be registered in the provider list.
                 */
                // @ts-ignore
                public static getInstance(algorithm: string, provider: java.security.Provider): java.security.cert.CertPathValidator;
                /**
                 * Returns the {@code Provider} of this
                 * {@code CertPathValidator}.
                 */
                // @ts-ignore
                public getProvider(): java.security.Provider;
                /**
                 * Returns the algorithm name of this {@code CertPathValidator}.
                 */
                // @ts-ignore
                public getAlgorithm(): string;
                /**
                 * Validates the specified certification path using the specified
                 * algorithm parameter set.
                 * <p>
                 * The {@code CertPath} specified must be of a type that is
                 * supported by the validation algorithm, otherwise an
                 * {@code InvalidAlgorithmParameterException} will be thrown. For
                 * example, a {@code CertPathValidator} that implements the PKIX
                 * algorithm validates {@code CertPath} objects of type X.509.
                 */
                // @ts-ignore
                public validate(certPath: java.security.cert.CertPath, params: java.security.cert.CertPathParameters): java.security.cert.CertPathValidatorResult;
                /**
                 * Returns the default {@code CertPathValidator} type as specified by
                 * the {@code certpathvalidator.type} security property, or the string
                 * {@literal "PKIX"} if no such property exists.
                 * <p>The default {@code CertPathValidator} type can be used by
                 * applications that do not want to use a hard-coded type when calling one
                 * of the {@code getInstance} methods, and want to provide a default
                 * type in case a user does not specify its own.
                 * <p>The default {@code CertPathValidator} type can be changed by
                 * setting the value of the {@code certpathvalidator.type} security
                 * property to the desired type.
                 */
                // @ts-ignore
                public static getDefaultType(): string;
                /**
                 * Returns a {@code CertPathChecker} that the encapsulated
                 * {@code CertPathValidatorSpi} implementation uses to check the revocation
                 * status of certificates. A PKIX implementation returns objects of
                 * type {@code PKIXRevocationChecker}. Each invocation of this method
                 * returns a new instance of {@code CertPathChecker}.
                 * <p>The primary purpose of this method is to allow callers to specify
                 * additional input parameters and options specific to revocation checking.
                 * See the class description for an example.
                 */
                // @ts-ignore
                public getRevocationChecker(): java.security.cert.CertPathChecker;
            }
        }
    }
}
