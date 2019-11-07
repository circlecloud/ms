declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                // @ts-ignore
                interface BasicFileAttributeView {
                    /**
                     * Returns the name of the attribute view. Attribute views of this type
                     * have the name {@code "basic"}.
                     */
                    // @ts-ignore
                     name(): string;
                    /**
                     * Reads the basic file attributes as a bulk operation.
                     * <p> It is implementation specific if all file attributes are read as an
                     * atomic operation with respect to other file system operations.
                     */
                    // @ts-ignore
                     readAttributes(): java.nio.file.attribute.BasicFileAttributes;
                    /**
                     * Updates any or all of the file's last modified time, last access time,
                     * and create time attributes.
                     * <p> This method updates the file's timestamp attributes. The values are
                     * converted to the epoch and precision supported by the file system.
                     * Converting from finer to coarser granularities result in precision loss.
                     * The behavior of this method when attempting to set a timestamp that is
                     * not supported or to a value that is outside the range supported by the
                     * underlying file store is not defined. It may or not fail by throwing an
                     * {@code IOException}.
                     * <p> If any of the {@code lastModifiedTime}, {@code lastAccessTime},
                     * or {@code createTime} parameters has the value {@code null} then the
                     * corresponding timestamp is not changed. An implementation may require to
                     * read the existing values of the file attributes when only some, but not
                     * all, of the timestamp attributes are updated. Consequently, this method
                     * may not be an atomic operation with respect to other file system
                     * operations. Reading and re-writing existing values may also result in
                     * precision loss. If all of the {@code lastModifiedTime}, {@code
                     * lastAccessTime} and {@code createTime} parameters are {@code null} then
                     * this method has no effect.
                     * <p> <b>Usage Example:</b>
                     * Suppose we want to change a file's last access time.
                     * <pre>
                     * Path path = ...
                     * FileTime time = ...
                     * Files.getFileAttributeView(path, BasicFileAttributeView.class).setTimes(null, time, null);
                     * </pre>
                     */
                    // @ts-ignore
                     setTimes(lastModifiedTime: java.nio.file.attribute.FileTime, lastAccessTime: java.nio.file.attribute.FileTime, createTime: java.nio.file.attribute.FileTime): void;
                }
            }
        }
    }
}
