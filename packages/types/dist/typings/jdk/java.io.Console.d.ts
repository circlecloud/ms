// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
         class Console extends java.lang.Object {
            /**
             * Retrieves the unique {@link java.io.PrintWriter PrintWriter} object
             * associated with this console.
             */
            // @ts-ignore
            public writer(): java.io.PrintWriter;
            /**
             * Retrieves the unique {@link java.io.Reader Reader} object associated
             * with this console.
             * <p>
             * This method is intended to be used by sophisticated applications, for
             * example, a {@link java.util.Scanner} object which utilizes the rich
             * parsing/scanning functionality provided by the <tt>Scanner</tt>:
             * <blockquote><pre>
             * Console con = System.console();
             * if (con != null) {
             * Scanner sc = new Scanner(con.reader());
             * ...
             * }
             * </pre></blockquote>
             * <p>
             * For simple applications requiring only line-oriented reading, use
             * <tt>{@link #readLine}</tt>.
             * <p>
             * The bulk read operations {@link java.io.Reader#read(char[]) read(char[]) },
             * {@link java.io.Reader#read(char[], int, int) read(char[], int, int) } and
             * {@link java.io.Reader#read(java.nio.CharBuffer) read(java.nio.CharBuffer)}
             * on the returned object will not read in characters beyond the line
             * bound for each invocation, even if the destination buffer has space for
             * more characters. The {@code Reader}'s {@code read} methods may block if a
             * line bound has not been entered or reached on the console's input device.
             * A line bound is considered to be any one of a line feed (<tt>'\n'</tt>),
             * a carriage return (<tt>'\r'</tt>), a carriage return followed immediately
             * by a linefeed, or an end of stream.
             */
            // @ts-ignore
            public reader(): java.io.Reader;
            /**
             * Writes a formatted string to this console's output stream using
             * the specified format string and arguments.
             */
            // @ts-ignore
            public format(fmt: string, args: java.lang.Object): java.io.Console;
            /**
             * A convenience method to write a formatted string to this console's
             * output stream using the specified format string and arguments.
             * <p> An invocation of this method of the form <tt>con.printf(format,
             * args)</tt> behaves in exactly the same way as the invocation of
             * <pre>con.format(format, args)</pre>.
             */
            // @ts-ignore
            public printf(format: string, args: java.lang.Object): java.io.Console;
            /**
             * Provides a formatted prompt, then reads a single line of text from the
             * console.
             */
            // @ts-ignore
            public readLine(fmt: string, args: java.lang.Object): string;
            /**
             * Reads a single line of text from the console.
             */
            // @ts-ignore
            public readLine(): string;
            /**
             * Provides a formatted prompt, then reads a password or passphrase from
             * the console with echoing disabled.
             */
            // @ts-ignore
            public readPassword(fmt: string, args: java.lang.Object): string[];
            /**
             * Reads a password or passphrase from the console with echoing disabled
             */
            // @ts-ignore
            public readPassword(): string[];
            /**
             * Flushes the console and forces any buffered output to be written
             * immediately .
             */
            // @ts-ignore
            public flush(): void;
        }
    }
}
