declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
            abstract class X509CRL extends java.security.cert.CRL {
                /**
                 * Constructor for X.509 CRLs.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Compares this CRL for equality with the given
                 * object. If the {@code other} object is an
                 * {@code instanceof} {@code X509CRL}, then
                 * its encoded form is retrieved and compared with the
                 * encoded form of this CRL.
                 */
                // @ts-ignore
                public equals(other: java.lang.Object): boolean;
                /**
                 * Returns a hashcode value for this CRL from its
                 * encoded form.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns the ASN.1 DER-encoded form of this CRL.
                 */
                // @ts-ignore
                public abstract getEncoded(): number[];
                /**
                 * Verifies that this CRL was signed using the
                 * private key that corresponds to the given public key.
                 */
                // @ts-ignore
                public abstract verify(key: java.security.PublicKey): void;
                /**
                 * Verifies that this CRL was signed using the
                 * private key that corresponds to the given public key.
                 * This method uses the signature verification engine
                 * supplied by the given provider. Note that the specified Provider object
                 * does not have to be registered in the provider list.
                 * This method was added to version 1.8 of the Java Platform Standard
                 * Edition. In order to maintain backwards compatibility with existing
                 * service providers, this method is not {@code abstract}
                 * and it provides a default implementation.
                 */
                // @ts-ignore
                public verify(key: java.security.PublicKey, sigProvider: java.security.Provider): void;
                /**
                 * Gets the {@code version} (version number) value from the CRL.
                 * The ASN.1 definition for this is:
                 * <pre>
                 * version    Version OPTIONAL,
                 * -- if present, must be v2
                 * Version  ::=  INTEGER  {  v1(0), v2(1), v3(2)  }
                 * -- v3 does not apply to CRLs but appears for consistency
                 * -- with definition of Version for certs
                 * </pre>
                 */
                // @ts-ignore
                public abstract getVersion(): number;
                /**
                 * <strong>Denigrated</strong>, replaced by {@linkplain
                 * #getIssuerX500Principal()}. This method returns the {@code issuer}
                 * as an implementation specific Principal object, which should not be
                 * relied upon by portable code.
                 * <p>
                 * Gets the {@code issuer} (issuer distinguished name) value from
                 * the CRL. The issuer name identifies the entity that signed (and
                 * issued) the CRL.
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
                 * CRL as an {@code X500Principal}.
                 * <p>
                 * It is recommended that subclasses override this method.
                 */
                // @ts-ignore
                public getIssuerX500Principal(): any /*javax.security.auth.x500.X500Principal*/;
                /**
                 * Gets the {@code thisUpdate} date from the CRL.
                 * The ASN.1 definition for this is:
                 * <pre>
                 * thisUpdate   ChoiceOfTime
                 * ChoiceOfTime ::= CHOICE {
                 * utcTime        UTCTime,
                 * generalTime    GeneralizedTime }
                 * </pre>
                 */
                // @ts-ignore
                public abstract getThisUpdate(): java.util.Date;
                /**
                 * Gets the {@code nextUpdate} date from the CRL.
                 */
                // @ts-ignore
                public abstract getNextUpdate(): java.util.Date;
                /**
                 * Gets the CRL entry, if any, with the given certificate serialNumber.
                 */
                // @ts-ignore
                public abstract getRevokedCertificate(serialNumber: java.math.BigInteger): java.security.cert.X509CRLEntry;
                /**
                 * Get the CRL entry, if any, for the given certificate.
                 * <p>This method can be used to lookup CRL entries in indirect CRLs,
                 * that means CRLs that contain entries from issuers other than the CRL
                 * issuer. The default implementation will only return entries for
                 * certificates issued by the CRL issuer. Subclasses that wish to
                 * support indirect CRLs should override this method.
                 */
                // @ts-ignore
                public getRevokedCertificate(certificate: java.security.cert.X509Certificate): java.security.cert.X509CRLEntry;
                /**
                 * Gets all the entries from this CRL.
                 * This returns a Set of X509CRLEntry objects.
                 */
                // @ts-ignore
                public abstract getRevokedCertificates(): java.util.Set;
                /**
                 * Gets the DER-encoded CRL information, the
                 * {@code tbsCertList} from this CRL.
                 * This can be used to verify the signature independently.
                 */
                // @ts-ignore
                public abstract getTBSCertList(): number[];
                /**
                 * Gets the {@code signature} value (the raw signature bits) from
                 * the CRL.
                 * The ASN.1 definition for this is:
                 * <pre>
                 * signature     BIT STRING
                 * </pre>
                 */
                // @ts-ignore
                public abstract getSignature(): number[];
                /**
                 * Gets the signature algorithm name for the CRL
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
                 * Gets the signature algorithm OID string from the CRL.
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
                 * CRL's signature algorithm. In most cases, the signature
                 * algorithm parameters are null; the parameters are usually
                 * supplied with the public key.
                 * If access to individual parameter values is needed then use
                 * {@link java.security.AlgorithmParameters AlgorithmParameters}
                 * and instantiate with the name returned by
                 * {@link #getSigAlgName() getSigAlgName}.
                 * <p>See {@link #getSigAlgName() getSigAlgName} for
                 * relevant ASN.1 definitions.
                 */
                // @ts-ignore
                public abstract getSigAlgParams(): number[];
            }
        }
    }
}
