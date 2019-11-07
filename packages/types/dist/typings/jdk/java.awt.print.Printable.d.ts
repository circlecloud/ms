declare namespace java {
    namespace awt {
        namespace print {
            // @ts-ignore
            interface Printable {
                // @ts-ignore
                 PAGE_EXISTS: number;
                // @ts-ignore
                 NO_SUCH_PAGE: number;
                /**
                 * Prints the page at the specified index into the specified
                 * {@link Graphics} context in the specified
                 * format.  A <code>PrinterJob</code> calls the
                 * <code>Printable</code> interface to request that a page be
                 * rendered into the context specified by
                 * <code>graphics</code>.  The format of the page to be drawn is
                 * specified by <code>pageFormat</code>.  The zero based index
                 * of the requested page is specified by <code>pageIndex</code>.
                 * If the requested page does not exist then this method returns
                 * NO_SUCH_PAGE; otherwise PAGE_EXISTS is returned.
                 * The <code>Graphics</code> class or subclass implements the
                 * {@link PrinterGraphics} interface to provide additional
                 * information.  If the <code>Printable</code> object
                 * aborts the print job then it throws a {@link PrinterException}.
                 */
                // @ts-ignore
                 print(graphics: java.awt.Graphics, pageFormat: java.awt.print.PageFormat, pageIndex: number): number;
            }
        }
    }
}
