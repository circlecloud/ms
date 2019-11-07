// @ts-nocheck
declare namespace java {
    namespace beans {
        // @ts-ignore
         class VetoableChangeSupport extends java.lang.Object {
            /**
             * Constructs a <code>VetoableChangeSupport</code> object.
             */
            // @ts-ignore
            constructor(sourceBean: java.lang.Object)
            /**
             * Add a VetoableChangeListener to the listener list.
             * The listener is registered for all properties.
             * The same listener object may be added more than once, and will be called
             * as many times as it is added.
             * If <code>listener</code> is null, no exception is thrown and no action
             * is taken.
             */
            // @ts-ignore
            public addVetoableChangeListener(listener: java.beans.VetoableChangeListener): void;
            /**
             * Remove a VetoableChangeListener from the listener list.
             * This removes a VetoableChangeListener that was registered
             * for all properties.
             * If <code>listener</code> was added more than once to the same event
             * source, it will be notified one less time after being removed.
             * If <code>listener</code> is null, or was never added, no exception is
             * thrown and no action is taken.
             */
            // @ts-ignore
            public removeVetoableChangeListener(listener: java.beans.VetoableChangeListener): void;
            /**
             * Returns an array of all the listeners that were added to the
             * VetoableChangeSupport object with addVetoableChangeListener().
             * <p>
             * If some listeners have been added with a named property, then
             * the returned array will be a mixture of VetoableChangeListeners
             * and <code>VetoableChangeListenerProxy</code>s. If the calling
             * method is interested in distinguishing the listeners then it must
             * test each element to see if it's a
             * <code>VetoableChangeListenerProxy</code>, perform the cast, and examine
             * the parameter.
             * <pre>{@code
             * VetoableChangeListener[] listeners = bean.getVetoableChangeListeners();
             * for (int i = 0; i < listeners.length; i++) {
             * if (listeners[i] instanceof VetoableChangeListenerProxy) {
             * VetoableChangeListenerProxy proxy =
             * (VetoableChangeListenerProxy)listeners[i];
             * if (proxy.getPropertyName().equals("foo")) {
             * // proxy is a VetoableChangeListener which was associated
             * // with the property named "foo"
             * }
             * }
             * }
             * }</pre>
             */
            // @ts-ignore
            public getVetoableChangeListeners(): java.beans.VetoableChangeListener[];
            /**
             * Add a VetoableChangeListener for a specific property.  The listener
             * will be invoked only when a call on fireVetoableChange names that
             * specific property.
             * The same listener object may be added more than once.  For each
             * property,  the listener will be invoked the number of times it was added
             * for that property.
             * If <code>propertyName</code> or <code>listener</code> is null, no
             * exception is thrown and no action is taken.
             */
            // @ts-ignore
            public addVetoableChangeListener(propertyName: string, listener: java.beans.VetoableChangeListener): void;
            /**
             * Remove a VetoableChangeListener for a specific property.
             * If <code>listener</code> was added more than once to the same event
             * source for the specified property, it will be notified one less time
             * after being removed.
             * If <code>propertyName</code> is null, no exception is thrown and no
             * action is taken.
             * If <code>listener</code> is null, or was never added for the specified
             * property, no exception is thrown and no action is taken.
             */
            // @ts-ignore
            public removeVetoableChangeListener(propertyName: string, listener: java.beans.VetoableChangeListener): void;
            /**
             * Returns an array of all the listeners which have been associated
             * with the named property.
             */
            // @ts-ignore
            public getVetoableChangeListeners(propertyName: string): java.beans.VetoableChangeListener[];
            /**
             * Reports a constrained property update to listeners
             * that have been registered to track updates of
             * all properties or a property with the specified name.
             * <p>
             * Any listener can throw a {@code PropertyVetoException} to veto the update.
             * If one of the listeners vetoes the update, this method passes
             * a new "undo" {@code PropertyChangeEvent} that reverts to the old value
             * to all listeners that already confirmed this update
             * and throws the {@code PropertyVetoException} again.
             * <p>
             * No event is fired if old and new values are equal and non-null.
             * <p>
             * This is merely a convenience wrapper around the more general
             * {@link #fireVetoableChange(PropertyChangeEvent)} method.
             */
            // @ts-ignore
            public fireVetoableChange(propertyName: string, oldValue: java.lang.Object, newValue: java.lang.Object): void;
            /**
             * Reports an integer constrained property update to listeners
             * that have been registered to track updates of
             * all properties or a property with the specified name.
             * <p>
             * Any listener can throw a {@code PropertyVetoException} to veto the update.
             * If one of the listeners vetoes the update, this method passes
             * a new "undo" {@code PropertyChangeEvent} that reverts to the old value
             * to all listeners that already confirmed this update
             * and throws the {@code PropertyVetoException} again.
             * <p>
             * No event is fired if old and new values are equal.
             * <p>
             * This is merely a convenience wrapper around the more general
             * {@link #fireVetoableChange(String, Object, Object)} method.
             */
            // @ts-ignore
            public fireVetoableChange(propertyName: string, oldValue: number, newValue: number): void;
            /**
             * Reports a boolean constrained property update to listeners
             * that have been registered to track updates of
             * all properties or a property with the specified name.
             * <p>
             * Any listener can throw a {@code PropertyVetoException} to veto the update.
             * If one of the listeners vetoes the update, this method passes
             * a new "undo" {@code PropertyChangeEvent} that reverts to the old value
             * to all listeners that already confirmed this update
             * and throws the {@code PropertyVetoException} again.
             * <p>
             * No event is fired if old and new values are equal.
             * <p>
             * This is merely a convenience wrapper around the more general
             * {@link #fireVetoableChange(String, Object, Object)} method.
             */
            // @ts-ignore
            public fireVetoableChange(propertyName: string, oldValue: boolean, newValue: boolean): void;
            /**
             * Fires a property change event to listeners
             * that have been registered to track updates of
             * all properties or a property with the specified name.
             * <p>
             * Any listener can throw a {@code PropertyVetoException} to veto the update.
             * If one of the listeners vetoes the update, this method passes
             * a new "undo" {@code PropertyChangeEvent} that reverts to the old value
             * to all listeners that already confirmed this update
             * and throws the {@code PropertyVetoException} again.
             * <p>
             * No event is fired if the given event's old and new values are equal and non-null.
             */
            // @ts-ignore
            public fireVetoableChange(event: java.beans.PropertyChangeEvent): void;
            /**
             * Check if there are any listeners for a specific property, including
             * those registered on all properties.  If <code>propertyName</code>
             * is null, only check for listeners registered on all properties.
             */
            // @ts-ignore
            public hasListeners(propertyName: string): boolean;
        }
    }
}
