// @ts-nocheck
declare namespace java {
    namespace security {
        namespace interfaces {
            // @ts-ignore
            interface DSAKey {
                /**
                 * Returns the DSA-specific key parameters. These parameters are
                 * never secret.
                 */
                // @ts-ignore
                 getParams(): java.security.interfaces.DSAParams;
            }
        }
    }
}
