// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace transform {
                    // @ts-ignore
                    interface TextTemplateApplier extends org.spongepowered.api.text.TextRepresentable {
                        /**
                         * Returns an {@link ImmutableList} of this applier's parameters.
                         */
                        // @ts-ignore
                         getParameters(): any;
                        /**
                         * Returns the current value of the parameter with the specified key.
                         */
                        // @ts-ignore
                         getParameter(key: string): org.spongepowered.api.text.TextElement;
                        /**
                         * Sets the value of the specified parameter key within this applier.
                         */
                        // @ts-ignore
                         setParameter(key: string, value: org.spongepowered.api.text.TextElement): void;
                        /**
                         * Returns the current {@link TextTemplate} for this applier.
                         */
                        // @ts-ignore
                         getTemplate(): org.spongepowered.api.text.TextTemplate;
                        /**
                         * Sets the {@link TextTemplate} to use for this applier.
                         */
                        // @ts-ignore
                         setTemplate(template: org.spongepowered.api.text.TextTemplate): void;
                        // @ts-ignore
                         toText(): org.spongepowered.api.text.Text;
                    }
                }
            }
        }
    }
}
