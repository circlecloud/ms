declare namespace java {
    namespace awt {
        // @ts-ignore
         class List extends java.awt.Component {
            /**
             * Creates a new scrolling list.
             * By default, there are four visible lines and multiple selections are
             * not allowed.  Note that this is a convenience method for
             * <code>List(0, false)</code>.  Also note that the number of visible
             * lines in the list cannot be changed after it has been created.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new scrolling list initialized with the specified
             * number of visible lines. By default, multiple selections are
             * not allowed.  Note that this is a convenience method for
             * <code>List(rows, false)</code>.  Also note that the number
             * of visible rows in the list cannot be changed after it has
             * been created.
             */
            // @ts-ignore
            constructor(rows: number)
            /**
             * Creates a new scrolling list initialized to display the specified
             * number of rows. Note that if zero rows are specified, then
             * the list will be created with a default of four rows.
             * Also note that the number of visible rows in the list cannot
             * be changed after it has been created.
             * If the value of <code>multipleMode</code> is
             * <code>true</code>, then the user can select multiple items from
             * the list. If it is <code>false</code>, only one item at a time
             * can be selected.
             */
            // @ts-ignore
            constructor(rows: number, multipleMode: boolean)
            /**
             * Creates the peer for the list.  The peer allows us to modify the
             * list's appearance without changing its functionality.
             */
            // @ts-ignore
            public addNotify(): void;
            /**
             * Removes the peer for this list.  The peer allows us to modify the
             * list's appearance without changing its functionality.
             */
            // @ts-ignore
            public removeNotify(): void;
            /**
             * Gets the number of items in the list.
             */
            // @ts-ignore
            public getItemCount(): number;
            // @ts-ignore
            public countItems(): number;
            /**
             * Gets the item associated with the specified index.
             */
            // @ts-ignore
            public getItem(index: number): string;
            /**
             * Gets the items in the list.
             */
            // @ts-ignore
            public getItems(): java.lang.String[];
            /**
             * Adds the specified item to the end of scrolling list.
             */
            // @ts-ignore
            public add(item: string): void;
            // @ts-ignore
            public addItem(item: string): void;
            /**
             * Adds the specified item to the the scrolling list
             * at the position indicated by the index.  The index is
             * zero-based.  If the value of the index is less than zero,
             * or if the value of the index is greater than or equal to
             * the number of items in the list, then the item is added
             * to the end of the list.
             */
            // @ts-ignore
            public add(item: string, index: number): void;
            // @ts-ignore
            public addItem(item: string, index: number): void;
            /**
             * Replaces the item at the specified index in the scrolling list
             * with the new string.
             */
            // @ts-ignore
            public replaceItem(newValue: string, index: number): void;
            /**
             * Removes all items from this list.
             */
            // @ts-ignore
            public removeAll(): void;
            // @ts-ignore
            public clear(): void;
            /**
             * Removes the first occurrence of an item from the list.
             * If the specified item is selected, and is the only selected
             * item in the list, the list is set to have no selection.
             */
            // @ts-ignore
            public remove(item: string): void;
            /**
             * Removes the item at the specified position
             * from this scrolling list.
             * If the item with the specified position is selected, and is the
             * only selected item in the list, the list is set to have no selection.
             */
            // @ts-ignore
            public remove(position: number): void;
            // @ts-ignore
            public delItem(position: number): void;
            /**
             * Gets the index of the selected item on the list,
             */
            // @ts-ignore
            public getSelectedIndex(): number;
            /**
             * Gets the selected indexes on the list.
             */
            // @ts-ignore
            public getSelectedIndexes(): number[];
            /**
             * Gets the selected item on this scrolling list.
             */
            // @ts-ignore
            public getSelectedItem(): string;
            /**
             * Gets the selected items on this scrolling list.
             */
            // @ts-ignore
            public getSelectedItems(): java.lang.String[];
            /**
             * Gets the selected items on this scrolling list in an array of Objects.
             */
            // @ts-ignore
            public getSelectedObjects(): java.lang.Object[];
            /**
             * Selects the item at the specified index in the scrolling list.
             * <p>
             * Note that passing out of range parameters is invalid,
             * and will result in unspecified behavior.
             * <p>Note that this method should be primarily used to
             * initially select an item in this component.
             * Programmatically calling this method will <i>not</i> trigger
             * an <code>ItemEvent</code>.  The only way to trigger an
             * <code>ItemEvent</code> is by user interaction.
             */
            // @ts-ignore
            public select(index: number): void;
            /**
             * Deselects the item at the specified index.
             * <p>
             * Note that passing out of range parameters is invalid,
             * and will result in unspecified behavior.
             * <p>
             * If the item at the specified index is not selected,
             * then the operation is ignored.
             */
            // @ts-ignore
            public deselect(index: number): void;
            /**
             * Determines if the specified item in this scrolling list is
             * selected.
             */
            // @ts-ignore
            public isIndexSelected(index: number): boolean;
            // @ts-ignore
            public isSelected(index: number): boolean;
            /**
             * Gets the number of visible lines in this list.  Note that
             * once the <code>List</code> has been created, this number
             * will never change.
             */
            // @ts-ignore
            public getRows(): number;
            /**
             * Determines whether this list allows multiple selections.
             */
            // @ts-ignore
            public isMultipleMode(): boolean;
            // @ts-ignore
            public allowsMultipleSelections(): boolean;
            /**
             * Sets the flag that determines whether this list
             * allows multiple selections.
             * When the selection mode is changed from multiple-selection to
             * single-selection, the selected items change as follows:
             * If a selected item has the location cursor, only that
             * item will remain selected.  If no selected item has the
             * location cursor, all items will be deselected.
             */
            // @ts-ignore
            public setMultipleMode(b: boolean): void;
            // @ts-ignore
            public setMultipleSelections(b: boolean): void;
            /**
             * Gets the index of the item that was last made visible by
             * the method <code>makeVisible</code>.
             */
            // @ts-ignore
            public getVisibleIndex(): number;
            /**
             * Makes the item at the specified index visible.
             */
            // @ts-ignore
            public makeVisible(index: number): void;
            /**
             * Gets the preferred dimensions for a list with the specified
             * number of rows.
             */
            // @ts-ignore
            public getPreferredSize(rows: number): java.awt.Dimension;
            // @ts-ignore
            public preferredSize(rows: number): java.awt.Dimension;
            /**
             * Gets the preferred size of this scrolling list.
             */
            // @ts-ignore
            public getPreferredSize(): java.awt.Dimension;
            // @ts-ignore
            public preferredSize(): java.awt.Dimension;
            /**
             * Gets the minimum dimensions for a list with the specified
             * number of rows.
             */
            // @ts-ignore
            public getMinimumSize(rows: number): java.awt.Dimension;
            // @ts-ignore
            public minimumSize(rows: number): java.awt.Dimension;
            /**
             * Determines the minimum size of this scrolling list.
             */
            // @ts-ignore
            public getMinimumSize(): java.awt.Dimension;
            // @ts-ignore
            public minimumSize(): java.awt.Dimension;
            /**
             * Adds the specified item listener to receive item events from
             * this list.  Item events are sent in response to user input, but not
             * in response to calls to <code>select</code> or <code>deselect</code>.
             * If listener <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addItemListener(l: java.awt.event.ItemListener): void;
            /**
             * Removes the specified item listener so that it no longer
             * receives item events from this list.
             * If listener <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeItemListener(l: java.awt.event.ItemListener): void;
            /**
             * Returns an array of all the item listeners
             * registered on this list.
             */
            // @ts-ignore
            public getItemListeners(): java.awt.event.ItemListener[];
            /**
             * Adds the specified action listener to receive action events from
             * this list. Action events occur when a user double-clicks
             * on a list item or types Enter when the list has the keyboard
             * focus.
             * <p>
             * If listener <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addActionListener(l: java.awt.event.ActionListener): void;
            /**
             * Removes the specified action listener so that it no longer
             * receives action events from this list. Action events
             * occur when a user double-clicks on a list item.
             * If listener <code>l</code> is <code>null</code>,
             * no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeActionListener(l: java.awt.event.ActionListener): void;
            /**
             * Returns an array of all the action listeners
             * registered on this list.
             */
            // @ts-ignore
            public getActionListeners(): java.awt.event.ActionListener[];
            /**
             * Returns an array of all the objects currently registered
             * as <code><em>Foo</em>Listener</code>s
             * upon this <code>List</code>.
             * <code><em>Foo</em>Listener</code>s are registered using the
             * <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the <code>listenerType</code> argument
             * with a class literal, such as
             * <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a
             * <code>List</code> <code>l</code>
             * for its item listeners with the following code:
             * <pre>ItemListener[] ils = (ItemListener[])(l.getListeners(ItemListener.class));</pre>
             * If no such listeners exist, this method returns an empty array.
             */
            // @ts-ignore
            public getListeners(listenerType: java.lang.Class): java.util.EventListener[];
            /**
             * Processes events on this scrolling list. If an event is
             * an instance of <code>ItemEvent</code>, it invokes the
             * <code>processItemEvent</code> method. Else, if the
             * event is an instance of <code>ActionEvent</code>,
             * it invokes <code>processActionEvent</code>.
             * If the event is not an item event or an action event,
             * it invokes <code>processEvent</code> on the superclass.
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processEvent(e: java.awt.AWTEvent): void;
            /**
             * Processes item events occurring on this list by
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
             * Processes action events occurring on this component
             * by dispatching them to any registered
             * <code>ActionListener</code> objects.
             * <p>
             * This method is not called unless action events are
             * enabled for this component. Action events are enabled
             * when one of the following occurs:
             * <ul>
             * <li>An <code>ActionListener</code> object is registered
             * via <code>addActionListener</code>.
             * <li>Action events are enabled via <code>enableEvents</code>.
             * </ul>
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processActionEvent(e: java.awt.event.ActionEvent): void;
            /**
             * Returns the parameter string representing the state of this
             * scrolling list. This string is useful for debugging.
             */
            // @ts-ignore
            protected paramString(): string;
            // @ts-ignore
            public delItems(start: number, end: number): void;
            /**
             * Gets the <code>AccessibleContext</code> associated with this
             * <code>List</code>. For lists, the <code>AccessibleContext</code>
             * takes the form of an <code>AccessibleAWTList</code>.
             * A new <code>AccessibleAWTList</code> instance is created, if necessary.
             */
            // @ts-ignore
            public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
        }
    }
}
