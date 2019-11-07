// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace datatransfer {
            // @ts-ignore
            interface FlavorTable {
                /**
                 * Returns a <code>List</code> of <code>String</code> natives to which the
                 * specified <code>DataFlavor</code> corresponds. The <code>List</code>
                 * will be sorted from best native to worst. That is, the first native will
                 * best reflect data in the specified flavor to the underlying native
                 * platform. The returned <code>List</code> is a modifiable copy of this
                 * <code>FlavorTable</code>'s internal data. Client code is free to modify
                 * the <code>List</code> without affecting this object.
                 */
                // @ts-ignore
                 getNativesForFlavor(flav: java.awt.datatransfer.DataFlavor): java.util.List;
                /**
                 * Returns a <code>List</code> of <code>DataFlavor</code>s to which the
                 * specified <code>String</code> corresponds. The <code>List</code> will be
                 * sorted from best <code>DataFlavor</code> to worst. That is, the first
                 * <code>DataFlavor</code> will best reflect data in the specified
                 * native to a Java application. The returned <code>List</code> is a
                 * modifiable copy of this <code>FlavorTable</code>'s internal data.
                 * Client code is free to modify the <code>List</code> without affecting
                 * this object.
                 */
                // @ts-ignore
                 getFlavorsForNative(nat: string): java.util.List;
            }
        }
    }
}
