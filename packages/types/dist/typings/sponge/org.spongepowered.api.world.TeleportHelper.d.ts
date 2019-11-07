declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                // @ts-ignore
                interface TeleportHelper {
                    // @ts-ignore
                     DEFAULT_HEIGHT: number;
                    // @ts-ignore
                     DEFAULT_WIDTH: number;
                    // @ts-ignore
                     DEFAULT_FLOOR_CHECK_DISTANCE: number;
                    /**
                     * Gets the next safe {@link Location} around the given location.
                     * <p>Safe entails that the returned location will not be somewhere that
                     * would harm an {@link Entity}. This method will use the default height and
                     * width for a search area, and will check for a suitable floor up to two
                     * blocks below any selected block.</p>
                     * <p>It's possible the same location will be returned that was passed in.
                     * This means it was safe.</p>
                     */
                    // @ts-ignore
                     getSafeLocation(location: org.spongepowered.api.world.Location): java.util.Optional;
                    /**
                     * Gets the next safe {@link Location} around the given location with a
                     * given tolerance and search radius.
                     * <p>Safe entails that the returned location will not be somewhere that
                     * would harm an {@link Entity}.</p>
                     * <p>It's possible the same location will be returned that was passed in.
                     * This means it was safe.</p>
                     * <p>This method will check for a suitable floor up to two blocks below
                     * any selected block.</p>
                     * <p>This method will use the default {@link TeleportHelperFilter}</p>
                     */
                    // @ts-ignore
                     getSafeLocation(location: org.spongepowered.api.world.Location, height: number, width: number): java.util.Optional;
                    /**
                     * Gets the next safe {@link Location} around the given location with a
                     * given tolerance and search radius.
                     * <p>Safe entails that the returned location will not be somewhere that
                     * would harm an {@link Entity}.</p>
                     * <p>It's possible the same location will be returned that was passed in.
                     * This means it was safe.</p>
                     * <p>This method will use the default {@link TeleportHelperFilter} and will
                     * respect the blacklist.</p>
                     */
                    // @ts-ignore
                     getSafeLocation(location: org.spongepowered.api.world.Location, height: number, width: number, floorDistance: number): java.util.Optional;
                    /**
                     * Gets the next safe {@link Location} around the given location with a
                     * given tolerance and search radius.
                     * <p>Safe entails that the returned location will not be somewhere that
                     * would harm an {@link Entity}.</p>
                     * <p>It's possible the same location will be returned that was passed in.
                     * This means it was safe.</p>
                     */
                    // @ts-ignore
                     getSafeLocation(location: org.spongepowered.api.world.Location, height: number, width: number, floorDistance: number, filter: org.spongepowered.api.world.teleport.TeleportHelperFilter, additionalFilters: org.spongepowered.api.world.teleport.TeleportHelperFilter): java.util.Optional;
                    /**
                     * Gets the next safe {@link Location} around the given location with a
                     * given tolerance and search radius.
                     * <p>Safe entails that the returned location will not be somewhere that
                     * would harm an {@link Entity}.</p>
                     * <p>It's possible the same location will be returned that was passed in.
                     * This means it was safe.</p>
                     * <p>This method will use the defined blacklist, effectively an equivalent
                     * to adding {@link TeleportHelperFilters#CONFIG} to the filter set.</p>
                     */
                    // @ts-ignore
                     getSafeLocationWithBlacklist(location: org.spongepowered.api.world.Location, height: number, width: number, floorDistance: number, filters: org.spongepowered.api.world.teleport.TeleportHelperFilter): java.util.Optional;
                }
            }
        }
    }
}
