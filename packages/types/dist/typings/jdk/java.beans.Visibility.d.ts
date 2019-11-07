// @ts-nocheck
declare namespace java {
    namespace beans {
        // @ts-ignore
        interface Visibility {
            /**
             * Determines whether this bean needs a GUI.
             */
            // @ts-ignore
             needsGui(): boolean;
            /**
             * This method instructs the bean that it should not use the Gui.
             */
            // @ts-ignore
             dontUseGui(): void;
            /**
             * This method instructs the bean that it is OK to use the Gui.
             */
            // @ts-ignore
             okToUseGui(): void;
            /**
             * Determines whether this bean is avoiding using a GUI.
             */
            // @ts-ignore
             avoidingGui(): boolean;
        }
    }
}
