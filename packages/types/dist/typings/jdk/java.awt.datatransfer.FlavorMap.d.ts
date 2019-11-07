declare namespace java {
    namespace awt {
        namespace datatransfer {
            // @ts-ignore
            interface FlavorMap {
                /**
                 * Returns a <code>Map</code> of the specified <code>DataFlavor</code>s to
                 * their corresponding <code>String</code> native. The returned
                 * <code>Map</code> is a modifiable copy of this <code>FlavorMap</code>'s
                 * internal data. Client code is free to modify the <code>Map</code>
                 * without affecting this object.
                 */
                // @ts-ignore
                 getNativesForFlavors(flavors: java.awt.datatransfer.DataFlavor): java.util.Map;
                /**
                 * Returns a <code>Map</code> of the specified <code>String</code> natives
                 * to their corresponding <code>DataFlavor</code>. The returned
                 * <code>Map</code> is a modifiable copy of this <code>FlavorMap</code>'s
                 * internal data. Client code is free to modify the <code>Map</code>
                 * without affecting this object.
                 */
                // @ts-ignore
                 getFlavorsForNatives(natives: string): java.util.Map;
            }
        }
    }
}
