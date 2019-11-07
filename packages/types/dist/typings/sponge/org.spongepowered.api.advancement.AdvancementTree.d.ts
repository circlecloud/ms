// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                // @ts-ignore
                interface AdvancementTree extends org.spongepowered.api.CatalogType {
                    /**
                     * Creates a new {@link Builder} to create {@link AdvancementTree}s.
                     */
                    // @ts-ignore
                     builder(): org.spongepowered.api.advancement.AdvancementTree.Builder;
                    /**
                     * Gets the root {@link Advancement}.
                     */
                    // @ts-ignore
                     getRootAdvancement(): org.spongepowered.api.advancement.Advancement;
                    /**
                     * Gets the background texture of this tree.
                     */
                    // @ts-ignore
                     getBackgroundPath(): string;
                }
            }
        }
    }
}
