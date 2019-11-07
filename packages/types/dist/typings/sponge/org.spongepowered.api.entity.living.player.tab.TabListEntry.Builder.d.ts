declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace player {
                        namespace tab {
                            namespace TabListEntry {
                                // @ts-ignore
                                interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                                    /**
                                     * Sets the {@link TabList} this entry is owned by.
                                     */
                                    // @ts-ignore
                                     list(list: org.spongepowered.api.entity.living.player.tab.TabList): org.spongepowered.api.entity.living.player.tab.TabListEntry.Builder;
                                    /**
                                     * Sets the profile for entries created by this builder.
                                     */
                                    // @ts-ignore
                                     profile(profile: org.spongepowered.api.profile.GameProfile): org.spongepowered.api.entity.living.player.tab.TabListEntry.Builder;
                                    /**
                                     * Sets the display name for entries created by this builder.
                                     */
                                    // @ts-ignore
                                     displayName(displayName: org.spongepowered.api.text.Text): org.spongepowered.api.entity.living.player.tab.TabListEntry.Builder;
                                    /**
                                     * Sets the latency for entries created by this builder.
                                     */
                                    // @ts-ignore
                                     latency(latency: number): org.spongepowered.api.entity.living.player.tab.TabListEntry.Builder;
                                    /**
                                     * Sets the gamemode for entries created by this builder.
                                     */
                                    // @ts-ignore
                                     gameMode(gameMode: org.spongepowered.api.entity.living.player.gamemode.GameMode): org.spongepowered.api.entity.living.player.tab.TabListEntry.Builder;
                                    /**
                                     * Builds an entry based off the values of this builder.
                                     */
                                    // @ts-ignore
                                     build(): org.spongepowered.api.entity.living.player.tab.TabListEntry;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
