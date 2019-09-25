declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace transform {
                    // @ts-ignore
                     class SimpleTextTemplateApplier implements org.spongepowered.api.text.transform.TextTemplateApplier {
                        /**
                         * Creates a new {@link SimpleTextTemplateApplier} with the provided
                         * {@link TextTemplate}.
                         */
                        constructor(template: org.spongepowered.api.text.TextTemplate)
                        /**
                         * Creates a new {@link SimpleTextTemplateApplier} with an empty
                         * {@link TextTemplate}.
                         */
                        constructor()
                        // @ts-ignore
                        protected params: Map<any, any> /*java.util.Map*/;
                        // @ts-ignore
                        protected template: org.spongepowered.api.text.TextTemplate;
                        // @ts-ignore
                        public getParameters(): any;
                        // @ts-ignore
                        public setParameter(key: string, value: org.spongepowered.api.text.TextElement): void;
                        // @ts-ignore
                        public getTemplate(): org.spongepowered.api.text.TextTemplate;
                        // @ts-ignore
                        public setTemplate(template: org.spongepowered.api.text.TextTemplate): void;
                    }
                }
            }
        }
    }
}
