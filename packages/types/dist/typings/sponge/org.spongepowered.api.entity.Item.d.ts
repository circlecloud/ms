declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                // @ts-ignore
                interface Item extends org.spongepowered.api.entity.Entity {
                    /**
                     * Gets a copy of the current {@link RepresentedItemData} this item is
                     * representing.
                     */
                    // @ts-ignore
                     getItemData(): org.spongepowered.api.data.manipulator.mutable.RepresentedItemData;
                    /**
                     * Gets the {@link Value} for the represented {@link ItemStack} as
                     * an {@link ItemStackSnapshot}.
                     */
                    // @ts-ignore
                     item(): org.spongepowered.api.data.value.mutable.Value;
                    /**
                     * Gets the {@link ItemType} represented by this {@link Item} entity.
                     */
                    // @ts-ignore
                     getItemType(): org.spongepowered.api.item.ItemType;
                }
            }
        }
    }
}
