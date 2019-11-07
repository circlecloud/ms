declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace crafting {
                        // @ts-ignore
                        interface CraftingInventory extends org.spongepowered.api.item.inventory.type.OrderedInventory {
                            /**
                             * Gets the crafting matrix of this CraftingInventory.
                             */
                            // @ts-ignore
                             getCraftingGrid(): org.spongepowered.api.item.inventory.crafting.CraftingGridInventory;
                            /**
                             * Gets the result slot of this CraftingInventory.
                             */
                            // @ts-ignore
                             getResult(): org.spongepowered.api.item.inventory.crafting.CraftingOutput;
                            /**
                             * Retrieves the recipe formed by this CraftingInventory, if any.
                             */
                            // @ts-ignore
                             getRecipe(world: org.spongepowered.api.world.World): java.util.Optional;
                        }
                    }
                }
            }
        }
    }
}
