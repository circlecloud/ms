// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface SkullMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Gets the owner of the skull.
                     */
                    // @ts-ignore
                     getOwner(): string;
                    /**
                     * Checks to see if the skull has an owner.
                     */
                    // @ts-ignore
                     hasOwner(): boolean;
                    /**
                     * Sets the owner of the skull.
                     */
                    // @ts-ignore
                     setOwner(owner: string): boolean;
                    /**
                     * Gets the owner of the skull.
                     */
                    // @ts-ignore
                     getOwningPlayer(): org.bukkit.OfflinePlayer;
                    /**
                     * Sets the owner of the skull.
                     * <p>
                     * Plugins should check that hasOwner() returns true before calling this
                     * plugin.
                     */
                    // @ts-ignore
                     setOwningPlayer(owner: org.bukkit.OfflinePlayer): boolean;
                    // @ts-ignore
                     clone(): org.bukkit.inventory.meta.SkullMeta;
                }
            }
        }
    }
}
