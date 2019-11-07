// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class MenuItem extends java.awt.MenuComponent {
            /**
             * Constructs a new MenuItem with an empty label and no keyboard
             * shortcut.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new MenuItem with the specified label
             * and no keyboard shortcut. Note that use of "-" in
             * a label is reserved to indicate a separator between
             * menu items. By default, all menu items except for
             * separators are enabled.
             */
            // @ts-ignore
            constructor(label: string)
            /**
             * Create a menu item with an associated keyboard shortcut.
             * Note that use of "-" in a label is reserved to indicate
             * a separator between menu items. By default, all menu
             * items except for separators are enabled.
             */
            // @ts-ignore
            constructor(label: string, s: java.awt.MenuShortcut)
            /**
             * Creates the menu item's peer.  The peer allows us to modify the
             * appearance of the menu item without changing its functionality.
             */
            // @ts-ignore
            public addNotify(): void;
            /**
             * Gets the label for this menu item.
             */
            // @ts-ignore
            public getLabel(): string;
            /**
             * Sets the label for this menu item to the specified label.
             */
            // @ts-ignore
            public setLabel(label: string): void;
            /**
             * Checks whether this menu item is enabled.
             */
            // @ts-ignore
            public isEnabled(): boolean;
            /**
             * Sets whether or not this menu item can be chosen.
             */
            // @ts-ignore
            public setEnabled(b: boolean): void;
            // @ts-ignore
            public enable(): void;
            // @ts-ignore
            public enable(b: boolean): void;
            // @ts-ignore
            public disable(): void;
            /**
             * Get the <code>MenuShortcut</code> object associated with this
             * menu item,
             */
            // @ts-ignore
            public getShortcut(): java.awt.MenuShortcut;
            /**
             * Set the <code>MenuShortcut</code> object associated with this
             * menu item. If a menu shortcut is already associated with
             * this menu item, it is replaced.
             */
            // @ts-ignore
            public setShortcut(s: java.awt.MenuShortcut): void;
            /**
             * Delete any <code>MenuShortcut</code> object associated
             * with this menu item.
             */
            // @ts-ignore
            public deleteShortcut(): void;
            /**
             * Enables event delivery to this menu item for events
             * to be defined by the specified event mask parameter
             * <p>
             * Since event types are automatically enabled when a listener for
             * that type is added to the menu item, this method only needs
             * to be invoked by subclasses of <code>MenuItem</code> which desire to
             * have the specified event types delivered to <code>processEvent</code>
             * regardless of whether a listener is registered.
             */
            // @ts-ignore
            protected enableEvents(eventsToEnable: number): void;
            /**
             * Disables event delivery to this menu item for events
             * defined by the specified event mask parameter.
             */
            // @ts-ignore
            protected disableEvents(eventsToDisable: number): void;
            /**
             * Sets the command name of the action event that is fired
             * by this menu item.
             * <p>
             * By default, the action command is set to the label of
             * the menu item.
             */
            // @ts-ignore
            public setActionCommand(command: string): void;
            /**
             * Gets the command name of the action event that is fired
             * by this menu item.
             */
            // @ts-ignore
            public getActionCommand(): string;
            /**
             * Adds the specified action listener to receive action events
             * from this menu item.
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addActionListener(l: java.awt.event.ActionListener): void;
            /**
             * Removes the specified action listener so it no longer receives
             * action events from this menu item.
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeActionListener(l: java.awt.event.ActionListener): void;
            /**
             * Returns an array of all the action listeners
             * registered on this menu item.
             */
            // @ts-ignore
            public getActionListeners(): java.awt.event.ActionListener[];
            /**
             * Returns an array of all the objects currently registered
             * as <code><em>Foo</em>Listener</code>s
             * upon this <code>MenuItem</code>.
             * <code><em>Foo</em>Listener</code>s are registered using the
             * <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the <code>listenerType</code> argument
             * with a class literal, such as
             * <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a
             * <code>MenuItem</code> <code>m</code>
             * for its action listeners with the following code:
             * <pre>ActionListener[] als = (ActionListener[])(m.getListeners(ActionListener.class));</pre>
             * If no such listeners exist, this method returns an empty array.
             */
            // @ts-ignore
            public getListeners(listenerType: java.lang.Class): java.util.EventListener[];
            /**
             * Processes events on this menu item. If the event is an
             * instance of <code>ActionEvent</code>, it invokes
             * <code>processActionEvent</code>, another method
             * defined by <code>MenuItem</code>.
             * <p>
             * Currently, menu items only support action events.
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processEvent(e: java.awt.AWTEvent): void;
            /**
             * Processes action events occurring on this menu item,
             * by dispatching them to any registered
             * <code>ActionListener</code> objects.
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
             * Returns a string representing the state of this <code>MenuItem</code>.
             * This method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             */
            // @ts-ignore
            public paramString(): string;
            /**
             * Gets the AccessibleContext associated with this MenuItem.
             * For menu items, the AccessibleContext takes the form of an
             * AccessibleAWTMenuItem.
             * A new AccessibleAWTMenuItem instance is created if necessary.
             */
            // @ts-ignore
            public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
        }
    }
}
