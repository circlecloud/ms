declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace entity {
                        // @ts-ignore
                        interface MainPlayerInventory extends org.spongepowered.api.item.inventory.type.GridInventory {
                            /**
                             * Gets the hotbar of the player.
                             */
                            // @ts-ignore
                             getHotbar(): org.spongepowered.api.item.inventory.entity.Hotbar;
                            /**
                             * Gets the grid of the player's main inventory.
                             */
                            // @ts-ignore
                             getGrid(): org.spongepowered.api.item.inventory.type.GridInventory;
                        }
                    }
                }
            }
        }
    }
}
