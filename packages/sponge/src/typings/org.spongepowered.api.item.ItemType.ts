declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                // @ts-ignore
                interface ItemType extends org.spongepowered.api.CatalogType, org.spongepowered.api.text.translation.Translatable, org.spongepowered.api.GameDictionary.Entry {
                    /**
                     * Gets the corresponding {@link BlockType} of this item if one exists.
                     */
                    // @ts-ignore
                     getBlock(): any;
                    /**
                     * Gets the id of this item.
                     * <p>Ex. Minecraft registers a golden carrot as
                     * "minecraft:golden_carrot".</p>
                     */
                    // @ts-ignore
                     getName(): string;
                    /**
                     * Gets the default maximum quantity for
                     * {@link ItemStack}s of this item.
                     */
                    // @ts-ignore
                     getMaxStackQuantity(): number;
                    /**
                     * Gets the default {@link Property} of this {@link ItemType}.
                     * <p>While item stacks do have properties, generally, there is an
                     * intrinsic default property for many item types. However, it should be
                     * considered that when mods are introducing their own custom items, they
                     * too could introduce different item properties based on various data on
                     * the item stack. The default properties retrieved from here should merely
                     * be considered as a default, not as a definitive property.</p>
                     */
                    // @ts-ignore
                     getDefaultProperty(propertyClass: any): any;
                    // @ts-ignore
                     getType(): org.spongepowered.api.item.ItemType;
                    // @ts-ignore
                     matches(stack: org.spongepowered.api.item.inventory.ItemStack): boolean;
                    // @ts-ignore
                     isSpecific(): boolean;
                    // @ts-ignore
                     getTemplate(): org.spongepowered.api.item.inventory.ItemStackSnapshot;
                }
            }
        }
    }
}
