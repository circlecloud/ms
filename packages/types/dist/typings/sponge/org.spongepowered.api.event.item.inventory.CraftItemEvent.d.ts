// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        // @ts-ignore
                        interface CraftItemEvent extends org.spongepowered.api.event.item.inventory.ChangeInventoryEvent {
                            /**
                             * Returns the crafting inventory.
                             * <p>This includes the crafting grid and one output slot</p>
                             */
                            // @ts-ignore
                             getCraftingInventory(): org.spongepowered.api.item.inventory.crafting.CraftingInventory;
                            /**
                             * Returns the {@link Recipe} used for crafting
                             */
                            // @ts-ignore
                             getRecipe(): java.util.Optional;
                        }
                    }
                }
            }
        }
    }
}
