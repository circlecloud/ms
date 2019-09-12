declare namespace org {
    namespace bukkit {
        namespace scoreboard {
            class Score {
                /**
                 * Gets the OfflinePlayer being tracked by this Score
                 */
                public getPlayer(): org.bukkit.OfflinePlayer;
                /**
                 * Gets the entry being tracked by this Score
                 */
                public getEntry(): string;
                /**
                 * Gets the Objective being tracked by this Score
                 */
                public getObjective(): org.bukkit.scoreboard.Objective;
                /**
                 * Gets the current score
                 */
                public getScore(): number;
                /**
                 * Sets the current score.
                 */
                public setScore(score: number): void;
                /**
                 * Shows if this score has been set at any point in time.
                 */
                public isScoreSet(): boolean;
                /**
                 * Gets the scoreboard for the associated objective.
                 */
                public getScoreboard(): org.bukkit.scoreboard.Scoreboard;
            }
        }
    }
}
