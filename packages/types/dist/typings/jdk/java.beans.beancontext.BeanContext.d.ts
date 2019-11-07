declare namespace java {
    namespace beans {
        namespace beancontext {
            // @ts-ignore
            interface BeanContext {
                // @ts-ignore
                 globalHierarchyLock: java.lang.Object;
                /**
                 * Instantiate the javaBean named as a
                 * child of this <code>BeanContext</code>.
                 * The implementation of the JavaBean is
                 * derived from the value of the beanName parameter,
                 * and is defined by the
                 * <code>java.beans.Beans.instantiate()</code> method.
                 */
                // @ts-ignore
                 instantiateChild(beanName: string): java.lang.Object;
                /**
                 * Analagous to <code>java.lang.ClassLoader.getResourceAsStream()</code>,
                 * this method allows a <code>BeanContext</code> implementation
                 * to interpose behavior between the child <code>Component</code>
                 * and underlying <code>ClassLoader</code>.
                 */
                // @ts-ignore
                 getResourceAsStream(name: string, bcc: java.beans.beancontext.BeanContextChild): java.io.InputStream;
                /**
                 * Analagous to <code>java.lang.ClassLoader.getResource()</code>, this
                 * method allows a <code>BeanContext</code> implementation to interpose
                 * behavior between the child <code>Component</code>
                 * and underlying <code>ClassLoader</code>.
                 */
                // @ts-ignore
                 getResource(name: string, bcc: java.beans.beancontext.BeanContextChild): java.net.URL;
                /**
                 * Adds the specified <code>BeanContextMembershipListener</code>
                 * to receive <code>BeanContextMembershipEvents</code> from
                 * this <code>BeanContext</code> whenever it adds
                 * or removes a child <code>Component</code>(s).
                 */
                // @ts-ignore
                 addBeanContextMembershipListener(bcml: java.beans.beancontext.BeanContextMembershipListener): void;
                /**
                 * Removes the specified <code>BeanContextMembershipListener</code>
                 * so that it no longer receives <code>BeanContextMembershipEvent</code>s
                 * when the child <code>Component</code>(s) are added or removed.
                 */
                // @ts-ignore
                 removeBeanContextMembershipListener(bcml: java.beans.beancontext.BeanContextMembershipListener): void;
            }
        }
    }
}
