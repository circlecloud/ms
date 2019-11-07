declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                // @ts-ignore
                interface PosixFileAttributes {
                    /**
                     * Returns the owner of the file.
                     */
                    // @ts-ignore
                     owner(): java.nio.file.attribute.UserPrincipal;
                    /**
                     * Returns the group owner of the file.
                     */
                    // @ts-ignore
                     group(): java.nio.file.attribute.GroupPrincipal;
                    /**
                     * Returns the permissions of the file. The file permissions are returned
                     * as a set of {@link PosixFilePermission} elements. The returned set is a
                     * copy of the file permissions and is modifiable. This allows the result
                     * to be modified and passed to the {@link PosixFileAttributeView#setPermissions
                     * setPermissions} method to update the file's permissions.
                     */
                    // @ts-ignore
                     permissions(): java.util.Set;
                }
            }
        }
    }
}
