declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace whitelist {
                    // @ts-ignore
                    interface WhitelistService {
                        /**
                         * Gets the collection of {@link GameProfile}s present on this whitelist.
                         */
                        // @ts-ignore
                         getWhitelistedProfiles(): java.util.Collection;
                        /**
                         * Gets whether the specified {@link GameProfile} is present on this
                         * whitelist.
                         */
                        // @ts-ignore
                         isWhitelisted(profile: org.spongepowered.api.profile.GameProfile): boolean;
                        /**
                         * Adds the specified {@link GameProfile} to this whitelist.
                         */
                        // @ts-ignore
                         addProfile(profile: org.spongepowered.api.profile.GameProfile): boolean;
                        /**
                         * Removes the specified {@link GameProfile} from this whitelist, if present.
                         */
                        // @ts-ignore
                         removeProfile(profile: org.spongepowered.api.profile.GameProfile): boolean;
                    }
                }
            }
        }
    }
}
