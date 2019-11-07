// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace user {
                    // @ts-ignore
                    interface UserStorageService {
                        /**
                         * Gets the data of a {@link User} by their unique id.
                         */
                        // @ts-ignore
                         get(uniqueId: java.util.UUID): java.util.Optional;
                        /**
                         * Gets the data of a {@link User} by their last known user name
                         * (case-insensitive).
                         * <p>To get the current name of a player, use the
                         * {@link GameProfileManager} service.</p>
                         */
                        // @ts-ignore
                         get(lastKnownName: string): java.util.Optional;
                        /**
                         * Gets the data of a {@link User} by their {@link GameProfile}.
                         */
                        // @ts-ignore
                         get(profile: org.spongepowered.api.profile.GameProfile): java.util.Optional;
                        /**
                         * Gets or creates a persistent {@link User} associated with the given
                         * {@link GameProfile}.
                         * <p>To obtain a {@link GameProfile}, use the {@link GameProfileManager}.
                         * </p>
                         */
                        // @ts-ignore
                         getOrCreate(profile: org.spongepowered.api.profile.GameProfile): org.spongepowered.api.entity.living.player.User;
                        /**
                         * Gets the collection of all {@link GameProfile}s with stored {@link User}
                         * data.
                         * <p>Note that this method is resource-intensive depending on the amount of
                         * stored data.</p>
                         * <p>Use {@link #get(GameProfile)} to get the {@link User} data
                         * corresponding to a {@link GameProfile}.</p>
                         */
                        // @ts-ignore
                         getAll(): java.util.Collection;
                        /**
                         * Deletes the data associated with a {@link User}.
                         * <p>This may not work if the user is logged in.</p>
                         */
                        // @ts-ignore
                         delete(profile: org.spongepowered.api.profile.GameProfile): boolean;
                        /**
                         * Deletes the data associated with a {@link User}.
                         * <p>This may not work if the user is logged in.</p>
                         */
                        // @ts-ignore
                         delete(user: org.spongepowered.api.entity.living.player.User): boolean;
                        /**
                         * Returns a collection of matching {@link GameProfile}s with stored
                         * {@link User} data whose last known user names start with the given string
                         * (case-insensitive).
                         * <p>Use {@link #get(GameProfile)} to get the {@link User} data
                         * corresponding to a {@link GameProfile}.</p>
                         */
                        // @ts-ignore
                         match(lastKnownName: string): java.util.Collection;
                    }
                }
            }
        }
    }
}
