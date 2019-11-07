declare namespace java {
    namespace awt {
        namespace Scrollbar {
            // @ts-ignore
            protected class AccessibleAWTScrollBar extends java.awt.Component.AccessibleAWTComponent {
                // @ts-ignore
                constructor()
                /**
                 * Get the state set of this object.
                 */
                // @ts-ignore
                public getAccessibleStateSet(): any /*javax.accessibility.AccessibleStateSet*/;
                /**
                 * Get the role of this object.
                 */
                // @ts-ignore
                public getAccessibleRole(): any /*javax.accessibility.AccessibleRole*/;
                /**
                 * Get the <code>AccessibleValue</code> associated with this
                 * object.  In the implementation of the Java Accessibility
                 * API for this class, return this object, which is
                 * responsible for implementing the
                 * <code>AccessibleValue</code> interface on behalf of itself.
                 */
                // @ts-ignore
                public getAccessibleValue(): any /*javax.accessibility.AccessibleValue*/;
                /**
                 * Get the accessible value of this object.
                 */
                // @ts-ignore
                public getCurrentAccessibleValue(): java.lang.Number;
                /**
                 * Set the value of this object as a Number.
                 */
                // @ts-ignore
                public setCurrentAccessibleValue(n: java.lang.Number): boolean;
                /**
                 * Get the minimum accessible value of this object.
                 */
                // @ts-ignore
                public getMinimumAccessibleValue(): java.lang.Number;
                /**
                 * Get the maximum accessible value of this object.
                 */
                // @ts-ignore
                public getMaximumAccessibleValue(): java.lang.Number;
            }
        }
    }
}
