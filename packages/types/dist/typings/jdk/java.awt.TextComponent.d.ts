// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class TextComponent extends java.awt.Component {
            // @ts-ignore
            protected textListener: java.awt.event.TextListener;
            /**
             * Enables or disables input method support for this text component. If input
             * method support is enabled and the text component also processes key events,
             * incoming events are offered to the current input method and will only be
             * processed by the component or dispatched to its listeners if the input method
             * does not consume them. Whether and how input method support for this text
             * component is enabled or disabled by default is implementation dependent.
             */
            // @ts-ignore
            public enableInputMethods(enable: boolean): void;
            // @ts-ignore
            public getInputMethodRequests(): java.awt.im.InputMethodRequests;
            /**
             * Makes this Component displayable by connecting it to a
             * native screen resource.
             * This method is called internally by the toolkit and should
             * not be called directly by programs.
             */
            // @ts-ignore
            public addNotify(): void;
            /**
             * Removes the <code>TextComponent</code>'s peer.
             * The peer allows us to modify the appearance of the
             * <code>TextComponent</code> without changing its
             * functionality.
             */
            // @ts-ignore
            public removeNotify(): void;
            /**
             * Sets the text that is presented by this
             * text component to be the specified text.
             */
            // @ts-ignore
            public setText(t: string): void;
            /**
             * Returns the text that is presented by this text component.
             * By default, this is an empty string.
             */
            // @ts-ignore
            public getText(): string;
            /**
             * Returns the selected text from the text that is
             * presented by this text component.
             */
            // @ts-ignore
            public getSelectedText(): string;
            /**
             * Indicates whether or not this text component is editable.
             */
            // @ts-ignore
            public isEditable(): boolean;
            /**
             * Sets the flag that determines whether or not this
             * text component is editable.
             * <p>
             * If the flag is set to <code>true</code>, this text component
             * becomes user editable. If the flag is set to <code>false</code>,
             * the user cannot change the text of this text component.
             * By default, non-editable text components have a background color
             * of SystemColor.control.  This default can be overridden by
             * calling setBackground.
             */
            // @ts-ignore
            public setEditable(b: boolean): void;
            /**
             * Gets the background color of this text component.
             * By default, non-editable text components have a background color
             * of SystemColor.control.  This default can be overridden by
             * calling setBackground.
             */
            // @ts-ignore
            public getBackground(): java.awt.Color;
            /**
             * Sets the background color of this text component.
             */
            // @ts-ignore
            public setBackground(c: java.awt.Color): void;
            /**
             * Gets the start position of the selected text in
             * this text component.
             */
            // @ts-ignore
            public getSelectionStart(): number;
            /**
             * Sets the selection start for this text component to
             * the specified position. The new start point is constrained
             * to be at or before the current selection end. It also
             * cannot be set to less than zero, the beginning of the
             * component's text.
             * If the caller supplies a value for <code>selectionStart</code>
             * that is out of bounds, the method enforces these constraints
             * silently, and without failure.
             */
            // @ts-ignore
            public setSelectionStart(selectionStart: number): void;
            /**
             * Gets the end position of the selected text in
             * this text component.
             */
            // @ts-ignore
            public getSelectionEnd(): number;
            /**
             * Sets the selection end for this text component to
             * the specified position. The new end point is constrained
             * to be at or after the current selection start. It also
             * cannot be set beyond the end of the component's text.
             * If the caller supplies a value for <code>selectionEnd</code>
             * that is out of bounds, the method enforces these constraints
             * silently, and without failure.
             */
            // @ts-ignore
            public setSelectionEnd(selectionEnd: number): void;
            /**
             * Selects the text between the specified start and end positions.
             * <p>
             * This method sets the start and end positions of the
             * selected text, enforcing the restriction that the start position
             * must be greater than or equal to zero.  The end position must be
             * greater than or equal to the start position, and less than or
             * equal to the length of the text component's text.  The
             * character positions are indexed starting with zero.
             * The length of the selection is
             * <code>endPosition</code> - <code>startPosition</code>, so the
             * character at <code>endPosition</code> is not selected.
             * If the start and end positions of the selected text are equal,
             * all text is deselected.
             * <p>
             * If the caller supplies values that are inconsistent or out of
             * bounds, the method enforces these constraints silently, and
             * without failure. Specifically, if the start position or end
             * position is greater than the length of the text, it is reset to
             * equal the text length. If the start position is less than zero,
             * it is reset to zero, and if the end position is less than the
             * start position, it is reset to the start position.
             */
            // @ts-ignore
            public select(selectionStart: number, selectionEnd: number): void;
            /**
             * Selects all the text in this text component.
             */
            // @ts-ignore
            public selectAll(): void;
            /**
             * Sets the position of the text insertion caret.
             * The caret position is constrained to be between 0
             * and the last character of the text, inclusive.
             * If the passed-in value is greater than this range,
             * the value is set to the last character (or 0 if
             * the <code>TextComponent</code> contains no text)
             * and no error is returned.  If the passed-in value is
             * less than 0, an <code>IllegalArgumentException</code>
             * is thrown.
             */
            // @ts-ignore
            public setCaretPosition(position: number): void;
            /**
             * Returns the position of the text insertion caret.
             * The caret position is constrained to be between 0
             * and the last character of the text, inclusive.
             * If the text or caret have not been set, the default
             * caret position is 0.
             */
            // @ts-ignore
            public getCaretPosition(): number;
            /**
             * Adds the specified text event listener to receive text events
             * from this text component.
             * If <code>l</code> is <code>null</code>, no exception is
             * thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addTextListener(l: java.awt.event.TextListener): void;
            /**
             * Removes the specified text event listener so that it no longer
             * receives text events from this text component
             * If <code>l</code> is <code>null</code>, no exception is
             * thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeTextListener(l: java.awt.event.TextListener): void;
            /**
             * Returns an array of all the text listeners
             * registered on this text component.
             */
            // @ts-ignore
            public getTextListeners(): java.awt.event.TextListener[];
            /**
             * Returns an array of all the objects currently registered
             * as <code><em>Foo</em>Listener</code>s
             * upon this <code>TextComponent</code>.
             * <code><em>Foo</em>Listener</code>s are registered using the
             * <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the <code>listenerType</code> argument
             * with a class literal, such as
             * <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a
             * <code>TextComponent</code> <code>t</code>
             * for its text listeners with the following code:
             * <pre>TextListener[] tls = (TextListener[])(t.getListeners(TextListener.class));</pre>
             * If no such listeners exist, this method returns an empty array.
             */
            // @ts-ignore
            public getListeners(listenerType: java.lang.Class): java.util.EventListener[];
            /**
             * Processes events on this text component. If the event is a
             * <code>TextEvent</code>, it invokes the <code>processTextEvent</code>
             * method else it invokes its superclass's <code>processEvent</code>.
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processEvent(e: java.awt.AWTEvent): void;
            /**
             * Processes text events occurring on this text component by
             * dispatching them to any registered <code>TextListener</code> objects.
             * <p>
             * NOTE: This method will not be called unless text events
             * are enabled for this component. This happens when one of the
             * following occurs:
             * <ul>
             * <li>A <code>TextListener</code> object is registered
             * via <code>addTextListener</code>
             * <li>Text events are enabled via <code>enableEvents</code>
             * </ul>
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processTextEvent(e: java.awt.event.TextEvent): void;
            /**
             * Returns a string representing the state of this
             * <code>TextComponent</code>. This
             * method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             */
            // @ts-ignore
            protected paramString(): string;
            /**
             * Gets the AccessibleContext associated with this TextComponent.
             * For text components, the AccessibleContext takes the form of an
             * AccessibleAWTTextComponent.
             * A new AccessibleAWTTextComponent instance is created if necessary.
             */
            // @ts-ignore
            public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
        }
    }
}
