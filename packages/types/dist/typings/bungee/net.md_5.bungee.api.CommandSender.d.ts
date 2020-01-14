declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                // @ts-ignore
                interface CommandSender {
                    /**
                     * Get the unique name of this command sender.
                     */
                    // @ts-ignore
                     getName(): string;
                    /**
                     * Send a message to this sender.
                     */
                    // @ts-ignore
                     sendMessage(message: string): void;
                    /**
                     * Send several messages to this sender. Each message will be sent
                     * separately.
                     */
                    // @ts-ignore
                     sendMessages(messages: string): void;
                    /**
                     * Send a message to this sender.
                     */
                    // @ts-ignore
                     sendMessage(message: BaseComponent): void;
                    /**
                     * Send a message to this sender.
                     */
                    // @ts-ignore
                     sendMessage(message: BaseComponent): void;
                    /**
                     * Get all groups this user is part of. This returns an unmodifiable
                     * collection.
                     */
                    // @ts-ignore
                     getGroups(): java.util.Collection;
                    /**
                     * Adds groups to a this user for the current session only.
                     */
                    // @ts-ignore
                     addGroups(groups: string): void;
                    /**
                     * Remove groups from this user for the current session only.
                     */
                    // @ts-ignore
                     removeGroups(groups: string): void;
                    /**
                     * Checks if this user has the specified permission node.
                     */
                    // @ts-ignore
                     hasPermission(permission: string): boolean;
                    /**
                     * Set a permission node for this user.
                     */
                    // @ts-ignore
                     setPermission(permission: string, value: boolean): void;
                    /**
                     * Get all Permissions which this CommandSender has
                     */
                    // @ts-ignore
                     getPermissions(): java.util.Collection;
                }
            }
        }
    }
}
