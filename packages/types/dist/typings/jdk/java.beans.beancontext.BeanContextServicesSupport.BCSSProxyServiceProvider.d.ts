// @ts-nocheck
declare namespace java {
    namespace beans {
        namespace beancontext {
            namespace BeanContextServicesSupport {
                // @ts-ignore
                protected class BCSSProxyServiceProvider extends java.lang.Object {
                    // @ts-ignore
                    public getService(bcs: java.beans.beancontext.BeanContextServices, requestor: java.lang.Object, serviceClass: java.lang.Class, serviceSelector: java.lang.Object): java.lang.Object;
                    // @ts-ignore
                    public releaseService(bcs: java.beans.beancontext.BeanContextServices, requestor: java.lang.Object, service: java.lang.Object): void;
                    // @ts-ignore
                    public getCurrentServiceSelectors(bcs: java.beans.beancontext.BeanContextServices, serviceClass: java.lang.Class): java.util.Iterator;
                    // @ts-ignore
                    public serviceRevoked(bcsre: java.beans.beancontext.BeanContextServiceRevokedEvent): void;
                }
            }
        }
    }
}
