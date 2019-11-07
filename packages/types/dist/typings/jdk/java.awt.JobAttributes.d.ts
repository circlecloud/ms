declare namespace java {
    namespace awt {
        // @ts-ignore
         class JobAttributes extends java.lang.Object {
            /**
             * Constructs a <code>JobAttributes</code> instance with default
             * values for every attribute.  The dialog defaults to
             * <code>DialogType.NATIVE</code>.  Min page defaults to
             * <code>1</code>.  Max page defaults to <code>Integer.MAX_VALUE</code>.
             * Destination defaults to <code>DestinationType.PRINTER</code>.
             * Selection defaults to <code>DefaultSelectionType.ALL</code>.
             * Number of copies defaults to <code>1</code>. Multiple document handling defaults
             * to <code>MultipleDocumentHandlingType.SEPARATE_DOCUMENTS_UNCOLLATED_COPIES</code>.
             * Sides defaults to <code>SidesType.ONE_SIDED</code>. File name defaults
             * to <code>null</code>.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>JobAttributes</code> instance which is a copy
             * of the supplied <code>JobAttributes</code>.
             */
            // @ts-ignore
            constructor(obj: java.awt.JobAttributes)
            /**
             * Constructs a <code>JobAttributes</code> instance with the
             * specified values for every attribute.
             */
            // @ts-ignore
            constructor(copies: number, defaultSelection: java.awt.JobAttributes.DefaultSelectionType, destination: java.awt.JobAttributes.DestinationType, dialog: java.awt.JobAttributes.DialogType, fileName: string, maxPage: number, minPage: number, multipleDocumentHandling: java.awt.JobAttributes.MultipleDocumentHandlingType, pageRanges: number, printer: string, sides: java.awt.JobAttributes.SidesType)
            /**
             * Creates and returns a copy of this <code>JobAttributes</code>.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
            /**
             * Sets all of the attributes of this <code>JobAttributes</code> to
             * the same values as the attributes of obj.
             */
            // @ts-ignore
            public set(obj: java.awt.JobAttributes): void;
            /**
             * Returns the number of copies the application should render for jobs
             * using these attributes. This attribute is updated to the value chosen
             * by the user.
             */
            // @ts-ignore
            public getCopies(): number;
            /**
             * Specifies the number of copies the application should render for jobs
             * using these attributes. Not specifying this attribute is equivalent to
             * specifying <code>1</code>.
             */
            // @ts-ignore
            public setCopies(copies: number): void;
            /**
             * Sets the number of copies the application should render for jobs using
             * these attributes to the default. The default number of copies is 1.
             */
            // @ts-ignore
            public setCopiesToDefault(): void;
            /**
             * Specifies whether, for jobs using these attributes, the application
             * should print all pages, the range specified by the return value of
             * <code>getPageRanges</code>, or the current selection. This attribute
             * is updated to the value chosen by the user.
             */
            // @ts-ignore
            public getDefaultSelection(): java.awt.JobAttributes.DefaultSelectionType;
            /**
             * Specifies whether, for jobs using these attributes, the application
             * should print all pages, the range specified by the return value of
             * <code>getPageRanges</code>, or the current selection. Not specifying
             * this attribute is equivalent to specifying DefaultSelectionType.ALL.
             */
            // @ts-ignore
            public setDefaultSelection(defaultSelection: java.awt.JobAttributes.DefaultSelectionType): void;
            /**
             * Specifies whether output will be to a printer or a file for jobs using
             * these attributes. This attribute is updated to the value chosen by the
             * user.
             */
            // @ts-ignore
            public getDestination(): java.awt.JobAttributes.DestinationType;
            /**
             * Specifies whether output will be to a printer or a file for jobs using
             * these attributes. Not specifying this attribute is equivalent to
             * specifying DesintationType.PRINTER.
             */
            // @ts-ignore
            public setDestination(destination: java.awt.JobAttributes.DestinationType): void;
            /**
             * Returns whether, for jobs using these attributes, the user should see
             * a print dialog in which to modify the print settings, and which type of
             * print dialog should be displayed. DialogType.COMMON denotes a cross-
             * platform, pure Java print dialog. DialogType.NATIVE denotes the
             * platform's native print dialog. If a platform does not support a native
             * print dialog, the pure Java print dialog is displayed instead.
             * DialogType.NONE specifies no print dialog (i.e., background printing).
             * This attribute cannot be modified by, and is not subject to any
             * limitations of, the implementation or the target printer.
             */
            // @ts-ignore
            public getDialog(): java.awt.JobAttributes.DialogType;
            /**
             * Specifies whether, for jobs using these attributes, the user should see
             * a print dialog in which to modify the print settings, and which type of
             * print dialog should be displayed. DialogType.COMMON denotes a cross-
             * platform, pure Java print dialog. DialogType.NATIVE denotes the
             * platform's native print dialog. If a platform does not support a native
             * print dialog, the pure Java print dialog is displayed instead.
             * DialogType.NONE specifies no print dialog (i.e., background printing).
             * Not specifying this attribute is equivalent to specifying
             * DialogType.NATIVE.
             */
            // @ts-ignore
            public setDialog(dialog: java.awt.JobAttributes.DialogType): void;
            /**
             * Specifies the file name for the output file for jobs using these
             * attributes. This attribute is updated to the value chosen by the user.
             */
            // @ts-ignore
            public getFileName(): string;
            /**
             * Specifies the file name for the output file for jobs using these
             * attributes. Default is platform-dependent and implementation-defined.
             */
            // @ts-ignore
            public setFileName(fileName: string): void;
            /**
             * Returns, for jobs using these attributes, the first page to be
             * printed, if a range of pages is to be printed. This attribute is
             * updated to the value chosen by the user. An application should ignore
             * this attribute on output, unless the return value of the <code>
             * getDefaultSelection</code> method is DefaultSelectionType.RANGE. An
             * application should honor the return value of <code>getPageRanges</code>
             * over the return value of this method, if possible.
             */
            // @ts-ignore
            public getFromPage(): number;
            /**
             * Specifies, for jobs using these attributes, the first page to be
             * printed, if a range of pages is to be printed. If this attribute is not
             * specified, then the values from the pageRanges attribute are used. If
             * pageRanges and either or both of fromPage and toPage are specified,
             * pageRanges takes precedence. Specifying none of pageRanges, fromPage,
             * or toPage is equivalent to calling
             * setPageRanges(new int[][] { new int[] { <i>minPage</i> } });
             */
            // @ts-ignore
            public setFromPage(fromPage: number): void;
            /**
             * Specifies the maximum value the user can specify as the last page to
             * be printed for jobs using these attributes. This attribute cannot be
             * modified by, and is not subject to any limitations of, the
             * implementation or the target printer.
             */
            // @ts-ignore
            public getMaxPage(): number;
            /**
             * Specifies the maximum value the user can specify as the last page to
             * be printed for jobs using these attributes. Not specifying this
             * attribute is equivalent to specifying <code>Integer.MAX_VALUE</code>.
             */
            // @ts-ignore
            public setMaxPage(maxPage: number): void;
            /**
             * Specifies the minimum value the user can specify as the first page to
             * be printed for jobs using these attributes. This attribute cannot be
             * modified by, and is not subject to any limitations of, the
             * implementation or the target printer.
             */
            // @ts-ignore
            public getMinPage(): number;
            /**
             * Specifies the minimum value the user can specify as the first page to
             * be printed for jobs using these attributes. Not specifying this
             * attribute is equivalent to specifying <code>1</code>.
             */
            // @ts-ignore
            public setMinPage(minPage: number): void;
            /**
             * Specifies the handling of multiple copies, including collation, for
             * jobs using these attributes. This attribute is updated to the value
             * chosen by the user.
             */
            // @ts-ignore
            public getMultipleDocumentHandling(): java.awt.JobAttributes.MultipleDocumentHandlingType;
            /**
             * Specifies the handling of multiple copies, including collation, for
             * jobs using these attributes. Not specifying this attribute is equivalent
             * to specifying
             * MultipleDocumentHandlingType.SEPARATE_DOCUMENTS_UNCOLLATED_COPIES.
             */
            // @ts-ignore
            public setMultipleDocumentHandling(multipleDocumentHandling: java.awt.JobAttributes.MultipleDocumentHandlingType): void;
            /**
             * Sets the handling of multiple copies, including collation, for jobs
             * using these attributes to the default. The default handling is
             * MultipleDocumentHandlingType.SEPARATE_DOCUMENTS_UNCOLLATED_COPIES.
             */
            // @ts-ignore
            public setMultipleDocumentHandlingToDefault(): void;
            /**
             * Specifies, for jobs using these attributes, the ranges of pages to be
             * printed, if a range of pages is to be printed. All range numbers are
             * inclusive. This attribute is updated to the value chosen by the user.
             * An application should ignore this attribute on output, unless the
             * return value of the <code>getDefaultSelection</code> method is
             * DefaultSelectionType.RANGE.
             */
            // @ts-ignore
            public getPageRanges(): number[][];
            /**
             * Specifies, for jobs using these attributes, the ranges of pages to be
             * printed, if a range of pages is to be printed. All range numbers are
             * inclusive. If this attribute is not specified, then the values from the
             * fromPage and toPages attributes are used. If pageRanges and either or
             * both of fromPage and toPage are specified, pageRanges takes precedence.
             * Specifying none of pageRanges, fromPage, or toPage is equivalent to
             * calling setPageRanges(new int[][] { new int[] { <i>minPage</i>,
             * <i>minPage</i> } });
             */
            // @ts-ignore
            public setPageRanges(pageRanges: number): void;
            /**
             * Returns the destination printer for jobs using these attributes. This
             * attribute is updated to the value chosen by the user.
             */
            // @ts-ignore
            public getPrinter(): string;
            /**
             * Specifies the destination printer for jobs using these attributes.
             * Default is platform-dependent and implementation-defined.
             */
            // @ts-ignore
            public setPrinter(printer: string): void;
            /**
             * Returns how consecutive pages should be imposed upon the sides of the
             * print medium for jobs using these attributes. SidesType.ONE_SIDED
             * imposes each consecutive page upon the same side of consecutive media
             * sheets. This imposition is sometimes called <i>simplex</i>.
             * SidesType.TWO_SIDED_LONG_EDGE imposes each consecutive pair of pages
             * upon front and back sides of consecutive media sheets, such that the
             * orientation of each pair of pages on the medium would be correct for
             * the reader as if for binding on the long edge. This imposition is
             * sometimes called <i>duplex</i>. SidesType.TWO_SIDED_SHORT_EDGE imposes
             * each consecutive pair of pages upon front and back sides of consecutive
             * media sheets, such that the orientation of each pair of pages on the
             * medium would be correct for the reader as if for binding on the short
             * edge. This imposition is sometimes called <i>tumble</i>. This attribute
             * is updated to the value chosen by the user.
             */
            // @ts-ignore
            public getSides(): java.awt.JobAttributes.SidesType;
            /**
             * Specifies how consecutive pages should be imposed upon the sides of the
             * print medium for jobs using these attributes. SidesType.ONE_SIDED
             * imposes each consecutive page upon the same side of consecutive media
             * sheets. This imposition is sometimes called <i>simplex</i>.
             * SidesType.TWO_SIDED_LONG_EDGE imposes each consecutive pair of pages
             * upon front and back sides of consecutive media sheets, such that the
             * orientation of each pair of pages on the medium would be correct for
             * the reader as if for binding on the long edge. This imposition is
             * sometimes called <i>duplex</i>. SidesType.TWO_SIDED_SHORT_EDGE imposes
             * each consecutive pair of pages upon front and back sides of consecutive
             * media sheets, such that the orientation of each pair of pages on the
             * medium would be correct for the reader as if for binding on the short
             * edge. This imposition is sometimes called <i>tumble</i>. Not specifying
             * this attribute is equivalent to specifying SidesType.ONE_SIDED.
             */
            // @ts-ignore
            public setSides(sides: java.awt.JobAttributes.SidesType): void;
            /**
             * Sets how consecutive pages should be imposed upon the sides of the
             * print medium for jobs using these attributes to the default. The
             * default imposition is SidesType.ONE_SIDED.
             */
            // @ts-ignore
            public setSidesToDefault(): void;
            /**
             * Returns, for jobs using these attributes, the last page (inclusive)
             * to be printed, if a range of pages is to be printed. This attribute is
             * updated to the value chosen by the user. An application should ignore
             * this attribute on output, unless the return value of the <code>
             * getDefaultSelection</code> method is DefaultSelectionType.RANGE. An
             * application should honor the return value of <code>getPageRanges</code>
             * over the return value of this method, if possible.
             */
            // @ts-ignore
            public getToPage(): number;
            /**
             * Specifies, for jobs using these attributes, the last page (inclusive)
             * to be printed, if a range of pages is to be printed.
             * If this attribute is not specified, then the values from the pageRanges
             * attribute are used. If pageRanges and either or both of fromPage and
             * toPage are specified, pageRanges takes precedence. Specifying none of
             * pageRanges, fromPage, or toPage is equivalent to calling
             * setPageRanges(new int[][] { new int[] { <i>minPage</i> } });
             */
            // @ts-ignore
            public setToPage(toPage: number): void;
            /**
             * Determines whether two JobAttributes are equal to each other.
             * <p>
             * Two JobAttributes are equal if and only if each of their attributes are
             * equal. Attributes of enumeration type are equal if and only if the
             * fields refer to the same unique enumeration object. A set of page
             * ranges is equal if and only if the sets are of equal length, each range
             * enumerates the same pages, and the ranges are in the same order.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns a hash code value for this JobAttributes.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns a string representation of this JobAttributes.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
