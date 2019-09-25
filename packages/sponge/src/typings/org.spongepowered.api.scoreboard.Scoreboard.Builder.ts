declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scoreboard {
                namespace Scoreboard {
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                        /**
                         * Sets the list of {@link Objective}s of the {@link Scoreboard}.
                         * <p>By default, this is the empty list.</p>
                         */
                        // @ts-ignore
                         objectives(objectives: any[] /*java.util.List*/): org.spongepowered.api.scoreboard.Scoreboard.Builder;
                        /**
                         * Sets the list of {@link Team}s of the {@link Scoreboard}.
                         * <p>By default, this is the empty list.</p>
                         */
                        // @ts-ignore
                         teams(teams: any[] /*java.util.List*/): org.spongepowered.api.scoreboard.Scoreboard.Builder;
                        /**
                         * Builds an instance of a {@link Scoreboard}.
                         */
                        // @ts-ignore
                         build(): org.spongepowered.api.scoreboard.Scoreboard;
                    }
                }
            }
        }
    }
}
