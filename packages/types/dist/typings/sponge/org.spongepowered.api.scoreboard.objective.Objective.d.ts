// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scoreboard {
                namespace objective {
                    // @ts-ignore
                    interface Objective {
                        /**
                         * Creates a new {@link Builder} to build a {@link Objective}.
                         */
                        // @ts-ignore
                         builder(): org.spongepowered.api.scoreboard.objective.Objective.Builder;
                        /**
                         * Gets the name of this Objective.
                         */
                        // @ts-ignore
                         getName(): string;
                        /**
                         * Gets the name displayed to players.
                         */
                        // @ts-ignore
                         getDisplayName(): org.spongepowered.api.text.Text;
                        /**
                         * Sets the name displayed to players.
                         */
                        // @ts-ignore
                         setDisplayName(displayName: org.spongepowered.api.text.Text): void;
                        /**
                         * Gets the criterion for this objective.
                         */
                        // @ts-ignore
                         getCriterion(): org.spongepowered.api.scoreboard.critieria.Criterion;
                        /**
                         * Gets the {@link ObjectiveDisplayMode} used to display this objective.
                         */
                        // @ts-ignore
                         getDisplayMode(): org.spongepowered.api.scoreboard.objective.displaymode.ObjectiveDisplayMode;
                        /**
                         * Sets the {@link ObjectiveDisplayMode} used to display this objective.
                         */
                        // @ts-ignore
                         setDisplayMode(displayMode: org.spongepowered.api.scoreboard.objective.displaymode.ObjectiveDisplayMode): void;
                        /**
                         * Gets the set of {@link Score}s for this objective.
                         */
                        // @ts-ignore
                         getScores(): java.util.Map;
                        /**
                         * Returns whether this objective has a {@link Score} with the given name.
                         */
                        // @ts-ignore
                         hasScore(name: org.spongepowered.api.text.Text): boolean;
                        /**
                         * Adds the specified {@link Score} to this objective.
                         */
                        // @ts-ignore
                         addScore(score: org.spongepowered.api.scoreboard.Score): void;
                        /**
                         * Gets an entry's {@link Score} for this objective, if it exists.
                         */
                        // @ts-ignore
                         getScore(name: org.spongepowered.api.text.Text): java.util.Optional;
                        /**
                         * Gets an entry's {@link Score} for this objective.
                         * <p>If the {@link Score} does not exist, it will be created.</p>
                         */
                        // @ts-ignore
                         getOrCreateScore(name: org.spongepowered.api.text.Text): org.spongepowered.api.scoreboard.Score;
                        /**
                         * Removes the specified {@link Score} from this objective, if present.
                         */
                        // @ts-ignore
                         removeScore(score: org.spongepowered.api.scoreboard.Score): boolean;
                        /**
                         * Removes the {@link Score} with the specified name from this objective, if present.
                         */
                        // @ts-ignore
                         removeScore(name: org.spongepowered.api.text.Text): boolean;
                        /**
                         * Returns a {@link Set} of parent {@link Scoreboard}s this
                         * {@link Objective} is registered to.
                         */
                        // @ts-ignore
                         getScoreboards(): java.util.Set;
                    }
                }
            }
        }
    }
}
