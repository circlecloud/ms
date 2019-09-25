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
                     add(profile: org.spongepowered.api.profile.GameProfile, expiry: any /*java.util.Date*/): boolean;
                    /**
                     * Add an entry to this cache, with an optional expiration date.
                     */
                    // @ts-ignore
                     add(profile: org.spongepowered.api.profile.GameProfile, expiry: any): boolean;
                    /**
                     * Add an entry to this cache, with an optional expiration date.
                     */
                    // @ts-ignore
                     add(profile: org.spongepowered.api.profile.GameProfile, overwrite: boolean, expiry: any /*java.util.Date*/): boolean;
                    /**
                     * Add an entry to this cache, with an optional expiration date.
                     */
                    // @ts-ignore
                     add(profile: org.spongepowered.api.profile.GameProfile, overwrite: boolean, expiry: any): boolean;
                    /**
                     * Remove an entry from this cache.
                     */
                    // @ts-ignore
                     remove(profile: org.spongepowered.api.profile.GameProfile): boolean;
                    /**
                     * Remove entries from this cache in bulk.
                     */
                    // @ts-ignore
                     remove(profiles: any): any[] /*java.util.Collection*/;
                    /**
                     * Clear all entries from this cache.
                     */
                    // @ts-ignore
                     clear(): void;
                    /**
                     * Gets a {@link GameProfile} from this cache by its unique id.
                     */
                    // @ts-ignore
                     getById(uniqueId: any): any;
                    /**
                     * Gets {@link GameProfile}s in bulk by their unique id.
                     */
                    // @ts-ignore
                     getByIds(uniqueIds: any): Map<any, any> /*java.util.Map*/;
                    /**
                     * Looks a {@link GameProfile} up by its unique id and
                     * loads it into this cache.
                     */
                    // @ts-ignore
                     lookupById(uniqueId: any): any;
                    /**
                     * Looks up {@link GameProfile}s in bulk by their unique id and
                     * loads them into this cache.
                     */
                    // @ts-ignore
                     lookupByIds(uniqueIds: any): Map<any, any> /*java.util.Map*/;
                    /**
                     * Gets a {@link GameProfile} from this cache by its id if available,
                     * or lookups the profile by its unique id.
                     */
                    // @ts-ignore
                     getOrLookupById(uniqueId: any): any;
                    /**
                     * Gets {@link GameProfile}s in bulk from this cache by when available,
                     * and lookups the profiles by their unique id when not cached.
                     */
                    // @ts-ignore
                     getOrLookupByIds(uniqueIds: any): Map<any, any> /*java.util.Map*/;
                    /**
                     * Gets a {@link GameProfile} from this cache by its name.
                     */
                    // @ts-ignore
                     getByName(name: string): any;
                    /**
                     * Gets {@link GameProfile}s in bulk by their name.
                     */
                    // @ts-ignore
                     getByNames(names: any): Map<any, any> /*java.util.Map*/;
                    /**
                     * Looks a {@link GameProfile} up by its name and
                     * loads it into this cache.
                     */
                    // @ts-ignore
                     lookupByName(name: string): any;
                    /**
                     * Looks up {@link GameProfile}s in bulk by their name  and
                     * loads them into this cache.
                     */
                    // @ts-ignore
                     lookupByNames(names: any): Map<any, any> /*java.util.Map*/;
                    /**
                     * Gets a {@link GameProfile} from this cache by its if available,
                     * or lookups the profile by its name.
                     */
                    // @ts-ignore
                     getOrLookupByName(name: string): any;
                    /**
                     * Gets {@link GameProfile}s in bulk from this cache by when available,
                     * and lookups the profiles by their unique id when not cached.
                     */
                    // @ts-ignore
                     getOrLookupByNames(names: any): Map<any, any> /*java.util.Map*/;
                    /**
                     * Fills a {@link GameProfile} from cached values.
                     */
                    // @ts-ignore
                     fillProfile(profile: org.spongepowered.api.profile.GameProfile): any;
                    /**
                     * Fills a {@link GameProfile} from cached values.
                     */
                    // @ts-ignore
                     fillProfile(profile: org.spongepowered.api.profile.GameProfile, signed: boolean): any;
                    /**
                     * Gets a collection of all cached {@link GameProfile}s.
                     */
                    // @ts-ignore
                     getProfiles(): any[] /*java.util.Collection*/;
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
                     match(name: string): any[] /*java.util.Collection*/;
                }
            }
        }
    }
}
