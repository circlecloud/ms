// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                // @ts-ignore
                interface PosixFileAttributeView {
                    /**
                     * Returns the name of the attribute view. Attribute views of this type
                     * have the name {@code "posix"}.
                     */
                    // @ts-ignore
                     name(): string;
                    // @ts-ignore
                     readAttributes(): java.nio.file.attribute.PosixFileAttributes;
                    /**
                     * Updates the file permissions.
                     */
                    // @ts-ignore
                     setPermissions(perms: java.util.Set): void;
                    /**
                     * Updates the file group-owner.
                     */
                    // @ts-ignore
                     setGroup(group: java.nio.file.attribute.GroupPrincipal): void;
                }
            }
        }
    }
}
