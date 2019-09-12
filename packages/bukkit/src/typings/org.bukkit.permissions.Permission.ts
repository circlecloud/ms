declare namespace org {
    namespace bukkit {
        namespace permissions {
            class Permission {
                constructor(name: string)
                constructor(name: string, description: string)
                constructor(name: string, defaultValue: org.bukkit.permissions.PermissionDefault)
                constructor(name: string, description: string, defaultValue: org.bukkit.permissions.PermissionDefault)
                constructor(name: string, children: Map<any, any> /*java.util.Map*/)
                constructor(name: string, description: string, children: Map<any, any> /*java.util.Map*/)
                constructor(name: string, defaultValue: org.bukkit.permissions.PermissionDefault, children: Map<any, any> /*java.util.Map*/)
                constructor(name: string, description: string, defaultValue: org.bukkit.permissions.PermissionDefault, children: Map<any, any> /*java.util.Map*/)
                public static DEFAULT_PERMISSION: org.bukkit.permissions.PermissionDefault;
                /**
                 * Returns the unique fully qualified name of this Permission
                 */
                public getName(): string;
                /**
                 * Gets the children of this permission.
                 * <p>
                 * If you change this map in any form, you must call {@link
                 * #recalculatePermissibles()} to recalculate all {@link Permissible}s
                 */
                public getChildren(): Map<any, any> /*java.util.Map*/;
                /**
                 * Gets the default value of this permission.
                 */
                public getDefault(): org.bukkit.permissions.PermissionDefault;
                /**
                 * Sets the default value of this permission.
                 * <p>
                 * This will not be saved to disk, and is a temporary operation until the
                 * server reloads permissions. Changing this default will cause all {@link
                 * Permissible}s that contain this permission to recalculate their
                 * permissions
                 */
                public setDefault(value: org.bukkit.permissions.PermissionDefault): void;
                /**
                 * Gets a brief description of this permission, may be empty
                 */
                public getDescription(): string;
                /**
                 * Sets the description of this permission.
                 * <p>
                 * This will not be saved to disk, and is a temporary operation until the
                 * server reloads permissions.
                 */
                public setDescription(value: string): void;
                /**
                 * Gets a set containing every {@link Permissible} that has this
                 * permission.
                 * <p>
                 * This set cannot be modified.
                 */
                public getPermissibles(): any[] /*java.util.Set*/;
                /**
                 * Recalculates all {@link Permissible}s that contain this permission.
                 * <p>
                 * This should be called after modifying the children, and is
                 * automatically called after modifying the default value
                 */
                public recalculatePermissibles(): void;
                /**
                 * Adds this permission to the specified parent permission.
                 * <p>
                 * If the parent permission does not exist, it will be created and
                 * registered.
                 */
                public addParent(name: string, value: boolean): org.bukkit.permissions.Permission;
                /**
                 * Adds this permission to the specified parent permission.
                 */
                public addParent(perm: org.bukkit.permissions.Permission, value: boolean): void;
                /**
                 * Loads a list of Permissions from a map of data, usually used from
                 * retrieval from a yaml file.
                 * <p>
                 * The data may contain a list of name:data, where the data contains the
                 * following keys:
                 * <ul>
                 * <li>default: Boolean true or false. If not specified, false.
                 * <li>children: {@code Map<String, Boolean>} of child permissions. If not
                 * specified, empty list.
                 * <li>description: Short string containing a very small description of
                 * this description. If not specified, empty string.
                 * </ul>
                 */
                public static loadPermissions(data: Map<any, any> /*java.util.Map*/, error: string, def: org.bukkit.permissions.PermissionDefault): any[] /*java.util.List*/;
                /**
                 * Loads a Permission from a map of data, usually used from retrieval from
                 * a yaml file.
                 * <p>
                 * The data may contain the following keys:
                 * <ul>
                 * <li>default: Boolean true or false. If not specified, false.
                 * <li>children: {@code Map<String, Boolean>} of child permissions. If not
                 * specified, empty list.
                 * <li>description: Short string containing a very small description of
                 * this description. If not specified, empty string.
                 * </ul>
                 */
                public static loadPermission(name: string, data: Map<any, any> /*java.util.Map*/): org.bukkit.permissions.Permission;
                /**
                 * Loads a Permission from a map of data, usually used from retrieval from
                 * a yaml file.
                 * <p>
                 * The data may contain the following keys:
                 * <ul>
                 * <li>default: Boolean true or false. If not specified, false.
                 * <li>children: {@code Map<String, Boolean>} of child permissions. If not
                 * specified, empty list.
                 * <li>description: Short string containing a very small description of
                 * this description. If not specified, empty string.
                 * </ul>
                 */
                public static loadPermission(name: string, data: Map<any, any> /*java.util.Map*/, def: org.bukkit.permissions.PermissionDefault, output: any[] /*java.util.List*/): org.bukkit.permissions.Permission;
            }
        }
    }
}
