// @ts-nocheck
declare namespace java {
    namespace util {
        namespace jar {
            namespace Pack200 {
                // @ts-ignore
                interface Unpacker {
                    // @ts-ignore
                     KEEP: string;
                    // @ts-ignore
                     TRUE: string;
                    // @ts-ignore
                     FALSE: string;
                    // @ts-ignore
                     DEFLATE_HINT: string;
                    // @ts-ignore
                     PROGRESS: string;
                    /**
                     * Get the set of this engine's properties. This set is
                     * a "live view", so that changing its
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
                     */
                    // @ts-ignore
                     properties(): java.util.SortedMap;
                    /**
                     * Read a Pack200 archive, and write the encoded JAR to
                     * a JarOutputStream.
                     * The entire contents of the input stream will be read.
                     * It may be more efficient to read the Pack200 archive
                     * to a file and pass the File object, using the alternate
                     * method described below.
                     * <p>
                     * Closes its input but not its output.  (The output can accumulate more elements.)
                     */
                    // @ts-ignore
                     unpack(input: java.io.InputStream, out: java.util.jar.JarOutputStream): void;
                    /**
                     * Read a Pack200 archive, and write the encoded JAR to
                     * a JarOutputStream.
                     * <p>
                     * Does not close its output.  (The output can accumulate more elements.)
                     */
                    // @ts-ignore
                     unpack(input: java.io.File, out: java.util.jar.JarOutputStream): void;
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
