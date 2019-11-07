declare namespace java {
    namespace beans {
        namespace beancontext {
            // @ts-ignore
            interface BeanContextServices {
                /**
                 * Adds a service to this BeanContext.
                 * <code>BeanContextServiceProvider</code>s call this method
                 * to register a particular service with this context.
                 * If the service has not previously been added, the
                 * <code>BeanContextServices</code> associates
                 * the service with the <code>BeanContextServiceProvider</code> and
                 * fires a <code>BeanContextServiceAvailableEvent</code> to all
                 * currently registered <code>BeanContextServicesListeners</code>.
                 * The method then returns <code>true</code>, indicating that
                 * the addition of the service was successful.
                 * If the given service has already been added, this method
                 * simply returns <code>false</code>.
                 */
                // @ts-ignore
                 addService(serviceClass: java.lang.Class, serviceProvider: java.beans.beancontext.BeanContextServiceProvider): boolean;
                /**
                 * BeanContextServiceProviders wishing to remove
                 * a currently registered service from this context
                 * may do so via invocation of this method. Upon revocation of
                 * the service, the <code>BeanContextServices</code> fires a
                 * <code>BeanContextServiceRevokedEvent</code> to its
                 * list of currently registered
                 * <code>BeanContextServiceRevokedListeners</code> and
                 * <code>BeanContextServicesListeners</code>.
                 */
                // @ts-ignore
                 revokeService(serviceClass: java.lang.Class, serviceProvider: java.beans.beancontext.BeanContextServiceProvider, revokeCurrentServicesNow: boolean): void;
                /**
                 * Reports whether or not a given service is
                 * currently available from this context.
                 */
                // @ts-ignore
                 hasService(serviceClass: java.lang.Class): boolean;
                /**
                 * A <code>BeanContextChild</code>, or any arbitrary object
                 * associated with a <code>BeanContextChild</code>, may obtain
                 * a reference to a currently registered service from its
                 * nesting <code>BeanContextServices</code>
                 * via invocation of this method. When invoked, this method
                 * gets the service by calling the getService() method on the
                 * underlying <code>BeanContextServiceProvider</code>.
                 */
                // @ts-ignore
                 getService(child: java.beans.beancontext.BeanContextChild, requestor: java.lang.Object, serviceClass: java.lang.Class, serviceSelector: java.lang.Object, bcsrl: java.beans.beancontext.BeanContextServiceRevokedListener): java.lang.Object;
                /**
                 * Releases a <code>BeanContextChild</code>'s
                 * (or any arbitrary object associated with a BeanContextChild)
                 * reference to the specified service by calling releaseService()
                 * on the underlying <code>BeanContextServiceProvider</code>.
                 */
                // @ts-ignore
                 releaseService(child: java.beans.beancontext.BeanContextChild, requestor: java.lang.Object, service: java.lang.Object): void;
                /**
                 * Gets the currently available services for this context.
                 */
                // @ts-ignore
                 getCurrentServiceClasses(): java.util.Iterator;
                /**
                 * Gets the list of service dependent service parameters
                 * (Service Selectors) for the specified service, by
                 * calling getCurrentServiceSelectors() on the
                 * underlying BeanContextServiceProvider.
                 */
                // @ts-ignore
                 getCurrentServiceSelectors(serviceClass: java.lang.Class): java.util.Iterator;
                /**
                 * Adds a <code>BeanContextServicesListener</code> to this BeanContext
                 */
                // @ts-ignore
                 addBeanContextServicesListener(bcsl: java.beans.beancontext.BeanContextServicesListener): void;
                /**
                 * Removes a <code>BeanContextServicesListener</code>
                 * from this <code>BeanContext</code>
                 */
                // @ts-ignore
                 removeBeanContextServicesListener(bcsl: java.beans.beancontext.BeanContextServicesListener): void;
            }
        }
    }
}
