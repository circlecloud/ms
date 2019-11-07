declare namespace java {
    namespace beans {
        namespace beancontext {
            // @ts-ignore
             class BeanContextMembershipEvent extends java.beans.beancontext.BeanContextEvent {
                /**
                 * Contruct a BeanContextMembershipEvent
                 */
                // @ts-ignore
                constructor(bc: java.beans.beancontext.BeanContext, changes: java.util.Collection)
                /**
                 * Contruct a BeanContextMembershipEvent
                 */
                // @ts-ignore
                constructor(bc: java.beans.beancontext.BeanContext, changes: java.lang.Object)
                // @ts-ignore
                protected children: java.util.Collection;
                /**
                 * Gets the number of children affected by the notification.
                 */
                // @ts-ignore
                public size(): number;
                /**
                 * Is the child specified affected by the event?
                 */
                // @ts-ignore
                public contains(child: java.lang.Object): boolean;
                /**
                 * Gets the array of children affected by this event.
                 */
                // @ts-ignore
                public toArray(): java.lang.Object[];
                /**
                 * Gets the array of children affected by this event.
                 */
                // @ts-ignore
                public iterator(): java.util.Iterator;
            }
        }
    }
}
