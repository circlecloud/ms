// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace permissions {
            // @ts-ignore
             class PermissionAttachmentInfo extends java.lang.Object {
                // @ts-ignore
                constructor(permissible: org.bukkit.permissions.Permissible, permission: string, attachment: org.bukkit.permissions.PermissionAttachment, value: boolean)
                /**
                 * Gets the permissible this is attached to
                 */
                // @ts-ignore
                public getPermissible(): org.bukkit.permissions.Permissible;
                /**
                 * Gets the permission being set
                 */
                // @ts-ignore
                public getPermission(): string;
                /**
                 * Gets the attachment providing this permission. This may be null for
                 * default permissions (usually parent permissions).
                 */
                // @ts-ignore
                public getAttachment(): org.bukkit.permissions.PermissionAttachment;
                /**
                 * Gets the value of this permission
                 */
                // @ts-ignore
                public getValue(): boolean;
            }
        }
    }
}
