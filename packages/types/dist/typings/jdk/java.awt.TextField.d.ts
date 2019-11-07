// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class TextField extends java.awt.TextComponent {
            /**
             * Constructs a new text field.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new text field initialized with the specified text.
             */
            // @ts-ignore
            constructor(text: string)
            /**
             * Constructs a new empty text field with the specified number
             * of columns.  A column is an approximate average character
             * width that is platform-dependent.
             */
            // @ts-ignore
            constructor(columns: number)
            /**
             * Constructs a new text field initialized with the specified text
             * to be displayed, and wide enough to hold the specified
             * number of columns. A column is an approximate average character
             * width that is platform-dependent.
             */
            // @ts-ignore
            constructor(text: string, columns: number)
            /**
             * Creates the TextField's peer.  The peer allows us to modify the
             * appearance of the TextField without changing its functionality.
             */
            // @ts-ignore
            public addNotify(): void;
            /**
             * Gets the character that is to be used for echoing.
             * <p>
             * An echo character is useful for text fields where
             * user input should not be echoed to the screen, as in
             * the case of a text field for entering a password.
             * If <code>echoChar</code> = <code>0</code>, user
             * input is echoed to the screen unchanged.
             * <p>
             * A Java platform implementation may support only a limited,
             * non-empty set of echo characters. This function returns the
             * echo character originally requested via setEchoChar(). The echo
             * character actually used by the TextField implementation might be
             * different.
             */
            // @ts-ignore
            public getEchoChar(): string;
            /**
             * Sets the echo character for this text field.
             * <p>
             * An echo character is useful for text fields where
             * user input should not be echoed to the screen, as in
             * the case of a text field for entering a password.
             * Setting <code>echoChar</code> = <code>0</code> allows
             * user input to be echoed to the screen again.
             * <p>
             * A Java platform implementation may support only a limited,
             * non-empty set of echo characters. Attempts to set an
             * unsupported echo character will cause the default echo
             * character to be used instead. Subsequent calls to getEchoChar()
             * will return the echo character originally requested. This might
             * or might not be identical to the echo character actually
             * used by the TextField implementation.
             */
            // @ts-ignore
            public setEchoChar(c: string): void;
            // @ts-ignore
            public setEchoCharacter(c: string): void;
            /**
             * Sets the text that is presented by this
             * text component to be the specified text.
             */
            // @ts-ignore
            public setText(t: string): void;
            /**
             * Indicates whether or not this text field has a
             * character set for echoing.
             * <p>
             * An echo character is useful for text fields where
             * user input should not be echoed to the screen, as in
             * the case of a text field for entering a password.
             */
            // @ts-ignore
            public echoCharIsSet(): boolean;
            /**
             * Gets the number of columns in this text field. A column is an
             * approximate average character width that is platform-dependent.
             */
            // @ts-ignore
            public getColumns(): number;
            /**
             * Sets the number of columns in this text field. A column is an
             * approximate average character width that is platform-dependent.
             */
            // @ts-ignore
            public setColumns(columns: number): void;
            /**
             * Gets the preferred size of this text field
             * with the specified number of columns.
             */
            // @ts-ignore
            public getPreferredSize(columns: number): java.awt.Dimension;
            // @ts-ignore
            public preferredSize(columns: number): java.awt.Dimension;
            /**
             * Gets the preferred size of this text field.
             */
            // @ts-ignore
            public getPreferredSize(): java.awt.Dimension;
            // @ts-ignore
            public preferredSize(): java.awt.Dimension;
            /**
             * Gets the minimum dimensions for a text field with
             * the specified number of columns.
             */
            // @ts-ignore
            public getMinimumSize(columns: number): java.awt.Dimension;
            // @ts-ignore
            public minimumSize(columns: number): java.awt.Dimension;
            /**
             * Gets the minimum dimensions for this text field.
             */
            // @ts-ignore
            public getMinimumSize(): java.awt.Dimension;
            // @ts-ignore
            public minimumSize(): java.awt.Dimension;
            /**
             * Adds the specified action listener to receive
             * action events from this text field.
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addActionListener(l: java.awt.event.ActionListener): void;
            /**
             * Removes the specified action listener so that it no longer
             * receives action events from this text field.
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeActionListener(l: java.awt.event.ActionListener): void;
            /**
             * Returns an array of all the action listeners
             * registered on this textfield.
             */
            // @ts-ignore
            public getActionListeners(): java.awt.event.ActionListener[];
            /**
             * Returns an array of all the objects currently registered
             * as <code><em>Foo</em>Listener</code>s
             * upon this <code>TextField</code>.
             * <code><em>Foo</em>Listener</code>s are registered using the
             * <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the <code>listenerType</code> argument
             * with a class literal, such as
             * <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a
             * <code>TextField</code> <code>t</code>
             * for its action listeners with the following code:
             * <pre>ActionListener[] als = (ActionListener[])(t.getListeners(ActionListener.class));</pre>
             * If no such listeners exist, this method returns an empty array.
             */
            // @ts-ignore
            public getListeners(listenerType: java.lang.Class): java.util.EventListener[];
            /**
             * Processes events on this text field. If the event
             * is an instance of <code>ActionEvent</code>,
             * it invokes the <code>processActionEvent</code>
             * method. Otherwise, it invokes <code>processEvent</code>
             * on the superclass.
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processEvent(e: java.awt.AWTEvent): void;
            /**
             * Processes action events occurring on this text field by
             * dispatching them to any registered
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
             * Returns a string representing the state of this <code>TextField</code>.
             * This method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             */
            // @ts-ignore
            protected paramString(): string;
            /**
             * Gets the AccessibleContext associated with this TextField.
             * For text fields, the AccessibleContext takes the form of an
             * AccessibleAWTTextField.
             * A new AccessibleAWTTextField instance is created if necessary.
             */
            // @ts-ignore
            public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
        }
    }
}
