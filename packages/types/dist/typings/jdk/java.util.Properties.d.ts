declare namespace java {
    namespace util {
        // @ts-ignore
         class Properties extends java.util.Hashtable {
            /**
             * Creates an empty property list with no default values.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates an empty property list with the specified defaults.
             */
            // @ts-ignore
            constructor(defaults: java.util.Properties)
            // @ts-ignore
            protected defaults: java.util.Properties;
            /**
             * Calls the <tt>Hashtable</tt> method {@code put}. Provided for
             * parallelism with the <tt>getProperty</tt> method. Enforces use of
             * strings for property keys and values. The value returned is the
             * result of the <tt>Hashtable</tt> call to {@code put}.
             */
            // @ts-ignore
            public setProperty(key: string, value: string): java.lang.Object;
            /**
             * Reads a property list (key and element pairs) from the input
             * character stream in a simple line-oriented format.
             * <p>
             * Properties are processed in terms of lines. There are two
             * kinds of line, <i>natural lines</i> and <i>logical lines</i>.
             * A natural line is defined as a line of
             * characters that is terminated either by a set of line terminator
             * characters ({@code \n} or {@code \r} or {@code \r\n})
             * or by the end of the stream. A natural line may be either a blank line,
             * a comment line, or hold all or some of a key-element pair. A logical
             * line holds all the data of a key-element pair, which may be spread
             * out across several adjacent natural lines by escaping
             * the line terminator sequence with a backslash character
             * {@code \}.  Note that a comment line cannot be extended
             * in this manner; every natural line that is a comment must have
             * its own comment indicator, as described below. Lines are read from
             * input until the end of the stream is reached.
             * <p>
             * A natural line that contains only white space characters is
             * considered blank and is ignored.  A comment line has an ASCII
             * {@code '#'} or {@code '!'} as its first non-white
             * space character; comment lines are also ignored and do not
             * encode key-element information.  In addition to line
             * terminators, this format considers the characters space
             * ({@code ' '}, {@code '\u0020'}), tab
             * ({@code '\t'}, {@code '\u0009'}), and form feed
             * ({@code '\f'}, {@code '\u000C'}) to be white
             * space.
             * <p>
             * If a logical line is spread across several natural lines, the
             * backslash escaping the line terminator sequence, the line
             * terminator sequence, and any white space at the start of the
             * following line have no affect on the key or element values.
             * The remainder of the discussion of key and element parsing
             * (when loading) will assume all the characters constituting
             * the key and element appear on a single natural line after
             * line continuation characters have been removed.  Note that
             * it is <i>not</i> sufficient to only examine the character
             * preceding a line terminator sequence to decide if the line
             * terminator is escaped; there must be an odd number of
             * contiguous backslashes for the line terminator to be escaped.
             * Since the input is processed from left to right, a
             * non-zero even number of 2<i>n</i> contiguous backslashes
             * before a line terminator (or elsewhere) encodes <i>n</i>
             * backslashes after escape processing.
             * <p>
             * The key contains all of the characters in the line starting
             * with the first non-white space character and up to, but not
             * including, the first unescaped {@code '='},
             * {@code ':'}, or white space character other than a line
             * terminator. All of these key termination characters may be
             * included in the key by escaping them with a preceding backslash
             * character; for example,<p>
             * {@code \:\=}<p>
             * would be the two-character key {@code ":="}.  Line
             * terminator characters can be included using {@code \r} and
             * {@code \n} escape sequences.  Any white space after the
             * key is skipped; if the first non-white space character after
             * the key is {@code '='} or {@code ':'}, then it is
             * ignored and any white space characters after it are also
             * skipped.  All remaining characters on the line become part of
             * the associated element string; if there are no remaining
             * characters, the element is the empty string
             * {@code ""}.  Once the raw character sequences
             * constituting the key and element are identified, escape
             * processing is performed as described above.
             * <p>
             * As an example, each of the following three lines specifies the key
             * {@code "Truth"} and the associated element value
             * {@code "Beauty"}:
             * <pre>
             * Truth = Beauty
             * Truth:Beauty
             * Truth                    :Beauty
             * </pre>
             * As another example, the following three lines specify a single
             * property:
             * <pre>
             * fruits                           apple, banana, pear, \
             * cantaloupe, watermelon, \
             * kiwi, mango
             * </pre>
             * The key is {@code "fruits"} and the associated element is:
             * <pre>"apple, banana, pear, cantaloupe, watermelon, kiwi, mango"</pre>
             * Note that a space appears before each {@code \} so that a space
             * will appear after each comma in the final result; the {@code \},
             * line terminator, and leading white space on the continuation line are
             * merely discarded and are <i>not</i> replaced by one or more other
             * characters.
             * <p>
             * As a third example, the line:
             * <pre>cheeses
             * </pre>
             * specifies that the key is {@code "cheeses"} and the associated
             * element is the empty string {@code ""}.
             * <p>
             * <a name="unicodeescapes"></a>
             * Characters in keys and elements can be represented in escape
             * sequences similar to those used for character and string literals
             * (see sections 3.3 and 3.10.6 of
             * <cite>The Java&trade; Language Specification</cite>).
             * The differences from the character escape sequences and Unicode
             * escapes used for characters and strings are:
             * <ul>
             * <li> Octal escapes are not recognized.
             * <li> The character sequence {@code \b} does <i>not</i>
             * represent a backspace character.
             * <li> The method does not treat a backslash character,
             * {@code \}, before a non-valid escape character as an
             * error; the backslash is silently dropped.  For example, in a
             * Java string the sequence {@code "\z"} would cause a
             * compile time error.  In contrast, this method silently drops
             * the backslash.  Therefore, this method treats the two character
             * sequence {@code "\b"} as equivalent to the single
             * character {@code 'b'}.
             * <li> Escapes are not necessary for single and double quotes;
             * however, by the rule above, single and double quote characters
             * preceded by a backslash still yield single and double quote
             * characters, respectively.
             * <li> Only a single 'u' character is allowed in a Unicode escape
             * sequence.
             * </ul>
             * <p>
             * The specified stream remains open after this method returns.
             */
            // @ts-ignore
            public load(reader: java.io.Reader): void;
            /**
             * Reads a property list (key and element pairs) from the input
             * byte stream. The input stream is in a simple line-oriented
             * format as specified in
             * {@link #load(java.io.Reader) load(Reader)} and is assumed to use
             * the ISO 8859-1 character encoding; that is each byte is one Latin1
             * character. Characters not in Latin1, and certain special characters,
             * are represented in keys and elements using Unicode escapes as defined in
             * section 3.3 of
             * <cite>The Java&trade; Language Specification</cite>.
             * <p>
             * The specified stream remains open after this method returns.
             */
            // @ts-ignore
            public load(inStream: java.io.InputStream): void;
            /**
             * Calls the {@code store(OutputStream out, String comments)} method
             * and suppresses IOExceptions that were thrown.
             */
            // @ts-ignore
            public save(out: java.io.OutputStream, comments: string): void;
            /**
             * Writes this property list (key and element pairs) in this
             * {@code Properties} table to the output character stream in a
             * format suitable for using the {@link #load(java.io.Reader) load(Reader)}
             * method.
             * <p>
             * Properties from the defaults table of this {@code Properties}
             * table (if any) are <i>not</i> written out by this method.
             * <p>
             * If the comments argument is not null, then an ASCII {@code #}
             * character, the comments string, and a line separator are first written
             * to the output stream. Thus, the {@code comments} can serve as an
             * identifying comment. Any one of a line feed ('\n'), a carriage
             * return ('\r'), or a carriage return followed immediately by a line feed
             * in comments is replaced by a line separator generated by the {@code Writer}
             * and if the next character in comments is not character {@code #} or
             * character {@code !} then an ASCII {@code #} is written out
             * after that line separator.
             * <p>
             * Next, a comment line is always written, consisting of an ASCII
             * {@code #} character, the current date and time (as if produced
             * by the {@code toString} method of {@code Date} for the
             * current time), and a line separator as generated by the {@code Writer}.
             * <p>
             * Then every entry in this {@code Properties} table is
             * written out, one per line. For each entry the key string is
             * written, then an ASCII {@code =}, then the associated
             * element string. For the key, all space characters are
             * written with a preceding {@code \} character.  For the
             * element, leading space characters, but not embedded or trailing
             * space characters, are written with a preceding {@code \}
             * character. The key and element characters {@code #},
             * {@code !}, {@code =}, and {@code :} are written
             * with a preceding backslash to ensure that they are properly loaded.
             * <p>
             * After the entries have been written, the output stream is flushed.
             * The output stream remains open after this method returns.
             * <p>
             */
            // @ts-ignore
            public store(writer: java.io.Writer, comments: string): void;
            /**
             * Writes this property list (key and element pairs) in this
             * {@code Properties} table to the output stream in a format suitable
             * for loading into a {@code Properties} table using the
             * {@link #load(InputStream) load(InputStream)} method.
             * <p>
             * Properties from the defaults table of this {@code Properties}
             * table (if any) are <i>not</i> written out by this method.
             * <p>
             * This method outputs the comments, properties keys and values in
             * the same format as specified in
             * {@link #store(java.io.Writer, java.lang.String) store(Writer)},
             * with the following differences:
             * <ul>
             * <li>The stream is written using the ISO 8859-1 character encoding.
             * <li>Characters not in Latin-1 in the comments are written as
             * {@code \u}<i>xxxx</i> for their appropriate unicode
             * hexadecimal value <i>xxxx</i>.
             * <li>Characters less than {@code \u0020} and characters greater
             * than {@code \u007E} in property keys or values are written
             * as {@code \u}<i>xxxx</i> for the appropriate hexadecimal
             * value <i>xxxx</i>.
             * </ul>
             * <p>
             * After the entries have been written, the output stream is flushed.
             * The output stream remains open after this method returns.
             * <p>
             */
            // @ts-ignore
            public store(out: java.io.OutputStream, comments: string): void;
            /**
             * Loads all of the properties represented by the XML document on the
             * specified input stream into this properties table.
             * <p>The XML document must have the following DOCTYPE declaration:
             * <pre>
             * &lt;!DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd"&gt;
             * </pre>
             * Furthermore, the document must satisfy the properties DTD described
             * above.
             * <p> An implementation is required to read XML documents that use the
             * "{@code UTF-8}" or "{@code UTF-16}" encoding. An implementation may
             * support additional encodings.
             * <p>The specified stream is closed after this method returns.
             */
            // @ts-ignore
            public loadFromXML(input: java.io.InputStream): void;
            /**
             * Emits an XML document representing all of the properties contained
             * in this table.
             * <p> An invocation of this method of the form <tt>props.storeToXML(os,
             * comment)</tt> behaves in exactly the same way as the invocation
             * <tt>props.storeToXML(os, comment, "UTF-8");</tt>.
             */
            // @ts-ignore
            public storeToXML(os: java.io.OutputStream, comment: string): void;
            /**
             * Emits an XML document representing all of the properties contained
             * in this table, using the specified encoding.
             * <p>The XML document will have the following DOCTYPE declaration:
             * <pre>
             * &lt;!DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd"&gt;
             * </pre>
             * <p>If the specified comment is {@code null} then no comment
             * will be stored in the document.
             * <p> An implementation is required to support writing of XML documents
             * that use the "{@code UTF-8}" or "{@code UTF-16}" encoding. An
             * implementation may support additional encodings.
             * <p>The specified stream remains open after this method returns.
             */
            // @ts-ignore
            public storeToXML(os: java.io.OutputStream, comment: string, encoding: string): void;
            /**
             * Searches for the property with the specified key in this property list.
             * If the key is not found in this property list, the default property list,
             * and its defaults, recursively, are then checked. The method returns
             * {@code null} if the property is not found.
             */
            // @ts-ignore
            public getProperty(key: string): string;
            /**
             * Searches for the property with the specified key in this property list.
             * If the key is not found in this property list, the default property list,
             * and its defaults, recursively, are then checked. The method returns the
             * default value argument if the property is not found.
             */
            // @ts-ignore
            public getProperty(key: string, defaultValue: string): string;
            /**
             * Returns an enumeration of all the keys in this property list,
             * including distinct keys in the default property list if a key
             * of the same name has not already been found from the main
             * properties list.
             */
            // @ts-ignore
            public propertyNames(): java.util.Enumeration;
            /**
             * Returns a set of keys in this property list where
             * the key and its corresponding value are strings,
             * including distinct keys in the default property list if a key
             * of the same name has not already been found from the main
             * properties list.  Properties whose key or value is not
             * of type <tt>String</tt> are omitted.
             * <p>
             * The returned set is not backed by the <tt>Properties</tt> object.
             * Changes to this <tt>Properties</tt> are not reflected in the set,
             * or vice versa.
             */
            // @ts-ignore
            public stringPropertyNames(): java.util.Set;
            /**
             * Prints this property list out to the specified output stream.
             * This method is useful for debugging.
             */
            // @ts-ignore
            public list(out: java.io.PrintStream): void;
            /**
             * Prints this property list out to the specified output stream.
             * This method is useful for debugging.
             */
            // @ts-ignore
            public list(out: java.io.PrintWriter): void;
        }
    }
}
