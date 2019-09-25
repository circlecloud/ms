declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                // @ts-ignore
                interface ChunkRegenerateFlag {
                    /**
                     * Gets whether this flag defines that a chunk should be created if it does
                     * not exist.
                     */
                    // @ts-ignore
                     create(): boolean;
                    /**
                     * Gets whether this flag will preserve entities in chunks that are
                     * regenerated.
                     * Note: It is up to the implementation to decide whether this will
                     * include moving entities to safe locations.
                     */
                    // @ts-ignore
                     entities(): boolean;
                    /**
                     * Gets the equivalent {@link ChunkRegenerateFlag} of this flag with all
                     * other flags while having the desired {@code create} as defined by the
                     * parameter.
                     */
                    // @ts-ignore
                     withCreate(create: boolean): org.spongepowered.api.world.ChunkRegenerateFlag;
                    /**
                     * Gets the equivalent {@link ChunkRegenerateFlag} of this flag with all
                     * other flags while having the desired {@code entities} as defined by the
                     * parameter.
                     */
                    // @ts-ignore
                     withEntities(entities: boolean): org.spongepowered.api.world.ChunkRegenerateFlag;
                    /**
                     * Gets the equivalent {@link ChunkRegenerateFlag} of this flag with the
                     * {@code true}s set for this flag and the provided {@code flag}, such that
                     * only if both flags have the same {@code true} flags set will persist.
                     * <p>For example, if this flag has {@link #create()} and the incoming flag
                     * has {@link #create()} returning {@code true}, the resulting flag will
                     * have {@link #create()} return {@code true} as well. The inverse is also
                     * true. If either has differing flags for any of the above methods, the
                     * resulting flag will have a {@code false} value.</p>
                     */
                    // @ts-ignore
                     andFlag(flag: org.spongepowered.api.world.ChunkRegenerateFlag): org.spongepowered.api.world.ChunkRegenerateFlag;
                    /**
                     * Gets the equivalent {@link ChunkRegenerateFlag} of this flag with the
                     * {@code true}s set for this flag and the provided {@code flag}, such that
                     * only if both flags have the same {@code true} flags set will persist.
                     * <p>For example, if this flag has {@link #create()} and the incoming flag
                     * has {@link #create()} returning {@code true}, the resulting flag will
                     * have {@link #create()} return {@code true} as well. The inverse is also
                     * true. If either has differing flags for any of the above methods, the
                     * resulting flag will have a {@code false} value.</p>
                     */
                    // @ts-ignore
                     andNotFlag(flag: org.spongepowered.api.world.ChunkRegenerateFlag): org.spongepowered.api.world.ChunkRegenerateFlag;
                }
            }
        }
    }
}
