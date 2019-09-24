declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface SkullMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Gets the owner of the skull.
                     */
                     getOwner(): string;
                    /**
                     * Checks to see if the skull has an owner.
                     */
                     hasOwner(): boolean;
                    /**
                     * Sets the owner of the skull.
                     */
                     setOwner(owner: string): boolean;
                    /**
                     * Gets the owner of the skull.
                     */
                     getOwningPlayer(): org.bukkit.OfflinePlayer;
                    /**
                     * Sets the owner of the skull.
                     * <p>
                     * Plugins should check that hasOwner() returns true before calling this
                     * plugin.
                     */
                     setOwningPlayer(owner: org.bukkit.OfflinePlayer): boolean;
                     clone(): org.bukkit.inventory.meta.SkullMeta;
                }
            }
        }
    }
}
