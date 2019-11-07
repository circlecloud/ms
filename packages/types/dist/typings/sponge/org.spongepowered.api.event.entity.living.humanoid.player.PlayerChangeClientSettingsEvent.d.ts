// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace living {
                        namespace humanoid {
                            namespace player {
                                // @ts-ignore
                                interface PlayerChangeClientSettingsEvent extends org.spongepowered.api.event.entity.living.humanoid.player.TargetPlayerEvent {
                                    /**
                                     * Gets the new locale of the player.
                                     */
                                    // @ts-ignore
                                     getLocale(): java.util.Locale;
                                    /**
                                     * Gets the new view distance of the player. This value represents the
                                     * radius in unit chunks.
                                     */
                                    // @ts-ignore
                                     getViewDistance(): number;
                                    /**
                                     * Gets the new chat visibility setting of the player.
                                     */
                                    // @ts-ignore
                                     getChatVisibility(): org.spongepowered.api.text.chat.ChatVisibility;
                                    /**
                                     * Gets the new value for whether the player has colors enabled in chat.
                                     */
                                    // @ts-ignore
                                     isChatColorsEnabled(): boolean;
                                    /**
                                     * Gets the new skin part's displayed.
                                     */
                                    // @ts-ignore
                                     getDisplayedSkinParts(): java.util.Set;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
