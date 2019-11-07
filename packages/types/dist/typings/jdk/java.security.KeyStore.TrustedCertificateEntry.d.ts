declare namespace java {
    namespace security {
        namespace KeyStore {
            // @ts-ignore
             class TrustedCertificateEntry extends java.lang.Object {
                /**
                 * Constructs a {@code TrustedCertificateEntry} with a
                 * trusted {@code Certificate}.
                 */
                // @ts-ignore
                constructor(trustedCert: java.security.cert.Certificate)
                /**
                 * Constructs a {@code TrustedCertificateEntry} with a
                 * trusted {@code Certificate} and associated entry attributes.
                 * <p> The specified {@code attributes} is cloned before it is stored
                 * in the new {@code TrustedCertificateEntry} object.
                 */
                // @ts-ignore
                constructor(trustedCert: java.security.cert.Certificate, attributes: java.util.Set)
                /**
                 * Gets the trusted {@code Certficate} from this entry.
                 */
                // @ts-ignore
                public getTrustedCertificate(): java.security.cert.Certificate;
                /**
                 * Retrieves the attributes associated with an entry.
                 * <p>
                 */
                // @ts-ignore
                public getAttributes(): java.util.Set;
                /**
                 * Returns a string representation of this TrustedCertificateEntry.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
