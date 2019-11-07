// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class ContainerOrderFocusTraversalPolicy extends java.awt.FocusTraversalPolicy {
            // @ts-ignore
            constructor()
            /**
             * Returns the Component that should receive the focus after aComponent.
             * aContainer must be a focus cycle root of aComponent or a focus traversal policy provider.
             * <p>
             * By default, ContainerOrderFocusTraversalPolicy implicitly transfers
             * focus down-cycle. That is, during normal forward focus traversal, the
             * Component traversed after a focus cycle root will be the focus-cycle-
             * root's default Component to focus. This behavior can be disabled using
             * the <code>setImplicitDownCycleTraversal</code> method.
             * <p>
             * If aContainer is <a href="doc-files/FocusSpec.html#FocusTraversalPolicyProviders">focus
             * traversal policy provider</a>, the focus is always transferred down-cycle.
             */
            // @ts-ignore
            public getComponentAfter(aContainer: java.awt.Container, aComponent: java.awt.Component): java.awt.Component;
            /**
             * Returns the Component that should receive the focus before aComponent.
             * aContainer must be a focus cycle root of aComponent or a <a
             * href="doc-files/FocusSpec.html#FocusTraversalPolicyProviders">focus traversal policy
             * provider</a>.
             */
            // @ts-ignore
            public getComponentBefore(aContainer: java.awt.Container, aComponent: java.awt.Component): java.awt.Component;
            /**
             * Returns the first Component in the traversal cycle. This method is used
             * to determine the next Component to focus when traversal wraps in the
             * forward direction.
             */
            // @ts-ignore
            public getFirstComponent(aContainer: java.awt.Container): java.awt.Component;
            /**
             * Returns the last Component in the traversal cycle. This method is used
             * to determine the next Component to focus when traversal wraps in the
             * reverse direction.
             */
            // @ts-ignore
            public getLastComponent(aContainer: java.awt.Container): java.awt.Component;
            /**
             * Returns the default Component to focus. This Component will be the first
             * to receive focus when traversing down into a new focus traversal cycle
             * rooted at aContainer. The default implementation of this method
             * returns the same Component as <code>getFirstComponent</code>.
             */
            // @ts-ignore
            public getDefaultComponent(aContainer: java.awt.Container): java.awt.Component;
            /**
             * Sets whether this ContainerOrderFocusTraversalPolicy transfers focus
             * down-cycle implicitly. If <code>true</code>, during normal forward focus
             * traversal, the Component traversed after a focus cycle root will be the
             * focus-cycle-root's default Component to focus. If <code>false</code>,
             * the next Component in the focus traversal cycle rooted at the specified
             * focus cycle root will be traversed instead. The default value for this
             * property is <code>true</code>.
             */
            // @ts-ignore
            public setImplicitDownCycleTraversal(implicitDownCycleTraversal: boolean): void;
            /**
             * Returns whether this ContainerOrderFocusTraversalPolicy transfers focus
             * down-cycle implicitly. If <code>true</code>, during normal forward focus
             * traversal, the Component traversed after a focus cycle root will be the
             * focus-cycle-root's default Component to focus. If <code>false</code>,
             * the next Component in the focus traversal cycle rooted at the specified
             * focus cycle root will be traversed instead.
             */
            // @ts-ignore
            public getImplicitDownCycleTraversal(): boolean;
            /**
             * Determines whether a Component is an acceptable choice as the new
             * focus owner. By default, this method will accept a Component if and
             * only if it is visible, displayable, enabled, and focusable.
             */
            // @ts-ignore
            protected accept(aComponent: java.awt.Component): boolean;
        }
    }
}
