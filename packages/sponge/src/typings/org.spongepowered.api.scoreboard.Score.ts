declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace scoreboard {
                // @ts-ignore
                interface Score {
                    /**
                     * Gets the name of this score.
                     */
                    // @ts-ignore
                     getName(): org.spongepowered.api.text.Text;
                    /**
                     * Gets the current score value.
                     */
                    // @ts-ignore
                     getScore(): number;
                    /**
                     * Sets the current score value.
                     */
                    // @ts-ignore
                     setScore(score: number): void;
                    /**
                     * Returns a {@link Set} of parent {@link Objective}s this {@link Score} is
                     * registered to.
                     */
                    // @ts-ignore
                     getObjectives(): any[] /*java.util.Set*/;
                }
            }
        }
    }
}
