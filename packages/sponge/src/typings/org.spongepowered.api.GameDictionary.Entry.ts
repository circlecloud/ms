declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace GameDictionary {
                // @ts-ignore
                interface Entry {
                    /**
                     * Returns the type of item contained by this entry.
                     */
                    // @ts-ignore
                     getType(): org.spongepowered.api.item.ItemType;
                    /**
                     * Tests whether the provided item stack matches this entry's
                     * specifications.
                     */
                    // @ts-ignore
                     matches(stack: org.spongepowered.api.item.inventory.ItemStack): boolean;
                    /**
                     * Returns whether this entry checks against the item type and extra
                     * data associated with the stack. If this returns {@code true}, any
                     * {@link ItemStack} whose {@link ItemType} and manipulators match
                     * those of the {@linkplain #getTemplate() template} will {@linkplain
                     * #matches(ItemStack) match} this entry; however, not all manipulators
                     * present in the template are required to match those in the item
                     * stack to cause them to match. If this returns {@code false}, any
                     * item stack whose {@link ItemType} matches that of the entry will
                     * match this entry.
                     */
                    // @ts-ignore
                     isSpecific(): boolean;
                    /**
                     * Returns an item stack snapshot for plugins to inspect this entry.
                     * The returned snapshot will {@linkplain #matches(ItemStack) match}
                     * this entry. The size of the snapshot will always be 1.
                     */
                    // @ts-ignore
                     getTemplate(): org.spongepowered.api.item.inventory.ItemStackSnapshot;
                }
            }
        }
    }
}
