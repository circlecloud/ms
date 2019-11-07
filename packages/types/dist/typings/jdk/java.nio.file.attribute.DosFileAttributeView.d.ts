declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                // @ts-ignore
                interface DosFileAttributeView {
                    /**
                     * Returns the name of the attribute view. Attribute views of this type
                     * have the name {@code "dos"}.
                     */
                    // @ts-ignore
                     name(): string;
                    // @ts-ignore
                     readAttributes(): java.nio.file.attribute.DosFileAttributes;
                    /**
                     * Updates the value of the read-only attribute.
                     * <p> It is implementation specific if the attribute can be updated as an
                     * atomic operation with respect to other file system operations. An
                     * implementation may, for example, require to read the existing value of
                     * the DOS attribute in order to update this attribute.
                     */
                    // @ts-ignore
                     setReadOnly(value: boolean): void;
                    /**
                     * Updates the value of the hidden attribute.
                     * <p> It is implementation specific if the attribute can be updated as an
                     * atomic operation with respect to other file system operations. An
                     * implementation may, for example, require to read the existing value of
                     * the DOS attribute in order to update this attribute.
                     */
                    // @ts-ignore
                     setHidden(value: boolean): void;
                    /**
                     * Updates the value of the system attribute.
                     * <p> It is implementation specific if the attribute can be updated as an
                     * atomic operation with respect to other file system operations. An
                     * implementation may, for example, require to read the existing value of
                     * the DOS attribute in order to update this attribute.
                     */
                    // @ts-ignore
                     setSystem(value: boolean): void;
                    /**
                     * Updates the value of the archive attribute.
                     * <p> It is implementation specific if the attribute can be updated as an
                     * atomic operation with respect to other file system operations. An
                     * implementation may, for example, require to read the existing value of
                     * the DOS attribute in order to update this attribute.
                     */
                    // @ts-ignore
                     setArchive(value: boolean): void;
                }
            }
        }
    }
}
