// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                // @ts-ignore
                interface DosFileAttributes {
                    /**
                     * Returns the value of the read-only attribute.
                     * <p> This attribute is often used as a simple access control mechanism
                     * to prevent files from being deleted or updated. Whether the file system
                     * or platform does any enforcement to prevent <em>read-only</em> files
                     * from being updated is implementation specific.
                     */
                    // @ts-ignore
                     isReadOnly(): boolean;
                    /**
                     * Returns the value of the hidden attribute.
                     * <p> This attribute is often used to indicate if the file is visible to
                     * users.
                     */
                    // @ts-ignore
                     isHidden(): boolean;
                    /**
                     * Returns the value of the archive attribute.
                     * <p> This attribute is typically used by backup programs.
                     */
                    // @ts-ignore
                     isArchive(): boolean;
                    /**
                     * Returns the value of the system attribute.
                     * <p> This attribute is often used to indicate that the file is a component
                     * of the operating system.
                     */
                    // @ts-ignore
                     isSystem(): boolean;
                }
            }
        }
    }
}
