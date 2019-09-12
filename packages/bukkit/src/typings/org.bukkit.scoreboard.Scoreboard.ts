declare namespace org {
    namespace bukkit {
        namespace scoreboard {
            class Scoreboard {
                /**
                 * Registers an Objective on this Scoreboard
                 */
                public registerNewObjective(name: string, criteria: string): org.bukkit.scoreboard.Objective;
                /**
                 * Registers an Objective on this Scoreboard
                 */
                public registerNewObjective(name: string, criteria: string, displayName: string): org.bukkit.scoreboard.Objective;
                /**
                 * Registers an Objective on this Scoreboard
                 */
                public registerNewObjective(name: string, criteria: string, displayName: string, renderType: org.bukkit.scoreboard.RenderType): org.bukkit.scoreboard.Objective;
                /**
                 * Gets an Objective on this Scoreboard by name
                 */
                public getObjective(name: string): org.bukkit.scoreboard.Objective;
                /**
                 * Gets all Objectives of a Criteria on the Scoreboard
                 */
                public getObjectivesByCriteria(criteria: string): any[] /*java.util.Set*/;
                /**
                 * Gets all Objectives on this Scoreboard
                 */
                public getObjectives(): any[] /*java.util.Set*/;
                /**
                 * Gets the Objective currently displayed in a DisplaySlot on this
                 * Scoreboard
                 */
                public getObjective(slot: org.bukkit.scoreboard.DisplaySlot): org.bukkit.scoreboard.Objective;
                /**
                 * Gets all scores for a player on this Scoreboard
                 */
                public getScores(player: org.bukkit.OfflinePlayer): any[] /*java.util.Set*/;
                /**
                 * Gets all scores for an entry on this Scoreboard
                 */
                public getScores(entry: string): any[] /*java.util.Set*/;
                /**
                 * Removes all scores for a player on this Scoreboard
                 */
                public resetScores(player: org.bukkit.OfflinePlayer): void;
                /**
                 * Removes all scores for an entry on this Scoreboard
                 */
                public resetScores(entry: string): void;
                /**
                 * Gets a player's Team on this Scoreboard
                 */
                public getPlayerTeam(player: org.bukkit.OfflinePlayer): org.bukkit.scoreboard.Team;
                /**
                 * Gets a entries Team on this Scoreboard
                 */
                public getEntryTeam(entry: string): org.bukkit.scoreboard.Team;
                /**
                 * Gets a Team by name on this Scoreboard
                 */
                public getTeam(teamName: string): org.bukkit.scoreboard.Team;
                /**
                 * Gets all teams on this Scoreboard
                 */
                public getTeams(): any[] /*java.util.Set*/;
                /**
                 * Registers a Team on this Scoreboard
                 */
                public registerNewTeam(name: string): org.bukkit.scoreboard.Team;
                /**
                 * Gets all players tracked by this Scoreboard
                 */
                public getPlayers(): any[] /*java.util.Set*/;
                /**
                 * Gets all entries tracked by this Scoreboard
                 */
                public getEntries(): any[] /*java.util.Set*/;
                /**
                 * Clears any objective in the specified slot.
                 */
                public clearSlot(slot: org.bukkit.scoreboard.DisplaySlot): void;
            }
        }
    }
}
