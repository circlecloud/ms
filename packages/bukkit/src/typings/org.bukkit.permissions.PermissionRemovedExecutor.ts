declare namespace org {
    namespace bukkit {
        namespace permissions {
            class PermissionRemovedExecutor {
                /**
                 * Called when a {@link PermissionAttachment} is removed from a {@link
                 * Permissible}
                 */
                public attachmentRemoved(attachment: org.bukkit.permissions.PermissionAttachment): void;
            }
        }
    }
}
