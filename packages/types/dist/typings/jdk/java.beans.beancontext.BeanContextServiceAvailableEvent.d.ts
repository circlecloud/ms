declare namespace java {
    namespace beans {
        namespace beancontext {
            // @ts-ignore
             class BeanContextServiceAvailableEvent extends java.beans.beancontext.BeanContextEvent {
                /**
                 * Construct a <code>BeanContextAvailableServiceEvent</code>.
                 */
                // @ts-ignore
                constructor(bcs: java.beans.beancontext.BeanContextServices, sc: java.lang.Class)
                // @ts-ignore
                protected serviceClass: java.lang.Class;
                /**
                 * Gets the source as a reference of type <code>BeanContextServices</code>.
                 */
                // @ts-ignore
                public getSourceAsBeanContextServices(): java.beans.beancontext.BeanContextServices;
                /**
                 * Gets the service class that is the subject of this notification.
                 */
                // @ts-ignore
                public getServiceClass(): java.lang.Class;
                /**
                 * Gets the list of service dependent selectors.
                 */
                // @ts-ignore
                public getCurrentServiceSelectors(): java.util.Iterator;
            }
        }
    }
}
