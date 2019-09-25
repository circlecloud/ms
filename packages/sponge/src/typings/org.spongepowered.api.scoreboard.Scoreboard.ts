declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scoreboard {
                // @ts-ignore
                interface Scoreboard {
                    /**
                     * Creates a new {@link Builder} to build a {@link Scoreboard}.
                     */
                    // @ts-ignore
                     builder(): org.spongepowered.api.scoreboard.Scoreboard.Builder;
                    /**
                     * Gets an {@link Objective} on this scoreboard by name, if it exists.
                     */
                    // @ts-ignore
                     getObjective(name: string): any;
                    /**
                     * Gets the {@link Objective} currently displayed in a {@link DisplaySlot} on this
                     * scoreboard, if one is present.
                     */
                    // @ts-ignore
                     getObjective(slot: org.spongepowered.api.scoreboard.displayslot.DisplaySlot): any;
                    /**
                     * Adds the specified {@link Objective} to this scoreboard.
                     */
                    // @ts-ignore
                     addObjective(objective: org.spongepowered.api.scoreboard.objective.Objective): void;
                    /**
                     * Sets the specified {@link Objective} in the specified {@link DisplaySlot}.
                     * <p>If the {@link Objective} is <code>null</code>, then the specified
                     * {@link DisplaySlot} will be cleared.</p>
                     */
                    // @ts-ignore
                     updateDisplaySlot(objective: org.spongepowered.api.scoreboard.objective.Objective, displaySlot: org.spongepowered.api.scoreboard.displayslot.DisplaySlot): void;
                    /**
                     * Clears any {@link Objective} in the specified slot.
                     */
                    // @ts-ignore
                     clearSlot(slot: org.spongepowered.api.scoreboard.displayslot.DisplaySlot): void;
                    /**
                     * Gets all {@link Objective}s of a Criteria on this scoreboard.
                     */
                    // @ts-ignore
                     getObjectivesByCriteria(criteria: org.spongepowered.api.scoreboard.critieria.Criterion): any[] /*java.util.Set*/;
                    /**
                     * Gets all {@link Objective}s on this scoreboard.
                     */
                    // @ts-ignore
                     getObjectives(): any[] /*java.util.Set*/;
                    /**
                     * Removes the specified {@link Objective} from this scoreboard.
                     */
                    // @ts-ignore
                     removeObjective(objective: org.spongepowered.api.scoreboard.objective.Objective): void;
                    /**
                     * Gets all the scores on this scoreboard, across all objectives.
                     * <p>If the same {@link Score} has been added to multiple objectives,
                     * it will only appear once in the set.</p>
                     */
                    // @ts-ignore
                     getScores(): any[] /*java.util.Set*/;
                    /**
                     * Gets all scores with the specified name on this scoreboard,
                     * across all objectives.
                     * <p>If the same {@link Score} has been added to multiple objectives,
                     * it will only appear once in the set.</p>
                     */
                    // @ts-ignore
                     getScores(name: org.spongepowered.api.text.Text): any[] /*java.util.Set*/;
                    /**
                     * Removes all scores with the specified name on this scoreboard,
                     * across all objectives.
                     */
                    // @ts-ignore
                     removeScores(name: org.spongepowered.api.text.Text): void;
                    /**
                     * Gets a {@link Team} by name on this scoreboard.
                     */
                    // @ts-ignore
                     getTeam(teamName: string): any;
                    /**
                     * Registers the specified {@link Team} to this scoreboard.
                     */
                    // @ts-ignore
                     registerTeam(team: org.spongepowered.api.scoreboard.Team): void;
                    /**
                     * Gets all the {@link Team}s on this scoreboard.
                     */
                    // @ts-ignore
                     getTeams(): any[] /*java.util.Set*/;
                    /**
                     * Gets a {@link Text} member's {@link Team} on this scoreboard.
                     */
                    // @ts-ignore
                     getMemberTeam(member: org.spongepowered.api.text.Text): any;
                }
            }
        }
    }
}
