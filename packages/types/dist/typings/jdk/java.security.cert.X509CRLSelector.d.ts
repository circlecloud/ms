// @ts-nocheck
declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
             class X509CRLSelector extends java.lang.Object {
                /**
                 * Creates an {@code X509CRLSelector}. Initially, no criteria are set
                 * so any {@code X509CRL} will match.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Sets the issuerNames criterion. The issuer distinguished name in the
                 * {@code X509CRL} must match at least one of the specified
                 * distinguished names. If {@code null}, any issuer distinguished name
                 * will do.
                 * <p>
                 * This method allows the caller to specify, with a single method call,
                 * the complete set of issuer names which {@code X509CRLs} may contain.
                 * The specified value replaces the previous value for the issuerNames
                 * criterion.
                 * <p>
                 * The {@code names} parameter (if not {@code null}) is a
                 * {@code Collection} of {@code X500Principal}s.
                 * <p>
                 * Note that the {@code names} parameter can contain duplicate
                 * distinguished names, but they may be removed from the
                 * {@code Collection} of names returned by the
                 * {@link #getIssuers getIssuers} method.
                 * <p>
                 * Note that a copy is performed on the {@code Collection} to
                 * protect against subsequent modifications.
                 */
                // @ts-ignore
                public setIssuers(issuers: java.util.Collection): void;
                /**
                 * <strong>Note:</strong> use {@linkplain #setIssuers(Collection)} instead
                 * or only specify the byte array form of distinguished names when using
                 * this method. See {@link #addIssuerName(String)} for more information.
                 * <p>
                 * Sets the issuerNames criterion. The issuer distinguished name in the
                 * {@code X509CRL} must match at least one of the specified
                 * distinguished names. If {@code null}, any issuer distinguished name
                 * will do.
                 * <p>
                 * This method allows the caller to specify, with a single method call,
                 * the complete set of issuer names which {@code X509CRLs} may contain.
                 * The specified value replaces the previous value for the issuerNames
                 * criterion.
                 * <p>
                 * The {@code names} parameter (if not {@code null}) is a
                 * {@code Collection} of names. Each name is a {@code String}
                 * or a byte array representing a distinguished name (in
                 * <a href="http://www.ietf.org/rfc/rfc2253.txt">RFC 2253</a> or
                 * ASN.1 DER encoded form, respectively). If {@code null} is supplied
                 * as the value for this argument, no issuerNames check will be performed.
                 * <p>
                 * Note that the {@code names} parameter can contain duplicate
                 * distinguished names, but they may be removed from the
                 * {@code Collection} of names returned by the
                 * {@link #getIssuerNames getIssuerNames} method.
                 * <p>
                 * If a name is specified as a byte array, it should contain a single DER
                 * encoded distinguished name, as defined in X.501. The ASN.1 notation for
                 * this structure is as follows.
                 * <pre>{@code
                 * Name ::= CHOICE {
                 * RDNSequence }
                 * RDNSequence ::= SEQUENCE OF RelativeDistinguishedName
                 * RelativeDistinguishedName ::=
                 * SET SIZE (1 .. MAX) OF AttributeTypeAndValue
                 * AttributeTypeAndValue ::= SEQUENCE {
                 * type     AttributeType,
                 * value    AttributeValue }
                 * AttributeType ::= OBJECT IDENTIFIER
                 * AttributeValue ::= ANY DEFINED BY AttributeType
                 * ....
                 * DirectoryString ::= CHOICE {
                 * teletexString           TeletexString (SIZE (1..MAX)),
                 * printableString         PrintableString (SIZE (1..MAX)),
                 * universalString         UniversalString (SIZE (1..MAX)),
                 * utf8String              UTF8String (SIZE (1.. MAX)),
                 * bmpString               BMPString (SIZE (1..MAX)) }
                 * }</pre>
                 * <p>
                 * Note that a deep copy is performed on the {@code Collection} to
                 * protect against subsequent modifications.
                 */
                // @ts-ignore
                public setIssuerNames(names: java.util.Collection): void;
                /**
                 * Adds a name to the issuerNames criterion. The issuer distinguished
                 * name in the {@code X509CRL} must match at least one of the specified
                 * distinguished names.
                 * <p>
                 * This method allows the caller to add a name to the set of issuer names
                 * which {@code X509CRLs} may contain. The specified name is added to
                 * any previous value for the issuerNames criterion.
                 * If the specified name is a duplicate, it may be ignored.
                 */
                // @ts-ignore
                public addIssuer(issuer: any /*javax.security.auth.x500.X500Principal*/): void;
                /**
                 * <strong>Denigrated</strong>, use
                 * {@linkplain #addIssuer(X500Principal)} or
                 * {@linkplain #addIssuerName(byte[])} instead. This method should not be
                 * relied on as it can fail to match some CRLs because of a loss of
                 * encoding information in the RFC 2253 String form of some distinguished
                 * names.
                 * <p>
                 * Adds a name to the issuerNames criterion. The issuer distinguished
                 * name in the {@code X509CRL} must match at least one of the specified
                 * distinguished names.
                 * <p>
                 * This method allows the caller to add a name to the set of issuer names
                 * which {@code X509CRLs} may contain. The specified name is added to
                 * any previous value for the issuerNames criterion.
                 * If the specified name is a duplicate, it may be ignored.
                 */
                // @ts-ignore
                public addIssuerName(name: string): void;
                /**
                 * Adds a name to the issuerNames criterion. The issuer distinguished
                 * name in the {@code X509CRL} must match at least one of the specified
                 * distinguished names.
                 * <p>
                 * This method allows the caller to add a name to the set of issuer names
                 * which {@code X509CRLs} may contain. The specified name is added to
                 * any previous value for the issuerNames criterion. If the specified name
                 * is a duplicate, it may be ignored.
                 * If a name is specified as a byte array, it should contain a single DER
                 * encoded distinguished name, as defined in X.501. The ASN.1 notation for
                 * this structure is as follows.
                 * <p>
                 * The name is provided as a byte array. This byte array should contain
                 * a single DER encoded distinguished name, as defined in X.501. The ASN.1
                 * notation for this structure appears in the documentation for
                 * {@link #setIssuerNames setIssuerNames(Collection names)}.
                 * <p>
                 * Note that the byte array supplied here is cloned to protect against
                 * subsequent modifications.
                 */
                // @ts-ignore
                public addIssuerName(name: number): void;
                /**
                 * Sets the minCRLNumber criterion. The {@code X509CRL} must have a
                 * CRL number extension whose value is greater than or equal to the
                 * specified value. If {@code null}, no minCRLNumber check will be
                 * done.
                 */
                // @ts-ignore
                public setMinCRLNumber(minCRL: java.math.BigInteger): void;
                /**
                 * Sets the maxCRLNumber criterion. The {@code X509CRL} must have a
                 * CRL number extension whose value is less than or equal to the
                 * specified value. If {@code null}, no maxCRLNumber check will be
                 * done.
                 */
                // @ts-ignore
                public setMaxCRLNumber(maxCRL: java.math.BigInteger): void;
                /**
                 * Sets the dateAndTime criterion. The specified date must be
                 * equal to or later than the value of the thisUpdate component
                 * of the {@code X509CRL} and earlier than the value of the
                 * nextUpdate component. There is no match if the {@code X509CRL}
                 * does not contain a nextUpdate component.
                 * If {@code null}, no dateAndTime check will be done.
                 * <p>
                 * Note that the {@code Date} supplied here is cloned to protect
                 * against subsequent modifications.
                 */
                // @ts-ignore
                public setDateAndTime(dateAndTime: java.util.Date): void;
                /**
                 * Sets the certificate being checked. This is not a criterion. Rather,
                 * it is optional information that may help a {@code CertStore}
                 * find CRLs that would be relevant when checking revocation for the
                 * specified certificate. If {@code null} is specified, then no
                 * such optional information is provided.
                 */
                // @ts-ignore
                public setCertificateChecking(cert: java.security.cert.X509Certificate): void;
                /**
                 * Returns the issuerNames criterion. The issuer distinguished
                 * name in the {@code X509CRL} must match at least one of the specified
                 * distinguished names. If the value returned is {@code null}, any
                 * issuer distinguished name will do.
                 * <p>
                 * If the value returned is not {@code null}, it is a
                 * unmodifiable {@code Collection} of {@code X500Principal}s.
                 */
                // @ts-ignore
                public getIssuers(): java.util.Collection;
                /**
                 * Returns a copy of the issuerNames criterion. The issuer distinguished
                 * name in the {@code X509CRL} must match at least one of the specified
                 * distinguished names. If the value returned is {@code null}, any
                 * issuer distinguished name will do.
                 * <p>
                 * If the value returned is not {@code null}, it is a
                 * {@code Collection} of names. Each name is a {@code String}
                 * or a byte array representing a distinguished name (in RFC 2253 or
                 * ASN.1 DER encoded form, respectively).  Note that the
                 * {@code Collection} returned may contain duplicate names.
                 * <p>
                 * If a name is specified as a byte array, it should contain a single DER
                 * encoded distinguished name, as defined in X.501. The ASN.1 notation for
                 * this structure is given in the documentation for
                 * {@link #setIssuerNames setIssuerNames(Collection names)}.
                 * <p>
                 * Note that a deep copy is performed on the {@code Collection} to
                 * protect against subsequent modifications.
                 */
                // @ts-ignore
                public getIssuerNames(): java.util.Collection;
                /**
                 * Returns the minCRLNumber criterion. The {@code X509CRL} must have a
                 * CRL number extension whose value is greater than or equal to the
                 * specified value. If {@code null}, no minCRLNumber check will be done.
                 */
                // @ts-ignore
                public getMinCRL(): java.math.BigInteger;
                /**
                 * Returns the maxCRLNumber criterion. The {@code X509CRL} must have a
                 * CRL number extension whose value is less than or equal to the
                 * specified value. If {@code null}, no maxCRLNumber check will be
                 * done.
                 */
                // @ts-ignore
                public getMaxCRL(): java.math.BigInteger;
                /**
                 * Returns the dateAndTime criterion. The specified date must be
                 * equal to or later than the value of the thisUpdate component
                 * of the {@code X509CRL} and earlier than the value of the
                 * nextUpdate component. There is no match if the
                 * {@code X509CRL} does not contain a nextUpdate component.
                 * If {@code null}, no dateAndTime check will be done.
                 * <p>
                 * Note that the {@code Date} returned is cloned to protect against
                 * subsequent modifications.
                 */
                // @ts-ignore
                public getDateAndTime(): java.util.Date;
                /**
                 * Returns the certificate being checked. This is not a criterion. Rather,
                 * it is optional information that may help a {@code CertStore}
                 * find CRLs that would be relevant when checking revocation for the
                 * specified certificate. If the value returned is {@code null}, then
                 * no such optional information is provided.
                 */
                // @ts-ignore
                public getCertificateChecking(): java.security.cert.X509Certificate;
                /**
                 * Returns a printable representation of the {@code X509CRLSelector}.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Decides whether a {@code CRL} should be selected.
                 */
                // @ts-ignore
                public match(crl: java.security.cert.CRL): boolean;
                /**
                 * Returns a copy of this object.
                 */
                // @ts-ignore
                public clone(): java.lang.Object;
            }
        }
    }
}
