// @ts-nocheck
declare namespace java {
    namespace beans {
        namespace beancontext {
            // @ts-ignore
            abstract class BeanContextEvent extends java.util.EventObject {
                /**
                 * Contruct a BeanContextEvent
                 */
                // @ts-ignore
                constructor(bc: java.beans.beancontext.BeanContext)
                // @ts-ignore
                protected propagatedFrom: java.beans.beancontext.BeanContext;
                /**
                 * Gets the <code>BeanContext</code> associated with this event.
                 */
                // @ts-ignore
                public getBeanContext(): java.beans.beancontext.BeanContext;
                /**
                 * Sets the <code>BeanContext</code> from which this event was propagated.
                 */
                // @ts-ignore
                public setPropagatedFrom(bc: java.beans.beancontext.BeanContext): void;
                /**
                 * Gets the <code>BeanContext</code> from which this event was propagated.
                 */
                // @ts-ignore
                public getPropagatedFrom(): java.beans.beancontext.BeanContext;
                /**
                 * Reports whether or not this event is
                 * propagated from some other <code>BeanContext</code>.
                 */
                // @ts-ignore
                public isPropagated(): boolean;
            }
        }
    }
}
