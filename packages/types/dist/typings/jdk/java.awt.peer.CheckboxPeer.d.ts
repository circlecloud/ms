// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace peer {
            // @ts-ignore
            interface CheckboxPeer {
                /**
                 * Sets the state of the checkbox to be checked {@code true} or
                 * unchecked {@code false}.
                 */
                // @ts-ignore
                 setState(state: boolean): void;
                /**
                 * Sets the checkbox group for this checkbox. Checkboxes in one checkbox
                 * group can only be selected exclusively (like radio buttons). A value
                 * of {@code null} removes this checkbox from any checkbox group.
                 */
                // @ts-ignore
                 setCheckboxGroup(g: java.awt.CheckboxGroup): void;
                /**
                 * Sets the label that should be displayed on the checkbox. A value of
                 * {@code null} means that no label should be displayed.
                 */
                // @ts-ignore
                 setLabel(label: string): void;
            }
        }
    }
}
