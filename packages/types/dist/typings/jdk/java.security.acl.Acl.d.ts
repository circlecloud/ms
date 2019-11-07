// @ts-nocheck
declare namespace java {
    namespace security {
        namespace acl {
            // @ts-ignore
            interface Acl {
                /**
                 * Sets the name of this ACL.
                 */
                // @ts-ignore
                 setName(caller: java.security.Principal, name: string): void;
                /**
                 * Returns the name of this ACL.
                 */
                // @ts-ignore
                 getName(): string;
                /**
                 * Adds an ACL entry to this ACL. An entry associates a principal
                 * (e.g., an individual or a group) with a set of
                 * permissions. Each principal can have at most one positive ACL
                 * entry (specifying permissions to be granted to the principal)
                 * and one negative ACL entry (specifying permissions to be
                 * denied). If there is already an ACL entry of the same type
                 * (negative or positive) already in the ACL, false is returned.
                 */
                // @ts-ignore
                 addEntry(caller: java.security.Principal, entry: java.security.acl.AclEntry): boolean;
                /**
                 * Removes an ACL entry from this ACL.
                 */
                // @ts-ignore
                 removeEntry(caller: java.security.Principal, entry: java.security.acl.AclEntry): boolean;
                /**
                 * Returns an enumeration for the set of allowed permissions for the
                 * specified principal (representing an entity such as an individual or
                 * a group). This set of allowed permissions is calculated as
                 * follows:
                 * <ul>
                 * <li>If there is no entry in this Access Control List for the
                 * specified principal, an empty permission set is returned.
                 * <li>Otherwise, the principal's group permission sets are determined.
                 * (A principal can belong to one or more groups, where a group is a
                 * group of principals, represented by the Group interface.)
                 * The group positive permission set is the union of all
                 * the positive permissions of each group that the principal belongs to.
                 * The group negative permission set is the union of all
                 * the negative permissions of each group that the principal belongs to.
                 * If there is a specific permission that occurs in both
                 * the positive permission set and the negative permission set,
                 * it is removed from both.<p>
                 * The individual positive and negative permission sets are also
                 * determined. The positive permission set contains the permissions
                 * specified in the positive ACL entry (if any) for the principal.
                 * Similarly, the negative permission set contains the permissions
                 * specified in the negative ACL entry (if any) for the principal.
                 * The individual positive (or negative) permission set is considered
                 * to be null if there is not a positive (negative) ACL entry for the
                 * principal in this ACL.<p>
                 * The set of permissions granted to the principal is then calculated
                 * using the simple rule that individual permissions always override
                 * the group permissions. That is, the principal's individual negative
                 * permission set (specific denial of permissions) overrides the group
                 * positive permission set, and the principal's individual positive
                 * permission set overrides the group negative permission set.
                 * </ul>
                 */
                // @ts-ignore
                 getPermissions(user: java.security.Principal): java.util.Enumeration;
                /**
                 * Returns an enumeration of the entries in this ACL. Each element in
                 * the enumeration is of type AclEntry.
                 */
                // @ts-ignore
                 entries(): java.util.Enumeration;
                /**
                 * Checks whether or not the specified principal has the specified
                 * permission. If it does, true is returned, otherwise false is returned.
                 * More specifically, this method checks whether the passed permission
                 * is a member of the allowed permission set of the specified principal.
                 * The allowed permission set is determined by the same algorithm as is
                 * used by the {@code getPermissions} method.
                 */
                // @ts-ignore
                 checkPermission(principal: java.security.Principal, permission: java.security.acl.Permission): boolean;
                /**
                 * Returns a string representation of the
                 * ACL contents.
                 */
                // @ts-ignore
                 toString(): string;
            }
        }
    }
}
