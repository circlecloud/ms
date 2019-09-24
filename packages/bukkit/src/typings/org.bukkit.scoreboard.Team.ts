declare namespace org {
    namespace bukkit {
        namespace scoreboard {
            // @ts-ignore
            interface Team {
                /**
                 * Gets the name of this Team
                 */
                 getName(): string;
                /**
                 * Gets the name displayed to entries for this team
                 */
                 getDisplayName(): string;
                /**
                 * Sets the name displayed to entries for this team
                 */
                 setDisplayName(displayName: string): void;
                /**
                 * Gets the prefix prepended to the display of entries on this team.
                 */
                 getPrefix(): string;
                /**
                 * Sets the prefix prepended to the display of entries on this team.
                 */
                 setPrefix(prefix: string): void;
                /**
                 * Gets the suffix appended to the display of entries on this team.
                 */
                 getSuffix(): string;
                /**
                 * Sets the suffix appended to the display of entries on this team.
                 */
                 setSuffix(suffix: string): void;
                /**
                 * Gets the color of the team.
                 * <br>
                 * This only sets the team outline, other occurrences of colors such as in
                 * names are handled by prefixes / suffixes.
                 */
                 getColor(): org.bukkit.ChatColor;
                /**
                 * Sets the color of the team.
                 * <br>
                 * This only sets the team outline, other occurrences of colors such as in
                 * names are handled by prefixes / suffixes.
                 */
                 setColor(color: org.bukkit.ChatColor): void;
                /**
                 * Gets the team friendly fire state
                 */
                 allowFriendlyFire(): boolean;
                /**
                 * Sets the team friendly fire state
                 */
                 setAllowFriendlyFire(enabled: boolean): void;
                /**
                 * Gets the team's ability to see {@link PotionEffectType#INVISIBILITY
                 * invisible} teammates.
                 */
                 canSeeFriendlyInvisibles(): boolean;
                /**
                 * Sets the team's ability to see {@link PotionEffectType#INVISIBILITY
                 * invisible} teammates.
                 */
                 setCanSeeFriendlyInvisibles(enabled: boolean): void;
                /**
                 * Gets the team's ability to see name tags
                 */
                 getNameTagVisibility(): org.bukkit.scoreboard.NameTagVisibility;
                /**
                 * Set's the team's ability to see name tags
                 */
                 setNameTagVisibility(visibility: org.bukkit.scoreboard.NameTagVisibility): void;
                /**
                 * Gets the Set of players on the team
                 */
                 getPlayers(): any[] /*java.util.Set*/;
                /**
                 * Gets the Set of entries on the team
                 */
                 getEntries(): any[] /*java.util.Set*/;
                /**
                 * Gets the size of the team
                 */
                 getSize(): number;
                /**
                 * Gets the Scoreboard to which this team is attached
                 */
                 getScoreboard(): org.bukkit.scoreboard.Scoreboard;
                /**
                 * This puts the specified player onto this team for the scoreboard.
                 * <p>
                 * This will remove the player from any other team on the scoreboard.
                 */
                 addPlayer(player: org.bukkit.OfflinePlayer): void;
                /**
                 * This puts the specified entry onto this team for the scoreboard.
                 * <p>
                 * This will remove the entry from any other team on the scoreboard.
                 */
                 addEntry(entry: string): void;
                /**
                 * Removes the player from this team.
                 */
                 removePlayer(player: org.bukkit.OfflinePlayer): boolean;
                /**
                 * Removes the entry from this team.
                 */
                 removeEntry(entry: string): boolean;
                /**
                 * Unregisters this team from the Scoreboard
                 */
                 unregister(): void;
                /**
                 * Checks to see if the specified player is a member of this team.
                 */
                 hasPlayer(player: org.bukkit.OfflinePlayer): boolean;
                /**
                 * Checks to see if the specified entry is a member of this team.
                 */
                 hasEntry(entry: string): boolean;
                /**
                 * Get an option for this team
                 */
                 getOption(option: org.bukkit.scoreboard.Team.Option): org.bukkit.scoreboard.Team.OptionStatus;
                /**
                 * Set an option for this team
                 */
                 setOption(option: org.bukkit.scoreboard.Team.Option, status: org.bukkit.scoreboard.Team.OptionStatus): void;
            }
        }
    }
}
