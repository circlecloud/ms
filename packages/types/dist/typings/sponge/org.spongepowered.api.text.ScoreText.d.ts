// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                // @ts-ignore
                 class ScoreText extends org.spongepowered.api.text.Text {
                    /**
                     * Returns the score displayed by this {@link Text}.
                     */
                    // @ts-ignore
                    public getScore(): org.spongepowered.api.scoreboard.Score;
                    /**
                     * Returns a value that is displayed instead of the real score.
                     */
                    // @ts-ignore
                    public getOverride(): java.util.Optional;
                    // @ts-ignore
                    public toBuilder(): org.spongepowered.api.text.ScoreText.Builder;
                    // @ts-ignore
                    public equals(o: java.lang.Object): boolean;
                    // @ts-ignore
                    public hashCode(): number;
                }
            }
        }
    }
}
