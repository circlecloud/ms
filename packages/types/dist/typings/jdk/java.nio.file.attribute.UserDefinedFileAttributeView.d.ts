// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                // @ts-ignore
                interface UserDefinedFileAttributeView {
                    /**
                     * Returns the name of this attribute view. Attribute views of this type
                     * have the name {@code "user"}.
                     */
                    // @ts-ignore
                     name(): string;
                    /**
                     * Returns a list containing the names of the user-defined attributes.
                     */
                    // @ts-ignore
                     list(): java.util.List;
                    /**
                     * Returns the size of the value of a user-defined attribute.
                     */
                    // @ts-ignore
                     size(name: string): number;
                    /**
                     * Read the value of a user-defined attribute into a buffer.
                     * <p> This method reads the value of the attribute into the given buffer
                     * as a sequence of bytes, failing if the number of bytes remaining in
                     * the buffer is insufficient to read the complete attribute value. The
                     * number of bytes transferred into the buffer is {@code n}, where {@code n}
                     * is the size of the attribute value. The first byte in the sequence is at
                     * index {@code p} and the last byte is at index {@code p + n - 1}, where
                     * {@code p} is the buffer's position. Upon return the buffer's position
                     * will be equal to {@code p + n}; its limit will not have changed.
                     * <p> <b>Usage Example:</b>
                     * Suppose we want to read a file's MIME type that is stored as a user-defined
                     * attribute with the name "{@code user.mimetype}".
                     * <pre>
                     * UserDefinedFileAttributeView view =
                     * Files.getFileAttributeView(path, UserDefinedFileAttributeView.class);
                     * String name = "user.mimetype";
                     * ByteBuffer buf = ByteBuffer.allocate(view.size(name));
                     * view.read(name, buf);
                     * buf.flip();
                     * String value = Charset.defaultCharset().decode(buf).toString();
                     * </pre>
                     */
                    // @ts-ignore
                     read(name: string, dst: java.nio.ByteBuffer): number;
                    /**
                     * Writes the value of a user-defined attribute from a buffer.
                     * <p> This method writes the value of the attribute from a given buffer as
                     * a sequence of bytes. The size of the value to transfer is {@code r},
                     * where {@code r} is the number of bytes remaining in the buffer, that is
                     * {@code src.remaining()}. The sequence of bytes is transferred from the
                     * buffer starting at index {@code p}, where {@code p} is the buffer's
                     * position. Upon return, the buffer's position will be equal to {@code
                     * p + n}, where {@code n} is the number of bytes transferred; its limit
                     * will not have changed.
                     * <p> If an attribute of the given name already exists then its value is
                     * replaced. If the attribute does not exist then it is created. If it
                     * implementation specific if a test to check for the existence of the
                     * attribute and the creation of attribute are atomic with respect to other
                     * file system activities.
                     * <p> Where there is insufficient space to store the attribute, or the
                     * attribute name or value exceed an implementation specific maximum size
                     * then an {@code IOException} is thrown.
                     * <p> <b>Usage Example:</b>
                     * Suppose we want to write a file's MIME type as a user-defined attribute:
                     * <pre>
                     * UserDefinedFileAttributeView view =
                     * FIles.getFileAttributeView(path, UserDefinedFileAttributeView.class);
                     * view.write("user.mimetype", Charset.defaultCharset().encode("text/html"));
                     * </pre>
                     */
                    // @ts-ignore
                     write(name: string, src: java.nio.ByteBuffer): number;
                    /**
                     * Deletes a user-defined attribute.
                     */
                    // @ts-ignore
                     delete(name: string): void;
                }
            }
        }
    }
}
