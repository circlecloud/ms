// @ts-nocheck
declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
            interface CertPathBuilderResult {
                /**
                 * Returns the built certification path.
                 */
                // @ts-ignore
                 getCertPath(): java.security.cert.CertPath;
                /**
                 * Makes a copy of this {@code CertPathBuilderResult}. Changes to the
                 * copy will not affect the original and vice versa.
                 */
                // @ts-ignore
                 clone(): java.lang.Object;
            }
        }
    }
}
