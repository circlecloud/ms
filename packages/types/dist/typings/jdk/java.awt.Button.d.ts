declare namespace java {
    namespace awt {
        // @ts-ignore
         class Button extends java.awt.Component {
            /**
             * Constructs a button with an empty string for its label.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a button with the specified label.
             */
            // @ts-ignore
            constructor(label: string)
            /**
             * Creates the peer of the button.  The button's peer allows the
             * application to change the look of the button without changing
             * its functionality.
             */
            // @ts-ignore
            public addNotify(): void;
            /**
             * Gets the label of this button.
             */
            // @ts-ignore
            public getLabel(): string;
            /**
             * Sets the button's label to be the specified string.
             */
            // @ts-ignore
            public setLabel(label: string): void;
            /**
             * Sets the command name for the action event fired
             * by this button. By default this action command is
             * set to match the label of the button.
             */
            // @ts-ignore
            public setActionCommand(command: string): void;
            /**
             * Returns the command name of the action event fired by this button.
             * If the command name is <code>null</code> (default) then this method
             * returns the label of the button.
             */
            // @ts-ignore
            public getActionCommand(): string;
            /**
             * Adds the specified action listener to receive action events from
             * this button. Action events occur when a user presses or releases
             * the mouse over this button.
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addActionListener(l: java.awt.event.ActionListener): void;
            /**
             * Removes the specified action listener so that it no longer
             * receives action events from this button. Action events occur
             * when a user presses or releases the mouse over this button.
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeActionListener(l: java.awt.event.ActionListener): void;
            /**
             * Returns an array of all the action listeners
             * registered on this button.
             */
            // @ts-ignore
            public getActionListeners(): java.awt.event.ActionListener[];
            /**
             * Returns an array of all the objects currently registered
             * as <code><em>Foo</em>Listener</code>s
             * upon this <code>Button</code>.
             * <code><em>Foo</em>Listener</code>s are registered using the
             * <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the <code>listenerType</code> argument
             * with a class literal, such as
             * <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a
             * <code>Button</code> <code>b</code>
             * for its action listeners with the following code:
             * <pre>ActionListener[] als = (ActionListener[])(b.getListeners(ActionListener.class));</pre>
             * If no such listeners exist, this method returns an empty array.
             */
            // @ts-ignore
            public getListeners(listenerType: java.lang.Class): java.util.EventListener[];
            /**
             * Processes events on this button. If an event is
             * an instance of <code>ActionEvent</code>, this method invokes
             * the <code>processActionEvent</code> method. Otherwise,
             * it invokes <code>processEvent</code> on the superclass.
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processEvent(e: java.awt.AWTEvent): void;
            /**
             * Processes action events occurring on this button
             * by dispatching them to any registered
             * <code>ActionListener</code> objects.
             * <p>
             * This method is not called unless action events are
             * enabled for this button. Action events are enabled
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
             * Returns a string representing the state of this <code>Button</code>.
             * This method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             */
            // @ts-ignore
            protected paramString(): string;
            /**
             * Gets the <code>AccessibleContext</code> associated with
             * this <code>Button</code>. For buttons, the
             * <code>AccessibleContext</code> takes the form of an
             * <code>AccessibleAWTButton</code>.
             * A new <code>AccessibleAWTButton</code> instance is
             * created if necessary.
             */
            // @ts-ignore
            public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
        }
    }
}
