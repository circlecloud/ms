// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class CheckboxGroup extends java.lang.Object {
            /**
             * Creates a new instance of <code>CheckboxGroup</code>.
             */
            // @ts-ignore
            constructor()
            /**
             * Gets the current choice from this check box group.
             * The current choice is the check box in this
             * group that is currently in the "on" state,
             * or <code>null</code> if all check boxes in the
             * group are off.
             */
            // @ts-ignore
            public getSelectedCheckbox(): java.awt.Checkbox;
            // @ts-ignore
            public getCurrent(): java.awt.Checkbox;
            /**
             * Sets the currently selected check box in this group
             * to be the specified check box.
             * This method sets the state of that check box to "on" and
             * sets all other check boxes in the group to be off.
             * <p>
             * If the check box argument is <tt>null</tt>, all check boxes
             * in this check box group are deselected. If the check box argument
             * belongs to a different check box group, this method does
             * nothing.
             */
            // @ts-ignore
            public setSelectedCheckbox(box: java.awt.Checkbox): void;
            // @ts-ignore
            public setCurrent(box: java.awt.Checkbox): void;
            /**
             * Returns a string representation of this check box group,
             * including the value of its current selection.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
