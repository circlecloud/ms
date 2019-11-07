declare namespace java {
    namespace beans {
        // @ts-ignore
         class PropertyVetoException extends java.lang.Exception {
            /**
             * Constructs a <code>PropertyVetoException</code> with a
             * detailed message.
             */
            // @ts-ignore
            constructor(mess: string, evt: java.beans.PropertyChangeEvent)
            /**
             * Gets the vetoed <code>PropertyChangeEvent</code>.
             */
            // @ts-ignore
            public getPropertyChangeEvent(): java.beans.PropertyChangeEvent;
        }
    }
}
