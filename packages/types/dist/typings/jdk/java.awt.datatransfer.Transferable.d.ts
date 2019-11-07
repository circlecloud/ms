// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace datatransfer {
            // @ts-ignore
            interface Transferable {
                /**
                 * Returns an array of DataFlavor objects indicating the flavors the data
                 * can be provided in.  The array should be ordered according to preference
                 * for providing the data (from most richly descriptive to least descriptive).
                 */
                // @ts-ignore
                 getTransferDataFlavors(): java.awt.datatransfer.DataFlavor[];
                /**
                 * Returns whether or not the specified data flavor is supported for
                 * this object.
                 */
                // @ts-ignore
                 isDataFlavorSupported(flavor: java.awt.datatransfer.DataFlavor): boolean;
                /**
                 * Returns an object which represents the data to be transferred.  The class
                 * of the object returned is defined by the representation class of the flavor.
                 */
                // @ts-ignore
                 getTransferData(flavor: java.awt.datatransfer.DataFlavor): java.lang.Object;
            }
        }
    }
}
