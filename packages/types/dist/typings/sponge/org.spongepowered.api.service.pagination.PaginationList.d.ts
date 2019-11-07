// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace pagination {
                    // @ts-ignore
                    interface PaginationList {
                        /**
                         * Creates a new {@link Builder} to build a pagination list.
                         */
                        // @ts-ignore
                         builder(): org.spongepowered.api.service.pagination.PaginationList.Builder;
                        /**
                         * Gets the contents of this pagination list.
                         */
                        // @ts-ignore
                         getContents(): java.lang.Iterable;
                        /**
                         * Gets the title text to be used in the title bar of this pagination.
                         */
                        // @ts-ignore
                         getTitle(): java.util.Optional;
                        /**
                         * Gets the header to be displayed for this output on all pages after the
                         * title bar but before the contents, if available.
                         * <p>Header and footer will use this Text's style and color for
                         * formatting.</p>
                         */
                        // @ts-ignore
                         getHeader(): java.util.Optional;
                        /**
                         * Gets the footer to be displayed for this output on all pages after the
                         * contents and page navigation bar, if available.
                         */
                        // @ts-ignore
                         getFooter(): java.util.Optional;
                        /**
                         * Gets the padding character to be used when centering headers and footers.
                         */
                        // @ts-ignore
                         getPadding(): org.spongepowered.api.text.Text;
                        /**
                         * Gets the maximum amount of lines that will be sent per page.
                         * <p>This defaults to the maximum amount of lines that can be displayed
                         * on a source's screen at one time if not specified.</p>
                         */
                        // @ts-ignore
                         getLinesPerPage(): number;
                        /**
                         * Sends the first page of the constructed pagination list
                         * to the specified message receiver.
                         */
                        // @ts-ignore
                         sendTo(receiver: org.spongepowered.api.text.channel.MessageReceiver): void;
                        /**
                         * Send the specified page of the constructed pagination list
                         * to the specified message receiver.
                         * <p>A page that is out of bounds will result in a friendly
                         * error message being sent to the receiver.</p>
                         * <p>Pages start at an index of 1.</p>
                         */
                        // @ts-ignore
                         sendTo(receiver: org.spongepowered.api.text.channel.MessageReceiver, page: number): void;
                        /**
                         * Sends the first page of the constructed pagination list to
                         * all {@link MessageReceiver}s within an {@link Iterable}.
                         */
                        // @ts-ignore
                         sendTo(receivers: java.lang.Iterable): void;
                        /**
                         * Sends the specified page of the constructed pagination list
                         * all {@link MessageReceiver}s within an {@link Iterable}.
                         */
                        // @ts-ignore
                         sendTo(receivers: java.lang.Iterable, page: number): void;
                    }
                }
            }
        }
    }
}
