// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    // @ts-ignore
                    interface Container extends org.spongepowered.api.item.inventory.type.Interactable {
                        /**
                         * Gets the current viewers looking at this Inventory.
                         */
                        // @ts-ignore
                         getViewers(): java.util.Set;
                        /**
                         * Checks for whether this Inventory currently has viewers.
                         */
                        // @ts-ignore
                         hasViewers(): boolean;
                        /**
                         * Shows this Inventory to the given viewer.
                         */
                        // @ts-ignore
                         open(viewer: org.spongepowered.api.entity.living.player.Player): void;
                        /**
                         * Stops showing this Inventory to the given viewer.
                         */
                        // @ts-ignore
                         close(viewer: org.spongepowered.api.entity.living.player.Player): void;
                        /**
                         * Returns whether given slot is part of the viewed inventories
                         * but not part of the viewers own inventory.
                         * <p>Examples for viewed inventory slots:</p>
                         * <p>All the slots of the opened chest and not the player grid below.</p>
                         * <p>The slots of the crafting grid in the opened player inventory.</p>
                         */
                        // @ts-ignore
                         isViewedSlot(slot: org.spongepowered.api.item.inventory.Slot): boolean;
                    }
                }
            }
        }
    }
}
