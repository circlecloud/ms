// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace peer {
            // @ts-ignore
            interface WindowPeer {
                /**
                 * Makes this window the topmost window on the desktop.
                 */
                // @ts-ignore
                 toFront(): void;
                /**
                 * Makes this window the bottommost window on the desktop.
                 */
                // @ts-ignore
                 toBack(): void;
                /**
                 * Updates the window's always-on-top state.
                 * Sets if the window should always stay
                 * on top of all other windows or not.
                 */
                // @ts-ignore
                 updateAlwaysOnTopState(): void;
                /**
                 * Updates the window's focusable state.
                 */
                // @ts-ignore
                 updateFocusableWindowState(): void;
                /**
                 * Sets if this window is blocked by a modal dialog or not.
                 */
                // @ts-ignore
                 setModalBlocked(blocker: java.awt.Dialog, blocked: boolean): void;
                /**
                 * Updates the minimum size on the peer.
                 */
                // @ts-ignore
                 updateMinimumSize(): void;
                /**
                 * Updates the icons for the window.
                 */
                // @ts-ignore
                 updateIconImages(): void;
                /**
                 * Sets the level of opacity for the window.
                 */
                // @ts-ignore
                 setOpacity(opacity: number): void;
                /**
                 * Enables the per-pixel alpha support for the window.
                 */
                // @ts-ignore
                 setOpaque(isOpaque: boolean): void;
                /**
                 * Updates the native part of non-opaque window.
                 */
                // @ts-ignore
                 updateWindow(): void;
                /**
                 * Instructs the peer to update the position of the security warning.
                 */
                // @ts-ignore
                 repositionSecurityWarning(): void;
            }
        }
    }
}
