declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        // @ts-ignore
                         class CraftingResult extends java.lang.Object {
                            /**
                             * Creates a new {@link CraftingResult}.
                             * <p>Note that this may be replaced with a static of method in the
                             * future.</p>
                             */
                            // @ts-ignore
                            constructor(result: org.spongepowered.api.item.inventory.ItemStackSnapshot, remainingItems: java.util.List)
                            /**
                             * This method should be used instead of the
                             * {@link CraftingRecipe#getExemplaryResult()} method, as it customizes the
                             * result further depending on the specified ingredient
                             * {@link ItemStackSnapshot}. It is advised to use the output of
                             * {@link CraftingRecipe#getExemplaryResult()}, modify it accordingly, and
                             * {@code return} it.
                             */
                            // @ts-ignore
                            public getResult(): org.spongepowered.api.item.inventory.ItemStackSnapshot;
                            /**
                             * Returns a list of {@link ItemStackSnapshot} to be set in the input
                             * {@link CraftingGridInventory}, contains {@link ItemStackSnapshot#NONE}s for
                             * slots which should be cleared.
                             */
                            // @ts-ignore
                            public getRemainingItems(): java.util.List;
                            // @ts-ignore
                            public equals(o: java.lang.Object): boolean;
                            // @ts-ignore
                            public hashCode(): number;
                            // @ts-ignore
                            public toString(): string;
                        }
                    }
                }
            }
        }
    }
}
