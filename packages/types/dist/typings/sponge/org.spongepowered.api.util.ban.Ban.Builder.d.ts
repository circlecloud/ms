// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace ban {
                    namespace Ban {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                            /**
                             * Sets the profile to be banned.
                             * <p>This can only be done if the {@link BanType} has been set to {@link BanTypes#PROFILE}.</p>
                             */
                            // @ts-ignore
                             profile(profile: org.spongepowered.api.profile.GameProfile): org.spongepowered.api.util.ban.Ban.Builder;
                            /**
                             * Sets the IP address to be banned.
                             * <p>This can only be done if the {@link BanType} has been set to {@link BanTypes#IP}.</p>
                             */
                            // @ts-ignore
                             address(address: java.net.InetAddress): org.spongepowered.api.util.ban.Ban.Builder;
                            /**
                             * Sets the type of the ban.
                             */
                            // @ts-ignore
                             type(type: org.spongepowered.api.util.ban.BanType): org.spongepowered.api.util.ban.Ban.Builder;
                            /**
                             * Sets the reason for the ban.
                             * <p>If the specified reason is <code>null</code>, or not provided,
                             * then the reason will be be available on the created ban.</p>
                             */
                            // @ts-ignore
                             reason(reason: org.spongepowered.api.text.Text): org.spongepowered.api.util.ban.Ban.Builder;
                            /**
                             * Sets the date that the ban starts.
                             */
                            // @ts-ignore
                             startDate(instant: java.time.Instant): org.spongepowered.api.util.ban.Ban.Builder;
                            /**
                             * Sets the expiration date of the ban, or removes it.
                             */
                            // @ts-ignore
                             expirationDate(instant: java.time.Instant): org.spongepowered.api.util.ban.Ban.Builder;
                            /**
                             * Sets the source of the ban, or removes it if {@code null} is passed
                             * in.
                             */
                            // @ts-ignore
                             source(source: org.spongepowered.api.command.CommandSource): org.spongepowered.api.util.ban.Ban.Builder;
                            /**
                             * Sets the source of the ban as a {@link Text}, or removes it if
                             * {@code null} is passed in.
                             */
                            // @ts-ignore
                             source(source: org.spongepowered.api.text.Text): org.spongepowered.api.util.ban.Ban.Builder;
                            /**
                             * Creates a new Ban from this builder.
                             */
                            // @ts-ignore
                             build(): org.spongepowered.api.util.ban.Ban;
                        }
                    }
                }
            }
        }
    }
}
