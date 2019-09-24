declare namespace org {
    namespace bukkit {
        namespace scoreboard {
            // @ts-ignore
            interface Objective {
                /**
                 * Gets the name of this Objective
                 */
                 getName(): string;
                /**
                 * Gets the name displayed to players for this objective
                 */
                 getDisplayName(): string;
                /**
                 * Sets the name displayed to players for this objective.
                 */
                 setDisplayName(displayName: string): void;
                /**
                 * Gets the criteria this objective tracks.
                 */
                 getCriteria(): string;
                /**
                 * Gets if the objective's scores can be modified directly by a plugin.
                 */
                 isModifiable(): boolean;
                /**
                 * Gets the scoreboard to which this objective is attached.
                 */
                 getScoreboard(): org.bukkit.scoreboard.Scoreboard;
                /**
                 * Unregisters this objective from the {@link Scoreboard scoreboard.}
                 */
                 unregister(): void;
                /**
                 * Sets this objective to display on the specified slot for the
                 * scoreboard, removing it from any other display slot.
                 */
                 setDisplaySlot(slot: org.bukkit.scoreboard.DisplaySlot): void;
                /**
                 * Gets the display slot this objective is displayed at.
                 */
                 getDisplaySlot(): org.bukkit.scoreboard.DisplaySlot;
                /**
                 * Sets manner in which this objective will be rendered.
                 */
                 setRenderType(renderType: org.bukkit.scoreboard.RenderType): void;
                /**
                 * Sets manner in which this objective will be rendered.
                 */
                 getRenderType(): org.bukkit.scoreboard.RenderType;
                /**
                 * Gets a player's Score for an Objective on this Scoreboard
                 */
                 getScore(player: org.bukkit.OfflinePlayer): org.bukkit.scoreboard.Score;
                /**
                 * Gets an entry's Score for an Objective on this Scoreboard.
                 */
                 getScore(entry: string): org.bukkit.scoreboard.Score;
            }
        }
    }
}
