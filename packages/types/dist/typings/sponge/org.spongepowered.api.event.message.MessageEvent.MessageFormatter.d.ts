// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace message {
                    namespace MessageEvent {
                        // @ts-ignore
                         class MessageFormatter extends org.spongepowered.api.text.transform.FixedPartitionedTextFormatter {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            constructor(header: org.spongepowered.api.text.Text, body: org.spongepowered.api.text.Text)
                            // @ts-ignore
                            constructor(body: org.spongepowered.api.text.Text)
                            /**
                             * Returns the header partition within this formatter.
                             */
                            // @ts-ignore
                            public getHeader(): org.spongepowered.api.text.transform.SimpleTextFormatter;
                            /**
                             * Clears any existing components within the header partition and adds
                             * a new {@link TextTemplateApplier} to the partition with the
                             * specified value.
                             */
                            // @ts-ignore
                            public setHeader(header: org.spongepowered.api.text.TextRepresentable): void;
                            /**
                             * Returns the body partition within this formatter.
                             */
                            // @ts-ignore
                            public getBody(): org.spongepowered.api.text.transform.SimpleTextFormatter;
                            /**
                             * Clears any existing components within the body partition and adds
                             * a new {@link TextTemplateApplier} to the partition with the
                             * specified value.
                             */
                            // @ts-ignore
                            public setBody(body: org.spongepowered.api.text.TextRepresentable): void;
                            /**
                             * Returns the footer partition within this formatter.
                             */
                            // @ts-ignore
                            public getFooter(): org.spongepowered.api.text.transform.SimpleTextFormatter;
                            /**
                             * Clears any existing components within the footer partition and adds
                             * a new {@link TextTemplateApplier} to the partition with the
                             * specified value.
                             */
                            // @ts-ignore
                            public setFooter(footer: org.spongepowered.api.text.TextRepresentable): void;
                        }
                    }
                }
            }
        }
    }
}
