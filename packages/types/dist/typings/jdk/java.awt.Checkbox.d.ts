// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class Checkbox extends java.awt.Component {
            /**
             * Creates a check box with an empty string for its label.
             * The state of this check box is set to "off," and it is not
             * part of any check box group.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a check box with the specified label.  The state
             * of this check box is set to "off," and it is not part of
             * any check box group.
             */
            // @ts-ignore
            constructor(label: string)
            /**
             * Creates a check box with the specified label
             * and sets the specified state.
             * This check box is not part of any check box group.
             */
            // @ts-ignore
            constructor(label: string, state: boolean)
            /**
             * Constructs a Checkbox with the specified label, set to the
             * specified state, and in the specified check box group.
             */
            // @ts-ignore
            constructor(label: string, state: boolean, group: java.awt.CheckboxGroup)
            /**
             * Creates a check box with the specified label, in the specified
             * check box group, and set to the specified state.
             */
            // @ts-ignore
            constructor(label: string, group: java.awt.CheckboxGroup, state: boolean)
            /**
             * Creates the peer of the Checkbox. The peer allows you to change the
             * look of the Checkbox without changing its functionality.
             */
            // @ts-ignore
            public addNotify(): void;
            /**
             * Gets the label of this check box.
             */
            // @ts-ignore
            public getLabel(): string;
            /**
             * Sets this check box's label to be the string argument.
             */
            // @ts-ignore
            public setLabel(label: string): void;
            /**
             * Determines whether this check box is in the "on" or "off" state.
             * The boolean value <code>true</code> indicates the "on" state,
             * and <code>false</code> indicates the "off" state.
             */
            // @ts-ignore
            public getState(): boolean;
            /**
             * Sets the state of this check box to the specified state.
             * The boolean value <code>true</code> indicates the "on" state,
             * and <code>false</code> indicates the "off" state.
             * <p>Note that this method should be primarily used to
             * initialize the state of the checkbox.  Programmatically
             * setting the state of the checkbox will <i>not</i> trigger
             * an <code>ItemEvent</code>.  The only way to trigger an
             * <code>ItemEvent</code> is by user interaction.
             */
            // @ts-ignore
            public setState(state: boolean): void;
            /**
             * Returns an array (length 1) containing the checkbox
             * label or null if the checkbox is not selected.
             */
            // @ts-ignore
            public getSelectedObjects(): java.lang.Object[];
            /**
             * Determines this check box's group.
             */
            // @ts-ignore
            public getCheckboxGroup(): java.awt.CheckboxGroup;
            /**
             * Sets this check box's group to the specified check box group.
             * If this check box is already in a different check box group,
             * it is first taken out of that group.
             * <p>
             * If the state of this check box is <code>true</code> and the new
             * group already has a check box selected, this check box's state
             * is changed to <code>false</code>.  If the state of this check
             * box is <code>true</code> and the new group has no check box
             * selected, this check box becomes the selected checkbox for
             * the new group and its state is <code>true</code>.
             */
            // @ts-ignore
            public setCheckboxGroup(g: java.awt.CheckboxGroup): void;
            /**
             * Adds the specified item listener to receive item events from
             * this check box.  Item events are sent to listeners in response
             * to user input, but not in response to calls to setState().
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addItemListener(l: java.awt.event.ItemListener): void;
            /**
             * Removes the specified item listener so that the item listener
             * no longer receives item events from this check box.
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeItemListener(l: java.awt.event.ItemListener): void;
            /**
             * Returns an array of all the item listeners
             * registered on this checkbox.
             */
            // @ts-ignore
            public getItemListeners(): java.awt.event.ItemListener[];
            /**
             * Returns an array of all the objects currently registered
             * as <code><em>Foo</em>Listener</code>s
             * upon this <code>Checkbox</code>.
             * <code><em>Foo</em>Listener</code>s are registered using the
             * <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the <code>listenerType</code> argument
             * with a class literal, such as
             * <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a
             * <code>Checkbox</code> <code>c</code>
             * for its item listeners with the following code:
             * <pre>ItemListener[] ils = (ItemListener[])(c.getListeners(ItemListener.class));</pre>
             * If no such listeners exist, this method returns an empty array.
             */
            // @ts-ignore
            public getListeners(listenerType: java.lang.Class): java.util.EventListener[];
            /**
             * Processes events on this check box.
             * If the event is an instance of <code>ItemEvent</code>,
             * this method invokes the <code>processItemEvent</code> method.
             * Otherwise, it calls its superclass's <code>processEvent</code> method.
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processEvent(e: java.awt.AWTEvent): void;
            /**
             * Processes item events occurring on this check box by
             * dispatching them to any registered
             * <code>ItemListener</code> objects.
             * <p>
             * This method is not called unless item events are
             * enabled for this component. Item events are enabled
             * when one of the following occurs:
             * <ul>
             * <li>An <code>ItemListener</code> object is registered
             * via <code>addItemListener</code>.
             * <li>Item events are enabled via <code>enableEvents</code>.
             * </ul>
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processItemEvent(e: java.awt.event.ItemEvent): void;
            /**
             * Returns a string representing the state of this <code>Checkbox</code>.
             * This method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             */
            // @ts-ignore
            protected paramString(): string;
            /**
             * Gets the AccessibleContext associated with this Checkbox.
             * For checkboxes, the AccessibleContext takes the form of an
             * AccessibleAWTCheckbox.
             * A new AccessibleAWTCheckbox is created if necessary.
             */
            // @ts-ignore
            public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
        }
    }
}
