declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace profile {
                // @ts-ignore
                interface GameProfileManager {
                    /**
                     * Creates a {@link GameProfile} from the provided ID and name.
                     */
                    // @ts-ignore
                     createProfile(uniqueId: java.util.UUID, name: string): org.spongepowered.api.profile.GameProfile;
                    /**
                     * Creates a {@link ProfileProperty} from the provided name, value,
                     * and optional signature.
                     */
                    // @ts-ignore
                     createProfileProperty(name: string, value: string, signature: string): org.spongepowered.api.profile.property.ProfileProperty;
                    /**
                     * Looks up a {@link GameProfile} by its unique ID.
                     * <p>This method checks the local profile cache before contacting the
                     * profile servers. Use {@link #get(UUID, boolean)} to disable the cache
                     * lookup.</p>
                     * <p>The returned {@link CompletableFuture} throws an {@link ExecutionException}
                     * caused by a {@link ProfileNotFoundException} if the profile does not exist or
                     * an {@link IOException} if a network error occurred.</p>
                     */
                    // @ts-ignore
                     get(uniqueId: java.util.UUID): java.util.concurrent.CompletableFuture;
                    /**
                     * Looks up a {@link GameProfile} by its user name (case-insensitive).
                     * <p>This method checks the local profile cache before contacting the
                     * profile servers. Use {@link #get(String, boolean)} to disable the cache
                     * lookup.</p>
                     * <p>The returned {@link CompletableFuture} throws an {@link ExecutionException}
                     * caused by a {@link ProfileNotFoundException} if the profile does not exist or
                     * an {@link IOException} if a network error occurred.</p>
                     */
                    // @ts-ignore
                     get(name: string): java.util.concurrent.CompletableFuture;
                    /**
                     * Looks up a {@link GameProfile} by its unique ID.
                     * <p>The returned {@link CompletableFuture} throws an {@link ExecutionException}
                     * caused by a {@link ProfileNotFoundException} if the profile does not exist or
                     * an {@link IOException} if a network error occurred.</p>
                     */
                    // @ts-ignore
                     get(uniqueId: java.util.UUID, useCache: boolean): java.util.concurrent.CompletableFuture;
                    /**
                     * Looks up a {@link GameProfile} by its user name (case-insensitive).
                     * <p>The returned {@link CompletableFuture} throws an {@link ExecutionException}
                     * caused by a {@link ProfileNotFoundException} if the profile does not exist or
                     * an {@link IOException} if a network error occurred.</p>
                     */
                    // @ts-ignore
                     get(name: string, useCache: boolean): java.util.concurrent.CompletableFuture;
                    /**
                     * Gets a collection of {@link GameProfile}s by their unique IDs.
                     * <p>The returned {@link CompletableFuture} throws an {@link ExecutionException}
                     * caused by a {@link ProfileNotFoundException} if the profile does not exist or
                     * an {@link IOException} if a network error occurred.</p>
                     */
                    // @ts-ignore
                     getAllById(uniqueIds: java.lang.Iterable, useCache: boolean): java.util.concurrent.CompletableFuture;
                    /**
                     * Gets a collection of {@link GameProfile}s by their user names
                     * (case-insensitive).
                     * <p>The returned {@link CompletableFuture} throws an {@link ExecutionException}
                     * caused by a {@link ProfileNotFoundException} if the profile does not exist or
                     * an {@link IOException} if a network error occurred.</p>
                     */
                    // @ts-ignore
                     getAllByName(names: java.lang.Iterable, useCache: boolean): java.util.concurrent.CompletableFuture;
                    /**
                     * Fills a {@link GameProfile}.
                     * <p>The returned {@link CompletableFuture} throws an {@link ExecutionException}
                     * caused by a {@link ProfileNotFoundException} if the profile does not exist or
                     * an {@link IOException} if a network error occurred.</p>
                     */
                    // @ts-ignore
                     fill(profile: org.spongepowered.api.profile.GameProfile): java.util.concurrent.CompletableFuture;
                    /**
                     * Fills a {@link GameProfile}.
                     * <p>The returned {@link CompletableFuture} throws an {@link ExecutionException}
                     * caused by a {@link ProfileNotFoundException} if the profile does not exist or
                     * an {@link IOException} if a network error occurred.</p>
                     */
                    // @ts-ignore
                     fill(profile: org.spongepowered.api.profile.GameProfile, signed: boolean): java.util.concurrent.CompletableFuture;
                    /**
                     * Fills a {@link GameProfile}.
                     * <p>The returned {@link CompletableFuture} throws an {@link ExecutionException}
                     * caused by a {@link ProfileNotFoundException} if the profile does not exist or
                     * an {@link IOException} if a network error occurred.</p>
                     */
                    // @ts-ignore
                     fill(profile: org.spongepowered.api.profile.GameProfile, signed: boolean, useCache: boolean): java.util.concurrent.CompletableFuture;
                    /**
                     * Gets the active {@link GameProfile} cache.
                     */
                    // @ts-ignore
                     getCache(): org.spongepowered.api.profile.GameProfileCache;
                    /**
                     * Sets the {@link GameProfile} cache.
                     * <p>To restore the original cache, pass the result of {@link #getDefaultCache()}.</p>
                     */
                    // @ts-ignore
                     setCache(cache: org.spongepowered.api.profile.GameProfileCache): void;
                    /**
                     * Gets the default cache.
                     */
                    // @ts-ignore
                     getDefaultCache(): org.spongepowered.api.profile.GameProfileCache;
                }
            }
        }
    }
}
