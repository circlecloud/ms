// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
            interface WindowFocusListener {
                /**
                 * Invoked when the Window is set to be the focused Window, which means
                 * that the Window, or one of its subcomponents, will receive keyboard
                 * events.
                 */
                // @ts-ignore
                 windowGainedFocus(e: java.awt.event.WindowEvent): void;
                /**
                 * Invoked when the Window is no longer the focused Window, which means
                 * that keyboard events will no longer be delivered to the Window or any of
                 * its subcomponents.
                 */
                // @ts-ignore
                 windowLostFocus(e: java.awt.event.WindowEvent): void;
            }
        }
    }
}
