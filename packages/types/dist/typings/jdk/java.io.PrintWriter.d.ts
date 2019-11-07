// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
         class PrintWriter extends java.io.Writer {
            /**
             * Creates a new PrintWriter, without automatic line flushing.
             */
            // @ts-ignore
            constructor(out: java.io.Writer)
            /**
             * Creates a new PrintWriter.
             */
            // @ts-ignore
            constructor(out: java.io.Writer, autoFlush: boolean)
            /**
             * Creates a new PrintWriter, without automatic line flushing, from an
             * existing OutputStream.  This convenience constructor creates the
             * necessary intermediate OutputStreamWriter, which will convert characters
             * into bytes using the default character encoding.
             */
            // @ts-ignore
            constructor(out: java.io.OutputStream)
            /**
             * Creates a new PrintWriter from an existing OutputStream.  This
             * convenience constructor creates the necessary intermediate
             * OutputStreamWriter, which will convert characters into bytes using the
             * default character encoding.
             */
            // @ts-ignore
            constructor(out: java.io.OutputStream, autoFlush: boolean)
            /**
             * Creates a new PrintWriter, without automatic line flushing, with the
             * specified file name.  This convenience constructor creates the necessary
             * intermediate {@link java.io.OutputStreamWriter OutputStreamWriter},
             * which will encode characters using the {@linkplain
             * java.nio.charset.Charset#defaultCharset() default charset} for this
             * instance of the Java virtual machine.
             */
            // @ts-ignore
            constructor(fileName: string)
            /**
             * Creates a new PrintWriter, without automatic line flushing, with the
             * specified file name and charset.  This convenience constructor creates
             * the necessary intermediate {@link java.io.OutputStreamWriter
             * OutputStreamWriter}, which will encode characters using the provided
             * charset.
             */
            // @ts-ignore
            constructor(fileName: string, csn: string)
            /**
             * Creates a new PrintWriter, without automatic line flushing, with the
             * specified file.  This convenience constructor creates the necessary
             * intermediate {@link java.io.OutputStreamWriter OutputStreamWriter},
             * which will encode characters using the {@linkplain
             * java.nio.charset.Charset#defaultCharset() default charset} for this
             * instance of the Java virtual machine.
             */
            // @ts-ignore
            constructor(file: java.io.File)
            /**
             * Creates a new PrintWriter, without automatic line flushing, with the
             * specified file and charset.  This convenience constructor creates the
             * necessary intermediate {@link java.io.OutputStreamWriter
             * OutputStreamWriter}, which will encode characters using the provided
             * charset.
             */
            // @ts-ignore
            constructor(file: java.io.File, csn: string)
            // @ts-ignore
            protected out: java.io.Writer;
            /**
             * Flushes the stream.
             */
            // @ts-ignore
            public flush(): void;
            /**
             * Closes the stream and releases any system resources associated
             * with it. Closing a previously closed stream has no effect.
             */
            // @ts-ignore
            public close(): void;
            /**
             * Flushes the stream if it's not closed and checks its error state.
             */
            // @ts-ignore
            public checkError(): boolean;
            /**
             * Indicates that an error has occurred.
             * <p> This method will cause subsequent invocations of {@link
             * #checkError()} to return <tt>true</tt> until {@link
             * #clearError()} is invoked.
             */
            // @ts-ignore
            protected setError(): void;
            /**
             * Clears the error state of this stream.
             * <p> This method will cause subsequent invocations of {@link
             * #checkError()} to return <tt>false</tt> until another write
             * operation fails and invokes {@link #setError()}.
             */
            // @ts-ignore
            protected clearError(): void;
            /**
             * Writes a single character.
             */
            // @ts-ignore
            public write(c: number): void;
            /**
             * Writes A Portion of an array of characters.
             */
            // @ts-ignore
            public write(buf: string, off: number, len: number): void;
            /**
             * Writes an array of characters.  This method cannot be inherited from the
             * Writer class because it must suppress I/O exceptions.
             */
            // @ts-ignore
            public write(buf: string): void;
            /**
             * Writes a portion of a string.
             */
            // @ts-ignore
            public write(s: string, off: number, len: number): void;
            /**
             * Writes a string.  This method cannot be inherited from the Writer class
             * because it must suppress I/O exceptions.
             */
            // @ts-ignore
            public write(s: string): void;
            /**
             * Prints a boolean value.  The string produced by <code>{@link
             * java.lang.String#valueOf(boolean)}</code> is translated into bytes
             * according to the platform's default character encoding, and these bytes
             * are written in exactly the manner of the <code>{@link
             * #write(int)}</code> method.
             */
            // @ts-ignore
            public print(b: boolean): void;
            /**
             * Prints a character.  The character is translated into one or more bytes
             * according to the platform's default character encoding, and these bytes
             * are written in exactly the manner of the <code>{@link
             * #write(int)}</code> method.
             */
            // @ts-ignore
            public print(c: string): void;
            /**
             * Prints an integer.  The string produced by <code>{@link
             * java.lang.String#valueOf(int)}</code> is translated into bytes according
             * to the platform's default character encoding, and these bytes are
             * written in exactly the manner of the <code>{@link #write(int)}</code>
             * method.
             */
            // @ts-ignore
            public print(i: number): void;
            /**
             * Prints a long integer.  The string produced by <code>{@link
             * java.lang.String#valueOf(long)}</code> is translated into bytes
             * according to the platform's default character encoding, and these bytes
             * are written in exactly the manner of the <code>{@link #write(int)}</code>
             * method.
             */
            // @ts-ignore
            public print(l: number): void;
            /**
             * Prints a floating-point number.  The string produced by <code>{@link
             * java.lang.String#valueOf(float)}</code> is translated into bytes
             * according to the platform's default character encoding, and these bytes
             * are written in exactly the manner of the <code>{@link #write(int)}</code>
             * method.
             */
            // @ts-ignore
            public print(f: number): void;
            /**
             * Prints a double-precision floating-point number.  The string produced by
             * <code>{@link java.lang.String#valueOf(double)}</code> is translated into
             * bytes according to the platform's default character encoding, and these
             * bytes are written in exactly the manner of the <code>{@link
             * #write(int)}</code> method.
             */
            // @ts-ignore
            public print(d: number): void;
            /**
             * Prints an array of characters.  The characters are converted into bytes
             * according to the platform's default character encoding, and these bytes
             * are written in exactly the manner of the <code>{@link #write(int)}</code>
             * method.
             */
            // @ts-ignore
            public print(s: string): void;
            /**
             * Prints a string.  If the argument is <code>null</code> then the string
             * <code>"null"</code> is printed.  Otherwise, the string's characters are
             * converted into bytes according to the platform's default character
             * encoding, and these bytes are written in exactly the manner of the
             * <code>{@link #write(int)}</code> method.
             */
            // @ts-ignore
            public print(s: string): void;
            /**
             * Prints an object.  The string produced by the <code>{@link
             * java.lang.String#valueOf(Object)}</code> method is translated into bytes
             * according to the platform's default character encoding, and these bytes
             * are written in exactly the manner of the <code>{@link #write(int)}</code>
             * method.
             */
            // @ts-ignore
            public print(obj: java.lang.Object): void;
            /**
             * Terminates the current line by writing the line separator string.  The
             * line separator string is defined by the system property
             * <code>line.separator</code>, and is not necessarily a single newline
             * character (<code>'\n'</code>).
             */
            // @ts-ignore
            public println(): void;
            /**
             * Prints a boolean value and then terminates the line.  This method behaves
             * as though it invokes <code>{@link #print(boolean)}</code> and then
             * <code>{@link #println()}</code>.
             */
            // @ts-ignore
            public println(x: boolean): void;
            /**
             * Prints a character and then terminates the line.  This method behaves as
             * though it invokes <code>{@link #print(char)}</code> and then <code>{@link
             * #println()}</code>.
             */
            // @ts-ignore
            public println(x: string): void;
            /**
             * Prints an integer and then terminates the line.  This method behaves as
             * though it invokes <code>{@link #print(int)}</code> and then <code>{@link
             * #println()}</code>.
             */
            // @ts-ignore
            public println(x: number): void;
            /**
             * Prints a long integer and then terminates the line.  This method behaves
             * as though it invokes <code>{@link #print(long)}</code> and then
             * <code>{@link #println()}</code>.
             */
            // @ts-ignore
            public println(x: number): void;
            /**
             * Prints a floating-point number and then terminates the line.  This method
             * behaves as though it invokes <code>{@link #print(float)}</code> and then
             * <code>{@link #println()}</code>.
             */
            // @ts-ignore
            public println(x: number): void;
            /**
             * Prints a double-precision floating-point number and then terminates the
             * line.  This method behaves as though it invokes <code>{@link
             * #print(double)}</code> and then <code>{@link #println()}</code>.
             */
            // @ts-ignore
            public println(x: number): void;
            /**
             * Prints an array of characters and then terminates the line.  This method
             * behaves as though it invokes <code>{@link #print(char[])}</code> and then
             * <code>{@link #println()}</code>.
             */
            // @ts-ignore
            public println(x: string): void;
            /**
             * Prints a String and then terminates the line.  This method behaves as
             * though it invokes <code>{@link #print(String)}</code> and then
             * <code>{@link #println()}</code>.
             */
            // @ts-ignore
            public println(x: string): void;
            /**
             * Prints an Object and then terminates the line.  This method calls
             * at first String.valueOf(x) to get the printed object's string value,
             * then behaves as
             * though it invokes <code>{@link #print(String)}</code> and then
             * <code>{@link #println()}</code>.
             */
            // @ts-ignore
            public println(x: java.lang.Object): void;
            /**
             * A convenience method to write a formatted string to this writer using
             * the specified format string and arguments.  If automatic flushing is
             * enabled, calls to this method will flush the output buffer.
             * <p> An invocation of this method of the form <tt>out.printf(format,
             * args)</tt> behaves in exactly the same way as the invocation
             * <pre>
             * out.format(format, args) </pre>
             */
            // @ts-ignore
            public printf(format: string, args: java.lang.Object): java.io.PrintWriter;
            /**
             * A convenience method to write a formatted string to this writer using
             * the specified format string and arguments.  If automatic flushing is
             * enabled, calls to this method will flush the output buffer.
             * <p> An invocation of this method of the form <tt>out.printf(l, format,
             * args)</tt> behaves in exactly the same way as the invocation
             * <pre>
             * out.format(l, format, args) </pre>
             */
            // @ts-ignore
            public printf(l: java.util.Locale, format: string, args: java.lang.Object): java.io.PrintWriter;
            /**
             * Writes a formatted string to this writer using the specified format
             * string and arguments.  If automatic flushing is enabled, calls to this
             * method will flush the output buffer.
             * <p> The locale always used is the one returned by {@link
             * java.util.Locale#getDefault() Locale.getDefault()}, regardless of any
             * previous invocations of other formatting methods on this object.
             */
            // @ts-ignore
            public format(format: string, args: java.lang.Object): java.io.PrintWriter;
            /**
             * Writes a formatted string to this writer using the specified format
             * string and arguments.  If automatic flushing is enabled, calls to this
             * method will flush the output buffer.
             */
            // @ts-ignore
            public format(l: java.util.Locale, format: string, args: java.lang.Object): java.io.PrintWriter;
            /**
             * Appends the specified character sequence to this writer.
             * <p> An invocation of this method of the form <tt>out.append(csq)</tt>
             * behaves in exactly the same way as the invocation
             * <pre>
             * out.write(csq.toString()) </pre>
             * <p> Depending on the specification of <tt>toString</tt> for the
             * character sequence <tt>csq</tt>, the entire sequence may not be
             * appended. For instance, invoking the <tt>toString</tt> method of a
             * character buffer will return a subsequence whose content depends upon
             * the buffer's position and limit.
             */
            // @ts-ignore
            public append(csq: java.lang.CharSequence): java.io.PrintWriter;
            /**
             * Appends a subsequence of the specified character sequence to this writer.
             * <p> An invocation of this method of the form <tt>out.append(csq, start,
             * end)</tt> when <tt>csq</tt> is not <tt>null</tt>, behaves in
             * exactly the same way as the invocation
             * <pre>
             * out.write(csq.subSequence(start, end).toString()) </pre>
             */
            // @ts-ignore
            public append(csq: java.lang.CharSequence, start: number, end: number): java.io.PrintWriter;
            /**
             * Appends the specified character to this writer.
             * <p> An invocation of this method of the form <tt>out.append(c)</tt>
             * behaves in exactly the same way as the invocation
             * <pre>
             * out.write(c) </pre>
             */
            // @ts-ignore
            public append(c: string): java.io.PrintWriter;
        }
    }
}
