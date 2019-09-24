declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface BookMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Checks for the existence of a title in the book.
                     */
                     hasTitle(): boolean;
                    /**
                     * Gets the title of the book.
                     * <p>
                     * Plugins should check that hasTitle() returns true before calling this
                     * method.
                     */
                     getTitle(): string;
                    /**
                     * Sets the title of the book.
                     * <p>
                     * Limited to 16 characters. Removes title when given null.
                     */
                     setTitle(title: string): boolean;
                    /**
                     * Checks for the existence of an author in the book.
                     */
                     hasAuthor(): boolean;
                    /**
                     * Gets the author of the book.
                     * <p>
                     * Plugins should check that hasAuthor() returns true before calling this
                     * method.
                     */
                     getAuthor(): string;
                    /**
                     * Sets the author of the book. Removes author when given null.
                     */
                     setAuthor(author: string): void;
                    /**
                     * Checks for the existence of generation level in the book.
                     */
                     hasGeneration(): boolean;
                    /**
                     * Gets the generation of the book.
                     * <p>
                     * Plugins should check that hasGeneration() returns true before calling
                     * this method.
                     */
                     getGeneration(): org.bukkit.inventory.meta.BookMeta.Generation;
                    /**
                     * Sets the generation of the book. Removes generation when given null.
                     */
                     setGeneration(generation: org.bukkit.inventory.meta.BookMeta.Generation): void;
                    /**
                     * Checks for the existence of pages in the book.
                     */
                     hasPages(): boolean;
                    /**
                     * Gets the specified page in the book. The given page must exist.
                     * <p>
                     * Pages are 1-indexed.
                     */
                     getPage(page: number): string;
                    /**
                     * Sets the specified page in the book. Pages of the book must be
                     * contiguous.
                     * <p>
                     * The data can be up to 256 characters in length, additional characters
                     * are truncated.
                     * <p>
                     * Pages are 1-indexed.
                     */
                     setPage(page: number, data: string): void;
                    /**
                     * Gets all the pages in the book.
                     */
                     getPages(): any[] /*java.util.List*/;
                    /**
                     * Clears the existing book pages, and sets the book to use the provided
                     * pages. Maximum 50 pages with 256 characters per page.
                     */
                     setPages(pages: any[] /*java.util.List*/): void;
                    /**
                     * Clears the existing book pages, and sets the book to use the provided
                     * pages. Maximum 50 pages with 256 characters per page.
                     */
                     setPages(pages: string): void;
                    /**
                     * Adds new pages to the end of the book. Up to a maximum of 50 pages with
                     * 256 characters per page.
                     */
                     addPage(pages: string): void;
                    /**
                     * Gets the number of pages in the book.
                     */
                     getPageCount(): number;
                     clone(): org.bukkit.inventory.meta.BookMeta;
                }
            }
        }
    }
}
