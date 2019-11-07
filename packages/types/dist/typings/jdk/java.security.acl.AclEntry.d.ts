// @ts-nocheck
declare namespace java {
    namespace security {
        namespace acl {
            // @ts-ignore
            interface AclEntry {
                /**
                 * Specifies the principal for which permissions are granted or denied
                 * by this ACL entry. If a principal was already set for this ACL entry,
                 * false is returned, otherwise true is returned.
                 */
                // @ts-ignore
                 setPrincipal(user: java.security.Principal): boolean;
                /**
                 * Returns the principal for which permissions are granted or denied by
                 * this ACL entry. Returns null if there is no principal set for this
                 * entry yet.
                 */
                // @ts-ignore
                 getPrincipal(): java.security.Principal;
                /**
                 * Sets this ACL entry to be a negative one. That is, the associated
                 * principal (e.g., a user or a group) will be denied the permission set
                 * specified in the entry.
                 * Note: ACL entries are by default positive. An entry becomes a
                 * negative entry only if this {@code setNegativePermissions}
                 * method is called on it.
                 */
                // @ts-ignore
                 setNegativePermissions(): void;
                /**
                 * Returns true if this is a negative ACL entry (one denying the
                 * associated principal the set of permissions in the entry), false
                 * otherwise.
                 */
                // @ts-ignore
                 isNegative(): boolean;
                /**
                 * Adds the specified permission to this ACL entry. Note: An entry can
                 * have multiple permissions.
                 */
                // @ts-ignore
                 addPermission(permission: java.security.acl.Permission): boolean;
                /**
                 * Removes the specified permission from this ACL entry.
                 */
                // @ts-ignore
                 removePermission(permission: java.security.acl.Permission): boolean;
                /**
                 * Checks if the specified permission is part of the
                 * permission set in this entry.
                 */
                // @ts-ignore
                 checkPermission(permission: java.security.acl.Permission): boolean;
                /**
                 * Returns an enumeration of the permissions in this ACL entry.
                 */
                // @ts-ignore
                 permissions(): java.util.Enumeration;
                /**
                 * Returns a string representation of the contents of this ACL entry.
                 */
                // @ts-ignore
                 toString(): string;
                /**
                 * Clones this ACL entry.
                 */
                // @ts-ignore
                 clone(): java.lang.Object;
            }
        }
    }
}
