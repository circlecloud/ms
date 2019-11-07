// @ts-nocheck
declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
            interface PolicyNode {
                /**
                 * Returns the parent of this node, or {@code null} if this is the
                 * root node.
                 */
                // @ts-ignore
                 getParent(): java.security.cert.PolicyNode;
                /**
                 * Returns an iterator over the children of this node. Any attempts to
                 * modify the children of this node through the
                 * {@code Iterator}'s remove method must throw an
                 * {@code UnsupportedOperationException}.
                 */
                // @ts-ignore
                 getChildren(): java.util.Iterator;
                /**
                 * Returns the depth of this node in the valid policy tree.
                 */
                // @ts-ignore
                 getDepth(): number;
                /**
                 * Returns the valid policy represented by this node.
                 */
                // @ts-ignore
                 getValidPolicy(): string;
                /**
                 * Returns the set of policy qualifiers associated with the
                 * valid policy represented by this node.
                 */
                // @ts-ignore
                 getPolicyQualifiers(): java.util.Set;
                /**
                 * Returns the set of expected policies that would satisfy this
                 * node's valid policy in the next certificate to be processed.
                 */
                // @ts-ignore
                 getExpectedPolicies(): java.util.Set;
                /**
                 * Returns the criticality indicator of the certificate policy extension
                 * in the most recently processed certificate.
                 */
                // @ts-ignore
                 isCritical(): boolean;
            }
        }
    }
}
