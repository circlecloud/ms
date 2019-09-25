declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                // @ts-ignore
                interface BlockType extends org.spongepowered.api.CatalogType, org.spongepowered.api.text.translation.Translatable, org.spongepowered.api.data.property.PropertyHolder {
                    /**
                     * Return the internal ID for the block.
                     * <p>The format of the internal ID may vary between implementations
                     * but in Minecraft, it follows the format of {@code domain:type}, an
                     * example being {@code minecraft:stone}.</p>
                     */
                    // @ts-ignore
                     getName(): string;
                    /**
                     * Return the default state for this block.
                     */
                    // @ts-ignore
                     getDefaultState(): org.spongepowered.api.block.BlockState;
                    /**
                     * Gets a {@link Collection} of all {@link BlockState}s for this
                     * {@link BlockType}.
                     */
                    // @ts-ignore
                     getAllBlockStates(): any[] /*java.util.Collection*/;
                    /**
                     * Return the {@link ItemType} that represents this block.
                     */
                    // @ts-ignore
                     getItem(): any;
                    /**
                     * Gets if this BlockType is set to receive random block ticks.
                     * <p>Random block ticks are most commonly used for growth of plants.</p>
                     */
                    // @ts-ignore
                     getTickRandomly(): boolean;
                    /**
                     * Sets if the BlockType should receive random block ticks.
                     * <p>Random block ticks are most commonly used for growth of plants.</p>
                     */
                    // @ts-ignore
                     setTickRandomly(tickRandomly: boolean): void;
                    /**
                     * Gets an immutable {@link Collection} of all applicable
                     * {@link BlockTrait}s for this {@link BlockType}.
                     */
                    // @ts-ignore
                     getTraits(): any[] /*java.util.Collection*/;
                    /**
                     * Attempts to retrieve the {@link BlockTrait} instance associated with
                     * this {@link BlockState}s {@link BlockType} by string id. If there is no
                     * {@link BlockTrait} available, {@link Optional#empty()} is returned.
                     */
                    // @ts-ignore
                     getTrait(blockTrait: string): any;
                    /**
                     * Gets the {@link BlockSoundGroup} for this block.
                     */
                    // @ts-ignore
                     getSoundGroup(): org.spongepowered.api.block.BlockSoundGroup;
                }
            }
        }
    }
}
