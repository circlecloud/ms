// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                // @ts-ignore
                 class TranslatableText extends org.spongepowered.api.text.Text {
                    /**
                     * Returns the translation of this {@link Text}.
                     */
                    // @ts-ignore
                    public getTranslation(): org.spongepowered.api.text.translation.Translation;
                    /**
                     * Returns the list of {@link Translation} arguments used to format this
                     * {@link Text}.
                     */
                    // @ts-ignore
                    public getArguments(): any;
                    // @ts-ignore
                    public toBuilder(): org.spongepowered.api.text.TranslatableText.Builder;
                    // @ts-ignore
                    public equals(o: java.lang.Object): boolean;
                    // @ts-ignore
                    public hashCode(): number;
                }
            }
        }
    }
}
