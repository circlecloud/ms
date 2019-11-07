// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace Button {
            // @ts-ignore
            protected class AccessibleAWTButton extends java.awt.Component.AccessibleAWTComponent {
                // @ts-ignore
                constructor()
                /**
                 * Get the accessible name of this object.
                 */
                // @ts-ignore
                public getAccessibleName(): string;
                /**
                 * Get the AccessibleAction associated with this object.  In the
                 * implementation of the Java Accessibility API for this class,
                 * return this object, which is responsible for implementing the
                 * AccessibleAction interface on behalf of itself.
                 */
                // @ts-ignore
                public getAccessibleAction(): any /*javax.accessibility.AccessibleAction*/;
                /**
                 * Get the AccessibleValue associated with this object.  In the
                 * implementation of the Java Accessibility API for this class,
                 * return this object, which is responsible for implementing the
                 * AccessibleValue interface on behalf of itself.
                 */
                // @ts-ignore
                public getAccessibleValue(): any /*javax.accessibility.AccessibleValue*/;
                /**
                 * Returns the number of Actions available in this object.  The
                 * default behavior of a button is to have one action - toggle
                 * the button.
                 */
                // @ts-ignore
                public getAccessibleActionCount(): number;
                /**
                 * Return a description of the specified action of the object.
                 */
                // @ts-ignore
                public getAccessibleActionDescription(i: number): string;
                /**
                 * Perform the specified Action on the object
                 */
                // @ts-ignore
                public doAccessibleAction(i: number): boolean;
                /**
                 * Get the value of this object as a Number.
                 */
                // @ts-ignore
                public getCurrentAccessibleValue(): java.lang.Number;
                /**
                 * Set the value of this object as a Number.
                 */
                // @ts-ignore
                public setCurrentAccessibleValue(n: java.lang.Number): boolean;
                /**
                 * Get the minimum value of this object as a Number.
                 */
                // @ts-ignore
                public getMinimumAccessibleValue(): java.lang.Number;
                /**
                 * Get the maximum value of this object as a Number.
                 */
                // @ts-ignore
                public getMaximumAccessibleValue(): java.lang.Number;
                /**
                 * Get the role of this object.
                 */
                // @ts-ignore
                public getAccessibleRole(): any /*javax.accessibility.AccessibleRole*/;
            }
        }
    }
}
