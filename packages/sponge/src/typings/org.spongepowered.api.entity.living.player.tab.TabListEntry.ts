declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace player {
                        namespace tab {
                            // @ts-ignore
                            interface TabListEntry {
                                /**
                                 * Creates a new {@link Builder} to create {@link TabListEntry}s.
                                 */
                                // @ts-ignore
                                 builder(): org.spongepowered.api.entity.living.player.tab.TabListEntry.Builder;
                                /**
                                 * Gets the {@link TabList} that owns this entry.
                                 */
                                // @ts-ignore
                                 getList(): org.spongepowered.api.entity.living.player.tab.TabList;
                                /**
                                 * Gets the {@link GameProfile} associated with this entry.
                                 */
                                // @ts-ignore
                                 getProfile(): org.spongepowered.api.profile.GameProfile;
                                /**
                                 * Gets this entry's display name.
                                 */
                                // @ts-ignore
                                 getDisplayName(): any;
                                /**
                                 * Sets this entry's display name.
                                 */
                                // @ts-ignore
                                 setDisplayName(displayName: org.spongepowered.api.text.Text): org.spongepowered.api.entity.living.player.tab.TabListEntry;
                                /**
                                 * Gets the latency for this entry.
                                 */
                                // @ts-ignore
                                 getLatency(): number;
                                /**
                                 * Sets the latency for this entry.
                                 * <p>The client displays connection bars based on this number.</p>
                                 * <table summary="">
                                 * <thead>
                                 * <tr>
                                 * <th>Bars</th>
                                 * <th>Time</th>
                                 * </tr>
                                 * </thead>
                                 * <tbody>
                                 * <tr>
                                 * <td>0</td>
                                 * <td>Less than 0</td>
                                 * </tr>
                                 * <tr>
                                 * <td>1</td>
                                 * <td>1000+</td>
                                 * </tr>
                                 * <tr>
                                 * <td>2</td>
                                 * <td>600 - 999</td>
                                 * </tr>
                                 * <tr>
                                 * <td>3</td>
                                 * <td>300 - 599</td>
                                 * </tr>
                                 * <tr>
                                 * <td>4</td>
                                 * <td>150 - 299</td>
                                 * </tr>
                                 * <tr>
                                 * <td>5</td>
                                 * <td>0 - 149</td>
                                 * </tr>
                                 * </tbody>
                                 * </table>
                                 */
                                // @ts-ignore
                                 setLatency(latency: number): org.spongepowered.api.entity.living.player.tab.TabListEntry;
                                /**
                                 * Gets the {@link GameMode} this entry is in.
                                 */
                                // @ts-ignore
                                 getGameMode(): org.spongepowered.api.entity.living.player.gamemode.GameMode;
                                /**
                                 * Sets this entry's gamemode.
                                 * <p>When using {@link GameModes#SPECTATOR} and this entry is of an
                                 * online {@link Player}, the player will have "spectator effects". Such
                                 * effects can include invisibility and noclip.</p>
                                 */
                                // @ts-ignore
                                 setGameMode(gameMode: org.spongepowered.api.entity.living.player.gamemode.GameMode): org.spongepowered.api.entity.living.player.tab.TabListEntry;
                            }
                        }
                    }
                }
            }
        }
    }
}
