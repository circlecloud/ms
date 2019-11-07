// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace permissions {
            // @ts-ignore
             class PermissionAttachment extends java.lang.Object {
                // @ts-ignore
                constructor(plugin: org.bukkit.plugin.Plugin, permissible: org.bukkit.permissions.Permissible)
                /**
                 * Gets the plugin responsible for this attachment
                 */
                // @ts-ignore
                public getPlugin(): org.bukkit.plugin.Plugin;
                /**
                 * Sets an object to be called for when this attachment is removed from a
                 * {@link Permissible}. May be null.
                 */
                // @ts-ignore
                public setRemovalCallback(ex: org.bukkit.permissions.PermissionRemovedExecutor): void;
                /**
                 * Gets the class that was previously set to be called when this
                 * attachment was removed from a {@link Permissible}. May be null.
                 */
                // @ts-ignore
                public getRemovalCallback(): org.bukkit.permissions.PermissionRemovedExecutor;
                /**
                 * Gets the Permissible that this is attached to
                 */
                // @ts-ignore
                public getPermissible(): org.bukkit.permissions.Permissible;
                /**
                 * Gets a copy of all set permissions and values contained within this
                 * attachment.
                 * <p>
                 * This map may be modified but will not affect the attachment, as it is a
                 * copy.
                 */
                // @ts-ignore
                public getPermissions(): java.util.Map;
                /**
                 * Sets a permission to the given value, by its fully qualified name
                 */
                // @ts-ignore
                public setPermission(name: string, value: boolean): void;
                /**
                 * Sets a permission to the given value
                 */
                // @ts-ignore
                public setPermission(perm: org.bukkit.permissions.Permission, value: boolean): void;
                /**
                 * Removes the specified permission from this attachment.
                 * <p>
                 * If the permission does not exist in this attachment, nothing will
                 * happen.
                 */
                // @ts-ignore
                public unsetPermission(name: string): void;
                /**
                 * Removes the specified permission from this attachment.
                 * <p>
                 * If the permission does not exist in this attachment, nothing will
                 * happen.
                 */
                // @ts-ignore
                public unsetPermission(perm: org.bukkit.permissions.Permission): void;
                /**
                 * Removes this attachment from its registered {@link Permissible}
                 */
                // @ts-ignore
                public remove(): boolean;
            }
        }
    }
}
