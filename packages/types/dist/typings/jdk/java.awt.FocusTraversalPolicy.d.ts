declare namespace java {
    namespace awt {
        // @ts-ignore
        abstract class FocusTraversalPolicy extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Returns the Component that should receive the focus after aComponent.
             * aContainer must be a focus cycle root of aComponent or a focus traversal
             * policy provider.
             */
            // @ts-ignore
            public abstract getComponentAfter(aContainer: java.awt.Container, aComponent: java.awt.Component): java.awt.Component;
            /**
             * Returns the Component that should receive the focus before aComponent.
             * aContainer must be a focus cycle root of aComponent or a focus traversal
             * policy provider.
             */
            // @ts-ignore
            public abstract getComponentBefore(aContainer: java.awt.Container, aComponent: java.awt.Component): java.awt.Component;
            /**
             * Returns the first Component in the traversal cycle. This method is used
             * to determine the next Component to focus when traversal wraps in the
             * forward direction.
             */
            // @ts-ignore
            public abstract getFirstComponent(aContainer: java.awt.Container): java.awt.Component;
            /**
             * Returns the last Component in the traversal cycle. This method is used
             * to determine the next Component to focus when traversal wraps in the
             * reverse direction.
             */
            // @ts-ignore
            public abstract getLastComponent(aContainer: java.awt.Container): java.awt.Component;
            /**
             * Returns the default Component to focus. This Component will be the first
             * to receive focus when traversing down into a new focus traversal cycle
             * rooted at aContainer.
             */
            // @ts-ignore
            public abstract getDefaultComponent(aContainer: java.awt.Container): java.awt.Component;
            /**
             * Returns the Component that should receive the focus when a Window is
             * made visible for the first time. Once the Window has been made visible
             * by a call to <code>show()</code> or <code>setVisible(true)</code>, the
             * initial Component will not be used again. Instead, if the Window loses
             * and subsequently regains focus, or is made invisible or undisplayable
             * and subsequently made visible and displayable, the Window's most
             * recently focused Component will become the focus owner. The default
             * implementation of this method returns the default Component.
             */
            // @ts-ignore
            public getInitialComponent(window: java.awt.Window): java.awt.Component;
        }
    }
}
