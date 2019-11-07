declare namespace java {
    namespace beans {
        // @ts-ignore
         class PropertyChangeSupport extends java.lang.Object {
            /**
             * Constructs a <code>PropertyChangeSupport</code> object.
             */
            // @ts-ignore
            constructor(sourceBean: java.lang.Object)
            /**
             * Add a PropertyChangeListener to the listener list.
             * The listener is registered for all properties.
             * The same listener object may be added more than once, and will be called
             * as many times as it is added.
             * If <code>listener</code> is null, no exception is thrown and no action
             * is taken.
             */
            // @ts-ignore
            public addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
            /**
             * Remove a PropertyChangeListener from the listener list.
             * This removes a PropertyChangeListener that was registered
             * for all properties.
             * If <code>listener</code> was added more than once to the same event
             * source, it will be notified one less time after being removed.
             * If <code>listener</code> is null, or was never added, no exception is
             * thrown and no action is taken.
             */
            // @ts-ignore
            public removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
            /**
             * Returns an array of all the listeners that were added to the
             * PropertyChangeSupport object with addPropertyChangeListener().
             * <p>
             * If some listeners have been added with a named property, then
             * the returned array will be a mixture of PropertyChangeListeners
             * and <code>PropertyChangeListenerProxy</code>s. If the calling
             * method is interested in distinguishing the listeners then it must
             * test each element to see if it's a
             * <code>PropertyChangeListenerProxy</code>, perform the cast, and examine
             * the parameter.
             * <pre>{@code
             * PropertyChangeListener[] listeners = bean.getPropertyChangeListeners();
             * for (int i = 0; i < listeners.length; i++) {
             * if (listeners[i] instanceof PropertyChangeListenerProxy) {
             * PropertyChangeListenerProxy proxy =
             * (PropertyChangeListenerProxy)listeners[i];
             * if (proxy.getPropertyName().equals("foo")) {
             * // proxy is a PropertyChangeListener which was associated
             * // with the property named "foo"
             * }
             * }
             * }
             * }</pre>
             */
            // @ts-ignore
            public getPropertyChangeListeners(): java.beans.PropertyChangeListener[];
            /**
             * Add a PropertyChangeListener for a specific property.  The listener
             * will be invoked only when a call on firePropertyChange names that
             * specific property.
             * The same listener object may be added more than once.  For each
             * property,  the listener will be invoked the number of times it was added
             * for that property.
             * If <code>propertyName</code> or <code>listener</code> is null, no
             * exception is thrown and no action is taken.
             */
            // @ts-ignore
            public addPropertyChangeListener(propertyName: string, listener: java.beans.PropertyChangeListener): void;
            /**
             * Remove a PropertyChangeListener for a specific property.
             * If <code>listener</code> was added more than once to the same event
             * source for the specified property, it will be notified one less time
             * after being removed.
             * If <code>propertyName</code> is null,  no exception is thrown and no
             * action is taken.
             * If <code>listener</code> is null, or was never added for the specified
             * property, no exception is thrown and no action is taken.
             */
            // @ts-ignore
            public removePropertyChangeListener(propertyName: string, listener: java.beans.PropertyChangeListener): void;
            /**
             * Returns an array of all the listeners which have been associated
             * with the named property.
             */
            // @ts-ignore
            public getPropertyChangeListeners(propertyName: string): java.beans.PropertyChangeListener[];
            /**
             * Reports a bound property update to listeners
             * that have been registered to track updates of
             * all properties or a property with the specified name.
             * <p>
             * No event is fired if old and new values are equal and non-null.
             * <p>
             * This is merely a convenience wrapper around the more general
             * {@link #firePropertyChange(PropertyChangeEvent)} method.
             */
            // @ts-ignore
            public firePropertyChange(propertyName: string, oldValue: java.lang.Object, newValue: java.lang.Object): void;
            /**
             * Reports an integer bound property update to listeners
             * that have been registered to track updates of
             * all properties or a property with the specified name.
             * <p>
             * No event is fired if old and new values are equal.
             * <p>
             * This is merely a convenience wrapper around the more general
             * {@link #firePropertyChange(String, Object, Object)}  method.
             */
            // @ts-ignore
            public firePropertyChange(propertyName: string, oldValue: number, newValue: number): void;
            /**
             * Reports a boolean bound property update to listeners
             * that have been registered to track updates of
             * all properties or a property with the specified name.
             * <p>
             * No event is fired if old and new values are equal.
             * <p>
             * This is merely a convenience wrapper around the more general
             * {@link #firePropertyChange(String, Object, Object)}  method.
             */
            // @ts-ignore
            public firePropertyChange(propertyName: string, oldValue: boolean, newValue: boolean): void;
            /**
             * Fires a property change event to listeners
             * that have been registered to track updates of
             * all properties or a property with the specified name.
             * <p>
             * No event is fired if the given event's old and new values are equal and non-null.
             */
            // @ts-ignore
            public firePropertyChange(event: java.beans.PropertyChangeEvent): void;
            /**
             * Reports a bound indexed property update to listeners
             * that have been registered to track updates of
             * all properties or a property with the specified name.
             * <p>
             * No event is fired if old and new values are equal and non-null.
             * <p>
             * This is merely a convenience wrapper around the more general
             * {@link #firePropertyChange(PropertyChangeEvent)} method.
             */
            // @ts-ignore
            public fireIndexedPropertyChange(propertyName: string, index: number, oldValue: java.lang.Object, newValue: java.lang.Object): void;
            /**
             * Reports an integer bound indexed property update to listeners
             * that have been registered to track updates of
             * all properties or a property with the specified name.
             * <p>
             * No event is fired if old and new values are equal.
             * <p>
             * This is merely a convenience wrapper around the more general
             * {@link #fireIndexedPropertyChange(String, int, Object, Object)} method.
             */
            // @ts-ignore
            public fireIndexedPropertyChange(propertyName: string, index: number, oldValue: number, newValue: number): void;
            /**
             * Reports a boolean bound indexed property update to listeners
             * that have been registered to track updates of
             * all properties or a property with the specified name.
             * <p>
             * No event is fired if old and new values are equal.
             * <p>
             * This is merely a convenience wrapper around the more general
             * {@link #fireIndexedPropertyChange(String, int, Object, Object)} method.
             */
            // @ts-ignore
            public fireIndexedPropertyChange(propertyName: string, index: number, oldValue: boolean, newValue: boolean): void;
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
