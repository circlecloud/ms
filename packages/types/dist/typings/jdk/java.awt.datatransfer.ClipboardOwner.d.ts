declare namespace java {
    namespace awt {
        namespace datatransfer {
            // @ts-ignore
            interface ClipboardOwner {
                /**
                 * Notifies this object that it is no longer the clipboard owner.
                 * This method will be called when another application or another
                 * object within this application asserts ownership of the clipboard.
                 */
                // @ts-ignore
                 lostOwnership(clipboard: java.awt.datatransfer.Clipboard, contents: java.awt.datatransfer.Transferable): void;
            }
        }
    }
}
