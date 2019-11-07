// @ts-nocheck
declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
            abstract class PKIXCertPathChecker extends java.lang.Object {
                /**
                 * Default constructor.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Initializes the internal state of this {@code PKIXCertPathChecker}.
                 * <p>
                 * The {@code forward} flag specifies the order that
                 * certificates will be passed to the {@link #check check} method
                 * (forward or reverse). A {@code PKIXCertPathChecker} <b>must</b>
                 * support reverse checking and <b>may</b> support forward checking.
                 */
                // @ts-ignore
                public abstract init(forward: boolean): void;
                /**
                 * Indicates if forward checking is supported. Forward checking refers
                 * to the ability of the {@code PKIXCertPathChecker} to perform
                 * its checks when certificates are presented to the {@code check}
                 * method in the forward direction (from target to most-trusted CA).
                 */
                // @ts-ignore
                public abstract isForwardCheckingSupported(): boolean;
                /**
                 * Returns an immutable {@code Set} of X.509 certificate extensions
                 * that this {@code PKIXCertPathChecker} supports (i.e. recognizes, is
                 * able to process), or {@code null} if no extensions are supported.
                 * <p>
                 * Each element of the set is a {@code String} representing the
                 * Object Identifier (OID) of the X.509 extension that is supported.
                 * The OID is represented by a set of nonnegative integers separated by
                 * periods.
                 * <p>
                 * All X.509 certificate extensions that a {@code PKIXCertPathChecker}
                 * might possibly be able to process should be included in the set.
                 */
                // @ts-ignore
                public abstract getSupportedExtensions(): java.util.Set;
                /**
                 * Performs the check(s) on the specified certificate using its internal
                 * state and removes any critical extensions that it processes from the
                 * specified collection of OID strings that represent the unresolved
                 * critical extensions. The certificates are presented in the order
                 * specified by the {@code init} method.
                 */
                // @ts-ignore
                public abstract check(cert: java.security.cert.Certificate, unresolvedCritExts: java.util.Collection): void;
                /**
                 * {@inheritDoc}
                 * <p>This implementation calls
                 * {@code check(cert, java.util.Collections.<String>emptySet())}.
                 */
                // @ts-ignore
                public check(cert: java.security.cert.Certificate): void;
                /**
                 * Returns a clone of this object. Calls the {@code Object.clone()}
                 * method.
                 * All subclasses which maintain state must support and
                 * override this method, if necessary.
                 */
                // @ts-ignore
                public clone(): java.lang.Object;
            }
        }
    }
}
