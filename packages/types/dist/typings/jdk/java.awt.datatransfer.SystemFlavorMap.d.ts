declare namespace java {
    namespace awt {
        namespace datatransfer {
            // @ts-ignore
             class SystemFlavorMap extends java.lang.Object {
                /**
                 * Returns the default FlavorMap for this thread's ClassLoader.
                 */
                // @ts-ignore
                public static getDefaultFlavorMap(): java.awt.datatransfer.FlavorMap;
                /**
                 * Returns a <code>List</code> of <code>String</code> natives to which the
                 * specified <code>DataFlavor</code> can be translated by the data transfer
                 * subsystem. The <code>List</code> will be sorted from best native to
                 * worst. That is, the first native will best reflect data in the specified
                 * flavor to the underlying native platform.
                 * <p>
                 * If the specified <code>DataFlavor</code> is previously unknown to the
                 * data transfer subsystem and the data transfer subsystem is unable to
                 * translate this <code>DataFlavor</code> to any existing native, then
                 * invoking this method will establish a
                 * mapping in both directions between the specified <code>DataFlavor</code>
                 * and an encoded version of its MIME type as its native.
                 */
                // @ts-ignore
                public getNativesForFlavor(flav: java.awt.datatransfer.DataFlavor): java.util.List;
                /**
                 * Returns a <code>List</code> of <code>DataFlavor</code>s to which the
                 * specified <code>String</code> native can be translated by the data
                 * transfer subsystem. The <code>List</code> will be sorted from best
                 * <code>DataFlavor</code> to worst. That is, the first
                 * <code>DataFlavor</code> will best reflect data in the specified
                 * native to a Java application.
                 * <p>
                 * If the specified native is previously unknown to the data transfer
                 * subsystem, and that native has been properly encoded, then invoking this
                 * method will establish a mapping in both directions between the specified
                 * native and a <code>DataFlavor</code> whose MIME type is a decoded
                 * version of the native.
                 * <p>
                 * If the specified native is not a properly encoded native and the
                 * mappings for this native have not been altered with
                 * <code>setFlavorsForNative</code>, then the contents of the
                 * <code>List</code> is platform dependent, but <code>null</code>
                 * cannot be returned.
                 */
                // @ts-ignore
                public getFlavorsForNative(nat: string): java.util.List;
                /**
                 * Returns a <code>Map</code> of the specified <code>DataFlavor</code>s to
                 * their most preferred <code>String</code> native. Each native value will
                 * be the same as the first native in the List returned by
                 * <code>getNativesForFlavor</code> for the specified flavor.
                 * <p>
                 * If a specified <code>DataFlavor</code> is previously unknown to the
                 * data transfer subsystem, then invoking this method will establish a
                 * mapping in both directions between the specified <code>DataFlavor</code>
                 * and an encoded version of its MIME type as its native.
                 */
                // @ts-ignore
                public getNativesForFlavors(flavors: java.awt.datatransfer.DataFlavor): java.util.Map;
                /**
                 * Returns a <code>Map</code> of the specified <code>String</code> natives
                 * to their most preferred <code>DataFlavor</code>. Each
                 * <code>DataFlavor</code> value will be the same as the first
                 * <code>DataFlavor</code> in the List returned by
                 * <code>getFlavorsForNative</code> for the specified native.
                 * <p>
                 * If a specified native is previously unknown to the data transfer
                 * subsystem, and that native has been properly encoded, then invoking this
                 * method will establish a mapping in both directions between the specified
                 * native and a <code>DataFlavor</code> whose MIME type is a decoded
                 * version of the native.
                 */
                // @ts-ignore
                public getFlavorsForNatives(natives: string): java.util.Map;
                /**
                 * Adds a mapping from the specified <code>DataFlavor</code> (and all
                 * <code>DataFlavor</code>s equal to the specified <code>DataFlavor</code>)
                 * to the specified <code>String</code> native.
                 * Unlike <code>getNativesForFlavor</code>, the mapping will only be
                 * established in one direction, and the native will not be encoded. To
                 * establish a two-way mapping, call
                 * <code>addFlavorForUnencodedNative</code> as well. The new mapping will
                 * be of lower priority than any existing mapping.
                 * This method has no effect if a mapping from the specified or equal
                 * <code>DataFlavor</code> to the specified <code>String</code> native
                 * already exists.
                 */
                // @ts-ignore
                public addUnencodedNativeForFlavor(flav: java.awt.datatransfer.DataFlavor, nat: string): void;
                /**
                 * Discards the current mappings for the specified <code>DataFlavor</code>
                 * and all <code>DataFlavor</code>s equal to the specified
                 * <code>DataFlavor</code>, and creates new mappings to the
                 * specified <code>String</code> natives.
                 * Unlike <code>getNativesForFlavor</code>, the mappings will only be
                 * established in one direction, and the natives will not be encoded. To
                 * establish two-way mappings, call <code>setFlavorsForNative</code>
                 * as well. The first native in the array will represent the highest
                 * priority mapping. Subsequent natives will represent mappings of
                 * decreasing priority.
                 * <p>
                 * If the array contains several elements that reference equal
                 * <code>String</code> natives, this method will establish new mappings
                 * for the first of those elements and ignore the rest of them.
                 * <p>
                 * It is recommended that client code not reset mappings established by the
                 * data transfer subsystem. This method should only be used for
                 * application-level mappings.
                 */
                // @ts-ignore
                public setNativesForFlavor(flav: java.awt.datatransfer.DataFlavor, natives: string): void;
                /**
                 * Adds a mapping from a single <code>String</code> native to a single
                 * <code>DataFlavor</code>. Unlike <code>getFlavorsForNative</code>, the
                 * mapping will only be established in one direction, and the native will
                 * not be encoded. To establish a two-way mapping, call
                 * <code>addUnencodedNativeForFlavor</code> as well. The new mapping will
                 * be of lower priority than any existing mapping.
                 * This method has no effect if a mapping from the specified
                 * <code>String</code> native to the specified or equal
                 * <code>DataFlavor</code> already exists.
                 */
                // @ts-ignore
                public addFlavorForUnencodedNative(nat: string, flav: java.awt.datatransfer.DataFlavor): void;
                /**
                 * Discards the current mappings for the specified <code>String</code>
                 * native, and creates new mappings to the specified
                 * <code>DataFlavor</code>s. Unlike <code>getFlavorsForNative</code>, the
                 * mappings will only be established in one direction, and the natives need
                 * not be encoded. To establish two-way mappings, call
                 * <code>setNativesForFlavor</code> as well. The first
                 * <code>DataFlavor</code> in the array will represent the highest priority
                 * mapping. Subsequent <code>DataFlavor</code>s will represent mappings of
                 * decreasing priority.
                 * <p>
                 * If the array contains several elements that reference equal
                 * <code>DataFlavor</code>s, this method will establish new mappings
                 * for the first of those elements and ignore the rest of them.
                 * <p>
                 * It is recommended that client code not reset mappings established by the
                 * data transfer subsystem. This method should only be used for
                 * application-level mappings.
                 */
                // @ts-ignore
                public setFlavorsForNative(nat: string, flavors: java.awt.datatransfer.DataFlavor): void;
                /**
                 * Encodes a MIME type for use as a <code>String</code> native. The format
                 * of an encoded representation of a MIME type is implementation-dependent.
                 * The only restrictions are:
                 * <ul>
                 * <li>The encoded representation is <code>null</code> if and only if the
                 * MIME type <code>String</code> is <code>null</code>.</li>
                 * <li>The encoded representations for two non-<code>null</code> MIME type
                 * <code>String</code>s are equal if and only if these <code>String</code>s
                 * are equal according to <code>String.equals(Object)</code>.</li>
                 * </ul>
                 * <p>
                 * The reference implementation of this method returns the specified MIME
                 * type <code>String</code> prefixed with <code>JAVA_DATAFLAVOR:</code>.
                 */
                // @ts-ignore
                public static encodeJavaMIMEType(mimeType: string): string;
                /**
                 * Encodes a <code>DataFlavor</code> for use as a <code>String</code>
                 * native. The format of an encoded <code>DataFlavor</code> is
                 * implementation-dependent. The only restrictions are:
                 * <ul>
                 * <li>The encoded representation is <code>null</code> if and only if the
                 * specified <code>DataFlavor</code> is <code>null</code> or its MIME type
                 * <code>String</code> is <code>null</code>.</li>
                 * <li>The encoded representations for two non-<code>null</code>
                 * <code>DataFlavor</code>s with non-<code>null</code> MIME type
                 * <code>String</code>s are equal if and only if the MIME type
                 * <code>String</code>s of these <code>DataFlavor</code>s are equal
                 * according to <code>String.equals(Object)</code>.</li>
                 * </ul>
                 * <p>
                 * The reference implementation of this method returns the MIME type
                 * <code>String</code> of the specified <code>DataFlavor</code> prefixed
                 * with <code>JAVA_DATAFLAVOR:</code>.
                 */
                // @ts-ignore
                public static encodeDataFlavor(flav: java.awt.datatransfer.DataFlavor): string;
                /**
                 * Returns whether the specified <code>String</code> is an encoded Java
                 * MIME type.
                 */
                // @ts-ignore
                public static isJavaMIMEType(str: string): boolean;
                /**
                 * Decodes a <code>String</code> native for use as a Java MIME type.
                 */
                // @ts-ignore
                public static decodeJavaMIMEType(nat: string): string;
                /**
                 * Decodes a <code>String</code> native for use as a
                 * <code>DataFlavor</code>.
                 */
                // @ts-ignore
                public static decodeDataFlavor(nat: string): java.awt.datatransfer.DataFlavor;
            }
        }
    }
}
