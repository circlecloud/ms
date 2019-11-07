// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class DefaultFocusTraversalPolicy extends java.awt.ContainerOrderFocusTraversalPolicy {
            // @ts-ignore
            constructor()
            /**
             * Determines whether a Component is an acceptable choice as the new
             * focus owner. The Component must be visible, displayable, and enabled
             * to be accepted. If client code has explicitly set the focusability
             * of the Component by either overriding
             * <code>Component.isFocusTraversable()</code> or
             * <code>Component.isFocusable()</code>, or by calling
             * <code>Component.setFocusable()</code>, then the Component will be
             * accepted if and only if it is focusable. If, however, the Component is
             * relying on default focusability, then all Canvases, Labels, Panels,
             * Scrollbars, ScrollPanes, Windows, and lightweight Components will be
             * rejected.
             */
            // @ts-ignore
            protected accept(aComponent: java.awt.Component): boolean;
        }
    }
}
