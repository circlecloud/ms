declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                // @ts-ignore
                interface TreeLayout {
                    /**
                     * Gets the {@link AdvancementTree} this layout is assigned to.
                     */
                    // @ts-ignore
                     getTree(): org.spongepowered.api.advancement.AdvancementTree;
                    /**
                     * Gets all the {@link TreeLayoutElement}s that are
                     * present in this layout.
                     */
                    // @ts-ignore
                     getElements(): any[] /*java.util.Collection*/;
                    /**
                     * Gets the {@link TreeLayoutElement} for the specified {@link Advancement},
                     * {@link Optional#empty()} will be returned if the advancement is not present
                     * in the tree or if there is no {@link DisplayInfo} present.
                     */
                    // @ts-ignore
                     getElement(advancement: org.spongepowered.api.advancement.Advancement): any;
                }
            }
        }
    }
}
