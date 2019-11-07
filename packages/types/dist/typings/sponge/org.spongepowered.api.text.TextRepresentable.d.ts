declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                // @ts-ignore
                interface TextRepresentable extends org.spongepowered.api.text.TextElement {
                    /**
                     * Gets the textual representation of this instance for its usage in other
                     * {@link Text} objects. This may but does not need to include
                     * {@link HoverAction hover texts} or other {@link TextAction actions}. This
                     * method is basically the {@link Object#toString() toString()} equivalent
                     * for {@link Text}s.
                     */
                    // @ts-ignore
                     toText(): org.spongepowered.api.text.Text;
                    // @ts-ignore
                     applyTo(builder: org.spongepowered.api.text.Text.Builder): void;
                }
            }
        }
    }
}
