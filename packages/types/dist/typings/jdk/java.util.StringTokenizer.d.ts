declare namespace java {
    namespace util {
        // @ts-ignore
         class StringTokenizer extends java.lang.Object {
            /**
             * Constructs a string tokenizer for the specified string. All
             * characters in the <code>delim</code> argument are the delimiters
             * for separating tokens.
             * <p>
             * If the <code>returnDelims</code> flag is <code>true</code>, then
             * the delimiter characters are also returned as tokens. Each
             * delimiter is returned as a string of length one. If the flag is
             * <code>false</code>, the delimiter characters are skipped and only
             * serve as separators between tokens.
             * <p>
             * Note that if <tt>delim</tt> is <tt>null</tt>, this constructor does
             * not throw an exception. However, trying to invoke other methods on the
             * resulting <tt>StringTokenizer</tt> may result in a
             * <tt>NullPointerException</tt>.
             */
            // @ts-ignore
            constructor(str: string, delim: string, returnDelims: boolean)
            /**
             * Constructs a string tokenizer for the specified string. The
             * characters in the <code>delim</code> argument are the delimiters
             * for separating tokens. Delimiter characters themselves will not
             * be treated as tokens.
             * <p>
             * Note that if <tt>delim</tt> is <tt>null</tt>, this constructor does
             * not throw an exception. However, trying to invoke other methods on the
             * resulting <tt>StringTokenizer</tt> may result in a
             * <tt>NullPointerException</tt>.
             */
            // @ts-ignore
            constructor(str: string, delim: string)
            /**
             * Constructs a string tokenizer for the specified string. The
             * tokenizer uses the default delimiter set, which is
             * <code>"&nbsp;&#92;t&#92;n&#92;r&#92;f"</code>: the space character,
             * the tab character, the newline character, the carriage-return character,
             * and the form-feed character. Delimiter characters themselves will
             * not be treated as tokens.
             */
            // @ts-ignore
            constructor(str: string)
            /**
             * Tests if there are more tokens available from this tokenizer's string.
             * If this method returns <tt>true</tt>, then a subsequent call to
             * <tt>nextToken</tt> with no argument will successfully return a token.
             */
            // @ts-ignore
            public hasMoreTokens(): boolean;
            /**
             * Returns the next token from this string tokenizer.
             */
            // @ts-ignore
            public nextToken(): string;
            /**
             * Returns the next token in this string tokenizer's string. First,
             * the set of characters considered to be delimiters by this
             * <tt>StringTokenizer</tt> object is changed to be the characters in
             * the string <tt>delim</tt>. Then the next token in the string
             * after the current position is returned. The current position is
             * advanced beyond the recognized token.  The new delimiter set
             * remains the default after this call.
             */
            // @ts-ignore
            public nextToken(delim: string): string;
            /**
             * Returns the same value as the <code>hasMoreTokens</code>
             * method. It exists so that this class can implement the
             * <code>Enumeration</code> interface.
             */
            // @ts-ignore
            public hasMoreElements(): boolean;
            /**
             * Returns the same value as the <code>nextToken</code> method,
             * except that its declared return value is <code>Object</code> rather than
             * <code>String</code>. It exists so that this class can implement the
             * <code>Enumeration</code> interface.
             */
            // @ts-ignore
            public nextElement(): java.lang.Object;
            /**
             * Calculates the number of times that this tokenizer's
             * <code>nextToken</code> method can be called before it generates an
             * exception. The current position is not advanced.
             */
            // @ts-ignore
            public countTokens(): number;
        }
    }
}
