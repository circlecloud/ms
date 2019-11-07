declare namespace java {
    namespace util {
        // @ts-ignore
         class Scanner extends java.lang.Object {
            /**
             * Constructs a new <code>Scanner</code> that produces values scanned
             * from the specified source.
             */
            // @ts-ignore
            constructor(source: java.lang.Readable)
            /**
             * Constructs a new <code>Scanner</code> that produces values scanned
             * from the specified input stream. Bytes from the stream are converted
             * into characters using the underlying platform's
             * {@linkplain java.nio.charset.Charset#defaultCharset() default charset}.
             */
            // @ts-ignore
            constructor(source: java.io.InputStream)
            /**
             * Constructs a new <code>Scanner</code> that produces values scanned
             * from the specified input stream. Bytes from the stream are converted
             * into characters using the specified charset.
             */
            // @ts-ignore
            constructor(source: java.io.InputStream, charsetName: string)
            /**
             * Constructs a new <code>Scanner</code> that produces values scanned
             * from the specified file. Bytes from the file are converted into
             * characters using the underlying platform's
             * {@linkplain java.nio.charset.Charset#defaultCharset() default charset}.
             */
            // @ts-ignore
            constructor(source: java.io.File)
            /**
             * Constructs a new <code>Scanner</code> that produces values scanned
             * from the specified file. Bytes from the file are converted into
             * characters using the specified charset.
             */
            // @ts-ignore
            constructor(source: java.io.File, charsetName: string)
            /**
             * Constructs a new <code>Scanner</code> that produces values scanned
             * from the specified file. Bytes from the file are converted into
             * characters using the underlying platform's
             * {@linkplain java.nio.charset.Charset#defaultCharset() default charset}.
             */
            // @ts-ignore
            constructor(source: java.nio.file.Path)
            /**
             * Constructs a new <code>Scanner</code> that produces values scanned
             * from the specified file. Bytes from the file are converted into
             * characters using the specified charset.
             */
            // @ts-ignore
            constructor(source: java.nio.file.Path, charsetName: string)
            /**
             * Constructs a new <code>Scanner</code> that produces values scanned
             * from the specified string.
             */
            // @ts-ignore
            constructor(source: string)
            /**
             * Constructs a new <code>Scanner</code> that produces values scanned
             * from the specified channel. Bytes from the source are converted into
             * characters using the underlying platform's
             * {@linkplain java.nio.charset.Charset#defaultCharset() default charset}.
             */
            // @ts-ignore
            constructor(source: java.nio.channels.ReadableByteChannel)
            /**
             * Constructs a new <code>Scanner</code> that produces values scanned
             * from the specified channel. Bytes from the source are converted into
             * characters using the specified charset.
             */
            // @ts-ignore
            constructor(source: java.nio.channels.ReadableByteChannel, charsetName: string)
            /**
             * Closes this scanner.
             * <p> If this scanner has not yet been closed then if its underlying
             * {@linkplain java.lang.Readable readable} also implements the {@link
             * java.io.Closeable} interface then the readable's <tt>close</tt> method
             * will be invoked.  If this scanner is already closed then invoking this
             * method will have no effect.
             * <p>Attempting to perform search operations after a scanner has
             * been closed will result in an {@link IllegalStateException}.
             */
            // @ts-ignore
            public close(): void;
            /**
             * Returns the <code>IOException</code> last thrown by this
             * <code>Scanner</code>'s underlying <code>Readable</code>. This method
             * returns <code>null</code> if no such exception exists.
             */
            // @ts-ignore
            public ioException(): java.io.IOException;
            /**
             * Returns the <code>Pattern</code> this <code>Scanner</code> is currently
             * using to match delimiters.
             */
            // @ts-ignore
            public delimiter(): java.util.regex.Pattern;
            /**
             * Sets this scanner's delimiting pattern to the specified pattern.
             */
            // @ts-ignore
            public useDelimiter(pattern: java.util.regex.Pattern): java.util.Scanner;
            /**
             * Sets this scanner's delimiting pattern to a pattern constructed from
             * the specified <code>String</code>.
             * <p> An invocation of this method of the form
             * <tt>useDelimiter(pattern)</tt> behaves in exactly the same way as the
             * invocation <tt>useDelimiter(Pattern.compile(pattern))</tt>.
             * <p> Invoking the {@link #reset} method will set the scanner's delimiter
             * to the <a href= "#default-delimiter">default</a>.
             */
            // @ts-ignore
            public useDelimiter(pattern: string): java.util.Scanner;
            /**
             * Returns this scanner's locale.
             * <p>A scanner's locale affects many elements of its default
             * primitive matching regular expressions; see
             * <a href= "#localized-numbers">localized numbers</a> above.
             */
            // @ts-ignore
            public locale(): java.util.Locale;
            /**
             * Sets this scanner's locale to the specified locale.
             * <p>A scanner's locale affects many elements of its default
             * primitive matching regular expressions; see
             * <a href= "#localized-numbers">localized numbers</a> above.
             * <p>Invoking the {@link #reset} method will set the scanner's locale to
             * the <a href= "#initial-locale">initial locale</a>.
             */
            // @ts-ignore
            public useLocale(locale: java.util.Locale): java.util.Scanner;
            /**
             * Returns this scanner's default radix.
             * <p>A scanner's radix affects elements of its default
             * number matching regular expressions; see
             * <a href= "#localized-numbers">localized numbers</a> above.
             */
            // @ts-ignore
            public radix(): number;
            /**
             * Sets this scanner's default radix to the specified radix.
             * <p>A scanner's radix affects elements of its default
             * number matching regular expressions; see
             * <a href= "#localized-numbers">localized numbers</a> above.
             * <p>If the radix is less than <code>Character.MIN_RADIX</code>
             * or greater than <code>Character.MAX_RADIX</code>, then an
             * <code>IllegalArgumentException</code> is thrown.
             * <p>Invoking the {@link #reset} method will set the scanner's radix to
             * <code>10</code>.
             */
            // @ts-ignore
            public useRadix(radix: number): java.util.Scanner;
            /**
             * Returns the match result of the last scanning operation performed
             * by this scanner. This method throws <code>IllegalStateException</code>
             * if no match has been performed, or if the last match was
             * not successful.
             * <p>The various <code>next</code>methods of <code>Scanner</code>
             * make a match result available if they complete without throwing an
             * exception. For instance, after an invocation of the {@link #nextInt}
             * method that returned an int, this method returns a
             * <code>MatchResult</code> for the search of the
             * <a href="#Integer-regex"><i>Integer</i></a> regular expression
             * defined above. Similarly the {@link #findInLine},
             * {@link #findWithinHorizon}, and {@link #skip} methods will make a
             * match available if they succeed.
             */
            // @ts-ignore
            public match(): java.util.regex.MatchResult;
            /**
             * <p>Returns the string representation of this <code>Scanner</code>. The
             * string representation of a <code>Scanner</code> contains information
             * that may be useful for debugging. The exact format is unspecified.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns true if this scanner has another token in its input.
             * This method may block while waiting for input to scan.
             * The scanner does not advance past any input.
             */
            // @ts-ignore
            public hasNext(): boolean;
            /**
             * Finds and returns the next complete token from this scanner.
             * A complete token is preceded and followed by input that matches
             * the delimiter pattern. This method may block while waiting for input
             * to scan, even if a previous invocation of {@link #hasNext} returned
             * <code>true</code>.
             */
            // @ts-ignore
            public next(): string;
            /**
             * The remove operation is not supported by this implementation of
             * <code>Iterator</code>.
             */
            // @ts-ignore
            public remove(): void;
            /**
             * Returns true if the next token matches the pattern constructed from the
             * specified string. The scanner does not advance past any input.
             * <p> An invocation of this method of the form <tt>hasNext(pattern)</tt>
             * behaves in exactly the same way as the invocation
             * <tt>hasNext(Pattern.compile(pattern))</tt>.
             */
            // @ts-ignore
            public hasNext(pattern: string): boolean;
            /**
             * Returns the next token if it matches the pattern constructed from the
             * specified string.  If the match is successful, the scanner advances
             * past the input that matched the pattern.
             * <p> An invocation of this method of the form <tt>next(pattern)</tt>
             * behaves in exactly the same way as the invocation
             * <tt>next(Pattern.compile(pattern))</tt>.
             */
            // @ts-ignore
            public next(pattern: string): string;
            /**
             * Returns true if the next complete token matches the specified pattern.
             * A complete token is prefixed and postfixed by input that matches
             * the delimiter pattern. This method may block while waiting for input.
             * The scanner does not advance past any input.
             */
            // @ts-ignore
            public hasNext(pattern: java.util.regex.Pattern): boolean;
            /**
             * Returns the next token if it matches the specified pattern. This
             * method may block while waiting for input to scan, even if a previous
             * invocation of {@link #hasNext(Pattern)} returned <code>true</code>.
             * If the match is successful, the scanner advances past the input that
             * matched the pattern.
             */
            // @ts-ignore
            public next(pattern: java.util.regex.Pattern): string;
            /**
             * Returns true if there is another line in the input of this scanner.
             * This method may block while waiting for input. The scanner does not
             * advance past any input.
             */
            // @ts-ignore
            public hasNextLine(): boolean;
            /**
             * Advances this scanner past the current line and returns the input
             * that was skipped.
             * This method returns the rest of the current line, excluding any line
             * separator at the end. The position is set to the beginning of the next
             * line.
             * <p>Since this method continues to search through the input looking
             * for a line separator, it may buffer all of the input searching for
             * the line to skip if no line separators are present.
             */
            // @ts-ignore
            public nextLine(): string;
            /**
             * Attempts to find the next occurrence of a pattern constructed from the
             * specified string, ignoring delimiters.
             * <p>An invocation of this method of the form <tt>findInLine(pattern)</tt>
             * behaves in exactly the same way as the invocation
             * <tt>findInLine(Pattern.compile(pattern))</tt>.
             */
            // @ts-ignore
            public findInLine(pattern: string): string;
            /**
             * Attempts to find the next occurrence of the specified pattern ignoring
             * delimiters. If the pattern is found before the next line separator, the
             * scanner advances past the input that matched and returns the string that
             * matched the pattern.
             * If no such pattern is detected in the input up to the next line
             * separator, then <code>null</code> is returned and the scanner's
             * position is unchanged. This method may block waiting for input that
             * matches the pattern.
             * <p>Since this method continues to search through the input looking
             * for the specified pattern, it may buffer all of the input searching for
             * the desired token if no line separators are present.
             */
            // @ts-ignore
            public findInLine(pattern: java.util.regex.Pattern): string;
            /**
             * Attempts to find the next occurrence of a pattern constructed from the
             * specified string, ignoring delimiters.
             * <p>An invocation of this method of the form
             * <tt>findWithinHorizon(pattern)</tt> behaves in exactly the same way as
             * the invocation
             * <tt>findWithinHorizon(Pattern.compile(pattern, horizon))</tt>.
             */
            // @ts-ignore
            public findWithinHorizon(pattern: string, horizon: number): string;
            /**
             * Attempts to find the next occurrence of the specified pattern.
             * <p>This method searches through the input up to the specified
             * search horizon, ignoring delimiters. If the pattern is found the
             * scanner advances past the input that matched and returns the string
             * that matched the pattern. If no such pattern is detected then the
             * null is returned and the scanner's position remains unchanged. This
             * method may block waiting for input that matches the pattern.
             * <p>A scanner will never search more than <code>horizon</code> code
             * points beyond its current position. Note that a match may be clipped
             * by the horizon; that is, an arbitrary match result may have been
             * different if the horizon had been larger. The scanner treats the
             * horizon as a transparent, non-anchoring bound (see {@link
             * Matcher#useTransparentBounds} and {@link Matcher#useAnchoringBounds}).
             * <p>If horizon is <code>0</code>, then the horizon is ignored and
             * this method continues to search through the input looking for the
             * specified pattern without bound. In this case it may buffer all of
             * the input searching for the pattern.
             * <p>If horizon is negative, then an IllegalArgumentException is
             * thrown.
             */
            // @ts-ignore
            public findWithinHorizon(pattern: java.util.regex.Pattern, horizon: number): string;
            /**
             * Skips input that matches the specified pattern, ignoring delimiters.
             * This method will skip input if an anchored match of the specified
             * pattern succeeds.
             * <p>If a match to the specified pattern is not found at the
             * current position, then no input is skipped and a
             * <tt>NoSuchElementException</tt> is thrown.
             * <p>Since this method seeks to match the specified pattern starting at
             * the scanner's current position, patterns that can match a lot of
             * input (".*", for example) may cause the scanner to buffer a large
             * amount of input.
             * <p>Note that it is possible to skip something without risking a
             * <code>NoSuchElementException</code> by using a pattern that can
             * match nothing, e.g., <code>sc.skip("[ \t]*")</code>.
             */
            // @ts-ignore
            public skip(pattern: java.util.regex.Pattern): java.util.Scanner;
            /**
             * Skips input that matches a pattern constructed from the specified
             * string.
             * <p> An invocation of this method of the form <tt>skip(pattern)</tt>
             * behaves in exactly the same way as the invocation
             * <tt>skip(Pattern.compile(pattern))</tt>.
             */
            // @ts-ignore
            public skip(pattern: string): java.util.Scanner;
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a boolean value using a case insensitive pattern
             * created from the string "true|false".  The scanner does not
             * advance past the input that matched.
             */
            // @ts-ignore
            public hasNextBoolean(): boolean;
            /**
             * Scans the next token of the input into a boolean value and returns
             * that value. This method will throw <code>InputMismatchException</code>
             * if the next token cannot be translated into a valid boolean value.
             * If the match is successful, the scanner advances past the input that
             * matched.
             */
            // @ts-ignore
            public nextBoolean(): boolean;
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a byte value in the default radix using the
             * {@link #nextByte} method. The scanner does not advance past any input.
             */
            // @ts-ignore
            public hasNextByte(): boolean;
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a byte value in the specified radix using the
             * {@link #nextByte} method. The scanner does not advance past any input.
             */
            // @ts-ignore
            public hasNextByte(radix: number): boolean;
            /**
             * Scans the next token of the input as a <tt>byte</tt>.
             * <p> An invocation of this method of the form
             * <tt>nextByte()</tt> behaves in exactly the same way as the
             * invocation <tt>nextByte(radix)</tt>, where <code>radix</code>
             * is the default radix of this scanner.
             */
            // @ts-ignore
            public nextByte(): number;
            /**
             * Scans the next token of the input as a <tt>byte</tt>.
             * This method will throw <code>InputMismatchException</code>
             * if the next token cannot be translated into a valid byte value as
             * described below. If the translation is successful, the scanner advances
             * past the input that matched.
             * <p> If the next token matches the <a
             * href="#Integer-regex"><i>Integer</i></a> regular expression defined
             * above then the token is converted into a <tt>byte</tt> value as if by
             * removing all locale specific prefixes, group separators, and locale
             * specific suffixes, then mapping non-ASCII digits into ASCII
             * digits via {@link Character#digit Character.digit}, prepending a
             * negative sign (-) if the locale specific negative prefixes and suffixes
             * were present, and passing the resulting string to
             * {@link Byte#parseByte(String, int) Byte.parseByte} with the
             * specified radix.
             */
            // @ts-ignore
            public nextByte(radix: number): number;
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a short value in the default radix using the
             * {@link #nextShort} method. The scanner does not advance past any input.
             */
            // @ts-ignore
            public hasNextShort(): boolean;
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a short value in the specified radix using the
             * {@link #nextShort} method. The scanner does not advance past any input.
             */
            // @ts-ignore
            public hasNextShort(radix: number): boolean;
            /**
             * Scans the next token of the input as a <tt>short</tt>.
             * <p> An invocation of this method of the form
             * <tt>nextShort()</tt> behaves in exactly the same way as the
             * invocation <tt>nextShort(radix)</tt>, where <code>radix</code>
             * is the default radix of this scanner.
             */
            // @ts-ignore
            public nextShort(): number;
            /**
             * Scans the next token of the input as a <tt>short</tt>.
             * This method will throw <code>InputMismatchException</code>
             * if the next token cannot be translated into a valid short value as
             * described below. If the translation is successful, the scanner advances
             * past the input that matched.
             * <p> If the next token matches the <a
             * href="#Integer-regex"><i>Integer</i></a> regular expression defined
             * above then the token is converted into a <tt>short</tt> value as if by
             * removing all locale specific prefixes, group separators, and locale
             * specific suffixes, then mapping non-ASCII digits into ASCII
             * digits via {@link Character#digit Character.digit}, prepending a
             * negative sign (-) if the locale specific negative prefixes and suffixes
             * were present, and passing the resulting string to
             * {@link Short#parseShort(String, int) Short.parseShort} with the
             * specified radix.
             */
            // @ts-ignore
            public nextShort(radix: number): number;
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as an int value in the default radix using the
             * {@link #nextInt} method. The scanner does not advance past any input.
             */
            // @ts-ignore
            public hasNextInt(): boolean;
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as an int value in the specified radix using the
             * {@link #nextInt} method. The scanner does not advance past any input.
             */
            // @ts-ignore
            public hasNextInt(radix: number): boolean;
            /**
             * Scans the next token of the input as an <tt>int</tt>.
             * <p> An invocation of this method of the form
             * <tt>nextInt()</tt> behaves in exactly the same way as the
             * invocation <tt>nextInt(radix)</tt>, where <code>radix</code>
             * is the default radix of this scanner.
             */
            // @ts-ignore
            public nextInt(): number;
            /**
             * Scans the next token of the input as an <tt>int</tt>.
             * This method will throw <code>InputMismatchException</code>
             * if the next token cannot be translated into a valid int value as
             * described below. If the translation is successful, the scanner advances
             * past the input that matched.
             * <p> If the next token matches the <a
             * href="#Integer-regex"><i>Integer</i></a> regular expression defined
             * above then the token is converted into an <tt>int</tt> value as if by
             * removing all locale specific prefixes, group separators, and locale
             * specific suffixes, then mapping non-ASCII digits into ASCII
             * digits via {@link Character#digit Character.digit}, prepending a
             * negative sign (-) if the locale specific negative prefixes and suffixes
             * were present, and passing the resulting string to
             * {@link Integer#parseInt(String, int) Integer.parseInt} with the
             * specified radix.
             */
            // @ts-ignore
            public nextInt(radix: number): number;
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a long value in the default radix using the
             * {@link #nextLong} method. The scanner does not advance past any input.
             */
            // @ts-ignore
            public hasNextLong(): boolean;
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a long value in the specified radix using the
             * {@link #nextLong} method. The scanner does not advance past any input.
             */
            // @ts-ignore
            public hasNextLong(radix: number): boolean;
            /**
             * Scans the next token of the input as a <tt>long</tt>.
             * <p> An invocation of this method of the form
             * <tt>nextLong()</tt> behaves in exactly the same way as the
             * invocation <tt>nextLong(radix)</tt>, where <code>radix</code>
             * is the default radix of this scanner.
             */
            // @ts-ignore
            public nextLong(): number;
            /**
             * Scans the next token of the input as a <tt>long</tt>.
             * This method will throw <code>InputMismatchException</code>
             * if the next token cannot be translated into a valid long value as
             * described below. If the translation is successful, the scanner advances
             * past the input that matched.
             * <p> If the next token matches the <a
             * href="#Integer-regex"><i>Integer</i></a> regular expression defined
             * above then the token is converted into a <tt>long</tt> value as if by
             * removing all locale specific prefixes, group separators, and locale
             * specific suffixes, then mapping non-ASCII digits into ASCII
             * digits via {@link Character#digit Character.digit}, prepending a
             * negative sign (-) if the locale specific negative prefixes and suffixes
             * were present, and passing the resulting string to
             * {@link Long#parseLong(String, int) Long.parseLong} with the
             * specified radix.
             */
            // @ts-ignore
            public nextLong(radix: number): number;
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a float value using the {@link #nextFloat}
             * method. The scanner does not advance past any input.
             */
            // @ts-ignore
            public hasNextFloat(): boolean;
            /**
             * Scans the next token of the input as a <tt>float</tt>.
             * This method will throw <code>InputMismatchException</code>
             * if the next token cannot be translated into a valid float value as
             * described below. If the translation is successful, the scanner advances
             * past the input that matched.
             * <p> If the next token matches the <a
             * href="#Float-regex"><i>Float</i></a> regular expression defined above
             * then the token is converted into a <tt>float</tt> value as if by
             * removing all locale specific prefixes, group separators, and locale
             * specific suffixes, then mapping non-ASCII digits into ASCII
             * digits via {@link Character#digit Character.digit}, prepending a
             * negative sign (-) if the locale specific negative prefixes and suffixes
             * were present, and passing the resulting string to
             * {@link Float#parseFloat Float.parseFloat}. If the token matches
             * the localized NaN or infinity strings, then either "Nan" or "Infinity"
             * is passed to {@link Float#parseFloat(String) Float.parseFloat} as
             * appropriate.
             */
            // @ts-ignore
            public nextFloat(): number;
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a double value using the {@link #nextDouble}
             * method. The scanner does not advance past any input.
             */
            // @ts-ignore
            public hasNextDouble(): boolean;
            /**
             * Scans the next token of the input as a <tt>double</tt>.
             * This method will throw <code>InputMismatchException</code>
             * if the next token cannot be translated into a valid double value.
             * If the translation is successful, the scanner advances past the input
             * that matched.
             * <p> If the next token matches the <a
             * href="#Float-regex"><i>Float</i></a> regular expression defined above
             * then the token is converted into a <tt>double</tt> value as if by
             * removing all locale specific prefixes, group separators, and locale
             * specific suffixes, then mapping non-ASCII digits into ASCII
             * digits via {@link Character#digit Character.digit}, prepending a
             * negative sign (-) if the locale specific negative prefixes and suffixes
             * were present, and passing the resulting string to
             * {@link Double#parseDouble Double.parseDouble}. If the token matches
             * the localized NaN or infinity strings, then either "Nan" or "Infinity"
             * is passed to {@link Double#parseDouble(String) Double.parseDouble} as
             * appropriate.
             */
            // @ts-ignore
            public nextDouble(): number;
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a <code>BigInteger</code> in the default radix using the
             * {@link #nextBigInteger} method. The scanner does not advance past any
             * input.
             */
            // @ts-ignore
            public hasNextBigInteger(): boolean;
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a <code>BigInteger</code> in the specified radix using
             * the {@link #nextBigInteger} method. The scanner does not advance past
             * any input.
             */
            // @ts-ignore
            public hasNextBigInteger(radix: number): boolean;
            /**
             * Scans the next token of the input as a {@link java.math.BigInteger
             * BigInteger}.
             * <p> An invocation of this method of the form
             * <tt>nextBigInteger()</tt> behaves in exactly the same way as the
             * invocation <tt>nextBigInteger(radix)</tt>, where <code>radix</code>
             * is the default radix of this scanner.
             */
            // @ts-ignore
            public nextBigInteger(): java.math.BigInteger;
            /**
             * Scans the next token of the input as a {@link java.math.BigInteger
             * BigInteger}.
             * <p> If the next token matches the <a
             * href="#Integer-regex"><i>Integer</i></a> regular expression defined
             * above then the token is converted into a <tt>BigInteger</tt> value as if
             * by removing all group separators, mapping non-ASCII digits into ASCII
             * digits via the {@link Character#digit Character.digit}, and passing the
             * resulting string to the {@link
             * java.math.BigInteger#BigInteger(java.lang.String)
             * BigInteger(String, int)} constructor with the specified radix.
             */
            // @ts-ignore
            public nextBigInteger(radix: number): java.math.BigInteger;
            /**
             * Returns true if the next token in this scanner's input can be
             * interpreted as a <code>BigDecimal</code> using the
             * {@link #nextBigDecimal} method. The scanner does not advance past any
             * input.
             */
            // @ts-ignore
            public hasNextBigDecimal(): boolean;
            /**
             * Scans the next token of the input as a {@link java.math.BigDecimal
             * BigDecimal}.
             * <p> If the next token matches the <a
             * href="#Decimal-regex"><i>Decimal</i></a> regular expression defined
             * above then the token is converted into a <tt>BigDecimal</tt> value as if
             * by removing all group separators, mapping non-ASCII digits into ASCII
             * digits via the {@link Character#digit Character.digit}, and passing the
             * resulting string to the {@link
             * java.math.BigDecimal#BigDecimal(java.lang.String) BigDecimal(String)}
             * constructor.
             */
            // @ts-ignore
            public nextBigDecimal(): java.math.BigDecimal;
            /**
             * Resets this scanner.
             * <p> Resetting a scanner discards all of its explicit state
             * information which may have been changed by invocations of {@link
             * #useDelimiter}, {@link #useLocale}, or {@link #useRadix}.
             * <p> An invocation of this method of the form
             * <tt>scanner.reset()</tt> behaves in exactly the same way as the
             * invocation
             * <blockquote><pre>{@code
             * scanner.useDelimiter("\\p{javaWhitespace}+")
             * .useLocale(Locale.getDefault(Locale.Category.FORMAT))
             * .useRadix(10);
             * }</pre></blockquote>
             */
            // @ts-ignore
            public reset(): java.util.Scanner;
        }
    }
}
