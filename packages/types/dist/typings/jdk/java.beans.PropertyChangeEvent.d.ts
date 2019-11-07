declare namespace java {
    namespace beans {
        // @ts-ignore
         class PropertyChangeEvent extends java.util.EventObject {
            /**
             * Constructs a new {@code PropertyChangeEvent}.
             */
            // @ts-ignore
            constructor(source: java.lang.Object, propertyName: string, oldValue: java.lang.Object, newValue: java.lang.Object)
            /**
             * Gets the programmatic name of the property that was changed.
             */
            // @ts-ignore
            public getPropertyName(): string;
            /**
             * Gets the new value for the property, expressed as an Object.
             */
            // @ts-ignore
            public getNewValue(): java.lang.Object;
            /**
             * Gets the old value for the property, expressed as an Object.
             */
            // @ts-ignore
            public getOldValue(): java.lang.Object;
            /**
             * Sets the propagationId object for the event.
             */
            // @ts-ignore
            public setPropagationId(propagationId: java.lang.Object): void;
            /**
             * The "propagationId" field is reserved for future use.  In Beans 1.0
             * the sole requirement is that if a listener catches a PropertyChangeEvent
             * and then fires a PropertyChangeEvent of its own, then it should
             * make sure that it propagates the propagationId field from its
             * incoming event to its outgoing event.
             */
            // @ts-ignore
            public getPropagationId(): java.lang.Object;
            /**
             * Returns a string representation of the object.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
