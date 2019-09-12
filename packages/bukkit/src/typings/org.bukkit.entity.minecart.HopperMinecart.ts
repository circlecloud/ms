declare namespace org {
    namespace bukkit {
        namespace entity {
            namespace minecart {
                class HopperMinecart {
                    /**
                     * Checks whether or not this Minecart will pick up
                     * items into its inventory.
                     */
                    public isEnabled(): boolean;
                    /**
                     * Sets whether this Minecart will pick up items.
                     */
                    public setEnabled(enabled: boolean): void;
                }
            }
        }
    }
}
