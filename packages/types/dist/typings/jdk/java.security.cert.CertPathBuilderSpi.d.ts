// @ts-nocheck
declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
            abstract class CertPathBuilderSpi extends java.lang.Object {
                /**
                 * The default constructor.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Attempts to build a certification path using the specified
                 * algorithm parameter set.
                 */
                // @ts-ignore
                public abstract engineBuild(params: java.security.cert.CertPathParameters): java.security.cert.CertPathBuilderResult;
                /**
                 * Returns a {@code CertPathChecker} that this implementation uses to
                 * check the revocation status of certificates. A PKIX implementation
                 * returns objects of type {@code PKIXRevocationChecker}.
                 * <p>The primary purpose of this method is to allow callers to specify
                 * additional input parameters and options specific to revocation checking.
                 * See the class description of {@code CertPathBuilder} for an example.
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
