declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
            interface CRLSelector {
                /**
                 * Decides whether a {@code CRL} should be selected.
                 */
                // @ts-ignore
                 match(crl: java.security.cert.CRL): boolean;
                /**
                 * Makes a copy of this {@code CRLSelector}. Changes to the
                 * copy will not affect the original and vice versa.
                 */
                // @ts-ignore
                 clone(): java.lang.Object;
            }
        }
    }
}
