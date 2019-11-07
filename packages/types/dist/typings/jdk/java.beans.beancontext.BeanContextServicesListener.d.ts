declare namespace java {
    namespace beans {
        namespace beancontext {
            // @ts-ignore
            interface BeanContextServicesListener {
                /**
                 * The service named has been registered. getService requests for
                 * this service may now be made.
                 */
                // @ts-ignore
                 serviceAvailable(bcsae: java.beans.beancontext.BeanContextServiceAvailableEvent): void;
            }
        }
    }
}
