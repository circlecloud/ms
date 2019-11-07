// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace peer {
            // @ts-ignore
            interface KeyboardFocusManagerPeer {
                /**
                 * Sets the window that should become the focused window.
                 */
                // @ts-ignore
                 setCurrentFocusedWindow(win: java.awt.Window): void;
                /**
                 * Returns the currently focused window.
                 */
                // @ts-ignore
                 getCurrentFocusedWindow(): java.awt.Window;
                /**
                 * Sets the component that should become the focus owner.
                 */
                // @ts-ignore
                 setCurrentFocusOwner(comp: java.awt.Component): void;
                /**
                 * Returns the component that currently owns the input focus.
                 */
                // @ts-ignore
                 getCurrentFocusOwner(): java.awt.Component;
                /**
                 * Clears the current global focus owner.
                 */
                // @ts-ignore
                 clearGlobalFocusOwner(activeWindow: java.awt.Window): void;
            }
        }
    }
}
