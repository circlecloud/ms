declare namespace java {
    namespace awt {
        namespace im {
            namespace spi {
                // @ts-ignore
                interface InputMethodContext {
                    /**
                     * Creates an input method event from the arguments given
                     * and dispatches it to the client component. For arguments,
                     * see {@link java.awt.event.InputMethodEvent#InputMethodEvent}.
                     */
                    // @ts-ignore
                     dispatchInputMethodEvent(id: number, text: java.text.AttributedCharacterIterator, committedCharacterCount: number, caret: java.awt.font.TextHitInfo, visiblePosition: java.awt.font.TextHitInfo): void;
                    /**
                     * Creates a top-level window for use by the input method.
                     * The intended behavior of this window is:
                     * <ul>
                     * <li>it floats above all document windows and dialogs
                     * <li>it and all components that it contains do not receive the focus
                     * <li>it has lightweight decorations, such as a reduced drag region without title
                     * </ul>
                     * However, the actual behavior with respect to these three items is platform dependent.
                     * <p>
                     * The title may or may not be displayed, depending on the actual type of window created.
                     * <p>
                     * If attachToInputContext is true, the new window will share the input context that
                     * corresponds to this input method context, so that events for components in the window
                     * are automatically dispatched to the input method.
                     * Also, when the window is opened using setVisible(true), the input context will prevent
                     * deactivate and activate calls to the input method that might otherwise be caused.
                     * <p>
                     * Input methods must call {@link java.awt.Window#dispose() Window.dispose} on the
                     * returned input method window when it is no longer needed.
                     * <p>
                     */
                    // @ts-ignore
                     createInputMethodWindow(title: string, attachToInputContext: boolean): java.awt.Window;
                    /**
                     * Creates a top-level Swing JFrame for use by the input method.
                     * The intended behavior of this window is:
                     * <ul>
                     * <li>it floats above all document windows and dialogs
                     * <li>it and all components that it contains do not receive the focus
                     * <li>it has lightweight decorations, such as a reduced drag region without title
                     * </ul>
                     * However, the actual behavior with respect to these three items is platform dependent.
                     * <p>
                     * The title may or may not be displayed, depending on the actual type of window created.
                     * <p>
                     * If attachToInputContext is true, the new window will share the input context that
                     * corresponds to this input method context, so that events for components in the window
                     * are automatically dispatched to the input method.
                     * Also, when the window is opened using setVisible(true), the input context will prevent
                     * deactivate and activate calls to the input method that might otherwise be caused.
                     * <p>
                     * Input methods must call {@link java.awt.Window#dispose() Window.dispose} on the
                     * returned input method window when it is no longer needed.
                     * <p>
                     */
                    // @ts-ignore
                     createInputMethodJFrame(title: string, attachToInputContext: boolean): any /*javax.swing.JFrame*/;
                    /**
                     * Enables or disables notification of the current client window's
                     * location and state for the specified input method. When
                     * notification is enabled, the input method's {@link
                     * java.awt.im.spi.InputMethod#notifyClientWindowChange
                     * notifyClientWindowChange} method is called as described in that
                     * method's specification. Notification is automatically disabled
                     * when the input method is disposed.
                     */
                    // @ts-ignore
                     enableClientWindowNotification(inputMethod: java.awt.im.spi.InputMethod, enable: boolean): void;
                }
            }
        }
    }
}
