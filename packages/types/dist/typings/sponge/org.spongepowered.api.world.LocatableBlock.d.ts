// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                // @ts-ignore
                interface LocatableBlock extends org.spongepowered.api.data.ImmutableDataHolder, org.spongepowered.api.world.Locatable {
                    /**
                     * Creates a new {@link Builder} for creating new {@link LocatableBlock}s.
                     */
                    // @ts-ignore
                     builder(): org.spongepowered.api.world.LocatableBlock.Builder;
                    /**
                     * Gets the {@link BlockState} for this locatable block.
                     */
                    // @ts-ignore
                     getBlockState(): org.spongepowered.api.block.BlockState;
                    /**
                     * Gets the {@link Vector3i position} for this locatable block.
                     */
                    // @ts-ignore
                     getPosition(): any /*Vector3i*/;
                }
            }
        }
    }
}
