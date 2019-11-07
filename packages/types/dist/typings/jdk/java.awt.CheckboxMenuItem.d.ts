declare namespace java {
    namespace awt {
        // @ts-ignore
         class CheckboxMenuItem extends java.awt.MenuItem {
            /**
             * Create a check box menu item with an empty label.
             * The item's state is initially set to "off."
             */
            // @ts-ignore
            constructor()
            /**
             * Create a check box menu item with the specified label.
             * The item's state is initially set to "off."
             */
            // @ts-ignore
            constructor(label: string)
            /**
             * Create a check box menu item with the specified label and state.
             */
            // @ts-ignore
            constructor(label: string, state: boolean)
            /**
             * Creates the peer of the checkbox item.  This peer allows us to
             * change the look of the checkbox item without changing its
             * functionality.
             * Most applications do not call this method directly.
             */
            // @ts-ignore
            public addNotify(): void;
            /**
             * Determines whether the state of this check box menu item
             * is "on" or "off."
             */
            // @ts-ignore
            public getState(): boolean;
            /**
             * Sets this check box menu item to the specified state.
             * The boolean value <code>true</code> indicates "on" while
             * <code>false</code> indicates "off."
             * <p>Note that this method should be primarily used to
             * initialize the state of the check box menu item.
             * Programmatically setting the state of the check box
             * menu item will <i>not</i> trigger
             * an <code>ItemEvent</code>.  The only way to trigger an
             * <code>ItemEvent</code> is by user interaction.
             */
            // @ts-ignore
            public setState(b: boolean): void;
            /**
             * Returns the an array (length 1) containing the checkbox menu item
             * label or null if the checkbox is not selected.
             */
            // @ts-ignore
            public getSelectedObjects(): java.lang.Object[];
            /**
             * Adds the specified item listener to receive item events from
             * this check box menu item.  Item events are sent in response to user
             * actions, but not in response to calls to setState().
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addItemListener(l: java.awt.event.ItemListener): void;
            /**
             * Removes the specified item listener so that it no longer receives
             * item events from this check box menu item.
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeItemListener(l: java.awt.event.ItemListener): void;
            /**
             * Returns an array of all the item listeners
             * registered on this checkbox menuitem.
             */
            // @ts-ignore
            public getItemListeners(): java.awt.event.ItemListener[];
            /**
             * Returns an array of all the objects currently registered
             * as <code><em>Foo</em>Listener</code>s
             * upon this <code>CheckboxMenuItem</code>.
             * <code><em>Foo</em>Listener</code>s are registered using the
             * <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the <code>listenerType</code> argument
             * with a class literal, such as
             * <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a
             * <code>CheckboxMenuItem</code> <code>c</code>
             * for its item listeners with the following code:
             * <pre>ItemListener[] ils = (ItemListener[])(c.getListeners(ItemListener.class));</pre>
             * If no such listeners exist, this method returns an empty array.
             */
            // @ts-ignore
            public getListeners(listenerType: java.lang.Class): java.util.EventListener[];
            /**
             * Processes events on this check box menu item.
             * If the event is an instance of <code>ItemEvent</code>,
             * this method invokes the <code>processItemEvent</code> method.
             * If the event is not an item event,
             * it invokes <code>processEvent</code> on the superclass.
             * <p>
             * Check box menu items currently support only item events.
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processEvent(e: java.awt.AWTEvent): void;
            /**
             * Processes item events occurring on this check box menu item by
             * dispatching them to any registered <code>ItemListener</code> objects.
             * <p>
             * This method is not called unless item events are
             * enabled for this menu item. Item events are enabled
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
             * Returns a string representing the state of this
             * <code>CheckBoxMenuItem</code>. This
             * method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             */
            // @ts-ignore
            public paramString(): string;
            /**
             * Gets the AccessibleContext associated with this CheckboxMenuItem.
             * For checkbox menu items, the AccessibleContext takes the
             * form of an AccessibleAWTCheckboxMenuItem.
             * A new AccessibleAWTCheckboxMenuItem is created if necessary.
             */
            // @ts-ignore
            public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
        }
    }
}
