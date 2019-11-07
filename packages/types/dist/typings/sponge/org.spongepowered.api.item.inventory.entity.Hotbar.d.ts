declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace entity {
                        // @ts-ignore
                        interface Hotbar extends org.spongepowered.api.item.inventory.type.InventoryRow {
                            /**
                             * Gets the index of the slot that is currently selected by the Humanoid.
                             */
                            // @ts-ignore
                             getSelectedSlotIndex(): number;
                            /**
                             * Sets the slot selected by the Humanoid.
                             */
                            // @ts-ignore
                             setSelectedSlotIndex(index: number): void;
                        }
                    }
                }
            }
        }
    }
}
