declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace smelting {
                        // @ts-ignore
                         class SmeltingResult {
                            /**
                             * Creates a new {@link SmeltingResult}.
                             * <p>Note that this may be replaced with a static of method in the
                             * future.</p>
                             */
                            constructor(result: org.spongepowered.api.item.inventory.ItemStackSnapshot, experience: number)
                            /**
                             * This method should be used instead of the
                             * {@link SmeltingRecipe#getExemplaryResult()} method, as it customizes the
                             * result further depending on the specified ingredient
                             * {@link ItemStackSnapshot}. It is advised to use the output of
                             * {@link SmeltingRecipe#getExemplaryResult()}, modify it accordingly, and
                             * {@code return} it.
                             */
                            // @ts-ignore
                            public getResult(): org.spongepowered.api.item.inventory.ItemStackSnapshot;
                            /**
                             * Returns the amount of experience released after completing a recipe.
                             */
                            // @ts-ignore
                            public getExperience(): number;
                            // @ts-ignore
                            public equals(o: any): boolean;
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
