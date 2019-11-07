declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
            abstract class X509CRLEntry extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Compares this CRL entry for equality with the given
                 * object. If the {@code other} object is an
                 * {@code instanceof} {@code X509CRLEntry}, then
                 * its encoded form (the inner SEQUENCE) is retrieved and compared
                 * with the encoded form of this CRL entry.
                 */
                // @ts-ignore
                public equals(other: java.lang.Object): boolean;
                /**
                 * Returns a hashcode value for this CRL entry from its
                 * encoded form.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns the ASN.1 DER-encoded form of this CRL Entry,
                 * that is the inner SEQUENCE.
                 */
                // @ts-ignore
                public abstract getEncoded(): number[];
                /**
                 * Gets the serial number from this X509CRLEntry,
                 * the <em>userCertificate</em>.
                 */
                // @ts-ignore
                public abstract getSerialNumber(): java.math.BigInteger;
                /**
                 * Get the issuer of the X509Certificate described by this entry. If
                 * the certificate issuer is also the CRL issuer, this method returns
                 * null.
                 * <p>This method is used with indirect CRLs. The default implementation
                 * always returns null. Subclasses that wish to support indirect CRLs
                 * should override it.
                 */
                // @ts-ignore
                public getCertificateIssuer(): any /*javax.security.auth.x500.X500Principal*/;
                /**
                 * Gets the revocation date from this X509CRLEntry,
                 * the <em>revocationDate</em>.
                 */
                // @ts-ignore
                public abstract getRevocationDate(): java.util.Date;
                /**
                 * Returns true if this CRL entry has extensions.
                 */
                // @ts-ignore
                public abstract hasExtensions(): boolean;
                /**
                 * Returns a string representation of this CRL entry.
                 */
                // @ts-ignore
                public abstract toString(): string;
                /**
                 * Returns the reason the certificate has been revoked, as specified
                 * in the Reason Code extension of this CRL entry.
                 */
                // @ts-ignore
                public getRevocationReason(): java.security.cert.CRLReason;
            }
        }
    }
}
