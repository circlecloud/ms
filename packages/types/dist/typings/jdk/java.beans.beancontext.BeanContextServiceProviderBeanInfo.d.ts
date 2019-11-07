declare namespace java {
    namespace beans {
        namespace beancontext {
            // @ts-ignore
            interface BeanContextServiceProviderBeanInfo {
                /**
                 * Gets a <code>BeanInfo</code> array, one for each
                 * service class or interface statically available
                 * from this ServiceProvider.
                 */
                // @ts-ignore
                 getServicesBeanInfo(): java.beans.BeanInfo[];
            }
        }
    }
}
