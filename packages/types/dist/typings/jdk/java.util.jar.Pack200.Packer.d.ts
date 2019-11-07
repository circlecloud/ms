// @ts-nocheck
declare namespace java {
    namespace util {
        namespace jar {
            namespace Pack200 {
                // @ts-ignore
                interface Packer {
                    // @ts-ignore
                     SEGMENT_LIMIT: string;
                    // @ts-ignore
                     KEEP_FILE_ORDER: string;
                    // @ts-ignore
                     EFFORT: string;
                    // @ts-ignore
                     DEFLATE_HINT: string;
                    // @ts-ignore
                     MODIFICATION_TIME: string;
                    // @ts-ignore
                     PASS_FILE_PFX: string;
                    // @ts-ignore
                     UNKNOWN_ATTRIBUTE: string;
                    // @ts-ignore
                     CLASS_ATTRIBUTE_PFX: string;
                    // @ts-ignore
                     FIELD_ATTRIBUTE_PFX: string;
                    // @ts-ignore
                     METHOD_ATTRIBUTE_PFX: string;
                    // @ts-ignore
                     CODE_ATTRIBUTE_PFX: string;
                    // @ts-ignore
                     PROGRESS: string;
                    // @ts-ignore
                     KEEP: string;
                    // @ts-ignore
                     PASS: string;
                    // @ts-ignore
                     STRIP: string;
                    // @ts-ignore
                     ERROR: string;
                    // @ts-ignore
                     TRUE: string;
                    // @ts-ignore
                     FALSE: string;
                    // @ts-ignore
                     LATEST: string;
                    /**
                     * Get the set of this engine's properties.
                     * This set is a "live view", so that changing its
                     * contents immediately affects the Packer engine, and
                     * changes from the engine (such as progress indications)
                     * are immediately visible in the map.
                     * <p>The property map may contain pre-defined implementation
                     * specific and default properties.  Users are encouraged to
                     * read the information and fully understand the implications,
                     * before modifying pre-existing properties.
                     * <p>
                     * Implementation specific properties are prefixed with a
                     * package name associated with the implementor, beginning
                     * with <tt>com.</tt> or a similar prefix.
                     * All property names beginning with <tt>pack.</tt> and
                     * <tt>unpack.</tt> are reserved for use by this API.
                     * <p>
                     * Unknown properties may be ignored or rejected with an
                     * unspecified error, and invalid entries may cause an
                     * unspecified error to be thrown.
                     * <p>
                     * The returned map implements all optional {@link SortedMap} operations
                     */
                    // @ts-ignore
                     properties(): java.util.SortedMap;
                    /**
                     * Takes a JarFile and converts it into a Pack200 archive.
                     * <p>
                     * Closes its input but not its output.  (Pack200 archives are appendable.)
                     */
                    // @ts-ignore
                     pack(input: java.util.jar.JarFile, out: java.io.OutputStream): void;
                    /**
                     * Takes a JarInputStream and converts it into a Pack200 archive.
                     * <p>
                     * Closes its input but not its output.  (Pack200 archives are appendable.)
                     * <p>
                     * The modification time and deflation hint attributes are not available,
                     * for the JAR manifest file and its containing directory.
                     */
                    // @ts-ignore
                     pack(input: java.util.jar.JarInputStream, out: java.io.OutputStream): void;
                    /**
                     * Registers a listener for PropertyChange events on the properties map.
                     * This is typically used by applications to update a progress bar.
                     * <p> The default implementation of this method does nothing and has
                     * no side-effects.</p>
                     * <p><b>WARNING:</b> This method is omitted from the interface
                     * declaration in all subset Profiles of Java SE that do not include
                     * the {@code java.beans} package. </p>
                     */
                    // @ts-ignore
                     addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
                    /**
                     * Remove a listener for PropertyChange events, added by
                     * the {@link #addPropertyChangeListener}.
                     * <p> The default implementation of this method does nothing and has
                     * no side-effects.</p>
                     * <p><b>WARNING:</b> This method is omitted from the interface
                     * declaration in all subset Profiles of Java SE that do not include
                     * the {@code java.beans} package. </p>
                     */
                    // @ts-ignore
                     removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
                }
            }
        }
    }
}
