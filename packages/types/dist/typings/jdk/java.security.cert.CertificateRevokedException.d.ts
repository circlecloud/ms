declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
             class CertificateRevokedException extends java.security.cert.CertificateException {
                /**
                 * Constructs a {@code CertificateRevokedException} with
                 * the specified revocation date, reason code, authority name, and map
                 * of extensions.
                 */
                // @ts-ignore
                constructor(revocationDate: java.util.Date, reason: java.security.cert.CRLReason, authority: any /*javax.security.auth.x500.X500Principal*/, extensions: java.util.Map)
                /**
                 * Returns the date on which the certificate was revoked. A new copy is
                 * returned each time the method is invoked to protect against subsequent
                 * modification.
                 */
                // @ts-ignore
                public getRevocationDate(): java.util.Date;
                /**
                 * Returns the reason the certificate was revoked.
                 */
                // @ts-ignore
                public getRevocationReason(): java.security.cert.CRLReason;
                /**
                 * Returns the name of the authority that signed the certificate's
                 * revocation status information.
                 */
                // @ts-ignore
                public getAuthorityName(): any /*javax.security.auth.x500.X500Principal*/;
                /**
                 * Returns the invalidity date, as specified in the Invalidity Date
                 * extension of this {@code CertificateRevokedException}. The
                 * invalidity date is the date on which it is known or suspected that the
                 * private key was compromised or that the certificate otherwise became
                 * invalid. This implementation calls {@code getExtensions()} and
                 * checks the returned map for an entry for the Invalidity Date extension
                 * OID ("2.5.29.24"). If found, it returns the invalidity date in the
                 * extension; otherwise null. A new Date object is returned each time the
                 * method is invoked to protect against subsequent modification.
                 */
                // @ts-ignore
                public getInvalidityDate(): java.util.Date;
                /**
                 * Returns a map of X.509 extensions containing additional information
                 * about the revoked certificate, such as the Invalidity Date
                 * Extension. Each key is an OID String that maps to the corresponding
                 * Extension.
                 */
                // @ts-ignore
                public getExtensions(): java.util.Map;
                // @ts-ignore
                public getMessage(): string;
            }
        }
    }
}
