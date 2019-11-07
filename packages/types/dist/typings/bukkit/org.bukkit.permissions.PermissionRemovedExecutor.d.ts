declare namespace org {
    namespace bukkit {
        namespace permissions {
            // @ts-ignore
            interface PermissionRemovedExecutor {
                /**
                 * Called when a {@link PermissionAttachment} is removed from a {@link
                 * Permissible}
                 */
                // @ts-ignore
                 attachmentRemoved(attachment: org.bukkit.permissions.PermissionAttachment): void;
            }
        }
    }
}
