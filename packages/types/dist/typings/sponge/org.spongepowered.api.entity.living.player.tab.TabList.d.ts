// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace player {
                        namespace tab {
                            // @ts-ignore
                            interface TabList {
                                /**
                                 * Gets the associated {@link Player} with this {@link TabList}.
                                 */
                                // @ts-ignore
                                 getPlayer(): org.spongepowered.api.entity.living.player.Player;
                                /**
                                 * Gets this list's header.
                                 */
                                // @ts-ignore
                                 getHeader(): java.util.Optional;
                                /**
                                 * Sets this list's header.
                                 * <p>When {@code null} is passed, an empty {@link Text} will
                                 * be sent.</p>
                                 */
                                // @ts-ignore
                                 setHeader(header: org.spongepowered.api.text.Text): org.spongepowered.api.entity.living.player.tab.TabList;
                                /**
                                 * Gets this list's footer.
                                 */
                                // @ts-ignore
                                 getFooter(): java.util.Optional;
                                /**
                                 * Sets this list's footer.
                                 * <p>When {@code null} is passed, an empty {@link Text} will
                                 * be sent.</p>
                                 */
                                // @ts-ignore
                                 setFooter(footer: org.spongepowered.api.text.Text): org.spongepowered.api.entity.living.player.tab.TabList;
                                /**
                                 * Sets this list's header and footer.
                                 * <p>When {@code null} is passed, an empty {@link Text} will
                                 * be sent.</p>
                                 */
                                // @ts-ignore
                                 setHeaderAndFooter(header: org.spongepowered.api.text.Text, footer: org.spongepowered.api.text.Text): org.spongepowered.api.entity.living.player.tab.TabList;
                                /**
                                 * Gets the entries on the list.
                                 * <p>The returned collection should be immutable.</p>
                                 */
                                // @ts-ignore
                                 getEntries(): java.util.Collection;
                                /**
                                 * Gets a {@link TabListEntry} matching the specified unique id.
                                 */
                                // @ts-ignore
                                 getEntry(uniqueId: java.util.UUID): java.util.Optional;
                                /**
                                 * Adds an entry to the list.
                                 */
                                // @ts-ignore
                                 addEntry(entry: org.spongepowered.api.entity.living.player.tab.TabListEntry): org.spongepowered.api.entity.living.player.tab.TabList;
                                /**
                                 * Removes an entry from the list.
                                 * <p>Note that if this is used on a player, but they remain visible
                                 * in-game, their skin will not work.</p>
                                 */
                                // @ts-ignore
                                 removeEntry(uniqueId: java.util.UUID): java.util.Optional;
                            }
                        }
                    }
                }
            }
        }
    }
}
