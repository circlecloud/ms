// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace datatransfer {
            // @ts-ignore
             class StringSelection extends java.lang.Object {
                /**
                 * Creates a <code>Transferable</code> capable of transferring
                 * the specified <code>String</code>.
                 */
                // @ts-ignore
                constructor(data: string)
                /**
                 * Returns an array of flavors in which this <code>Transferable</code>
                 * can provide the data. <code>DataFlavor.stringFlavor</code>
                 * is properly supported.
                 * Support for <code>DataFlavor.plainTextFlavor</code> is
                 * <b>deprecated</b>.
                 */
                // @ts-ignore
                public getTransferDataFlavors(): java.awt.datatransfer.DataFlavor[];
                /**
                 * Returns whether the requested flavor is supported by this
                 * <code>Transferable</code>.
                 */
                // @ts-ignore
                public isDataFlavorSupported(flavor: java.awt.datatransfer.DataFlavor): boolean;
                /**
                 * Returns the <code>Transferable</code>'s data in the requested
                 * <code>DataFlavor</code> if possible. If the desired flavor is
                 * <code>DataFlavor.stringFlavor</code>, or an equivalent flavor,
                 * the <code>String</code> representing the selection is
                 * returned. If the desired flavor is
                 * <code>DataFlavor.plainTextFlavor</code>,
                 * or an equivalent flavor, a <code>Reader</code> is returned.
                 * <b>Note:</b> The behavior of this method for
                 * <code>DataFlavor.plainTextFlavor</code>
                 * and equivalent <code>DataFlavor</code>s is inconsistent with the
                 * definition of <code>DataFlavor.plainTextFlavor</code>.
                 */
                // @ts-ignore
                public getTransferData(flavor: java.awt.datatransfer.DataFlavor): java.lang.Object;
                // @ts-ignore
                public lostOwnership(clipboard: java.awt.datatransfer.Clipboard, contents: java.awt.datatransfer.Transferable): void;
            }
        }
    }
}
