declare namespace java {
    namespace nio {
        namespace file {
            // @ts-ignore
            abstract class FileStore extends java.lang.Object {
                /**
                 * Initializes a new instance of this class.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the name of this file store. The format of the name is highly
                 * implementation specific. It will typically be the name of the storage
                 * pool or volume.
                 * <p> The string returned by this method may differ from the string
                 * returned by the {@link Object#toString() toString} method.
                 */
                // @ts-ignore
                public abstract name(): string;
                /**
                 * Returns the <em>type</em> of this file store. The format of the string
                 * returned by this method is highly implementation specific. It may
                 * indicate, for example, the format used or if the file store is local
                 * or remote.
                 */
                // @ts-ignore
                public abstract type(): string;
                /**
                 * Tells whether this file store is read-only. A file store is read-only if
                 * it does not support write operations or other changes to files. Any
                 * attempt to create a file, open an existing file for writing etc. causes
                 * an {@code IOException} to be thrown.
                 */
                // @ts-ignore
                public abstract isReadOnly(): boolean;
                /**
                 * Returns the size, in bytes, of the file store.
                 */
                // @ts-ignore
                public abstract getTotalSpace(): number;
                /**
                 * Returns the number of bytes available to this Java virtual machine on the
                 * file store.
                 * <p> The returned number of available bytes is a hint, but not a
                 * guarantee, that it is possible to use most or any of these bytes.  The
                 * number of usable bytes is most likely to be accurate immediately
                 * after the space attributes are obtained. It is likely to be made inaccurate
                 * by any external I/O operations including those made on the system outside
                 * of this Java virtual machine.
                 */
                // @ts-ignore
                public abstract getUsableSpace(): number;
                /**
                 * Returns the number of unallocated bytes in the file store.
                 * <p> The returned number of unallocated bytes is a hint, but not a
                 * guarantee, that it is possible to use most or any of these bytes.  The
                 * number of unallocated bytes is most likely to be accurate immediately
                 * after the space attributes are obtained. It is likely to be
                 * made inaccurate by any external I/O operations including those made on
                 * the system outside of this virtual machine.
                 */
                // @ts-ignore
                public abstract getUnallocatedSpace(): number;
                /**
                 * Tells whether or not this file store supports the file attributes
                 * identified by the given file attribute view.
                 * <p> Invoking this method to test if the file store supports {@link
                 * BasicFileAttributeView} will always return {@code true}. In the case of
                 * the default provider, this method cannot guarantee to give the correct
                 * result when the file store is not a local storage device. The reasons for
                 * this are implementation specific and therefore unspecified.
                 */
                // @ts-ignore
                public abstract supportsFileAttributeView(type: java.lang.Class): boolean;
                /**
                 * Returns a {@code FileStoreAttributeView} of the given type.
                 * <p> This method is intended to be used where the file store attribute
                 * view defines type-safe methods to read or update the file store attributes.
                 * The {@code type} parameter is the type of the attribute view required and
                 * the method returns an instance of that type if supported.
                 */
                // @ts-ignore
                public abstract getFileStoreAttributeView(type: java.lang.Class): java.nio.file.attribute.FileStoreAttributeView;
                /**
                 * Reads the value of a file store attribute.
                 * <p> The {@code attribute} parameter identifies the attribute to be read
                 * and takes the form:
                 * <blockquote>
                 * <i>view-name</i><b>:</b><i>attribute-name</i>
                 * </blockquote>
                 * where the character {@code ':'} stands for itself.
                 * <p> <i>view-name</i> is the {@link FileStoreAttributeView#name name} of
                 * a {@link FileStore AttributeView} that identifies a set of file attributes.
                 * <i>attribute-name</i> is the name of the attribute.
                 * <p> <b>Usage Example:</b>
                 * Suppose we want to know if ZFS compression is enabled (assuming the "zfs"
                 * view is supported):
                 * <pre>
                 * boolean compression = (Boolean)fs.getAttribute("zfs:compression");
                 * </pre>
                 */
                // @ts-ignore
                public abstract getAttribute(attribute: string): java.lang.Object;
            }
        }
    }
}
