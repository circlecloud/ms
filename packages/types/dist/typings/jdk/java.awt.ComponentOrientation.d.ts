// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class ComponentOrientation extends java.lang.Object {
            // @ts-ignore
            public static LEFT_TO_RIGHT: java.awt.ComponentOrientation;
            // @ts-ignore
            public static RIGHT_TO_LEFT: java.awt.ComponentOrientation;
            // @ts-ignore
            public static UNKNOWN: java.awt.ComponentOrientation;
            /**
             * Are lines horizontal?
             * This will return true for horizontal, left-to-right writing
             * systems such as Roman.
             */
            // @ts-ignore
            public isHorizontal(): boolean;
            /**
             * HorizontalLines: Do items run left-to-right?<br>
             * Vertical Lines:  Do lines run left-to-right?<br>
             * This will return true for horizontal, left-to-right writing
             * systems such as Roman.
             */
            // @ts-ignore
            public isLeftToRight(): boolean;
            /**
             * Returns the orientation that is appropriate for the given locale.
             */
            // @ts-ignore
            public static getOrientation(locale: java.util.Locale): java.awt.ComponentOrientation;
            /**
             * Returns the orientation appropriate for the given ResourceBundle's
             * localization.  Three approaches are tried, in the following order:
             * <ol>
             * <li>Retrieve a ComponentOrientation object from the ResourceBundle
             * using the string "Orientation" as the key.
             * <li>Use the ResourceBundle.getLocale to determine the bundle's
             * locale, then return the orientation for that locale.
             * <li>Return the default locale's orientation.
             * </ol>
             */
            // @ts-ignore
            public static getOrientation(bdl: java.util.ResourceBundle): java.awt.ComponentOrientation;
        }
    }
}
