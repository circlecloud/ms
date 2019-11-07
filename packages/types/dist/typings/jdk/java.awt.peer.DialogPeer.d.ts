// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace peer {
            // @ts-ignore
            interface DialogPeer {
                /**
                 * Sets the title on the dialog window.
                 */
                // @ts-ignore
                 setTitle(title: string): void;
                /**
                 * Sets if the dialog should be resizable or not.
                 */
                // @ts-ignore
                 setResizable(resizeable: boolean): void;
                /**
                 * Block the specified windows. This is used for modal dialogs.
                 */
                // @ts-ignore
                 blockWindows(windows: java.util.List): void;
            }
        }
    }
}
