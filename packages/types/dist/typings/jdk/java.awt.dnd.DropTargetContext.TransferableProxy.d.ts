declare namespace java {
    namespace awt {
        namespace dnd {
            namespace DropTargetContext {
                // @ts-ignore
                protected class TransferableProxy extends java.lang.Object {
                    // @ts-ignore
                    protected transferable: java.awt.datatransfer.Transferable;
                    // @ts-ignore
                    protected isLocal: boolean;
                    /**
                     * Returns an array of DataFlavor objects indicating the flavors
                     * the data can be provided in by the encapsulated transferable.
                     * <p>
                     */
                    // @ts-ignore
                    public getTransferDataFlavors(): java.awt.datatransfer.DataFlavor[];
                    /**
                     * Returns whether or not the specified data flavor is supported by
                     * the encapsulated transferable.
                     */
                    // @ts-ignore
                    public isDataFlavorSupported(flavor: java.awt.datatransfer.DataFlavor): boolean;
                    /**
                     * Returns an object which represents the data provided by
                     * the encapsulated transferable for the requested data flavor.
                     * <p>
                     * In case of local transfer a serialized copy of the object
                     * returned by the encapsulated transferable is provided when
                     * the data is requested in application/x-java-serialized-object
                     * data flavor.
                     */
                    // @ts-ignore
                    public getTransferData(df: java.awt.datatransfer.DataFlavor): java.lang.Object;
                }
            }
        }
    }
}
