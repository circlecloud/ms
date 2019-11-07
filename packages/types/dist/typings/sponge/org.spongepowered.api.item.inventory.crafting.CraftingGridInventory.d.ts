// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace crafting {
                        // @ts-ignore
                        interface CraftingGridInventory extends org.spongepowered.api.item.inventory.type.GridInventory {
                            /**
                             * Retrieves the recipe formed by this CraftingGridInventory, if any.
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
