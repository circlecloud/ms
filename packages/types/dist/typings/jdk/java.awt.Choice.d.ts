declare namespace java {
    namespace awt {
        // @ts-ignore
         class Choice extends java.awt.Component {
            /**
             * Creates a new choice menu. The menu initially has no items in it.
             * <p>
             * By default, the first item added to the choice menu becomes the
             * selected item, until a different selection is made by the user
             * by calling one of the <code>select</code> methods.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates the <code>Choice</code>'s peer.  This peer allows us
             * to change the look
             * of the <code>Choice</code> without changing its functionality.
             */
            // @ts-ignore
            public addNotify(): void;
            /**
             * Returns the number of items in this <code>Choice</code> menu.
             */
            // @ts-ignore
            public getItemCount(): number;
            // @ts-ignore
            public countItems(): number;
            /**
             * Gets the string at the specified index in this
             * <code>Choice</code> menu.
             */
            // @ts-ignore
            public getItem(index: number): string;
            /**
             * Adds an item to this <code>Choice</code> menu.
             */
            // @ts-ignore
            public add(item: string): void;
            /**
             * Obsolete as of Java 2 platform v1.1.  Please use the
             * <code>add</code> method instead.
             * <p>
             * Adds an item to this <code>Choice</code> menu.
             */
            // @ts-ignore
            public addItem(item: string): void;
            /**
             * Inserts the item into this choice at the specified position.
             * Existing items at an index greater than or equal to
             * <code>index</code> are shifted up by one to accommodate
             * the new item.  If <code>index</code> is greater than or
             * equal to the number of items in this choice,
             * <code>item</code> is added to the end of this choice.
             * <p>
             * If the item is the first one being added to the choice,
             * then the item becomes selected.  Otherwise, if the
             * selected item was one of the items shifted, the first
             * item in the choice becomes the selected item.  If the
             * selected item was no among those shifted, it remains
             * the selected item.
             */
            // @ts-ignore
            public insert(item: string, index: number): void;
            /**
             * Removes the first occurrence of <code>item</code>
             * from the <code>Choice</code> menu.  If the item
             * being removed is the currently selected item,
             * then the first item in the choice becomes the
             * selected item.  Otherwise, the currently selected
             * item remains selected (and the selected index is
             * updated accordingly).
             */
            // @ts-ignore
            public remove(item: string): void;
            /**
             * Removes an item from the choice menu
             * at the specified position.  If the item
             * being removed is the currently selected item,
             * then the first item in the choice becomes the
             * selected item.  Otherwise, the currently selected
             * item remains selected (and the selected index is
             * updated accordingly).
             */
            // @ts-ignore
            public remove(position: number): void;
            /**
             * Removes all items from the choice menu.
             */
            // @ts-ignore
            public removeAll(): void;
            /**
             * Gets a representation of the current choice as a string.
             */
            // @ts-ignore
            public getSelectedItem(): string;
            /**
             * Returns an array (length 1) containing the currently selected
             * item.  If this choice has no items, returns <code>null</code>.
             */
            // @ts-ignore
            public getSelectedObjects(): java.lang.Object[];
            /**
             * Returns the index of the currently selected item.
             * If nothing is selected, returns -1.
             */
            // @ts-ignore
            public getSelectedIndex(): number;
            /**
             * Sets the selected item in this <code>Choice</code> menu to be the
             * item at the specified position.
             * <p>Note that this method should be primarily used to
             * initially select an item in this component.
             * Programmatically calling this method will <i>not</i> trigger
             * an <code>ItemEvent</code>.  The only way to trigger an
             * <code>ItemEvent</code> is by user interaction.
             */
            // @ts-ignore
            public select(pos: number): void;
            /**
             * Sets the selected item in this <code>Choice</code> menu
             * to be the item whose name is equal to the specified string.
             * If more than one item matches (is equal to) the specified string,
             * the one with the smallest index is selected.
             * <p>Note that this method should be primarily used to
             * initially select an item in this component.
             * Programmatically calling this method will <i>not</i> trigger
             * an <code>ItemEvent</code>.  The only way to trigger an
             * <code>ItemEvent</code> is by user interaction.
             */
            // @ts-ignore
            public select(str: string): void;
            /**
             * Adds the specified item listener to receive item events from
             * this <code>Choice</code> menu.  Item events are sent in response
             * to user input, but not in response to calls to <code>select</code>.
             * If l is <code>null</code>, no exception is thrown and no action
             * is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addItemListener(l: java.awt.event.ItemListener): void;
            /**
             * Removes the specified item listener so that it no longer receives
             * item events from this <code>Choice</code> menu.
             * If l is <code>null</code>, no exception is thrown and no
             * action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeItemListener(l: java.awt.event.ItemListener): void;
            /**
             * Returns an array of all the item listeners
             * registered on this choice.
             */
            // @ts-ignore
            public getItemListeners(): java.awt.event.ItemListener[];
            /**
             * Returns an array of all the objects currently registered
             * as <code><em>Foo</em>Listener</code>s
             * upon this <code>Choice</code>.
             * <code><em>Foo</em>Listener</code>s are registered using the
             * <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the <code>listenerType</code> argument
             * with a class literal, such as
             * <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a
             * <code>Choice</code> <code>c</code>
             * for its item listeners with the following code:
             * <pre>ItemListener[] ils = (ItemListener[])(c.getListeners(ItemListener.class));</pre>
             * If no such listeners exist, this method returns an empty array.
             */
            // @ts-ignore
            public getListeners(listenerType: java.lang.Class): java.util.EventListener[];
            /**
             * Processes events on this choice. If the event is an
             * instance of <code>ItemEvent</code>, it invokes the
             * <code>processItemEvent</code> method. Otherwise, it calls its
             * superclass's <code>processEvent</code> method.
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processEvent(e: java.awt.AWTEvent): void;
            /**
             * Processes item events occurring on this <code>Choice</code>
             * menu by dispatching them to any registered
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
             * Returns a string representing the state of this <code>Choice</code>
             * menu. This method is intended to be used only for debugging purposes,
             * and the content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             */
            // @ts-ignore
            protected paramString(): string;
            /**
             * Gets the <code>AccessibleContext</code> associated with this
             * <code>Choice</code>. For <code>Choice</code> components,
             * the <code>AccessibleContext</code> takes the form of an
             * <code>AccessibleAWTChoice</code>. A new <code>AccessibleAWTChoice</code>
             * instance is created if necessary.
             */
            // @ts-ignore
            public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
        }
    }
}
