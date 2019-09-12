declare namespace org {
    namespace bukkit {
        namespace scoreboard {
            class Objective {
                /**
                 * Gets the name of this Objective
                 */
                public getName(): string;
                /**
                 * Gets the name displayed to players for this objective
                 */
                public getDisplayName(): string;
                /**
                 * Sets the name displayed to players for this objective.
                 */
                public setDisplayName(displayName: string): void;
                /**
                 * Gets the criteria this objective tracks.
                 */
                public getCriteria(): string;
                /**
                 * Gets if the objective's scores can be modified directly by a plugin.
                 */
                public isModifiable(): boolean;
                /**
                 * Gets the scoreboard to which this objective is attached.
                 */
                public getScoreboard(): org.bukkit.scoreboard.Scoreboard;
                /**
                 * Unregisters this objective from the {@link Scoreboard scoreboard.}
                 */
                public unregister(): void;
                /**
                 * Sets this objective to display on the specified slot for the
                 * scoreboard, removing it from any other display slot.
                 */
                public setDisplaySlot(slot: org.bukkit.scoreboard.DisplaySlot): void;
                /**
                 * Gets the display slot this objective is displayed at.
                 */
                public getDisplaySlot(): org.bukkit.scoreboard.DisplaySlot;
                /**
                 * Sets manner in which this objective will be rendered.
                 */
                public setRenderType(renderType: org.bukkit.scoreboard.RenderType): void;
                /**
                 * Sets manner in which this objective will be rendered.
                 */
                public getRenderType(): org.bukkit.scoreboard.RenderType;
                /**
                 * Gets a player's Score for an Objective on this Scoreboard
                 */
                public getScore(player: org.bukkit.OfflinePlayer): org.bukkit.scoreboard.Score;
                /**
                 * Gets an entry's Score for an Objective on this Scoreboard.
                 */
                public getScore(entry: string): org.bukkit.scoreboard.Score;
            }
        }
    }
}
