declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                // @ts-ignore
                interface Title {
                    /**
                     * Set the title to send to the player.
                     */
                    // @ts-ignore
                     title(text: BaseComponent): any /*net.md_5.bungee.api.Title*/;
                    /**
                     * Set the title to send to the player.
                     */
                    // @ts-ignore
                     title(text: BaseComponent): any /*net.md_5.bungee.api.Title*/;
                    /**
                     * Set the subtitle to send to the player.
                     */
                    // @ts-ignore
                     subTitle(text: BaseComponent): any /*net.md_5.bungee.api.Title*/;
                    /**
                     * Set the subtitle to send to the player.
                     */
                    // @ts-ignore
                     subTitle(text: BaseComponent): any /*net.md_5.bungee.api.Title*/;
                    /**
                     * Set the duration in ticks of the fade in effect of the title. Once this
                     * period of time is over the title will stay for the amount of time
                     * specified in {@link #stay(int)}. The default value for the official
                     * Minecraft version is 20 (1 second).
                     */
                    // @ts-ignore
                     fadeIn(ticks: number): any /*net.md_5.bungee.api.Title*/;
                    /**
                     * Set the duration in ticks how long the title should stay on the screen.
                     * Once this period of time is over the title will fade out using the
                     * duration specified in {@link #fadeOut(int)}. The default value for the
                     * official Minecraft version is 60 (3 seconds).
                     */
                    // @ts-ignore
                     stay(ticks: number): any /*net.md_5.bungee.api.Title*/;
                    /**
                     * Set the duration in ticks of the fade out effect of the title. The
                     * default value for the official Minecraft version is 20 (1 second).
                     */
                    // @ts-ignore
                     fadeOut(ticks: number): any /*net.md_5.bungee.api.Title*/;
                    /**
                     * Remove the currently displayed title from the player's screen. This will
                     * keep the currently used display times and will only remove the title.
                     */
                    // @ts-ignore
                     clear(): any /*net.md_5.bungee.api.Title*/;
                    /**
                     * Remove the currently displayed title from the player's screen and set the
                     * configuration back to the default values.
                     */
                    // @ts-ignore
                     reset(): any /*net.md_5.bungee.api.Title*/;
                    /**
                     * Send this title configuration to the specified player. This is the same
                     * as calling {@link ProxiedPlayer#sendTitle(Title)}.
                     */
                    // @ts-ignore
                     send(player: any /*net.md_5.bungee.api.connection.ProxiedPlayer*/): any /*net.md_5.bungee.api.Title*/;
                }
            }
        }
    }
}
