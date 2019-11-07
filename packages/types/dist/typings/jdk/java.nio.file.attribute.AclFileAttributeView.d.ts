// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                // @ts-ignore
                interface AclFileAttributeView {
                    /**
                     * Returns the name of the attribute view. Attribute views of this type
                     * have the name {@code "acl"}.
                     */
                    // @ts-ignore
                     name(): string;
                    /**
                     * Reads the access control list.
                     * <p> When the file system uses an ACL model that differs from the NFSv4
                     * defined ACL model, then this method returns an ACL that is the translation
                     * of the ACL to the NFSv4 ACL model.
                     * <p> The returned list is modifiable so as to facilitate changes to the
                     * existing ACL. The {@link #setAcl setAcl} method is used to update
                     * the file's ACL attribute.
                     */
                    // @ts-ignore
                     getAcl(): java.util.List;
                    /**
                     * Updates (replace) the access control list.
                     * <p> Where the file system supports Access Control Lists, and it uses an
                     * ACL model that differs from the NFSv4 defined ACL model, then this method
                     * must translate the ACL to the model supported by the file system. This
                     * method should reject (by throwing {@link IOException IOException}) any
                     * attempt to write an ACL that would appear to make the file more secure
                     * than would be the case if the ACL were updated. Where an implementation
                     * does not support a mapping of {@link AclEntryType#AUDIT} or {@link
                     * AclEntryType#ALARM} entries, then this method ignores these entries when
                     * writing the ACL.
                     * <p> If an ACL entry contains a {@link AclEntry#principal user-principal}
                     * that is not associated with the same provider as this attribute view then
                     * {@link ProviderMismatchException} is thrown. Additional validation, if
                     * any, is implementation dependent.
                     * <p> If the file system supports other security related file attributes
                     * (such as a file {@link PosixFileAttributes#permissions
                     * access-permissions} for example), the updating the access control list
                     * may also cause these security related attributes to be updated.
                     */
                    // @ts-ignore
                     setAcl(acl: java.util.List): void;
                }
            }
        }
    }
}
