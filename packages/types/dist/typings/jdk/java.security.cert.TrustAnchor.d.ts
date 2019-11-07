// @ts-nocheck
declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
             class TrustAnchor extends java.lang.Object {
                /**
                 * Creates an instance of {@code TrustAnchor} with the specified
                 * {@code X509Certificate} and optional name constraints, which
                 * are intended to be used as additional constraints when validating
                 * an X.509 certification path.
                 * <p>
                 * The name constraints are specified as a byte array. This byte array
                 * should contain the DER encoded form of the name constraints, as they
                 * would appear in the NameConstraints structure defined in
                 * <a href="http://www.ietf.org/rfc/rfc3280">RFC 3280</a>
                 * and X.509. The ASN.1 definition of this structure appears below.
                 * <pre>{@code
                 * NameConstraints ::= SEQUENCE {
                 * permittedSubtrees       [0]     GeneralSubtrees OPTIONAL,
                 * excludedSubtrees        [1]     GeneralSubtrees OPTIONAL }
                 * GeneralSubtrees ::= SEQUENCE SIZE (1..MAX) OF GeneralSubtree
                 * GeneralSubtree ::= SEQUENCE {
                 * base                    GeneralName,
                 * minimum         [0]     BaseDistance DEFAULT 0,
                 * maximum         [1]     BaseDistance OPTIONAL }
                 * BaseDistance ::= INTEGER (0..MAX)
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
                 * }</pre>
                 * <p>
                 * Note that the name constraints byte array supplied is cloned to protect
                 * against subsequent modifications.
                 */
                // @ts-ignore
                constructor(trustedCert: java.security.cert.X509Certificate, nameConstraints: number)
                /**
                 * Creates an instance of {@code TrustAnchor} where the
                 * most-trusted CA is specified as an X500Principal and public key.
                 * Name constraints are an optional parameter, and are intended to be used
                 * as additional constraints when validating an X.509 certification path.
                 * <p>
                 * The name constraints are specified as a byte array. This byte array
                 * contains the DER encoded form of the name constraints, as they
                 * would appear in the NameConstraints structure defined in RFC 3280
                 * and X.509. The ASN.1 notation for this structure is supplied in the
                 * documentation for
                 * {@link #TrustAnchor(X509Certificate, byte[])
                 * TrustAnchor(X509Certificate trustedCert, byte[] nameConstraints) }.
                 * <p>
                 * Note that the name constraints byte array supplied here is cloned to
                 * protect against subsequent modifications.
                 */
                // @ts-ignore
                constructor(caPrincipal: any /*javax.security.auth.x500.X500Principal*/, pubKey: java.security.PublicKey, nameConstraints: number)
                /**
                 * Creates an instance of {@code TrustAnchor} where the
                 * most-trusted CA is specified as a distinguished name and public key.
                 * Name constraints are an optional parameter, and are intended to be used
                 * as additional constraints when validating an X.509 certification path.
                 * <p>
                 * The name constraints are specified as a byte array. This byte array
                 * contains the DER encoded form of the name constraints, as they
                 * would appear in the NameConstraints structure defined in RFC 3280
                 * and X.509. The ASN.1 notation for this structure is supplied in the
                 * documentation for
                 * {@link #TrustAnchor(X509Certificate, byte[])
                 * TrustAnchor(X509Certificate trustedCert, byte[] nameConstraints) }.
                 * <p>
                 * Note that the name constraints byte array supplied here is cloned to
                 * protect against subsequent modifications.
                 */
                // @ts-ignore
                constructor(caName: string, pubKey: java.security.PublicKey, nameConstraints: number)
                /**
                 * Returns the most-trusted CA certificate.
                 */
                // @ts-ignore
                public getTrustedCert(): java.security.cert.X509Certificate;
                /**
                 * Returns the name of the most-trusted CA as an X500Principal.
                 */
                // @ts-ignore
                public getCA(): any /*javax.security.auth.x500.X500Principal*/;
                /**
                 * Returns the name of the most-trusted CA in RFC 2253 {@code String}
                 * format.
                 */
                // @ts-ignore
                public getCAName(): string;
                /**
                 * Returns the public key of the most-trusted CA.
                 */
                // @ts-ignore
                public getCAPublicKey(): java.security.PublicKey;
                /**
                 * Returns the name constraints parameter. The specified name constraints
                 * are associated with this trust anchor and are intended to be used
                 * as additional constraints when validating an X.509 certification path.
                 * <p>
                 * The name constraints are returned as a byte array. This byte array
                 * contains the DER encoded form of the name constraints, as they
                 * would appear in the NameConstraints structure defined in RFC 3280
                 * and X.509. The ASN.1 notation for this structure is supplied in the
                 * documentation for
                 * {@link #TrustAnchor(X509Certificate, byte[])
                 * TrustAnchor(X509Certificate trustedCert, byte[] nameConstraints) }.
                 * <p>
                 * Note that the byte array returned is cloned to protect against
                 * subsequent modifications.
                 */
                // @ts-ignore
                public getNameConstraints(): number[];
                /**
                 * Returns a formatted string describing the {@code TrustAnchor}.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
