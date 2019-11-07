// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace Choice {
            // @ts-ignore
            protected class AccessibleAWTChoice extends java.awt.Component.AccessibleAWTComponent {
                // @ts-ignore
                constructor()
                /**
                 * Get the AccessibleAction associated with this object.  In the
                 * implementation of the Java Accessibility API for this class,
                 * return this object, which is responsible for implementing the
                 * AccessibleAction interface on behalf of itself.
                 */
                // @ts-ignore
                public getAccessibleAction(): any /*javax.accessibility.AccessibleAction*/;
                /**
                 * Get the role of this object.
                 */
                // @ts-ignore
                public getAccessibleRole(): any /*javax.accessibility.AccessibleRole*/;
                /**
                 * Returns the number of accessible actions available in this object
                 * If there are more than one, the first one is considered the "default"
                 * action of the object.
                 */
                // @ts-ignore
                public getAccessibleActionCount(): number;
                /**
                 * Returns a description of the specified action of the object.
                 */
                // @ts-ignore
                public getAccessibleActionDescription(i: number): string;
                /**
                 * Perform the specified Action on the object
                 */
                // @ts-ignore
                public doAccessibleAction(i: number): boolean;
            }
        }
    }
}
