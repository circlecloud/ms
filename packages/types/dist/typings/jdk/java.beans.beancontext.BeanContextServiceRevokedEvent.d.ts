// @ts-nocheck
declare namespace java {
    namespace beans {
        namespace beancontext {
            // @ts-ignore
             class BeanContextServiceRevokedEvent extends java.beans.beancontext.BeanContextEvent {
                /**
                 * Construct a <code>BeanContextServiceEvent</code>.
                 */
                // @ts-ignore
                constructor(bcs: java.beans.beancontext.BeanContextServices, sc: java.lang.Class, invalidate: boolean)
                // @ts-ignore
                protected serviceClass: java.lang.Class;
                /**
                 * Gets the source as a reference of type <code>BeanContextServices</code>
                 */
                // @ts-ignore
                public getSourceAsBeanContextServices(): java.beans.beancontext.BeanContextServices;
                /**
                 * Gets the service class that is the subject of this notification
                 */
                // @ts-ignore
                public getServiceClass(): java.lang.Class;
                /**
                 * Checks this event to determine whether or not
                 * the service being revoked is of a particular class.
                 */
                // @ts-ignore
                public isServiceClass(service: java.lang.Class): boolean;
                /**
                 * Reports if the current service is being forcibly revoked,
                 * in which case the references are now invalidated and unusable.
                 */
                // @ts-ignore
                public isCurrentServiceInvalidNow(): boolean;
            }
        }
    }
}
