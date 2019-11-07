// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class Formatter extends java.lang.Object {
            /**
             * Constructs a new formatter.
             * <p> The destination of the formatted output is a {@link StringBuilder}
             * which may be retrieved by invoking {@link #out out()} and whose
             * current content may be converted into a string by invoking {@link
             * #toString toString()}.  The locale used is the {@linkplain
             * Locale#getDefault(Locale.Category) default locale} for
             * {@linkplain Locale.Category#FORMAT formatting} for this instance of the Java
             * virtual machine.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new formatter with the specified destination.
             * <p> The locale used is the {@linkplain
             * Locale#getDefault(Locale.Category) default locale} for
             * {@linkplain Locale.Category#FORMAT formatting} for this instance of the Java
             * virtual machine.
             */
            // @ts-ignore
            constructor(a: java.lang.Appendable)
            /**
             * Constructs a new formatter with the specified locale.
             * <p> The destination of the formatted output is a {@link StringBuilder}
             * which may be retrieved by invoking {@link #out out()} and whose current
             * content may be converted into a string by invoking {@link #toString
             * toString()}.
             */
            // @ts-ignore
            constructor(l: java.util.Locale)
            /**
             * Constructs a new formatter with the specified destination and locale.
             */
            // @ts-ignore
            constructor(a: java.lang.Appendable, l: java.util.Locale)
            /**
             * Constructs a new formatter with the specified file name.
             * <p> The charset used is the {@linkplain
             * java.nio.charset.Charset#defaultCharset() default charset} for this
             * instance of the Java virtual machine.
             * <p> The locale used is the {@linkplain
             * Locale#getDefault(Locale.Category) default locale} for
             * {@linkplain Locale.Category#FORMAT formatting} for this instance of the Java
             * virtual machine.
             */
            // @ts-ignore
            constructor(fileName: string)
            /**
             * Constructs a new formatter with the specified file name and charset.
             * <p> The locale used is the {@linkplain
             * Locale#getDefault(Locale.Category) default locale} for
             * {@linkplain Locale.Category#FORMAT formatting} for this instance of the Java
             * virtual machine.
             */
            // @ts-ignore
            constructor(fileName: string, csn: string)
            /**
             * Constructs a new formatter with the specified file name, charset, and
             * locale.
             */
            // @ts-ignore
            constructor(fileName: string, csn: string, l: java.util.Locale)
            /**
             * Constructs a new formatter with the specified file.
             * <p> The charset used is the {@linkplain
             * java.nio.charset.Charset#defaultCharset() default charset} for this
             * instance of the Java virtual machine.
             * <p> The locale used is the {@linkplain
             * Locale#getDefault(Locale.Category) default locale} for
             * {@linkplain Locale.Category#FORMAT formatting} for this instance of the Java
             * virtual machine.
             */
            // @ts-ignore
            constructor(file: java.io.File)
            /**
             * Constructs a new formatter with the specified file and charset.
             * <p> The locale used is the {@linkplain
             * Locale#getDefault(Locale.Category) default locale} for
             * {@linkplain Locale.Category#FORMAT formatting} for this instance of the Java
             * virtual machine.
             */
            // @ts-ignore
            constructor(file: java.io.File, csn: string)
            /**
             * Constructs a new formatter with the specified file, charset, and
             * locale.
             */
            // @ts-ignore
            constructor(file: java.io.File, csn: string, l: java.util.Locale)
            /**
             * Constructs a new formatter with the specified print stream.
             * <p> The locale used is the {@linkplain
             * Locale#getDefault(Locale.Category) default locale} for
             * {@linkplain Locale.Category#FORMAT formatting} for this instance of the Java
             * virtual machine.
             * <p> Characters are written to the given {@link java.io.PrintStream
             * PrintStream} object and are therefore encoded using that object's
             * charset.
             */
            // @ts-ignore
            constructor(ps: java.io.PrintStream)
            /**
             * Constructs a new formatter with the specified output stream.
             * <p> The charset used is the {@linkplain
             * java.nio.charset.Charset#defaultCharset() default charset} for this
             * instance of the Java virtual machine.
             * <p> The locale used is the {@linkplain
             * Locale#getDefault(Locale.Category) default locale} for
             * {@linkplain Locale.Category#FORMAT formatting} for this instance of the Java
             * virtual machine.
             */
            // @ts-ignore
            constructor(os: java.io.OutputStream)
            /**
             * Constructs a new formatter with the specified output stream and
             * charset.
             * <p> The locale used is the {@linkplain
             * Locale#getDefault(Locale.Category) default locale} for
             * {@linkplain Locale.Category#FORMAT formatting} for this instance of the Java
             * virtual machine.
             */
            // @ts-ignore
            constructor(os: java.io.OutputStream, csn: string)
            /**
             * Constructs a new formatter with the specified output stream, charset,
             * and locale.
             */
            // @ts-ignore
            constructor(os: java.io.OutputStream, csn: string, l: java.util.Locale)
            /**
             * Returns the locale set by the construction of this formatter.
             * <p> The {@link #format(java.util.Locale,String,Object...) format} method
             * for this object which has a locale argument does not change this value.
             */
            // @ts-ignore
            public locale(): java.util.Locale;
            /**
             * Returns the destination for the output.
             */
            // @ts-ignore
            public out(): java.lang.Appendable;
            /**
             * Returns the result of invoking {@code toString()} on the destination
             * for the output.  For example, the following code formats text into a
             * {@link StringBuilder} then retrieves the resultant string:
             * <blockquote><pre>
             * Formatter f = new Formatter();
             * f.format("Last reboot at %tc", lastRebootDate);
             * String s = f.toString();
             * // -&gt; s == "Last reboot at Sat Jan 01 00:00:00 PST 2000"
             * </pre></blockquote>
             * <p> An invocation of this method behaves in exactly the same way as the
             * invocation
             * <pre>
             * out().toString() </pre>
             * <p> Depending on the specification of {@code toString} for the {@link
             * Appendable}, the returned string may or may not contain the characters
             * written to the destination.  For instance, buffers typically return
             * their contents in {@code toString()}, but streams cannot since the
             * data is discarded.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Flushes this formatter.  If the destination implements the {@link
             * java.io.Flushable} interface, its {@code flush} method will be invoked.
             * <p> Flushing a formatter writes any buffered output in the destination
             * to the underlying stream.
             */
            // @ts-ignore
            public flush(): void;
            /**
             * Closes this formatter.  If the destination implements the {@link
             * java.io.Closeable} interface, its {@code close} method will be invoked.
             * <p> Closing a formatter allows it to release resources it may be holding
             * (such as open files).  If the formatter is already closed, then invoking
             * this method has no effect.
             * <p> Attempting to invoke any methods except {@link #ioException()} in
             * this formatter after it has been closed will result in a {@link
             * FormatterClosedException}.
             */
            // @ts-ignore
            public close(): void;
            /**
             * Returns the {@code IOException} last thrown by this formatter's {@link
             * Appendable}.
             * <p> If the destination's {@code append()} method never throws
             * {@code IOException}, then this method will always return {@code null}.
             */
            // @ts-ignore
            public ioException(): java.io.IOException;
            /**
             * Writes a formatted string to this object's destination using the
             * specified format string and arguments.  The locale used is the one
             * defined during the construction of this formatter.
             */
            // @ts-ignore
            public format(format: string, args: java.lang.Object): java.util.Formatter;
            /**
             * Writes a formatted string to this object's destination using the
             * specified locale, format string, and arguments.
             */
            // @ts-ignore
            public format(l: java.util.Locale, format: string, args: java.lang.Object): java.util.Formatter;
        }
    }
}
