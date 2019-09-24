declare namespace org {
    namespace bukkit {
        namespace permissions {
            // @ts-ignore
             class PermissionAttachmentInfo {
                constructor(permissible: org.bukkit.permissions.Permissible, permission: string, attachment: org.bukkit.permissions.PermissionAttachment, value: boolean)
                /**
                 * Gets the permissible this is attached to
                 */
                public getPermissible(): org.bukkit.permissions.Permissible;
                /**
                 * Gets the permission being set
                 */
                public getPermission(): string;
                /**
                 * Gets the attachment providing this permission. This may be null for
                 * default permissions (usually parent permissions).
                 */
                public getAttachment(): org.bukkit.permissions.PermissionAttachment;
                /**
                 * Gets the value of this permission
                 */
                public getValue(): boolean;
            }
        }
    }
}
