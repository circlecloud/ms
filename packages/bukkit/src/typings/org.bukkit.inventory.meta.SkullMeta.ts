declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                class SkullMeta {
                    /**
                     * Gets the owner of the skull.
                     */
                    public getOwner(): string;
                    /**
                     * Checks to see if the skull has an owner.
                     */
                    public hasOwner(): boolean;
                    /**
                     * Sets the owner of the skull.
                     */
                    public setOwner(owner: string): boolean;
                    /**
                     * Gets the owner of the skull.
                     */
                    public getOwningPlayer(): org.bukkit.OfflinePlayer;
                    /**
                     * Sets the owner of the skull.
                     * <p>
                     * Plugins should check that hasOwner() returns true before calling this
                     * plugin.
                     */
                    public setOwningPlayer(owner: org.bukkit.OfflinePlayer): boolean;
                    public clone(): org.bukkit.inventory.meta.SkullMeta;
                }
            }
        }
    }
}
