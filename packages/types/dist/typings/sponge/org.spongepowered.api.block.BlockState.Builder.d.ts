declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace BlockState {
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.data.ImmutableDataBuilder {
                        /**
                         * Sets the {@link BlockType} for the {@link BlockState} to build.
                         * <p>The {@link BlockType} is used for some pre-validation on addition of
                         * {@link DataManipulator}s through {@link #add(DataManipulator)}. It is
                         * important to understand that not all manipulators are compatible with
                         * all {@link BlockType}s.</p>
                         */
                        // @ts-ignore
                         blockType(blockType: org.spongepowered.api.block.BlockType): org.spongepowered.api.block.BlockState.Builder;
                    }
                }
            }
        }
    }
}
