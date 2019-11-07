// @ts-nocheck
declare namespace java {
    namespace beans {
        namespace beancontext {
            // @ts-ignore
             class BeanContextServicesSupport extends java.beans.beancontext.BeanContextSupport {
                /**
                 * <p>
                 * Construct a BeanContextServicesSupport instance
                 * </p>
                 */
                // @ts-ignore
                constructor(peer: java.beans.beancontext.BeanContextServices, lcle: java.util.Locale, dTime: boolean, visible: boolean)
                /**
                 * Create an instance using the specified Locale and design mode.
                 */
                // @ts-ignore
                constructor(peer: java.beans.beancontext.BeanContextServices, lcle: java.util.Locale, dtime: boolean)
                /**
                 * Create an instance using the specified locale
                 */
                // @ts-ignore
                constructor(peer: java.beans.beancontext.BeanContextServices, lcle: java.util.Locale)
                /**
                 * Create an instance with a peer
                 */
                // @ts-ignore
                constructor(peer: java.beans.beancontext.BeanContextServices)
                /**
                 * Create an instance that is not a delegate of another object
                 */
                // @ts-ignore
                constructor()
                // @ts-ignore
                protected services: java.util.HashMap;
                // @ts-ignore
                protected serializable: number;
                // @ts-ignore
                protected proxy: java.beans.beancontext.BeanContextServicesSupport.BCSSProxyServiceProvider;
                // @ts-ignore
                protected bcsListeners: java.util.ArrayList;
                /**
                 * called by BeanContextSupport superclass during construction and
                 * deserialization to initialize subclass transient state.
                 * subclasses may envelope this method, but should not override it or
                 * call it directly.
                 */
                // @ts-ignore
                public initialize(): void;
                /**
                 * Gets the <tt>BeanContextServices</tt> associated with this
                 * <tt>BeanContextServicesSupport</tt>.
                 */
                // @ts-ignore
                public getBeanContextServicesPeer(): java.beans.beancontext.BeanContextServices;
                /**
                 * <p>
                 * Subclasses can override this method to insert their own subclass
                 * of Child without having to override add() or the other Collection
                 * methods that add children to the set.
                 * </p>
                 */
                // @ts-ignore
                protected createBCSChild(targetChild: java.lang.Object, peer: java.lang.Object): java.beans.beancontext.BeanContextSupport.BCSChild;
                /**
                 * subclasses can override this method to create new subclasses of
                 * BCSSServiceProvider without having to override addService() in
                 * order to instantiate.
                 */
                // @ts-ignore
                protected createBCSSServiceProvider(sc: java.lang.Class, bcsp: java.beans.beancontext.BeanContextServiceProvider): java.beans.beancontext.BeanContextServicesSupport.BCSSServiceProvider;
                /**
                 * add a BeanContextServicesListener
                 */
                // @ts-ignore
                public addBeanContextServicesListener(bcsl: java.beans.beancontext.BeanContextServicesListener): void;
                /**
                 * remove a BeanContextServicesListener
                 */
                // @ts-ignore
                public removeBeanContextServicesListener(bcsl: java.beans.beancontext.BeanContextServicesListener): void;
                /**
                 * add a service
                 */
                // @ts-ignore
                public addService(serviceClass: java.lang.Class, bcsp: java.beans.beancontext.BeanContextServiceProvider): boolean;
                /**
                 * add a service
                 */
                // @ts-ignore
                protected addService(serviceClass: java.lang.Class, bcsp: java.beans.beancontext.BeanContextServiceProvider, fireEvent: boolean): boolean;
                /**
                 * remove a service
                 */
                // @ts-ignore
                public revokeService(serviceClass: java.lang.Class, bcsp: java.beans.beancontext.BeanContextServiceProvider, revokeCurrentServicesNow: boolean): void;
                /**
                 * has a service, which may be delegated
                 */
                // @ts-ignore
                public hasService(serviceClass: java.lang.Class): boolean;
                /**
                 * obtain a service which may be delegated
                 */
                // @ts-ignore
                public getService(child: java.beans.beancontext.BeanContextChild, requestor: java.lang.Object, serviceClass: java.lang.Class, serviceSelector: java.lang.Object, bcsrl: java.beans.beancontext.BeanContextServiceRevokedListener): java.lang.Object;
                /**
                 * release a service
                 */
                // @ts-ignore
                public releaseService(child: java.beans.beancontext.BeanContextChild, requestor: java.lang.Object, service: java.lang.Object): void;
                // @ts-ignore
                public getCurrentServiceClasses(): java.util.Iterator;
                // @ts-ignore
                public getCurrentServiceSelectors(serviceClass: java.lang.Class): java.util.Iterator;
                /**
                 * BeanContextServicesListener callback, propagates event to all
                 * currently registered listeners and BeanContextServices children,
                 * if this BeanContextService does not already implement this service
                 * itself.
                 * subclasses may override or envelope this method to implement their
                 * own propagation semantics.
                 */
                // @ts-ignore
                public serviceAvailable(bcssae: java.beans.beancontext.BeanContextServiceAvailableEvent): void;
                /**
                 * BeanContextServicesListener callback, propagates event to all
                 * currently registered listeners and BeanContextServices children,
                 * if this BeanContextService does not already implement this service
                 * itself.
                 * subclasses may override or envelope this method to implement their
                 * own propagation semantics.
                 */
                // @ts-ignore
                public serviceRevoked(bcssre: java.beans.beancontext.BeanContextServiceRevokedEvent): void;
                /**
                 * Gets the <tt>BeanContextServicesListener</tt> (if any) of the specified
                 * child.
                 */
                // @ts-ignore
                protected static getChildBeanContextServicesListener(child: java.lang.Object): java.beans.beancontext.BeanContextServicesListener;
                /**
                 * called from superclass child removal operations after a child
                 * has been successfully removed. called with child synchronized.
                 * This subclass uses this hook to immediately revoke any services
                 * being used by this child if it is a BeanContextChild.
                 * subclasses may envelope this method in order to implement their
                 * own child removal side-effects.
                 */
                // @ts-ignore
                protected childJustRemovedHook(child: java.lang.Object, bcsc: java.beans.beancontext.BeanContextSupport.BCSChild): void;
                /**
                 * called from setBeanContext to notify a BeanContextChild
                 * to release resources obtained from the nesting BeanContext.
                 * This method revokes any services obtained from its parent.
                 * subclasses may envelope this method to implement their own semantics.
                 */
                // @ts-ignore
                protected releaseBeanContextResources(): void;
                /**
                 * called from setBeanContext to notify a BeanContextChild
                 * to allocate resources obtained from the nesting BeanContext.
                 * subclasses may envelope this method to implement their own semantics.
                 */
                // @ts-ignore
                protected initializeBeanContextResources(): void;
                /**
                 * Fires a <tt>BeanContextServiceEvent</tt> notifying of a new service.
                 */
                // @ts-ignore
                protected fireServiceAdded(serviceClass: java.lang.Class): void;
                /**
                 * Fires a <tt>BeanContextServiceAvailableEvent</tt> indicating that a new
                 * service has become available.
                 */
                // @ts-ignore
                protected fireServiceAdded(bcssae: java.beans.beancontext.BeanContextServiceAvailableEvent): void;
                /**
                 * Fires a <tt>BeanContextServiceEvent</tt> notifying of a service being revoked.
                 */
                // @ts-ignore
                protected fireServiceRevoked(bcsre: java.beans.beancontext.BeanContextServiceRevokedEvent): void;
                /**
                 * Fires a <tt>BeanContextServiceRevokedEvent</tt>
                 * indicating that a particular service is
                 * no longer available.
                 */
                // @ts-ignore
                protected fireServiceRevoked(serviceClass: java.lang.Class, revokeNow: boolean): void;
                /**
                 * called from BeanContextSupport writeObject before it serializes the
                 * children ...
                 * This class will serialize any Serializable BeanContextServiceProviders
                 * herein.
                 * subclasses may envelope this method to insert their own serialization
                 * processing that has to occur prior to serialization of the children
                 */
                // @ts-ignore
                protected bcsPreSerializationHook(oos: java.io.ObjectOutputStream): void;
                /**
                 * called from BeanContextSupport readObject before it deserializes the
                 * children ...
                 * This class will deserialize any Serializable BeanContextServiceProviders
                 * serialized earlier thus making them available to the children when they
                 * deserialized.
                 * subclasses may envelope this method to insert their own serialization
                 * processing that has to occur prior to serialization of the children
                 */
                // @ts-ignore
                protected bcsPreDeserializationHook(ois: java.io.ObjectInputStream): void;
            }
        }
    }
}
