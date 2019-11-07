declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                // @ts-ignore
                interface FileOwnerAttributeView {
                    /**
                     * Returns the name of the attribute view. Attribute views of this type
                     * have the name {@code "owner"}.
                     */
                    // @ts-ignore
                     name(): string;
                    /**
                     * Read the file owner.
                     * <p> It it implementation specific if the file owner can be a {@link
                     * GroupPrincipal group}.
                     */
                    // @ts-ignore
                     getOwner(): java.nio.file.attribute.UserPrincipal;
                    /**
                     * Updates the file owner.
                     * <p> It it implementation specific if the file owner can be a {@link
                     * GroupPrincipal group}. To ensure consistent and correct behavior
                     * across platforms it is recommended that this method should only be used
                     * to set the file owner to a user principal that is not a group.
                     */
                    // @ts-ignore
                     setOwner(owner: java.nio.file.attribute.UserPrincipal): void;
                }
            }
        }
    }
}
