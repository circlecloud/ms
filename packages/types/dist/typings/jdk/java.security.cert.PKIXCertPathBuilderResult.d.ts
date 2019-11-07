// @ts-nocheck
declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
             class PKIXCertPathBuilderResult extends java.security.cert.PKIXCertPathValidatorResult {
                /**
                 * Creates an instance of {@code PKIXCertPathBuilderResult}
                 * containing the specified parameters.
                 */
                // @ts-ignore
                constructor(certPath: java.security.cert.CertPath, trustAnchor: java.security.cert.TrustAnchor, policyTree: java.security.cert.PolicyNode, subjectPublicKey: java.security.PublicKey)
                /**
                 * Returns the built and validated certification path. The
                 * {@code CertPath} object does not include the trust anchor.
                 * Instead, use the {@link #getTrustAnchor() getTrustAnchor()} method to
                 * obtain the {@code TrustAnchor} that served as the trust anchor
                 * for the certification path.
                 */
                // @ts-ignore
                public getCertPath(): java.security.cert.CertPath;
                /**
                 * Return a printable representation of this
                 * {@code PKIXCertPathBuilderResult}.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
