// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
            abstract class WindowAdapter extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Invoked when a window has been opened.
                 */
                // @ts-ignore
                public windowOpened(e: java.awt.event.WindowEvent): void;
                /**
                 * Invoked when a window is in the process of being closed.
                 * The close operation can be overridden at this point.
                 */
                // @ts-ignore
                public windowClosing(e: java.awt.event.WindowEvent): void;
                /**
                 * Invoked when a window has been closed.
                 */
                // @ts-ignore
                public windowClosed(e: java.awt.event.WindowEvent): void;
                /**
                 * Invoked when a window is iconified.
                 */
                // @ts-ignore
                public windowIconified(e: java.awt.event.WindowEvent): void;
                /**
                 * Invoked when a window is de-iconified.
                 */
                // @ts-ignore
                public windowDeiconified(e: java.awt.event.WindowEvent): void;
                /**
                 * Invoked when a window is activated.
                 */
                // @ts-ignore
                public windowActivated(e: java.awt.event.WindowEvent): void;
                /**
                 * Invoked when a window is de-activated.
                 */
                // @ts-ignore
                public windowDeactivated(e: java.awt.event.WindowEvent): void;
                /**
                 * Invoked when a window state is changed.
                 */
                // @ts-ignore
                public windowStateChanged(e: java.awt.event.WindowEvent): void;
                /**
                 * Invoked when the Window is set to be the focused Window, which means
                 * that the Window, or one of its subcomponents, will receive keyboard
                 * events.
                 */
                // @ts-ignore
                public windowGainedFocus(e: java.awt.event.WindowEvent): void;
                /**
                 * Invoked when the Window is no longer the focused Window, which means
                 * that keyboard events will no longer be delivered to the Window or any of
                 * its subcomponents.
                 */
                // @ts-ignore
                public windowLostFocus(e: java.awt.event.WindowEvent): void;
            }
        }
    }
}
