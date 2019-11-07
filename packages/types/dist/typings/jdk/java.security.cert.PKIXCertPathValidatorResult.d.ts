// @ts-nocheck
declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
             class PKIXCertPathValidatorResult extends java.lang.Object {
                /**
                 * Creates an instance of {@code PKIXCertPathValidatorResult}
                 * containing the specified parameters.
                 */
                // @ts-ignore
                constructor(trustAnchor: java.security.cert.TrustAnchor, policyTree: java.security.cert.PolicyNode, subjectPublicKey: java.security.PublicKey)
                /**
                 * Returns the {@code TrustAnchor} describing the CA that served
                 * as a trust anchor for the certification path.
                 */
                // @ts-ignore
                public getTrustAnchor(): java.security.cert.TrustAnchor;
                /**
                 * Returns the root node of the valid policy tree resulting from the
                 * PKIX certification path validation algorithm. The
                 * {@code PolicyNode} object that is returned and any objects that
                 * it returns through public methods are immutable.
                 * <p>Most applications will not need to examine the valid policy tree.
                 * They can achieve their policy processing goals by setting the
                 * policy-related parameters in {@code PKIXParameters}. However, more
                 * sophisticated applications, especially those that process policy
                 * qualifiers, may need to traverse the valid policy tree using the
                 * {@link PolicyNode#getParent PolicyNode.getParent} and
                 * {@link PolicyNode#getChildren PolicyNode.getChildren} methods.
                 */
                // @ts-ignore
                public getPolicyTree(): java.security.cert.PolicyNode;
                /**
                 * Returns the public key of the subject (target) of the certification
                 * path, including any inherited public key parameters if applicable.
                 */
                // @ts-ignore
                public getPublicKey(): java.security.PublicKey;
                /**
                 * Returns a copy of this object.
                 */
                // @ts-ignore
                public clone(): java.lang.Object;
                /**
                 * Return a printable representation of this
                 * {@code PKIXCertPathValidatorResult}.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
