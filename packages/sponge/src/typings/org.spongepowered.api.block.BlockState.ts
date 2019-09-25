declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                // @ts-ignore
                interface BlockState extends org.spongepowered.api.data.ImmutableDataHolder, org.spongepowered.api.data.property.DirectionRelativePropertyHolder, org.spongepowered.api.CatalogType {
                    /**
                     * Creates a new {@link Builder} for building {@link BlockState}s.
                     */
                    // @ts-ignore
                     builder(): org.spongepowered.api.block.BlockState.Builder;
                    /**
                     * Constructs a new {@link MatcherBuilder} to construct a {@link StateMatcher}.
                     */
                    // @ts-ignore
                     matcher(type: org.spongepowered.api.block.BlockType): org.spongepowered.api.block.BlockState.MatcherBuilder;
                    /**
                     * Gets the base type of block.
                     * <p>The type does not include block data such as the contents of
                     * inventories.</p>
                     */
                    // @ts-ignore
                     getType(): org.spongepowered.api.block.BlockType;
                    /**
                     * Applies extended properties for the current @{link BlockType} if any to
                     * the current {@link BlockState}. This usually is gathered from surrounding
                     * {@link BlockState}'s.
                     * <p>Note: This should only be called for live {@link BlockState}'s at
                     * a specific {@link Location} for accurate results.</p>
                     * <p>
                     * Examples of some extended properties are:
                     * </p>
                     * <ul>
                     * <li>snow on podzul dirt block</li>
                     * <li>occupied status for beds</li>
                     * <li>fence connections</li>
                     * </ul>
                     */
                    // @ts-ignore
                     withExtendedProperties(location: org.spongepowered.api.world.Location): org.spongepowered.api.block.BlockState;
                    /**
                     * Gets the associated {@link BlockState} with the cycled
                     * {@link BaseValue}. Note that only {@link Cycleable} values can be
                     * cycled. To change a particular {@link Key}'ed {@link Value}, usage
                     * of the {@link BlockState#with(Key, Object)} is recommended.
                     */
                    // @ts-ignore
                     cycleValue(key: org.spongepowered.api.data.key.Key): org.spongepowered.api.block.BlockState;
                    /**
                     * Creates a new {@link BlockSnapshot} with this current {@link BlockState}
                     * at the desired {@link Location}. If the {@link Location} has the same
                     * {@link BlockState}, and the {@link BlockType} can house a
                     * {@link TileEntity}, the data from the tile entity may be included in the
                     * returned  {@link BlockSnapshot}.
                     */
                    // @ts-ignore
                     snapshotFor(location: org.spongepowered.api.world.Location): org.spongepowered.api.block.BlockSnapshot;
                    /**
                     * Gets the {@link Comparable} value for the specific {@link BlockTrait}
                     * such that if the {@link BlockState} does not support the
                     * {@link BlockTrait}, {@link Optional#empty()} is returned.
                     */
                    // @ts-ignore
                     getTraitValue(blockTrait: org.spongepowered.api.block.trait.BlockTrait): any;
                    /**
                     * Attempts to retrieve the {@link BlockTrait} instance associated with
                     * this {@link BlockState}s {@link BlockType} by string id. If there is no
                     * {@link BlockTrait} available, {@link Optional#empty()} is returned.
                     */
                    // @ts-ignore
                     getTrait(blockTrait: string): any;
                    /**
                     * Gets the {@link BlockState} with the appropriate value for the given
                     * {@link BlockTrait}. If the {@link BlockTrait} is not supported,
                     * {@link Optional#empty()} is returned. If the object is not either
                     * an instance contained in {@link BlockTrait#getPossibleValues()} or
                     * an instance {@link Object#toString()}, {@link Optional#empty()} may be
                     * returned.
                     */
                    // @ts-ignore
                     withTrait(trait: org.spongepowered.api.block.trait.BlockTrait, value: any): any;
                    /**
                     * Gets an immutable {@link Collection} of all applicable
                     * {@link BlockTrait}s for this {@link BlockState}.
                     */
                    // @ts-ignore
                     getTraits(): any[] /*java.util.Collection*/;
                    /**
                     * Gets an immutable {@link Collection} of all the values for all
                     * {@link BlockTrait}s for this {@link BlockState}.
                     */
                    // @ts-ignore
                     getTraitValues(): any[] /*java.util.Collection*/;
                    /**
                     * Gets an immutable or unmodifiable {@link Map} of the known {@link BlockTrait}s
                     * to their current values for this {@link BlockState}.
                     */
                    // @ts-ignore
                     getTraitMap(): Map<any, any> /*java.util.Map*/;
                }
            }
        }
    }
}
