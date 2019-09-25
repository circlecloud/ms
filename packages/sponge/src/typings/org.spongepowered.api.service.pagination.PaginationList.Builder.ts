declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace pagination {
                    namespace PaginationList {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                            /**
                             * Sets the contents of this output as an iterable.
                             * <p>If this {@link Iterable} is a {@link List}, bidirectional
                             * navigation is supported. Otherwise, only going to the next page will
                             * be supported.</p>
                             */
                            // @ts-ignore
                             contents(contents: any): org.spongepowered.api.service.pagination.PaginationList.Builder;
                            /**
                             * Sets the contents of this output to be the given array of contents.
                             */
                            // @ts-ignore
                             contents(contents: org.spongepowered.api.text.Text): org.spongepowered.api.service.pagination.PaginationList.Builder;
                            /**
                             * Sets the title text to be used in the title bar of this pagination.
                             * <p>This should be less than one line long.</p>
                             */
                            // @ts-ignore
                             title(title: org.spongepowered.api.text.Text): org.spongepowered.api.service.pagination.PaginationList.Builder;
                            /**
                             * Sets the header to be displayed for this output on all pages after
                             * the title bar but before the contents.
                             * <p>The header and footer will use this Text's style and color for
                             * formatting.</p>
                             * <p>If the header is not specified, or passed in as <code>null</code>,
                             * it will be omitted when displaying the list.</p>
                             */
                            // @ts-ignore
                             header(header: org.spongepowered.api.text.Text): org.spongepowered.api.service.pagination.PaginationList.Builder;
                            /**
                             * Sets the footer to be displayed for this output on all pages after
                             * the contents and page navigation bar.
                             * <p>If the footer is not specified, or passed in as <code>null</code>,
                             * it will be omitted when displaying the list.</p>
                             */
                            // @ts-ignore
                             footer(footer: org.spongepowered.api.text.Text): org.spongepowered.api.service.pagination.PaginationList.Builder;
                            /**
                             * Sets the padding character to be used when centering headers and
                             * footers.
                             */
                            // @ts-ignore
                             padding(padding: org.spongepowered.api.text.Text): org.spongepowered.api.service.pagination.PaginationList.Builder;
                            /**
                             * Sets the maximum number of lines that can be displayed per page.
                             * <p>This defaults to the maximum amount of lines that can be displayed
                             * on a source's screen at one time if not specified.</p>
                             */
                            // @ts-ignore
                             linesPerPage(linesPerPage: number): org.spongepowered.api.service.pagination.PaginationList.Builder;
                            /**
                             * Creates a {@link PaginationList} from this pagination builder.
                             */
                            // @ts-ignore
                             build(): org.spongepowered.api.service.pagination.PaginationList;
                            /**
                             * Sends the constructed pagination list to the given receiver.
                             */
                            // @ts-ignore
                             sendTo(receiver: org.spongepowered.api.text.channel.MessageReceiver): org.spongepowered.api.service.pagination.PaginationList;
                            /**
                             * Sends the constructed pagination list to all
                             * {@link MessageReceiver}s within an {@link Iterable}.
                             */
                            // @ts-ignore
                             sendTo(receivers: any): org.spongepowered.api.service.pagination.PaginationList;
                        }
                    }
                }
            }
        }
    }
}
