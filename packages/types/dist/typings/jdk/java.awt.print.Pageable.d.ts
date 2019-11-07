declare namespace java {
    namespace awt {
        namespace print {
            // @ts-ignore
            interface Pageable {
                // @ts-ignore
                 UNKNOWN_NUMBER_OF_PAGES: number;
                /**
                 * Returns the number of pages in the set.
                 * To enable advanced printing features,
                 * it is recommended that <code>Pageable</code>
                 * implementations return the true number of pages
                 * rather than the
                 * UNKNOWN_NUMBER_OF_PAGES constant.
                 */
                // @ts-ignore
                 getNumberOfPages(): number;
                /**
                 * Returns the <code>PageFormat</code> of the page specified by
                 * <code>pageIndex</code>.
                 */
                // @ts-ignore
                 getPageFormat(pageIndex: number): java.awt.print.PageFormat;
                /**
                 * Returns the <code>Printable</code> instance responsible for
                 * rendering the page specified by <code>pageIndex</code>.
                 */
                // @ts-ignore
                 getPrintable(pageIndex: number): java.awt.print.Printable;
            }
        }
    }
}
