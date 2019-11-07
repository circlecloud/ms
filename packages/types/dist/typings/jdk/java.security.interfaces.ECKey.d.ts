// @ts-nocheck
declare namespace java {
    namespace security {
        namespace interfaces {
            // @ts-ignore
            interface ECKey {
                /**
                 * Returns the domain parameters associated
                 * with this key. The domain parameters are
                 * either explicitly specified or implicitly
                 * created during key generation.
                 */
                // @ts-ignore
                 getParams(): java.security.spec.ECParameterSpec;
            }
        }
    }
}
