declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace ban {
                    // @ts-ignore
                    interface BanService {
                        /**
                         * Gets all bans registered.
                         */
                        // @ts-ignore
                         getBans(): any[] /*java.util.Collection*/;
                        /**
                         * Gets all {@link GameProfile} bans registered.
                         */
                        // @ts-ignore
                         getProfileBans(): any[] /*java.util.Collection*/;
                        /**
                         * Gets all IP bans registered.
                         */
                        // @ts-ignore
                         getIpBans(): any[] /*java.util.Collection*/;
                        /**
                         * Gets the ban for the given {@link GameProfile}, if available.
                         */
                        // @ts-ignore
                         getBanFor(profile: org.spongepowered.api.profile.GameProfile): any;
                        /**
                         * Gets the ban for the given address, if available.
                         */
                        // @ts-ignore
                         getBanFor(address: any): any;
                        /**
                         * Checks if a {@link GameProfile} has a ban.
                         */
                        // @ts-ignore
                         isBanned(profile: org.spongepowered.api.profile.GameProfile): boolean;
                        /**
                         * Checks if an IP has a ban.
                         */
                        // @ts-ignore
                         isBanned(address: any): boolean;
                        /**
                         * Pardons a profile, or removes its ban, if present.
                         */
                        // @ts-ignore
                         pardon(profile: org.spongepowered.api.profile.GameProfile): boolean;
                        /**
                         * Pardons an IP address, or removes its ban, if present.
                         */
                        // @ts-ignore
                         pardon(address: any): boolean;
                        /**
                         * Removes a ban.
                         */
                        // @ts-ignore
                         removeBan(ban: org.spongepowered.api.util.ban.Ban): boolean;
                        /**
                         * Adds a ban.
                         * <p>If the GameProfile or IP address of the ban already has a ban set,
                         * the passed in ban will replace the existing ban.</p>
                         */
                        // @ts-ignore
                         addBan(ban: org.spongepowered.api.util.ban.Ban): any;
                        /**
                         * Checks if the specified ban is present.
                         */
                        // @ts-ignore
                         hasBan(ban: org.spongepowered.api.util.ban.Ban): boolean;
                    }
                }
            }
        }
    }
}
