// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace peer {
            // @ts-ignore
            interface TrayIconPeer {
                /**
                 * Disposes the tray icon and releases and resources held by it.
                 */
                // @ts-ignore
                 dispose(): void;
                /**
                 * Sets the tool tip for the tray icon.
                 */
                // @ts-ignore
                 setToolTip(tooltip: string): void;
                /**
                 * Updates the icon image. This is supposed to display the current icon
                 * from the TrayIcon component in the actual tray icon.
                 */
                // @ts-ignore
                 updateImage(): void;
                /**
                 * Displays a message at the tray icon.
                 */
                // @ts-ignore
                 displayMessage(caption: string, text: string, messageType: string): void;
                /**
                 * Shows the popup menu of this tray icon at the specified position.
                 */
                // @ts-ignore
                 showPopupMenu(x: number, y: number): void;
            }
        }
    }
}
