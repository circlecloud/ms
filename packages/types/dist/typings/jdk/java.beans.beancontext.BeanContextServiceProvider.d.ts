// @ts-nocheck
declare namespace java {
    namespace beans {
        namespace beancontext {
            // @ts-ignore
            interface BeanContextServiceProvider {
                /**
                 * Invoked by <code>BeanContextServices</code>, this method
                 * requests an instance of a
                 * service from this <code>BeanContextServiceProvider</code>.
                 */
                // @ts-ignore
                 getService(bcs: java.beans.beancontext.BeanContextServices, requestor: java.lang.Object, serviceClass: java.lang.Class, serviceSelector: java.lang.Object): java.lang.Object;
                /**
                 * Invoked by <code>BeanContextServices</code>,
                 * this method releases a nested <code>BeanContextChild</code>'s
                 * (or any arbitrary object associated with a
                 * <code>BeanContextChild</code>) reference to the specified service.
                 */
                // @ts-ignore
                 releaseService(bcs: java.beans.beancontext.BeanContextServices, requestor: java.lang.Object, service: java.lang.Object): void;
                /**
                 * Invoked by <code>BeanContextServices</code>, this method
                 * gets the current service selectors for the specified service.
                 * A service selector is a service specific parameter,
                 * typical examples of which could include: a
                 * parameter to a constructor for the service implementation class,
                 * a value for a particular service's property, or a key into a
                 * map of existing implementations.
                 */
                // @ts-ignore
                 getCurrentServiceSelectors(bcs: java.beans.beancontext.BeanContextServices, serviceClass: java.lang.Class): java.util.Iterator;
            }
        }
    }
}
