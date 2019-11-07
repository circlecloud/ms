declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
             class PKIXParameters extends java.lang.Object {
                /**
                 * Creates an instance of {@code PKIXParameters} with the specified
                 * {@code Set} of most-trusted CAs. Each element of the
                 * set is a {@link TrustAnchor TrustAnchor}.
                 * <p>
                 * Note that the {@code Set} is copied to protect against
                 * subsequent modifications.
                 */
                // @ts-ignore
                constructor(trustAnchors: java.util.Set)
                /**
                 * Creates an instance of {@code PKIXParameters} that
                 * populates the set of most-trusted CAs from the trusted
                 * certificate entries contained in the specified {@code KeyStore}.
                 * Only keystore entries that contain trusted {@code X509Certificates}
                 * are considered; all other certificate types are ignored.
                 */
                // @ts-ignore
                constructor(keystore: java.security.KeyStore)
                /**
                 * Returns an immutable {@code Set} of the most-trusted
                 * CAs.
                 */
                // @ts-ignore
                public getTrustAnchors(): java.util.Set;
                /**
                 * Sets the {@code Set} of most-trusted CAs.
                 * <p>
                 * Note that the {@code Set} is copied to protect against
                 * subsequent modifications.
                 */
                // @ts-ignore
                public setTrustAnchors(trustAnchors: java.util.Set): void;
                /**
                 * Returns an immutable {@code Set} of initial
                 * policy identifiers (OID strings), indicating that any one of these
                 * policies would be acceptable to the certificate user for the purposes of
                 * certification path processing. The default return value is an empty
                 * {@code Set}, which is interpreted as meaning that any policy would
                 * be acceptable.
                 */
                // @ts-ignore
                public getInitialPolicies(): java.util.Set;
                /**
                 * Sets the {@code Set} of initial policy identifiers
                 * (OID strings), indicating that any one of these
                 * policies would be acceptable to the certificate user for the purposes of
                 * certification path processing. By default, any policy is acceptable
                 * (i.e. all policies), so a user that wants to allow any policy as
                 * acceptable does not need to call this method, or can call it
                 * with an empty {@code Set} (or {@code null}).
                 * <p>
                 * Note that the {@code Set} is copied to protect against
                 * subsequent modifications.
                 */
                // @ts-ignore
                public setInitialPolicies(initialPolicies: java.util.Set): void;
                /**
                 * Sets the list of {@code CertStore}s to be used in finding
                 * certificates and CRLs. May be {@code null}, in which case
                 * no {@code CertStore}s will be used. The first
                 * {@code CertStore}s in the list may be preferred to those that
                 * appear later.
                 * <p>
                 * Note that the {@code List} is copied to protect against
                 * subsequent modifications.
                 */
                // @ts-ignore
                public setCertStores(stores: java.util.List): void;
                /**
                 * Adds a {@code CertStore} to the end of the list of
                 * {@code CertStore}s used in finding certificates and CRLs.
                 */
                // @ts-ignore
                public addCertStore(store: java.security.cert.CertStore): void;
                /**
                 * Returns an immutable {@code List} of {@code CertStore}s that
                 * are used to find certificates and CRLs.
                 */
                // @ts-ignore
                public getCertStores(): java.util.List;
                /**
                 * Sets the RevocationEnabled flag. If this flag is true, the default
                 * revocation checking mechanism of the underlying PKIX service provider
                 * will be used. If this flag is false, the default revocation checking
                 * mechanism will be disabled (not used).
                 * <p>
                 * When a {@code PKIXParameters} object is created, this flag is set
                 * to true. This setting reflects the most common strategy for checking
                 * revocation, since each service provider must support revocation
                 * checking to be PKIX compliant. Sophisticated applications should set
                 * this flag to false when it is not practical to use a PKIX service
                 * provider's default revocation checking mechanism or when an alternative
                 * revocation checking mechanism is to be substituted (by also calling the
                 * {@link #addCertPathChecker addCertPathChecker} or {@link
                 * #setCertPathCheckers setCertPathCheckers} methods).
                 */
                // @ts-ignore
                public setRevocationEnabled(val: boolean): void;
                /**
                 * Checks the RevocationEnabled flag. If this flag is true, the default
                 * revocation checking mechanism of the underlying PKIX service provider
                 * will be used. If this flag is false, the default revocation checking
                 * mechanism will be disabled (not used). See the {@link
                 * #setRevocationEnabled setRevocationEnabled} method for more details on
                 * setting the value of this flag.
                 */
                // @ts-ignore
                public isRevocationEnabled(): boolean;
                /**
                 * Sets the ExplicitPolicyRequired flag. If this flag is true, an
                 * acceptable policy needs to be explicitly identified in every certificate.
                 * By default, the ExplicitPolicyRequired flag is false.
                 */
                // @ts-ignore
                public setExplicitPolicyRequired(val: boolean): void;
                /**
                 * Checks if explicit policy is required. If this flag is true, an
                 * acceptable policy needs to be explicitly identified in every certificate.
                 * By default, the ExplicitPolicyRequired flag is false.
                 */
                // @ts-ignore
                public isExplicitPolicyRequired(): boolean;
                /**
                 * Sets the PolicyMappingInhibited flag. If this flag is true, policy
                 * mapping is inhibited. By default, policy mapping is not inhibited (the
                 * flag is false).
                 */
                // @ts-ignore
                public setPolicyMappingInhibited(val: boolean): void;
                /**
                 * Checks if policy mapping is inhibited. If this flag is true, policy
                 * mapping is inhibited. By default, policy mapping is not inhibited (the
                 * flag is false).
                 */
                // @ts-ignore
                public isPolicyMappingInhibited(): boolean;
                /**
                 * Sets state to determine if the any policy OID should be processed
                 * if it is included in a certificate. By default, the any policy OID
                 * is not inhibited ({@link #isAnyPolicyInhibited isAnyPolicyInhibited()}
                 * returns {@code false}).
                 */
                // @ts-ignore
                public setAnyPolicyInhibited(val: boolean): void;
                /**
                 * Checks whether the any policy OID should be processed if it
                 * is included in a certificate.
                 */
                // @ts-ignore
                public isAnyPolicyInhibited(): boolean;
                /**
                 * Sets the PolicyQualifiersRejected flag. If this flag is true,
                 * certificates that include policy qualifiers in a certificate
                 * policies extension that is marked critical are rejected.
                 * If the flag is false, certificates are not rejected on this basis.
                 * <p> When a {@code PKIXParameters} object is created, this flag is
                 * set to true. This setting reflects the most common (and simplest)
                 * strategy for processing policy qualifiers. Applications that want to use
                 * a more sophisticated policy must set this flag to false.
                 * <p>
                 * Note that the PKIX certification path validation algorithm specifies
                 * that any policy qualifier in a certificate policies extension that is
                 * marked critical must be processed and validated. Otherwise the
                 * certification path must be rejected. If the policyQualifiersRejected flag
                 * is set to false, it is up to the application to validate all policy
                 * qualifiers in this manner in order to be PKIX compliant.
                 */
                // @ts-ignore
                public setPolicyQualifiersRejected(qualifiersRejected: boolean): void;
                /**
                 * Gets the PolicyQualifiersRejected flag. If this flag is true,
                 * certificates that include policy qualifiers in a certificate policies
                 * extension that is marked critical are rejected.
                 * If the flag is false, certificates are not rejected on this basis.
                 * <p> When a {@code PKIXParameters} object is created, this flag is
                 * set to true. This setting reflects the most common (and simplest)
                 * strategy for processing policy qualifiers. Applications that want to use
                 * a more sophisticated policy must set this flag to false.
                 */
                // @ts-ignore
                public getPolicyQualifiersRejected(): boolean;
                /**
                 * Returns the time for which the validity of the certification path
                 * should be determined. If {@code null}, the current time is used.
                 * <p>
                 * Note that the {@code Date} returned is copied to protect against
                 * subsequent modifications.
                 */
                // @ts-ignore
                public getDate(): java.util.Date;
                /**
                 * Sets the time for which the validity of the certification path
                 * should be determined. If {@code null}, the current time is used.
                 * <p>
                 * Note that the {@code Date} supplied here is copied to protect
                 * against subsequent modifications.
                 */
                // @ts-ignore
                public setDate(date: java.util.Date): void;
                /**
                 * Sets a {@code List} of additional certification path checkers. If
                 * the specified {@code List} contains an object that is not a
                 * {@code PKIXCertPathChecker}, it is ignored.
                 * <p>
                 * Each {@code PKIXCertPathChecker} specified implements
                 * additional checks on a certificate. Typically, these are checks to
                 * process and verify private extensions contained in certificates.
                 * Each {@code PKIXCertPathChecker} should be instantiated with any
                 * initialization parameters needed to execute the check.
                 * <p>
                 * This method allows sophisticated applications to extend a PKIX
                 * {@code CertPathValidator} or {@code CertPathBuilder}.
                 * Each of the specified {@code PKIXCertPathChecker}s will be called,
                 * in turn, by a PKIX {@code CertPathValidator} or
                 * {@code CertPathBuilder} for each certificate processed or
                 * validated.
                 * <p>
                 * Regardless of whether these additional {@code PKIXCertPathChecker}s
                 * are set, a PKIX {@code CertPathValidator} or
                 * {@code CertPathBuilder} must perform all of the required PKIX
                 * checks on each certificate. The one exception to this rule is if the
                 * RevocationEnabled flag is set to false (see the {@link
                 * #setRevocationEnabled setRevocationEnabled} method).
                 * <p>
                 * Note that the {@code List} supplied here is copied and each
                 * {@code PKIXCertPathChecker} in the list is cloned to protect
                 * against subsequent modifications.
                 */
                // @ts-ignore
                public setCertPathCheckers(checkers: java.util.List): void;
                /**
                 * Returns the {@code List} of certification path checkers.
                 * The returned {@code List} is immutable, and each
                 * {@code PKIXCertPathChecker} in the {@code List} is cloned
                 * to protect against subsequent modifications.
                 */
                // @ts-ignore
                public getCertPathCheckers(): java.util.List;
                /**
                 * Adds a {@code PKIXCertPathChecker} to the list of certification
                 * path checkers. See the {@link #setCertPathCheckers setCertPathCheckers}
                 * method for more details.
                 * <p>
                 * Note that the {@code PKIXCertPathChecker} is cloned to protect
                 * against subsequent modifications.
                 */
                // @ts-ignore
                public addCertPathChecker(checker: java.security.cert.PKIXCertPathChecker): void;
                /**
                 * Returns the signature provider's name, or {@code null}
                 * if not set.
                 */
                // @ts-ignore
                public getSigProvider(): string;
                /**
                 * Sets the signature provider's name. The specified provider will be
                 * preferred when creating {@link java.security.Signature Signature}
                 * objects. If {@code null} or not set, the first provider found
                 * supporting the algorithm will be used.
                 */
                // @ts-ignore
                public setSigProvider(sigProvider: string): void;
                /**
                 * Returns the required constraints on the target certificate.
                 * The constraints are returned as an instance of {@code CertSelector}.
                 * If {@code null}, no constraints are defined.
                 * <p>Note that the {@code CertSelector} returned is cloned
                 * to protect against subsequent modifications.
                 */
                // @ts-ignore
                public getTargetCertConstraints(): java.security.cert.CertSelector;
                /**
                 * Sets the required constraints on the target certificate.
                 * The constraints are specified as an instance of
                 * {@code CertSelector}. If {@code null}, no constraints are
                 * defined.
                 * <p>Note that the {@code CertSelector} specified is cloned
                 * to protect against subsequent modifications.
                 */
                // @ts-ignore
                public setTargetCertConstraints(selector: java.security.cert.CertSelector): void;
                /**
                 * Makes a copy of this {@code PKIXParameters} object. Changes
                 * to the copy will not affect the original and vice versa.
                 */
                // @ts-ignore
                public clone(): java.lang.Object;
                /**
                 * Returns a formatted string describing the parameters.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
