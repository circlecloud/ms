// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                // @ts-ignore
                 class AclEntry extends java.lang.Object {
                    /**
                     * Constructs a new builder. The initial value of the type and who
                     * components is {@code null}. The initial value of the permissions and
                     * flags components is the empty set.
                     */
                    // @ts-ignore
                    public static newBuilder(): java.nio.file.attribute.AclEntry.Builder;
                    /**
                     * Constructs a new builder with the components of an existing ACL entry.
                     */
                    // @ts-ignore
                    public static newBuilder(entry: java.nio.file.attribute.AclEntry): java.nio.file.attribute.AclEntry.Builder;
                    /**
                     * Returns the ACL entry type.
                     */
                    // @ts-ignore
                    public type(): java.nio.file.attribute.AclEntryType;
                    /**
                     * Returns the principal component.
                     */
                    // @ts-ignore
                    public principal(): java.nio.file.attribute.UserPrincipal;
                    /**
                     * Returns a copy of the permissions component.
                     * <p> The returned set is a modifiable copy of the permissions.
                     */
                    // @ts-ignore
                    public permissions(): java.util.Set;
                    /**
                     * Returns a copy of the flags component.
                     * <p> The returned set is a modifiable copy of the flags.
                     */
                    // @ts-ignore
                    public flags(): java.util.Set;
                    /**
                     * Compares the specified object with this ACL entry for equality.
                     * <p> If the given object is not an {@code AclEntry} then this method
                     * immediately returns {@code false}.
                     * <p> For two ACL entries to be considered equals requires that they are
                     * both the same type, their who components are equal, their permissions
                     * components are equal, and their flags components are equal.
                     * <p> This method satisfies the general contract of the {@link
                     * java.lang.Object#equals(Object) Object.equals} method. </p>
                     */
                    // @ts-ignore
                    public equals(ob: java.lang.Object): boolean;
                    /**
                     * Returns the hash-code value for this ACL entry.
                     * <p> This method satisfies the general contract of the {@link
                     * Object#hashCode} method.
                     */
                    // @ts-ignore
                    public hashCode(): number;
                    /**
                     * Returns the string representation of this ACL entry.
                     */
                    // @ts-ignore
                    public toString(): string;
                }
            }
        }
    }
}
