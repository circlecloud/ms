// @ts-nocheck
declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
            interface CertSelector {
                /**
                 * Decides whether a {@code Certificate} should be selected.
                 */
                // @ts-ignore
                 match(cert: java.security.cert.Certificate): boolean;
                /**
                 * Makes a copy of this {@code CertSelector}. Changes to the
                 * copy will not affect the original and vice versa.
                 */
                // @ts-ignore
                 clone(): java.lang.Object;
            }
        }
    }
}
