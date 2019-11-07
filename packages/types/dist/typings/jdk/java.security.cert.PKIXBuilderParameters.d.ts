// @ts-nocheck
declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
             class PKIXBuilderParameters extends java.security.cert.PKIXParameters {
                /**
                 * Creates an instance of {@code PKIXBuilderParameters} with
                 * the specified {@code Set} of most-trusted CAs.
                 * Each element of the set is a {@link TrustAnchor TrustAnchor}.
                 * <p>Note that the {@code Set} is copied to protect against
                 * subsequent modifications.
                 */
                // @ts-ignore
                constructor(trustAnchors: java.util.Set, targetConstraints: java.security.cert.CertSelector)
                /**
                 * Creates an instance of {@code PKIXBuilderParameters} that
                 * populates the set of most-trusted CAs from the trusted
                 * certificate entries contained in the specified {@code KeyStore}.
                 * Only keystore entries that contain trusted {@code X509Certificate}s
                 * are considered; all other certificate types are ignored.
                 */
                // @ts-ignore
                constructor(keystore: java.security.KeyStore, targetConstraints: java.security.cert.CertSelector)
                /**
                 * Sets the value of the maximum number of non-self-issued intermediate
                 * certificates that may exist in a certification path. A certificate
                 * is self-issued if the DNs that appear in the subject and issuer
                 * fields are identical and are not empty. Note that the last certificate
                 * in a certification path is not an intermediate certificate, and is not
                 * included in this limit. Usually the last certificate is an end entity
                 * certificate, but it can be a CA certificate. A PKIX
                 * {@code CertPathBuilder} instance must not build
                 * paths longer than the length specified.
                 * <p> A value of 0 implies that the path can only contain
                 * a single certificate. A value of -1 implies that the
                 * path length is unconstrained (i.e. there is no maximum).
                 * The default maximum path length, if not specified, is 5.
                 * Setting a value less than -1 will cause an exception to be thrown.
                 * <p> If any of the CA certificates contain the
                 * {@code BasicConstraintsExtension}, the value of the
                 * {@code pathLenConstraint} field of the extension overrides
                 * the maximum path length parameter whenever the result is a
                 * certification path of smaller length.
                 */
                // @ts-ignore
                public setMaxPathLength(maxPathLength: number): void;
                /**
                 * Returns the value of the maximum number of intermediate non-self-issued
                 * certificates that may exist in a certification path. See
                 * the {@link #setMaxPathLength} method for more details.
                 */
                // @ts-ignore
                public getMaxPathLength(): number;
                /**
                 * Returns a formatted string describing the parameters.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
