// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace permissions {
            // @ts-ignore
            interface Permissible extends org.bukkit.permissions.ServerOperator {
                /**
                 * Checks if this object contains an override for the specified
                 * permission, by fully qualified name
                 */
                // @ts-ignore
                 isPermissionSet(name: string): boolean;
                /**
                 * Checks if this object contains an override for the specified {@link
                 * Permission}
                 */
                // @ts-ignore
                 isPermissionSet(perm: org.bukkit.permissions.Permission): boolean;
                /**
                 * Gets the value of the specified permission, if set.
                 * <p>
                 * If a permission override is not set on this object, the default value
                 * of the permission will be returned.
                 */
                // @ts-ignore
                 hasPermission(name: string): boolean;
                /**
                 * Gets the value of the specified permission, if set.
                 * <p>
                 * If a permission override is not set on this object, the default value
                 * of the permission will be returned
                 */
                // @ts-ignore
                 hasPermission(perm: org.bukkit.permissions.Permission): boolean;
                /**
                 * Adds a new {@link PermissionAttachment} with a single permission by
                 * name and value
                 */
                // @ts-ignore
                 addAttachment(plugin: org.bukkit.plugin.Plugin, name: string, value: boolean): org.bukkit.permissions.PermissionAttachment;
                /**
                 * Adds a new empty {@link PermissionAttachment} to this object
                 */
                // @ts-ignore
                 addAttachment(plugin: org.bukkit.plugin.Plugin): org.bukkit.permissions.PermissionAttachment;
                /**
                 * Temporarily adds a new {@link PermissionAttachment} with a single
                 * permission by name and value
                 */
                // @ts-ignore
                 addAttachment(plugin: org.bukkit.plugin.Plugin, name: string, value: boolean, ticks: number): org.bukkit.permissions.PermissionAttachment;
                /**
                 * Temporarily adds a new empty {@link PermissionAttachment} to this
                 * object
                 */
                // @ts-ignore
                 addAttachment(plugin: org.bukkit.plugin.Plugin, ticks: number): org.bukkit.permissions.PermissionAttachment;
                /**
                 * Removes the given {@link PermissionAttachment} from this object
                 */
                // @ts-ignore
                 removeAttachment(attachment: org.bukkit.permissions.PermissionAttachment): void;
                /**
                 * Recalculates the permissions for this object, if the attachments have
                 * changed values.
                 * <p>
                 * This should very rarely need to be called from a plugin.
                 */
                // @ts-ignore
                 recalculatePermissions(): void;
                /**
                 * Gets a set containing all of the permissions currently in effect by
                 * this object
                 */
                // @ts-ignore
                 getEffectivePermissions(): java.util.Set;
            }
        }
    }
}
