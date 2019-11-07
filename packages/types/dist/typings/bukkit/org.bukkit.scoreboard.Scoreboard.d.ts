// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace scoreboard {
            // @ts-ignore
            interface Scoreboard {
                /**
                 * Registers an Objective on this Scoreboard
                 */
                // @ts-ignore
                 registerNewObjective(name: string, criteria: string): org.bukkit.scoreboard.Objective;
                /**
                 * Registers an Objective on this Scoreboard
                 */
                // @ts-ignore
                 registerNewObjective(name: string, criteria: string, displayName: string): org.bukkit.scoreboard.Objective;
                /**
                 * Registers an Objective on this Scoreboard
                 */
                // @ts-ignore
                 registerNewObjective(name: string, criteria: string, displayName: string, renderType: org.bukkit.scoreboard.RenderType): org.bukkit.scoreboard.Objective;
                /**
                 * Gets an Objective on this Scoreboard by name
                 */
                // @ts-ignore
                 getObjective(name: string): org.bukkit.scoreboard.Objective;
                /**
                 * Gets all Objectives of a Criteria on the Scoreboard
                 */
                // @ts-ignore
                 getObjectivesByCriteria(criteria: string): java.util.Set;
                /**
                 * Gets all Objectives on this Scoreboard
                 */
                // @ts-ignore
                 getObjectives(): java.util.Set;
                /**
                 * Gets the Objective currently displayed in a DisplaySlot on this
                 * Scoreboard
                 */
                // @ts-ignore
                 getObjective(slot: org.bukkit.scoreboard.DisplaySlot): org.bukkit.scoreboard.Objective;
                /**
                 * Gets all scores for a player on this Scoreboard
                 */
                // @ts-ignore
                 getScores(player: org.bukkit.OfflinePlayer): java.util.Set;
                /**
                 * Gets all scores for an entry on this Scoreboard
                 */
                // @ts-ignore
                 getScores(entry: string): java.util.Set;
                /**
                 * Removes all scores for a player on this Scoreboard
                 */
                // @ts-ignore
                 resetScores(player: org.bukkit.OfflinePlayer): void;
                /**
                 * Removes all scores for an entry on this Scoreboard
                 */
                // @ts-ignore
                 resetScores(entry: string): void;
                /**
                 * Gets a player's Team on this Scoreboard
                 */
                // @ts-ignore
                 getPlayerTeam(player: org.bukkit.OfflinePlayer): org.bukkit.scoreboard.Team;
                /**
                 * Gets a entries Team on this Scoreboard
                 */
                // @ts-ignore
                 getEntryTeam(entry: string): org.bukkit.scoreboard.Team;
                /**
                 * Gets a Team by name on this Scoreboard
                 */
                // @ts-ignore
                 getTeam(teamName: string): org.bukkit.scoreboard.Team;
                /**
                 * Gets all teams on this Scoreboard
                 */
                // @ts-ignore
                 getTeams(): java.util.Set;
                /**
                 * Registers a Team on this Scoreboard
                 */
                // @ts-ignore
                 registerNewTeam(name: string): org.bukkit.scoreboard.Team;
                /**
                 * Gets all players tracked by this Scoreboard
                 */
                // @ts-ignore
                 getPlayers(): java.util.Set;
                /**
                 * Gets all entries tracked by this Scoreboard
                 */
                // @ts-ignore
                 getEntries(): java.util.Set;
                /**
                 * Clears any objective in the specified slot.
                 */
                // @ts-ignore
                 clearSlot(slot: org.bukkit.scoreboard.DisplaySlot): void;
            }
        }
    }
}
