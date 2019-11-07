// @ts-nocheck
declare namespace java {
    namespace beans {
        // @ts-ignore
         class PropertyChangeListenerProxy extends java.util.EventListenerProxy {
            /**
             * Constructor which binds the {@code PropertyChangeListener}
             * to a specific property.
             */
            // @ts-ignore
            constructor(propertyName: string, listener: java.beans.PropertyChangeListener)
            /**
             * Forwards the property change event to the listener delegate.
             */
            // @ts-ignore
            public propertyChange(event: java.beans.PropertyChangeEvent): void;
            /**
             * Returns the name of the named property associated with the listener.
             */
            // @ts-ignore
            public getPropertyName(): string;
        }
    }
}
