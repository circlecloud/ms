declare namespace java {
    namespace beans {
        namespace beancontext {
            // @ts-ignore
            interface BeanContextChild {
                /**
                 * <p>
                 * Objects that implement this interface,
                 * shall fire a java.beans.PropertyChangeEvent, with parameters:
                 * propertyName "beanContext", oldValue (the previous nesting
                 * <code>BeanContext</code> instance, or <code>null</code>),
                 * newValue (the current nesting
                 * <code>BeanContext</code> instance, or <code>null</code>).
                 * <p>
                 * A change in the value of the nesting BeanContext property of this
                 * BeanContextChild may be vetoed by throwing the appropriate exception.
                 * </p>
                 */
                // @ts-ignore
                 setBeanContext(bc: java.beans.beancontext.BeanContext): void;
                /**
                 * Gets the <code>BeanContext</code> associated
                 * with this <code>BeanContextChild</code>.
                 */
                // @ts-ignore
                 getBeanContext(): java.beans.beancontext.BeanContext;
                /**
                 * Adds a <code>PropertyChangeListener</code>
                 * to this <code>BeanContextChild</code>
                 * in order to receive a <code>PropertyChangeEvent</code>
                 * whenever the specified property has changed.
                 */
                // @ts-ignore
                 addPropertyChangeListener(name: string, pcl: java.beans.PropertyChangeListener): void;
                /**
                 * Removes a <code>PropertyChangeListener</code> from this
                 * <code>BeanContextChild</code>  so that it no longer
                 * receives <code>PropertyChangeEvents</code> when the
                 * specified property is changed.
                 */
                // @ts-ignore
                 removePropertyChangeListener(name: string, pcl: java.beans.PropertyChangeListener): void;
                /**
                 * Adds a <code>VetoableChangeListener</code> to
                 * this <code>BeanContextChild</code>
                 * to receive events whenever the specified property changes.
                 */
                // @ts-ignore
                 addVetoableChangeListener(name: string, vcl: java.beans.VetoableChangeListener): void;
                /**
                 * Removes a <code>VetoableChangeListener</code> from this
                 * <code>BeanContextChild</code> so that it no longer receives
                 * events when the specified property changes.
                 */
                // @ts-ignore
                 removeVetoableChangeListener(name: string, vcl: java.beans.VetoableChangeListener): void;
            }
        }
    }
}
