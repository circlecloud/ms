// @ts-nocheck
declare namespace java {
    namespace beans {
        namespace beancontext {
            // @ts-ignore
            interface BeanContextServiceRevokedListener {
                /**
                 * The service named has been revoked. getService requests for
                 * this service will no longer be satisfied.
                 */
                // @ts-ignore
                 serviceRevoked(bcsre: java.beans.beancontext.BeanContextServiceRevokedEvent): void;
            }
        }
    }
}
