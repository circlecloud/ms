declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace profile {
                // @ts-ignore
                interface GameProfileCache {
                    /**
                     * Add an entry to this cache.
                     */
                    // @ts-ignore
                     add(profile: org.spongepowered.api.profile.GameProfile): boolean;
                    /**
                     * Add an entry to this cache, with an optional expiration date.
                     */
                    // @ts-ignore
                     add(profile: org.spongepowered.api.profile.GameProfile, expiry: java.util.Date): boolean;
                    /**
                     * Add an entry to this cache, with an optional expiration date.
                     */
                    // @ts-ignore
                     add(profile: org.spongepowered.api.profile.GameProfile, expiry: java.time.Instant): boolean;
                    /**
                     * Add an entry to this cache, with an optional expiration date.
                     */
                    // @ts-ignore
                     add(profile: org.spongepowered.api.profile.GameProfile, overwrite: boolean, expiry: java.util.Date): boolean;
                    /**
                     * Add an entry to this cache, with an optional expiration date.
                     */
                    // @ts-ignore
                     add(profile: org.spongepowered.api.profile.GameProfile, overwrite: boolean, expiry: java.time.Instant): boolean;
                    /**
                     * Remove an entry from this cache.
                     */
                    // @ts-ignore
                     remove(profile: org.spongepowered.api.profile.GameProfile): boolean;
                    /**
                     * Remove entries from this cache in bulk.
                     */
                    // @ts-ignore
                     remove(profiles: java.lang.Iterable): java.util.Collection;
                    /**
                     * Clear all entries from this cache.
                     */
                    // @ts-ignore
                     clear(): void;
                    /**
                     * Gets a {@link GameProfile} from this cache by its unique id.
                     */
                    // @ts-ignore
                     getById(uniqueId: java.util.UUID): java.util.Optional;
                    /**
                     * Gets {@link GameProfile}s in bulk by their unique id.
                     */
                    // @ts-ignore
                     getByIds(uniqueIds: java.lang.Iterable): java.util.Map;
                    /**
                     * Looks a {@link GameProfile} up by its unique id and
                     * loads it into this cache.
                     */
                    // @ts-ignore
                     lookupById(uniqueId: java.util.UUID): java.util.Optional;
                    /**
                     * Looks up {@link GameProfile}s in bulk by their unique id and
                     * loads them into this cache.
                     */
                    // @ts-ignore
                     lookupByIds(uniqueIds: java.lang.Iterable): java.util.Map;
                    /**
                     * Gets a {@link GameProfile} from this cache by its id if available,
                     * or lookups the profile by its unique id.
                     */
                    // @ts-ignore
                     getOrLookupById(uniqueId: java.util.UUID): java.util.Optional;
                    /**
                     * Gets {@link GameProfile}s in bulk from this cache by when available,
                     * and lookups the profiles by their unique id when not cached.
                     */
                    // @ts-ignore
                     getOrLookupByIds(uniqueIds: java.lang.Iterable): java.util.Map;
                    /**
                     * Gets a {@link GameProfile} from this cache by its name.
                     */
                    // @ts-ignore
                     getByName(name: string): java.util.Optional;
                    /**
                     * Gets {@link GameProfile}s in bulk by their name.
                     */
                    // @ts-ignore
                     getByNames(names: java.lang.Iterable): java.util.Map;
                    /**
                     * Looks a {@link GameProfile} up by its name and
                     * loads it into this cache.
                     */
                    // @ts-ignore
                     lookupByName(name: string): java.util.Optional;
                    /**
                     * Looks up {@link GameProfile}s in bulk by their name  and
                     * loads them into this cache.
                     */
                    // @ts-ignore
                     lookupByNames(names: java.lang.Iterable): java.util.Map;
                    /**
                     * Gets a {@link GameProfile} from this cache by its if available,
                     * or lookups the profile by its name.
                     */
                    // @ts-ignore
                     getOrLookupByName(name: string): java.util.Optional;
                    /**
                     * Gets {@link GameProfile}s in bulk from this cache by when available,
                     * and lookups the profiles by their unique id when not cached.
                     */
                    // @ts-ignore
                     getOrLookupByNames(names: java.lang.Iterable): java.util.Map;
                    /**
                     * Fills a {@link GameProfile} from cached values.
                     */
                    // @ts-ignore
                     fillProfile(profile: org.spongepowered.api.profile.GameProfile): java.util.Optional;
                    /**
                     * Fills a {@link GameProfile} from cached values.
                     */
                    // @ts-ignore
                     fillProfile(profile: org.spongepowered.api.profile.GameProfile, signed: boolean): java.util.Optional;
                    /**
                     * Gets a collection of all cached {@link GameProfile}s.
                     */
                    // @ts-ignore
                     getProfiles(): java.util.Collection;
                    /**
                     * Returns a collection of matching cached {@link GameProfile}s whose last
                     * known names start with the given string (case-insensitive).
                     * <p>This collection may also contain profiles of players who never played
                     * on the server!</p>
                     * <p>Use {@link UserStorageService#match(String)} for a collection that
                     * only contains {@link GameProfile}s with attached {@link User} data.</p>
                     * <p>This method only searches the local cache, so the data may not be up
                     * to date.</p>
                     */
                    // @ts-ignore
                     match(name: string): java.util.Collection;
                }
            }
        }
    }
}
