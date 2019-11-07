// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace print {
            // @ts-ignore
             class Book extends java.lang.Object {
                /**
                 * Creates a new, empty <code>Book</code>.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Returns the number of pages in this <code>Book</code>.
                 */
                // @ts-ignore
                public getNumberOfPages(): number;
                /**
                 * Returns the {@link PageFormat} of the page specified by
                 * <code>pageIndex</code>.
                 */
                // @ts-ignore
                public getPageFormat(pageIndex: number): java.awt.print.PageFormat;
                /**
                 * Returns the {@link Printable} instance responsible for rendering
                 * the page specified by <code>pageIndex</code>.
                 */
                // @ts-ignore
                public getPrintable(pageIndex: number): java.awt.print.Printable;
                /**
                 * Sets the <code>PageFormat</code> and the <code>Painter</code> for a
                 * specified page number.
                 */
                // @ts-ignore
                public setPage(pageIndex: number, painter: java.awt.print.Printable, page: java.awt.print.PageFormat): void;
                /**
                 * Appends a single page to the end of this <code>Book</code>.
                 */
                // @ts-ignore
                public append(painter: java.awt.print.Printable, page: java.awt.print.PageFormat): void;
                /**
                 * Appends <code>numPages</code> pages to the end of this
                 * <code>Book</code>.  Each of the pages is associated with
                 * <code>page</code>.
                 */
                // @ts-ignore
                public append(painter: java.awt.print.Printable, page: java.awt.print.PageFormat, numPages: number): void;
            }
        }
    }
}
