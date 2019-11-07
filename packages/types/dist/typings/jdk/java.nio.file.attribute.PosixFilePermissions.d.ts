// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                // @ts-ignore
                 class PosixFilePermissions extends java.lang.Object {
                    /**
                     * Returns the {@code String} representation of a set of permissions. It
                     * is guaranteed that the returned {@code String} can be parsed by the
                     * {@link #fromString} method.
                     * <p> If the set contains {@code null} or elements that are not of type
                     * {@code PosixFilePermission} then these elements are ignored.
                     */
                    // @ts-ignore
                    public static toString(perms: java.util.Set): string;
                    /**
                     * Returns the set of permissions corresponding to a given {@code String}
                     * representation.
                     * <p> The {@code perms} parameter is a {@code String} representing the
                     * permissions. It has 9 characters that are interpreted as three sets of
                     * three. The first set refers to the owner's permissions; the next to the
                     * group permissions and the last to others. Within each set, the first
                     * character is {@code 'r'} to indicate permission to read, the second
                     * character is {@code 'w'} to indicate permission to write, and the third
                     * character is {@code 'x'} for execute permission. Where a permission is
                     * not set then the corresponding character is set to {@code '-'}.
                     * <p> <b>Usage Example:</b>
                     * Suppose we require the set of permissions that indicate the owner has read,
                     * write, and execute permissions, the group has read and execute permissions
                     * and others have none.
                     * <pre>
                     * Set&lt;PosixFilePermission&gt; perms = PosixFilePermissions.fromString("rwxr-x---");
                     * </pre>
                     */
                    // @ts-ignore
                    public static fromString(perms: string): java.util.Set;
                    /**
                     * Creates a {@link FileAttribute}, encapsulating a copy of the given file
                     * permissions, suitable for passing to the {@link java.nio.file.Files#createFile
                     * createFile} or {@link java.nio.file.Files#createDirectory createDirectory}
                     * methods.
                     */
                    // @ts-ignore
                    public static asFileAttribute(perms: java.util.Set): java.nio.file.attribute.FileAttribute;
                }
            }
        }
    }
}
