declare namespace java {
    namespace awt {
        namespace Checkbox {
            // @ts-ignore
            protected class AccessibleAWTCheckbox extends java.awt.Component.AccessibleAWTComponent {
                // @ts-ignore
                constructor()
                /**
                 * Fire accessible property change events when the state of the
                 * toggle button changes.
                 */
                // @ts-ignore
                public itemStateChanged(e: java.awt.event.ItemEvent): void;
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
                 * Returns the number of Actions available in this object.
                 * If there is more than one, the first one is the "default"
                 * action.
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
                 * Get the value of this object as a Number.  If the value has not been
                 * set, the return value will be null.
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
                /**
                 * Get the state set of this object.
                 */
                // @ts-ignore
                public getAccessibleStateSet(): any /*javax.accessibility.AccessibleStateSet*/;
            }
        }
    }
}
