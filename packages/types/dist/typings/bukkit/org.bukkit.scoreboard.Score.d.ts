// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace scoreboard {
            // @ts-ignore
            interface Score {
                /**
                 * Gets the OfflinePlayer being tracked by this Score
                 */
                // @ts-ignore
                 getPlayer(): org.bukkit.OfflinePlayer;
                /**
                 * Gets the entry being tracked by this Score
                 */
                // @ts-ignore
                 getEntry(): string;
                /**
                 * Gets the Objective being tracked by this Score
                 */
                // @ts-ignore
                 getObjective(): org.bukkit.scoreboard.Objective;
                /**
                 * Gets the current score
                 */
                // @ts-ignore
                 getScore(): number;
                /**
                 * Sets the current score.
                 */
                // @ts-ignore
                 setScore(score: number): void;
                /**
                 * Shows if this score has been set at any point in time.
                 */
                // @ts-ignore
                 isScoreSet(): boolean;
                /**
                 * Gets the scoreboard for the associated objective.
                 */
                // @ts-ignore
                 getScoreboard(): org.bukkit.scoreboard.Scoreboard;
            }
        }
    }
}
