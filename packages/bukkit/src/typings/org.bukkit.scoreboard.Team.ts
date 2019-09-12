declare namespace org {
    namespace bukkit {
        namespace scoreboard {
            class Team {
                /**
                 * Gets the name of this Team
                 */
                public getName(): string;
                /**
                 * Gets the name displayed to entries for this team
                 */
                public getDisplayName(): string;
                /**
                 * Sets the name displayed to entries for this team
                 */
                public setDisplayName(displayName: string): void;
                /**
                 * Gets the prefix prepended to the display of entries on this team.
                 */
                public getPrefix(): string;
                /**
                 * Sets the prefix prepended to the display of entries on this team.
                 */
                public setPrefix(prefix: string): void;
                /**
                 * Gets the suffix appended to the display of entries on this team.
                 */
                public getSuffix(): string;
                /**
                 * Sets the suffix appended to the display of entries on this team.
                 */
                public setSuffix(suffix: string): void;
                /**
                 * Gets the color of the team.
                 * <br>
                 * This only sets the team outline, other occurrences of colors such as in
                 * names are handled by prefixes / suffixes.
                 */
                public getColor(): org.bukkit.ChatColor;
                /**
                 * Sets the color of the team.
                 * <br>
                 * This only sets the team outline, other occurrences of colors such as in
                 * names are handled by prefixes / suffixes.
                 */
                public setColor(color: org.bukkit.ChatColor): void;
                /**
                 * Gets the team friendly fire state
                 */
                public allowFriendlyFire(): boolean;
                /**
                 * Sets the team friendly fire state
                 */
                public setAllowFriendlyFire(enabled: boolean): void;
                /**
                 * Gets the team's ability to see {@link PotionEffectType#INVISIBILITY
                 * invisible} teammates.
                 */
                public canSeeFriendlyInvisibles(): boolean;
                /**
                 * Sets the team's ability to see {@link PotionEffectType#INVISIBILITY
                 * invisible} teammates.
                 */
                public setCanSeeFriendlyInvisibles(enabled: boolean): void;
                /**
                 * Gets the team's ability to see name tags
                 */
                public getNameTagVisibility(): org.bukkit.scoreboard.NameTagVisibility;
                /**
                 * Set's the team's ability to see name tags
                 */
                public setNameTagVisibility(visibility: org.bukkit.scoreboard.NameTagVisibility): void;
                /**
                 * Gets the Set of players on the team
                 */
                public getPlayers(): any[] /*java.util.Set*/;
                /**
                 * Gets the Set of entries on the team
                 */
                public getEntries(): any[] /*java.util.Set*/;
                /**
                 * Gets the size of the team
                 */
                public getSize(): number;
                /**
                 * Gets the Scoreboard to which this team is attached
                 */
                public getScoreboard(): org.bukkit.scoreboard.Scoreboard;
                /**
                 * This puts the specified player onto this team for the scoreboard.
                 * <p>
                 * This will remove the player from any other team on the scoreboard.
                 */
                public addPlayer(player: org.bukkit.OfflinePlayer): void;
                /**
                 * This puts the specified entry onto this team for the scoreboard.
                 * <p>
                 * This will remove the entry from any other team on the scoreboard.
                 */
                public addEntry(entry: string): void;
                /**
                 * Removes the player from this team.
                 */
                public removePlayer(player: org.bukkit.OfflinePlayer): boolean;
                /**
                 * Removes the entry from this team.
                 */
                public removeEntry(entry: string): boolean;
                /**
                 * Unregisters this team from the Scoreboard
                 */
                public unregister(): void;
                /**
                 * Checks to see if the specified player is a member of this team.
                 */
                public hasPlayer(player: org.bukkit.OfflinePlayer): boolean;
                /**
                 * Checks to see if the specified entry is a member of this team.
                 */
                public hasEntry(entry: string): boolean;
                /**
                 * Get an option for this team
                 */
                public getOption(option: org.bukkit.scoreboard.Team.Option): org.bukkit.scoreboard.Team.OptionStatus;
                /**
                 * Set an option for this team
                 */
                public setOption(option: org.bukkit.scoreboard.Team.Option, status: org.bukkit.scoreboard.Team.OptionStatus): void;
            }
        }
    }
}
