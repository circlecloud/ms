// @ts-nocheck
declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
            abstract class PKIXRevocationChecker extends java.security.cert.PKIXCertPathChecker {
                /**
                 * Default constructor.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Sets the URI that identifies the location of the OCSP responder. This
                 * overrides the {@code ocsp.responderURL} security property and any
                 * responder specified in a certificate's Authority Information Access
                 * Extension, as defined in RFC 5280.
                 */
                // @ts-ignore
                public setOcspResponder(uri: java.net.URI): void;
                /**
                 * Gets the URI that identifies the location of the OCSP responder. This
                 * overrides the {@code ocsp.responderURL} security property. If this
                 * parameter or the {@code ocsp.responderURL} property is not set, the
                 * location is determined from the certificate's Authority Information
                 * Access Extension, as defined in RFC 5280.
                 */
                // @ts-ignore
                public getOcspResponder(): java.net.URI;
                /**
                 * Sets the OCSP responder's certificate. This overrides the
                 * {@code ocsp.responderCertSubjectName},
                 * {@code ocsp.responderCertIssuerName},
                 * and {@code ocsp.responderCertSerialNumber} security properties.
                 */
                // @ts-ignore
                public setOcspResponderCert(cert: java.security.cert.X509Certificate): void;
                /**
                 * Gets the OCSP responder's certificate. This overrides the
                 * {@code ocsp.responderCertSubjectName},
                 * {@code ocsp.responderCertIssuerName},
                 * and {@code ocsp.responderCertSerialNumber} security properties. If this
                 * parameter or the aforementioned properties are not set, then the
                 * responder's certificate is determined as specified in RFC 2560.
                 */
                // @ts-ignore
                public getOcspResponderCert(): java.security.cert.X509Certificate;
                /**
                 * Sets the optional OCSP request extensions.
                 */
                // @ts-ignore
                public setOcspExtensions(extensions: java.util.List): void;
                /**
                 * Gets the optional OCSP request extensions.
                 */
                // @ts-ignore
                public getOcspExtensions(): java.util.List;
                /**
                 * Sets the OCSP responses. These responses are used to determine
                 * the revocation status of the specified certificates when OCSP is used.
                 */
                // @ts-ignore
                public setOcspResponses(responses: java.util.Map): void;
                /**
                 * Gets the OCSP responses. These responses are used to determine
                 * the revocation status of the specified certificates when OCSP is used.
                 */
                // @ts-ignore
                public getOcspResponses(): java.util.Map;
                /**
                 * Sets the revocation options.
                 */
                // @ts-ignore
                public setOptions(options: java.util.Set): void;
                /**
                 * Gets the revocation options.
                 */
                // @ts-ignore
                public getOptions(): java.util.Set;
                /**
                 * Returns a list containing the exceptions that are ignored by the
                 * revocation checker when the {@link Option#SOFT_FAIL SOFT_FAIL} option
                 * is set. The list is cleared each time {@link #init init} is called.
                 * The list is ordered in ascending order according to the certificate
                 * index returned by {@link CertPathValidatorException#getIndex getIndex}
                 * method of each entry.
                 * <p>
                 * An implementation of {@code PKIXRevocationChecker} is responsible for
                 * adding the ignored exceptions to the list.
                 */
                // @ts-ignore
                public abstract getSoftFailExceptions(): java.util.List;
                // @ts-ignore
                public clone(): java.security.cert.PKIXRevocationChecker;
            }
        }
    }
}
