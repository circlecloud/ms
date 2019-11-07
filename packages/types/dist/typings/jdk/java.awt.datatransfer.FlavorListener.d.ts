// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace datatransfer {
            // @ts-ignore
            interface FlavorListener {
                /**
                 * Invoked when the target {@link Clipboard} of the listener
                 * has changed its available {@link DataFlavor}s.
                 * <p>
                 * Some notifications may be redundant &#151; they are not
                 * caused by a change of the set of DataFlavors available
                 * on the clipboard.
                 * For example, if the clipboard subsystem supposes that
                 * the system clipboard's contents has been changed but it
                 * can't ascertain whether its DataFlavors have been changed
                 * because of some exceptional condition when accessing the
                 * clipboard, the notification is sent to ensure from omitting
                 * a significant notification. Ordinarily, those redundant
                 * notifications should be occasional.
                 */
                // @ts-ignore
                 flavorsChanged(e: java.awt.datatransfer.FlavorEvent): void;
            }
        }
    }
}
