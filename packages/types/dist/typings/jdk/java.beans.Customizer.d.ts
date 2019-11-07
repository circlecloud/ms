// @ts-nocheck
declare namespace java {
    namespace beans {
        // @ts-ignore
        interface Customizer {
            /**
             * Set the object to be customized.  This method should be called only
             * once, before the Customizer has been added to any parent AWT container.
             */
            // @ts-ignore
             setObject(bean: java.lang.Object): void;
            /**
             * Register a listener for the PropertyChange event.  The customizer
             * should fire a PropertyChange event whenever it changes the target
             * bean in a way that might require the displayed properties to be
             * refreshed.
             */
            // @ts-ignore
             addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
            /**
             * Remove a listener for the PropertyChange event.
             */
            // @ts-ignore
             removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
        }
    }
}
