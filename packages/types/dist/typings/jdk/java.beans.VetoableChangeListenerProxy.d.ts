// @ts-nocheck
declare namespace java {
    namespace beans {
        // @ts-ignore
         class VetoableChangeListenerProxy extends java.util.EventListenerProxy {
            /**
             * Constructor which binds the {@code VetoableChangeListener}
             * to a specific property.
             */
            // @ts-ignore
            constructor(propertyName: string, listener: java.beans.VetoableChangeListener)
            /**
             * Forwards the property change event to the listener delegate.
             */
            // @ts-ignore
            public vetoableChange(event: java.beans.PropertyChangeEvent): void;
            /**
             * Returns the name of the named property associated with the listener.
             */
            // @ts-ignore
            public getPropertyName(): string;
        }
    }
}
