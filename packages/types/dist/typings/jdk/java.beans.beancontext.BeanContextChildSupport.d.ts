declare namespace java {
    namespace beans {
        namespace beancontext {
            // @ts-ignore
             class BeanContextChildSupport extends java.lang.Object {
                /**
                 * construct a BeanContextChildSupport where this class has been
                 * subclassed in order to implement the JavaBean component itself.
                 */
                // @ts-ignore
                constructor()
                /**
                 * construct a BeanContextChildSupport where the JavaBean component
                 * itself implements BeanContextChild, and encapsulates this, delegating
                 * that interface to this implementation
                 */
                // @ts-ignore
                constructor(bcc: java.beans.beancontext.BeanContextChild)
                // @ts-ignore
                public beanContextChildPeer: java.beans.beancontext.BeanContextChild;
                // @ts-ignore
                protected pcSupport: java.beans.PropertyChangeSupport;
                // @ts-ignore
                protected vcSupport: java.beans.VetoableChangeSupport;
                // @ts-ignore
                protected beanContext: java.beans.beancontext.BeanContext;
                // @ts-ignore
                protected rejectedSetBCOnce: boolean;
                /**
                 * Sets the <code>BeanContext</code> for
                 * this <code>BeanContextChildSupport</code>.
                 */
                // @ts-ignore
                public setBeanContext(bc: java.beans.beancontext.BeanContext): void;
                /**
                 * Gets the nesting <code>BeanContext</code>
                 * for this <code>BeanContextChildSupport</code>.
                 */
                // @ts-ignore
                public getBeanContext(): java.beans.beancontext.BeanContext;
                /**
                 * Add a PropertyChangeListener for a specific property.
                 * The same listener object may be added more than once.  For each
                 * property,  the listener will be invoked the number of times it was added
                 * for that property.
                 * If <code>name</code> or <code>pcl</code> is null, no exception is thrown
                 * and no action is taken.
                 */
                // @ts-ignore
                public addPropertyChangeListener(name: string, pcl: java.beans.PropertyChangeListener): void;
                /**
                 * Remove a PropertyChangeListener for a specific property.
                 * If <code>pcl</code> was added more than once to the same event
                 * source for the specified property, it will be notified one less time
                 * after being removed.
                 * If <code>name</code> is null, no exception is thrown
                 * and no action is taken.
                 * If <code>pcl</code> is null, or was never added for the specified
                 * property, no exception is thrown and no action is taken.
                 */
                // @ts-ignore
                public removePropertyChangeListener(name: string, pcl: java.beans.PropertyChangeListener): void;
                /**
                 * Add a VetoableChangeListener for a specific property.
                 * The same listener object may be added more than once.  For each
                 * property,  the listener will be invoked the number of times it was added
                 * for that property.
                 * If <code>name</code> or <code>vcl</code> is null, no exception is thrown
                 * and no action is taken.
                 */
                // @ts-ignore
                public addVetoableChangeListener(name: string, vcl: java.beans.VetoableChangeListener): void;
                /**
                 * Removes a <code>VetoableChangeListener</code>.
                 * If <code>pcl</code> was added more than once to the same event
                 * source for the specified property, it will be notified one less time
                 * after being removed.
                 * If <code>name</code> is null, no exception is thrown
                 * and no action is taken.
                 * If <code>vcl</code> is null, or was never added for the specified
                 * property, no exception is thrown and no action is taken.
                 */
                // @ts-ignore
                public removeVetoableChangeListener(name: string, vcl: java.beans.VetoableChangeListener): void;
                /**
                 * A service provided by the nesting BeanContext has been revoked.
                 * Subclasses may override this method in order to implement their own
                 * behaviors.
                 */
                // @ts-ignore
                public serviceRevoked(bcsre: java.beans.beancontext.BeanContextServiceRevokedEvent): void;
                /**
                 * A new service is available from the nesting BeanContext.
                 * Subclasses may override this method in order to implement their own
                 * behaviors
                 */
                // @ts-ignore
                public serviceAvailable(bcsae: java.beans.beancontext.BeanContextServiceAvailableEvent): void;
                /**
                 * Gets the <tt>BeanContextChild</tt> associated with this
                 * <tt>BeanContextChildSupport</tt>.
                 */
                // @ts-ignore
                public getBeanContextChildPeer(): java.beans.beancontext.BeanContextChild;
                /**
                 * Reports whether or not this class is a delegate of another.
                 */
                // @ts-ignore
                public isDelegated(): boolean;
                /**
                 * Report a bound property update to any registered listeners. No event is
                 * fired if old and new are equal and non-null.
                 */
                // @ts-ignore
                public firePropertyChange(name: string, oldValue: java.lang.Object, newValue: java.lang.Object): void;
                /**
                 * Report a vetoable property update to any registered listeners.
                 * If anyone vetos the change, then fire a new event
                 * reverting everyone to the old value and then rethrow
                 * the PropertyVetoException. <P>
                 * No event is fired if old and new are equal and non-null.
                 * <P>
                 */
                // @ts-ignore
                public fireVetoableChange(name: string, oldValue: java.lang.Object, newValue: java.lang.Object): void;
                /**
                 * Called from setBeanContext to validate (or otherwise) the
                 * pending change in the nesting BeanContext property value.
                 * Returning false will cause setBeanContext to throw
                 * PropertyVetoException.
                 */
                // @ts-ignore
                public validatePendingSetBeanContext(newValue: java.beans.beancontext.BeanContext): boolean;
                /**
                 * This method may be overridden by subclasses to provide their own
                 * release behaviors. When invoked any resources held by this instance
                 * obtained from its current BeanContext property should be released
                 * since the object is no longer nested within that BeanContext.
                 */
                // @ts-ignore
                protected releaseBeanContextResources(): void;
                /**
                 * This method may be overridden by subclasses to provide their own
                 * initialization behaviors. When invoked any resources required by the
                 * BeanContextChild should be obtained from the current BeanContext.
                 */
                // @ts-ignore
                protected initializeBeanContextResources(): void;
            }
        }
    }
}
