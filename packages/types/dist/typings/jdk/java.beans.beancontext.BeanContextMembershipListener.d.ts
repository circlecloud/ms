declare namespace java {
    namespace beans {
        namespace beancontext {
            // @ts-ignore
            interface BeanContextMembershipListener {
                /**
                 * Called when a child or list of children is added to a
                 * <code>BeanContext</code> that this listener is registered with.
                 */
                // @ts-ignore
                 childrenAdded(bcme: java.beans.beancontext.BeanContextMembershipEvent): void;
                /**
                 * Called when a child or list of children is removed
                 * from a <code>BeanContext</code> that this listener
                 * is registered with.
                 */
                // @ts-ignore
                 childrenRemoved(bcme: java.beans.beancontext.BeanContextMembershipEvent): void;
            }
        }
    }
}
