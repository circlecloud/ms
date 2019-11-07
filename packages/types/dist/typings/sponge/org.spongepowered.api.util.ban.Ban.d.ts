declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace ban {
                    // @ts-ignore
                    interface Ban {
                        /**
                         * Creates a new Builder.
                         */
                        // @ts-ignore
                         builder(): org.spongepowered.api.util.ban.Ban.Builder;
                        /**
                         * Creates an indefinite ban on a profile.
                         */
                        // @ts-ignore
                         of(profile: org.spongepowered.api.profile.GameProfile): org.spongepowered.api.util.ban.Ban;
                        /**
                         * Creates an indefinite ban with a reason on a profile.
                         */
                        // @ts-ignore
                         of(profile: org.spongepowered.api.profile.GameProfile, reason: org.spongepowered.api.text.Text): org.spongepowered.api.util.ban.Ban;
                        /**
                         * Gets the type of this ban.
                         */
                        // @ts-ignore
                         getType(): org.spongepowered.api.util.ban.BanType;
                        /**
                         * Gets the reason for the ban, if available.
                         */
                        // @ts-ignore
                         getReason(): java.util.Optional;
                        /**
                         * Gets the creation date of the ban.
                         * <p>Note that this {@link Instant} has no effect on whether or not a ban is
                         * active. Any ban for which {@link BanService#hasBan(Ban)} returns
                         * <code>true</code> will be used (when checking if a player can join,
                         * for example), regardless of its creation date.</p>
                         */
                        // @ts-ignore
                         getCreationDate(): java.time.Instant;
                        /**
                         * Gets the source that created this ban, if available.
                         * <p>Depending on the implementation, the returned {@link Text}
                         * may represent a {@link CommandSource}. {@link #getBanCommandSource()} can be
                         * used to attempt to convert the source to a {@link CommandSource}.</p>
                         */
                        // @ts-ignore
                         getBanSource(): java.util.Optional;
                        /**
                         * Gets the source that created this ban in {@link CommandSource} form,
                         * if available.
                         * <p>Depending on the implementation, it may not be possible to determine
                         * the {@link CommandSource} responsible for this ban. Because of this,
                         * it is recommended to check {@link #getBanSource()} if this method
                         * returns {@link Optional#empty()}.</p>
                         */
                        // @ts-ignore
                         getBanCommandSource(): java.util.Optional;
                        /**
                         * Gets the expiration date of this ban, if available.
                         */
                        // @ts-ignore
                         getExpirationDate(): java.util.Optional;
                        /**
                         * Gets whether this ban is indefinitely long, e.g. has no expiration date.
                         */
                        // @ts-ignore
                         isIndefinite(): boolean;
                    }
                }
            }
        }
    }
}
