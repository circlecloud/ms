// @ts-nocheck
declare namespace java {
    namespace beans {
        // @ts-ignore
         class IndexedPropertyChangeEvent extends java.beans.PropertyChangeEvent {
            /**
             * Constructs a new <code>IndexedPropertyChangeEvent</code> object.
             */
            // @ts-ignore
            constructor(source: java.lang.Object, propertyName: string, oldValue: java.lang.Object, newValue: java.lang.Object, index: number)
            /**
             * Gets the index of the property that was changed.
             */
            // @ts-ignore
            public getIndex(): number;
        }
    }
}
