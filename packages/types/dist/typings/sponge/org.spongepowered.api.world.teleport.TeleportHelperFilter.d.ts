declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace teleport {
                    // @ts-ignore
                    interface TeleportHelperFilter extends org.spongepowered.api.CatalogType {
                        /**
                         * Tests whether the location in question is valid, regardless of whether
                         * the block is safe or not. This is <em>only</em> intended to be used by
                         * kernels that blacklist/whitelist certain locations, and any block checks
                         * should be performed by {@link #isSafeFloorMaterial(BlockState)} and
                         * {@link #isSafeBodyMaterial(BlockState)} instead, to obtain the full
                         * benefits of the {@link TeleportHelper}.
                         * <ul>
                         * <li>Returning {@link Tristate#UNDEFINED} denotes that the filter
                         * does not regard the location as valid or otherwise, and that the
                         * helper should determine if the location is suitable using the
                         * {@link #isSafeBodyMaterial(BlockState)} and
                         * {@link #isSafeFloorMaterial(BlockState)} methods. Implementations
                         * should generally return this result.</li>
                         * <li>Returning {@link Tristate#TRUE} marks the location as valid and
                         * will causes the parent {@link TeleportHelper} to return this
                         * location. No checks using {@link #isSafeBodyMaterial(BlockState)}
                         * and {@link #isSafeFloorMaterial(BlockState)} will be performed.</li>
                         * <li>Returning {@link Tristate#FALSE} marks the location as invalid
                         * and causes the parent {@link TeleportHelper} to move onto the next
                         * block to check, regardless of whether it would have otherwise been
                         * marked as safe.</li>
                         * </ul>
                         * <p>This method has a default implementation of always returning
                         * {@link Tristate#UNDEFINED}, that is, such a filter is not location
                         * specific.</p>
                         * <p>This will be called before any other check on the target location is
                         * performed, this is the first check performed when investigating a
                         * location.</p>
                         */
                        // @ts-ignore
                         isValidLocation(world: org.spongepowered.api.world.World, position: any /*Vector3i*/): org.spongepowered.api.util.Tristate;
                        /**
                         * Tests whether a {@link BlockState} should be considered a safe block
                         * to land on.
                         */
                        // @ts-ignore
                         isSafeFloorMaterial(blockState: org.spongepowered.api.block.BlockState): boolean;
                        /**
                         * Tests whether a {@link BlockState} should be considered a safe block
                         * for the body to be inside of.
                         * <p>Generally, you want this to be a passable block!</p>
                         */
                        // @ts-ignore
                         isSafeBodyMaterial(blockState: org.spongepowered.api.block.BlockState): boolean;
                    }
                }
            }
        }
    }
}
