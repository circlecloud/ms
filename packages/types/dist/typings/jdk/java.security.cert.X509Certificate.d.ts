declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
            abstract class X509Certificate extends java.security.cert.Certificate {
                /**
                 * Constructor for X.509 certificates.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Checks that the certificate is currently valid. It is if
                 * the current date and time are within the validity period given in the
                 * certificate.
                 * <p>
                 * The validity period consists of two date/time values:
                 * the first and last dates (and times) on which the certificate
                 * is valid. It is defined in
                 * ASN.1 as:
                 * <pre>
                 * validity             Validity
                 * Validity ::= SEQUENCE {
                 * notBefore      CertificateValidityDate,
                 * notAfter       CertificateValidityDate }
                 * CertificateValidityDate ::= CHOICE {
                 * utcTime        UTCTime,
                 * generalTime    GeneralizedTime }
                 * </pre>
                 */
                // @ts-ignore
                public abstract checkValidity(): void;
                /**
                 * Gets the {@code version} (version number) value from the
                 * certificate.
                 * The ASN.1 definition for this is:
                 * <pre>
                 * version  [0] EXPLICIT Version DEFAULT v1
                 * Version ::=  INTEGER  {  v1(0), v2(1), v3(2)  }
                 * </pre>
                 */
                // @ts-ignore
                public abstract getVersion(): number;
                /**
                 * Gets the {@code serialNumber} value from the certificate.
                 * The serial number is an integer assigned by the certification
                 * authority to each certificate. It must be unique for each
                 * certificate issued by a given CA (i.e., the issuer name and
                 * serial number identify a unique certificate).
                 * The ASN.1 definition for this is:
                 * <pre>
                 * serialNumber     CertificateSerialNumber
                 * CertificateSerialNumber  ::=  INTEGER
                 * </pre>
                 */
                // @ts-ignore
                public abstract getSerialNumber(): java.math.BigInteger;
                /**
                 * <strong>Denigrated</strong>, replaced by {@linkplain
                 * #getIssuerX500Principal()}. This method returns the {@code issuer}
                 * as an implementation specific Principal object, which should not be
                 * relied upon by portable code.
                 * <p>
                 * Gets the {@code issuer} (issuer distinguished name) value from
                 * the certificate. The issuer name identifies the entity that signed (and
                 * issued) the certificate.
                 * <p>The issuer name field contains an
                 * X.500 distinguished name (DN).
                 * The ASN.1 definition for this is:
                 * <pre>
                 * issuer    Name
                 * Name ::= CHOICE { RDNSequence }
                 * RDNSequence ::= SEQUENCE OF RelativeDistinguishedName
                 * RelativeDistinguishedName ::=
                 * SET OF AttributeValueAssertion
                 * AttributeValueAssertion ::= SEQUENCE {
                 * AttributeType,
                 * AttributeValue }
                 * AttributeType ::= OBJECT IDENTIFIER
                 * AttributeValue ::= ANY
                 * </pre>
                 * The {@code Name} describes a hierarchical name composed of
                 * attributes,
                 * such as country name, and corresponding values, such as US.
                 * The type of the {@code AttributeValue} component is determined by
                 * the {@code AttributeType}; in general it will be a
                 * {@code directoryString}. A {@code directoryString} is usually
                 * one of {@code PrintableString},
                 * {@code TeletexString} or {@code UniversalString}.
                 */
                // @ts-ignore
                public abstract getIssuerDN(): java.security.Principal;
                /**
                 * Returns the issuer (issuer distinguished name) value from the
                 * certificate as an {@code X500Principal}.
                 * <p>
                 * It is recommended that subclasses override this method.
                 */
                // @ts-ignore
                public getIssuerX500Principal(): any /*javax.security.auth.x500.X500Principal*/;
                /**
                 * <strong>Denigrated</strong>, replaced by {@linkplain
                 * #getSubjectX500Principal()}. This method returns the {@code subject}
                 * as an implementation specific Principal object, which should not be
                 * relied upon by portable code.
                 * <p>
                 * Gets the {@code subject} (subject distinguished name) value
                 * from the certificate.  If the {@code subject} value is empty,
                 * then the {@code getName()} method of the returned
                 * {@code Principal} object returns an empty string ("").
                 * <p> The ASN.1 definition for this is:
                 * <pre>
                 * subject    Name
                 * </pre>
                 * <p>See {@link #getIssuerDN() getIssuerDN} for {@code Name}
                 * and other relevant definitions.
                 */
                // @ts-ignore
                public abstract getSubjectDN(): java.security.Principal;
                /**
                 * Returns the subject (subject distinguished name) value from the
                 * certificate as an {@code X500Principal}.  If the subject value
                 * is empty, then the {@code getName()} method of the returned
                 * {@code X500Principal} object returns an empty string ("").
                 * <p>
                 * It is recommended that subclasses override this method.
                 */
                // @ts-ignore
                public getSubjectX500Principal(): any /*javax.security.auth.x500.X500Principal*/;
                /**
                 * Gets the {@code notBefore} date from the validity period of
                 * the certificate.
                 * The relevant ASN.1 definitions are:
                 * <pre>
                 * validity             Validity
                 * Validity ::= SEQUENCE {
                 * notBefore      CertificateValidityDate,
                 * notAfter       CertificateValidityDate }
                 * CertificateValidityDate ::= CHOICE {
                 * utcTime        UTCTime,
                 * generalTime    GeneralizedTime }
                 * </pre>
                 */
                // @ts-ignore
                public abstract getNotBefore(): java.util.Date;
                /**
                 * Gets the {@code notAfter} date from the validity period of
                 * the certificate. See {@link #getNotBefore() getNotBefore}
                 * for relevant ASN.1 definitions.
                 */
                // @ts-ignore
                public abstract getNotAfter(): java.util.Date;
                /**
                 * Gets the DER-encoded certificate information, the
                 * {@code tbsCertificate} from this certificate.
                 * This can be used to verify the signature independently.
                 */
                // @ts-ignore
                public abstract getTBSCertificate(): number[];
                /**
                 * Gets the {@code signature} value (the raw signature bits) from
                 * the certificate.
                 * The ASN.1 definition for this is:
                 * <pre>
                 * signature     BIT STRING
                 * </pre>
                 */
                // @ts-ignore
                public abstract getSignature(): number[];
                /**
                 * Gets the signature algorithm name for the certificate
                 * signature algorithm. An example is the string "SHA256withRSA".
                 * The ASN.1 definition for this is:
                 * <pre>
                 * signatureAlgorithm   AlgorithmIdentifier
                 * AlgorithmIdentifier  ::=  SEQUENCE  {
                 * algorithm               OBJECT IDENTIFIER,
                 * parameters              ANY DEFINED BY algorithm OPTIONAL  }
                 * -- contains a value of the type
                 * -- registered for use with the
                 * -- algorithm object identifier value
                 * </pre>
                 * <p>The algorithm name is determined from the {@code algorithm}
                 * OID string.
                 */
                // @ts-ignore
                public abstract getSigAlgName(): string;
                /**
                 * Gets the signature algorithm OID string from the certificate.
                 * An OID is represented by a set of nonnegative whole numbers separated
                 * by periods.
                 * For example, the string "1.2.840.10040.4.3" identifies the SHA-1
                 * with DSA signature algorithm defined in
                 * <a href="http://www.ietf.org/rfc/rfc3279.txt">RFC 3279: Algorithms and
                 * Identifiers for the Internet X.509 Public Key Infrastructure Certificate
                 * and CRL Profile</a>.
                 * <p>See {@link #getSigAlgName() getSigAlgName} for
                 * relevant ASN.1 definitions.
                 */
                // @ts-ignore
                public abstract getSigAlgOID(): string;
                /**
                 * Gets the DER-encoded signature algorithm parameters from this
                 * certificate's signature algorithm. In most cases, the signature
                 * algorithm parameters are null; the parameters are usually
                 * supplied with the certificate's public key.
                 * If access to individual parameter values is needed then use
                 * {@link java.security.AlgorithmParameters AlgorithmParameters}
                 * and instantiate with the name returned by
                 * {@link #getSigAlgName() getSigAlgName}.
                 * <p>See {@link #getSigAlgName() getSigAlgName} for
                 * relevant ASN.1 definitions.
                 */
                // @ts-ignore
                public abstract getSigAlgParams(): number[];
                /**
                 * Gets the {@code issuerUniqueID} value from the certificate.
                 * The issuer unique identifier is present in the certificate
                 * to handle the possibility of reuse of issuer names over time.
                 * RFC 3280 recommends that names not be reused and that
                 * conforming certificates not make use of unique identifiers.
                 * Applications conforming to that profile should be capable of
                 * parsing unique identifiers and making comparisons.
                 * <p>The ASN.1 definition for this is:
                 * <pre>
                 * issuerUniqueID  [1]  IMPLICIT UniqueIdentifier OPTIONAL
                 * UniqueIdentifier  ::=  BIT STRING
                 * </pre>
                 */
                // @ts-ignore
                public abstract getIssuerUniqueID(): boolean[];
                /**
                 * Gets the {@code subjectUniqueID} value from the certificate.
                 * <p>The ASN.1 definition for this is:
                 * <pre>
                 * subjectUniqueID  [2]  IMPLICIT UniqueIdentifier OPTIONAL
                 * UniqueIdentifier  ::=  BIT STRING
                 * </pre>
                 */
                // @ts-ignore
                public abstract getSubjectUniqueID(): boolean[];
                /**
                 * Gets a boolean array representing bits of
                 * the {@code KeyUsage} extension, (OID = 2.5.29.15).
                 * The key usage extension defines the purpose (e.g., encipherment,
                 * signature, certificate signing) of the key contained in the
                 * certificate.
                 * The ASN.1 definition for this is:
                 * <pre>
                 * KeyUsage ::= BIT STRING {
                 * digitalSignature        (0),
                 * nonRepudiation          (1),
                 * keyEncipherment         (2),
                 * dataEncipherment        (3),
                 * keyAgreement            (4),
                 * keyCertSign             (5),
                 * cRLSign                 (6),
                 * encipherOnly            (7),
                 * decipherOnly            (8) }
                 * </pre>
                 * RFC 3280 recommends that when used, this be marked
                 * as a critical extension.
                 */
                // @ts-ignore
                public abstract getKeyUsage(): boolean[];
                /**
                 * Gets an unmodifiable list of Strings representing the OBJECT
                 * IDENTIFIERs of the {@code ExtKeyUsageSyntax} field of the
                 * extended key usage extension, (OID = 2.5.29.37).  It indicates
                 * one or more purposes for which the certified public key may be
                 * used, in addition to or in place of the basic purposes
                 * indicated in the key usage extension field.  The ASN.1
                 * definition for this is:
                 * <pre>
                 * ExtKeyUsageSyntax ::= SEQUENCE SIZE (1..MAX) OF KeyPurposeId
                 * KeyPurposeId ::= OBJECT IDENTIFIER
                 * </pre>
                 * Key purposes may be defined by any organization with a
                 * need. Object identifiers used to identify key purposes shall be
                 * assigned in accordance with IANA or ITU-T Rec. X.660 |
                 * ISO/IEC/ITU 9834-1.
                 * <p>
                 * This method was added to version 1.4 of the Java 2 Platform Standard
                 * Edition. In order to maintain backwards compatibility with existing
                 * service providers, this method is not {@code abstract}
                 * and it provides a default implementation. Subclasses
                 * should override this method with a correct implementation.
                 */
                // @ts-ignore
                public getExtendedKeyUsage(): java.util.List;
                /**
                 * Gets the certificate constraints path length from the
                 * critical {@code BasicConstraints} extension, (OID = 2.5.29.19).
                 * <p>
                 * The basic constraints extension identifies whether the subject
                 * of the certificate is a Certificate Authority (CA) and
                 * how deep a certification path may exist through that CA. The
                 * {@code pathLenConstraint} field (see below) is meaningful
                 * only if {@code cA} is set to TRUE. In this case, it gives the
                 * maximum number of CA certificates that may follow this certificate in a
                 * certification path. A value of zero indicates that only an end-entity
                 * certificate may follow in the path.
                 * <p>
                 * The ASN.1 definition for this is:
                 * <pre>
                 * BasicConstraints ::= SEQUENCE {
                 * cA                  BOOLEAN DEFAULT FALSE,
                 * pathLenConstraint   INTEGER (0..MAX) OPTIONAL }
                 * </pre>
                 */
                // @ts-ignore
                public abstract getBasicConstraints(): number;
                /**
                 * Gets an immutable collection of subject alternative names from the
                 * {@code SubjectAltName} extension, (OID = 2.5.29.17).
                 * <p>
                 * The ASN.1 definition of the {@code SubjectAltName} extension is:
                 * <pre>
                 * SubjectAltName ::= GeneralNames
                 * GeneralNames :: = SEQUENCE SIZE (1..MAX) OF GeneralName
                 * GeneralName ::= CHOICE {
                 * otherName                       [0]     OtherName,
                 * rfc822Name                      [1]     IA5String,
                 * dNSName                         [2]     IA5String,
                 * x400Address                     [3]     ORAddress,
                 * directoryName                   [4]     Name,
                 * ediPartyName                    [5]     EDIPartyName,
                 * uniformResourceIdentifier       [6]     IA5String,
                 * iPAddress                       [7]     OCTET STRING,
                 * registeredID                    [8]     OBJECT IDENTIFIER}
                 * </pre>
                 * <p>
                 * If this certificate does not contain a {@code SubjectAltName}
                 * extension, {@code null} is returned. Otherwise, a
                 * {@code Collection} is returned with an entry representing each
                 * {@code GeneralName} included in the extension. Each entry is a
                 * {@code List} whose first entry is an {@code Integer}
                 * (the name type, 0-8) and whose second entry is a {@code String}
                 * or a byte array (the name, in string or ASN.1 DER encoded form,
                 * respectively).
                 * <p>
                 * <a href="http://www.ietf.org/rfc/rfc822.txt">RFC 822</a>, DNS, and URI
                 * names are returned as {@code String}s,
                 * using the well-established string formats for those types (subject to
                 * the restrictions included in RFC 3280). IPv4 address names are
                 * returned using dotted quad notation. IPv6 address names are returned
                 * in the form "a1:a2:...:a8", where a1-a8 are hexadecimal values
                 * representing the eight 16-bit pieces of the address. OID names are
                 * returned as {@code String}s represented as a series of nonnegative
                 * integers separated by periods. And directory names (distinguished names)
                 * are returned in <a href="http://www.ietf.org/rfc/rfc2253.txt">
                 * RFC 2253</a> string format. No standard string format is
                 * defined for otherNames, X.400 names, EDI party names, or any
                 * other type of names. They are returned as byte arrays
                 * containing the ASN.1 DER encoded form of the name.
                 * <p>
                 * Note that the {@code Collection} returned may contain more
                 * than one name of the same type. Also, note that the returned
                 * {@code Collection} is immutable and any entries containing byte
                 * arrays are cloned to protect against subsequent modifications.
                 * <p>
                 * This method was added to version 1.4 of the Java 2 Platform Standard
                 * Edition. In order to maintain backwards compatibility with existing
                 * service providers, this method is not {@code abstract}
                 * and it provides a default implementation. Subclasses
                 * should override this method with a correct implementation.
                 */
                // @ts-ignore
                public getSubjectAlternativeNames(): java.util.Collection;
                /**
                 * Gets an immutable collection of issuer alternative names from the
                 * {@code IssuerAltName} extension, (OID = 2.5.29.18).
                 * <p>
                 * The ASN.1 definition of the {@code IssuerAltName} extension is:
                 * <pre>
                 * IssuerAltName ::= GeneralNames
                 * </pre>
                 * The ASN.1 definition of {@code GeneralNames} is defined
                 * in {@link #getSubjectAlternativeNames getSubjectAlternativeNames}.
                 * <p>
                 * If this certificate does not contain an {@code IssuerAltName}
                 * extension, {@code null} is returned. Otherwise, a
                 * {@code Collection} is returned with an entry representing each
                 * {@code GeneralName} included in the extension. Each entry is a
                 * {@code List} whose first entry is an {@code Integer}
                 * (the name type, 0-8) and whose second entry is a {@code String}
                 * or a byte array (the name, in string or ASN.1 DER encoded form,
                 * respectively). For more details about the formats used for each
                 * name type, see the {@code getSubjectAlternativeNames} method.
                 * <p>
                 * Note that the {@code Collection} returned may contain more
                 * than one name of the same type. Also, note that the returned
                 * {@code Collection} is immutable and any entries containing byte
                 * arrays are cloned to protect against subsequent modifications.
                 * <p>
                 * This method was added to version 1.4 of the Java 2 Platform Standard
                 * Edition. In order to maintain backwards compatibility with existing
                 * service providers, this method is not {@code abstract}
                 * and it provides a default implementation. Subclasses
                 * should override this method with a correct implementation.
                 */
                // @ts-ignore
                public getIssuerAlternativeNames(): java.util.Collection;
                /**
                 * Verifies that this certificate was signed using the
                 * private key that corresponds to the specified public key.
                 * This method uses the signature verification engine
                 * supplied by the specified provider. Note that the specified
                 * Provider object does not have to be registered in the provider list.
                 * This method was added to version 1.8 of the Java Platform Standard
                 * Edition. In order to maintain backwards compatibility with existing
                 * service providers, this method is not {@code abstract}
                 * and it provides a default implementation.
                 */
                // @ts-ignore
                public verify(key: java.security.PublicKey, sigProvider: java.security.Provider): void;
            }
        }
    }
}
