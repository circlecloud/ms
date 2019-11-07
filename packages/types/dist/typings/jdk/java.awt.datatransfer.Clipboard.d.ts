declare namespace java {
    namespace awt {
        namespace datatransfer {
            // @ts-ignore
             class Clipboard extends java.lang.Object {
                /**
                 * Creates a clipboard object.
                 */
                // @ts-ignore
                constructor(name: string)
                // @ts-ignore
                protected owner: java.awt.datatransfer.ClipboardOwner;
                // @ts-ignore
                protected contents: java.awt.datatransfer.Transferable;
                /**
                 * Returns the name of this clipboard object.
                 */
                // @ts-ignore
                public getName(): string;
                /**
                 * Sets the current contents of the clipboard to the specified
                 * transferable object and registers the specified clipboard owner
                 * as the owner of the new contents.
                 * <p>
                 * If there is an existing owner different from the argument
                 * <code>owner</code>, that owner is notified that it no longer
                 * holds ownership of the clipboard contents via an invocation
                 * of <code>ClipboardOwner.lostOwnership()</code> on that owner.
                 * An implementation of <code>setContents()</code> is free not
                 * to invoke <code>lostOwnership()</code> directly from this method.
                 * For example, <code>lostOwnership()</code> may be invoked later on
                 * a different thread. The same applies to <code>FlavorListener</code>s
                 * registered on this clipboard.
                 * <p>
                 * The method throws <code>IllegalStateException</code> if the clipboard
                 * is currently unavailable. For example, on some platforms, the system
                 * clipboard is unavailable while it is accessed by another application.
                 */
                // @ts-ignore
                public setContents(contents: java.awt.datatransfer.Transferable, owner: java.awt.datatransfer.ClipboardOwner): void;
                /**
                 * Returns a transferable object representing the current contents
                 * of the clipboard.  If the clipboard currently has no contents,
                 * it returns <code>null</code>. The parameter Object requestor is
                 * not currently used.  The method throws
                 * <code>IllegalStateException</code> if the clipboard is currently
                 * unavailable.  For example, on some platforms, the system clipboard is
                 * unavailable while it is accessed by another application.
                 */
                // @ts-ignore
                public getContents(requestor: java.lang.Object): java.awt.datatransfer.Transferable;
                /**
                 * Returns an array of <code>DataFlavor</code>s in which the current
                 * contents of this clipboard can be provided. If there are no
                 * <code>DataFlavor</code>s available, this method returns a zero-length
                 * array.
                 */
                // @ts-ignore
                public getAvailableDataFlavors(): java.awt.datatransfer.DataFlavor[];
                /**
                 * Returns whether or not the current contents of this clipboard can be
                 * provided in the specified <code>DataFlavor</code>.
                 */
                // @ts-ignore
                public isDataFlavorAvailable(flavor: java.awt.datatransfer.DataFlavor): boolean;
                /**
                 * Returns an object representing the current contents of this clipboard
                 * in the specified <code>DataFlavor</code>.
                 * The class of the object returned is defined by the representation
                 * class of <code>flavor</code>.
                 */
                // @ts-ignore
                public getData(flavor: java.awt.datatransfer.DataFlavor): java.lang.Object;
                /**
                 * Registers the specified <code>FlavorListener</code> to receive
                 * <code>FlavorEvent</code>s from this clipboard.
                 * If <code>listener</code> is <code>null</code>, no exception
                 * is thrown and no action is performed.
                 */
                // @ts-ignore
                public addFlavorListener(listener: java.awt.datatransfer.FlavorListener): void;
                /**
                 * Removes the specified <code>FlavorListener</code> so that it no longer
                 * receives <code>FlavorEvent</code>s from this <code>Clipboard</code>.
                 * This method performs no function, nor does it throw an exception, if
                 * the listener specified by the argument was not previously added to this
                 * <code>Clipboard</code>.
                 * If <code>listener</code> is <code>null</code>, no exception
                 * is thrown and no action is performed.
                 */
                // @ts-ignore
                public removeFlavorListener(listener: java.awt.datatransfer.FlavorListener): void;
                /**
                 * Returns an array of all the <code>FlavorListener</code>s currently
                 * registered on this <code>Clipboard</code>.
                 */
                // @ts-ignore
                public getFlavorListeners(): java.awt.datatransfer.FlavorListener[];
            }
        }
    }
}
