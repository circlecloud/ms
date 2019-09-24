declare namespace org {
    namespace bukkit {
        namespace scoreboard {
            // @ts-ignore
            interface Score {
                /**
                 * Gets the OfflinePlayer being tracked by this Score
                 */
                 getPlayer(): org.bukkit.OfflinePlayer;
                /**
                 * Gets the entry being tracked by this Score
                 */
                 getEntry(): string;
                /**
                 * Gets the Objective being tracked by this Score
                 */
                 getObjective(): org.bukkit.scoreboard.Objective;
                /**
                 * Gets the current score
                 */
                 getScore(): number;
                /**
                 * Sets the current score.
                 */
                 setScore(score: number): void;
                /**
                 * Shows if this score has been set at any point in time.
                 */
                 isScoreSet(): boolean;
                /**
                 * Gets the scoreboard for the associated objective.
                 */
                 getScoreboard(): org.bukkit.scoreboard.Scoreboard;
            }
        }
    }
}
