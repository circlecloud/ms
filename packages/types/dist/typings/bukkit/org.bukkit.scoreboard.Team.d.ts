declare namespace org {
    namespace bukkit {
        namespace scoreboard {
            // @ts-ignore
            interface Team {
                /**
                 * Gets the name of this Team
                 */
                // @ts-ignore
                 getName(): string;
                /**
                 * Gets the name displayed to entries for this team
                 */
                // @ts-ignore
                 getDisplayName(): string;
                /**
                 * Sets the name displayed to entries for this team
                 */
                // @ts-ignore
                 setDisplayName(displayName: string): void;
                /**
                 * Gets the prefix prepended to the display of entries on this team.
                 */
                // @ts-ignore
                 getPrefix(): string;
                /**
                 * Sets the prefix prepended to the display of entries on this team.
                 */
                // @ts-ignore
                 setPrefix(prefix: string): void;
                /**
                 * Gets the suffix appended to the display of entries on this team.
                 */
                // @ts-ignore
                 getSuffix(): string;
                /**
                 * Sets the suffix appended to the display of entries on this team.
                 */
                // @ts-ignore
                 setSuffix(suffix: string): void;
                /**
                 * Gets the color of the team.
                 * <br>
                 * This only sets the team outline, other occurrences of colors such as in
                 * names are handled by prefixes / suffixes.
                 */
                // @ts-ignore
                 getColor(): org.bukkit.ChatColor;
                /**
                 * Sets the color of the team.
                 * <br>
                 * This only sets the team outline, other occurrences of colors such as in
                 * names are handled by prefixes / suffixes.
                 */
                // @ts-ignore
                 setColor(color: org.bukkit.ChatColor): void;
                /**
                 * Gets the team friendly fire state
                 */
                // @ts-ignore
                 allowFriendlyFire(): boolean;
                /**
                 * Sets the team friendly fire state
                 */
                // @ts-ignore
                 setAllowFriendlyFire(enabled: boolean): void;
                /**
                 * Gets the team's ability to see {@link PotionEffectType#INVISIBILITY
                 * invisible} teammates.
                 */
                // @ts-ignore
                 canSeeFriendlyInvisibles(): boolean;
                /**
                 * Sets the team's ability to see {@link PotionEffectType#INVISIBILITY
                 * invisible} teammates.
                 */
                // @ts-ignore
                 setCanSeeFriendlyInvisibles(enabled: boolean): void;
                /**
                 * Gets the team's ability to see name tags
                 */
                // @ts-ignore
                 getNameTagVisibility(): org.bukkit.scoreboard.NameTagVisibility;
                /**
                 * Set's the team's ability to see name tags
                 */
                // @ts-ignore
                 setNameTagVisibility(visibility: org.bukkit.scoreboard.NameTagVisibility): void;
                /**
                 * Gets the Set of players on the team
                 */
                // @ts-ignore
                 getPlayers(): java.util.Set;
                /**
                 * Gets the Set of entries on the team
                 */
                // @ts-ignore
                 getEntries(): java.util.Set;
                /**
                 * Gets the size of the team
                 */
                // @ts-ignore
                 getSize(): number;
                /**
                 * Gets the Scoreboard to which this team is attached
                 */
                // @ts-ignore
                 getScoreboard(): org.bukkit.scoreboard.Scoreboard;
                /**
                 * This puts the specified player onto this team for the scoreboard.
                 * <p>
                 * This will remove the player from any other team on the scoreboard.
                 */
                // @ts-ignore
                 addPlayer(player: org.bukkit.OfflinePlayer): void;
                /**
                 * This puts the specified entry onto this team for the scoreboard.
                 * <p>
                 * This will remove the entry from any other team on the scoreboard.
                 */
                // @ts-ignore
                 addEntry(entry: string): void;
                /**
                 * Removes the player from this team.
                 */
                // @ts-ignore
                 removePlayer(player: org.bukkit.OfflinePlayer): boolean;
                /**
                 * Removes the entry from this team.
                 */
                // @ts-ignore
                 removeEntry(entry: string): boolean;
                /**
                 * Unregisters this team from the Scoreboard
                 */
                // @ts-ignore
                 unregister(): void;
                /**
                 * Checks to see if the specified player is a member of this team.
                 */
                // @ts-ignore
                 hasPlayer(player: org.bukkit.OfflinePlayer): boolean;
                /**
                 * Checks to see if the specified entry is a member of this team.
                 */
                // @ts-ignore
                 hasEntry(entry: string): boolean;
                /**
                 * Get an option for this team
                 */
                // @ts-ignore
                 getOption(option: org.bukkit.scoreboard.Team.Option): org.bukkit.scoreboard.Team.OptionStatus;
                /**
                 * Set an option for this team
                 */
                // @ts-ignore
                 setOption(option: org.bukkit.scoreboard.Team.Option, status: org.bukkit.scoreboard.Team.OptionStatus): void;
            }
        }
    }
}
