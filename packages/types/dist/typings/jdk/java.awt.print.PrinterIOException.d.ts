// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace print {
            // @ts-ignore
             class PrinterIOException extends java.awt.print.PrinterException {
                /**
                 * Constructs a new <code>PrinterIOException</code>
                 * with the string representation of the specified
                 * {@link IOException}.
                 */
                // @ts-ignore
                constructor(exception: java.io.IOException)
                /**
                 * Returns the <code>IOException</code> that terminated
                 * the print job.
                 * <p>This method predates the general-purpose exception chaining facility.
                 * The {@link Throwable#getCause()} method is now the preferred means of
                 * obtaining this information.
                 */
                // @ts-ignore
                public getIOException(): java.io.IOException;
                /**
                 * Returns the the cause of this exception (the <code>IOException</code>
                 * that terminated the print job).
                 */
                // @ts-ignore
                public getCause(): java.lang.Throwable;
            }
        }
    }
}
