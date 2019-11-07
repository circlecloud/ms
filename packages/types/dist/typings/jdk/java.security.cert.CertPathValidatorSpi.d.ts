// @ts-nocheck
declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
            abstract class CertPathValidatorSpi extends java.lang.Object {
                /**
                 * The default constructor.
                 */
                // @ts-ignore
                constructor()
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
                public abstract engineValidate(certPath: java.security.cert.CertPath, params: java.security.cert.CertPathParameters): java.security.cert.CertPathValidatorResult;
                /**
                 * Returns a {@code CertPathChecker} that this implementation uses to
                 * check the revocation status of certificates. A PKIX implementation
                 * returns objects of type {@code PKIXRevocationChecker}.
                 * <p>The primary purpose of this method is to allow callers to specify
                 * additional input parameters and options specific to revocation checking.
                 * See the class description of {@code CertPathValidator} for an example.
                 * <p>This method was added to version 1.8 of the Java Platform Standard
                 * Edition. In order to maintain backwards compatibility with existing
                 * service providers, this method cannot be abstract and by default throws
                 * an {@code UnsupportedOperationException}.
                 */
                // @ts-ignore
                public engineGetRevocationChecker(): java.security.cert.CertPathChecker;
            }
        }
    }
}
