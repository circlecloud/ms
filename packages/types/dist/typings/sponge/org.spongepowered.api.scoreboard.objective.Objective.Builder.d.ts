declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scoreboard {
                namespace objective {
                    namespace Objective {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                            /**
                             * Sets the name of the {@link Objective}.
                             */
                            // @ts-ignore
                             name(name: string): org.spongepowered.api.scoreboard.objective.Objective.Builder;
                            /**
                             * Sets the display name of the {@link Objective}.
                             */
                            // @ts-ignore
                             displayName(displayName: org.spongepowered.api.text.Text): org.spongepowered.api.scoreboard.objective.Objective.Builder;
                            /**
                             * Sets the {@link Criterion} of the {@link Objective}.
                             */
                            // @ts-ignore
                             criterion(criterion: org.spongepowered.api.scoreboard.critieria.Criterion): org.spongepowered.api.scoreboard.objective.Objective.Builder;
                            /**
                             * Sets the {@link ObjectiveDisplayMode} of the {@link Objective}.
                             */
                            // @ts-ignore
                             objectiveDisplayMode(objectiveDisplayMode: org.spongepowered.api.scoreboard.objective.displaymode.ObjectiveDisplayMode): org.spongepowered.api.scoreboard.objective.Objective.Builder;
                            /**
                             * Builds an instance of an {@link Objective}.
                             */
                            // @ts-ignore
                             build(): org.spongepowered.api.scoreboard.objective.Objective;
                        }
                    }
                }
            }
        }
    }
}
