declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
            interface CertPathChecker {
                /**
                 * Initializes the internal state of this {@code CertPathChecker}.
                 * <p>The {@code forward} flag specifies the order that certificates will
                 * be passed to the {@link #check check} method (forward or reverse).
                 */
                // @ts-ignore
                 init(forward: boolean): void;
                /**
                 * Indicates if forward checking is supported. Forward checking refers
                 * to the ability of the {@code CertPathChecker} to perform its checks
                 * when certificates are presented to the {@code check} method in the
                 * forward direction (from target to trust anchor).
                 */
                // @ts-ignore
                 isForwardCheckingSupported(): boolean;
                /**
                 * Performs the check(s) on the specified certificate using its internal
                 * state. The certificates are presented in the order specified by the
                 * {@code init} method.
                 */
                // @ts-ignore
                 check(cert: java.security.cert.Certificate): void;
            }
        }
    }
}
