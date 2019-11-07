declare namespace java {
    namespace io {
        // @ts-ignore
         class StreamTokenizer extends java.lang.Object {
            /**
             * Creates a stream tokenizer that parses the specified input
             * stream. The stream tokenizer is initialized to the following
             * default state:
             * <ul>
             * <li>All byte values {@code 'A'} through {@code 'Z'},
             * {@code 'a'} through {@code 'z'}, and
             * {@code '\u00A0'} through {@code '\u00FF'} are
             * considered to be alphabetic.
             * <li>All byte values {@code '\u0000'} through
             * {@code '\u0020'} are considered to be white space.
             * <li>{@code '/'} is a comment character.
             * <li>Single quote {@code '\''} and double quote {@code '"'}
             * are string quote characters.
             * <li>Numbers are parsed.
             * <li>Ends of lines are treated as white space, not as separate tokens.
             * <li>C-style and C++-style comments are not recognized.
             * </ul>
             */
            // @ts-ignore
            constructor(is: java.io.InputStream)
            /**
             * Create a tokenizer that parses the given character stream.
             */
            // @ts-ignore
            constructor(r: java.io.Reader)
            // @ts-ignore
            public ttype: number;
            // @ts-ignore
            public static TT_EOF: number;
            // @ts-ignore
            public static TT_EOL: number;
            // @ts-ignore
            public static TT_NUMBER: number;
            // @ts-ignore
            public static TT_WORD: number;
            // @ts-ignore
            public sval: string;
            // @ts-ignore
            public nval: number;
            /**
             * Resets this tokenizer's syntax table so that all characters are
             * "ordinary." See the {@code ordinaryChar} method
             * for more information on a character being ordinary.
             */
            // @ts-ignore
            public resetSyntax(): void;
            /**
             * Specifies that all characters <i>c</i> in the range
             * <code>low&nbsp;&lt;=&nbsp;<i>c</i>&nbsp;&lt;=&nbsp;high</code>
             * are word constituents. A word token consists of a word constituent
             * followed by zero or more word constituents or number constituents.
             */
            // @ts-ignore
            public wordChars(low: number, hi: number): void;
            /**
             * Specifies that all characters <i>c</i> in the range
             * <code>low&nbsp;&lt;=&nbsp;<i>c</i>&nbsp;&lt;=&nbsp;high</code>
             * are white space characters. White space characters serve only to
             * separate tokens in the input stream.
             * <p>Any other attribute settings for the characters in the specified
             * range are cleared.
             */
            // @ts-ignore
            public whitespaceChars(low: number, hi: number): void;
            /**
             * Specifies that all characters <i>c</i> in the range
             * <code>low&nbsp;&lt;=&nbsp;<i>c</i>&nbsp;&lt;=&nbsp;high</code>
             * are "ordinary" in this tokenizer. See the
             * {@code ordinaryChar} method for more information on a
             * character being ordinary.
             */
            // @ts-ignore
            public ordinaryChars(low: number, hi: number): void;
            /**
             * Specifies that the character argument is "ordinary"
             * in this tokenizer. It removes any special significance the
             * character has as a comment character, word component, string
             * delimiter, white space, or number character. When such a character
             * is encountered by the parser, the parser treats it as a
             * single-character token and sets {@code ttype} field to the
             * character value.
             * <p>Making a line terminator character "ordinary" may interfere
             * with the ability of a {@code StreamTokenizer} to count
             * lines. The {@code lineno} method may no longer reflect
             * the presence of such terminator characters in its line count.
             */
            // @ts-ignore
            public ordinaryChar(ch: number): void;
            /**
             * Specified that the character argument starts a single-line
             * comment. All characters from the comment character to the end of
             * the line are ignored by this stream tokenizer.
             * <p>Any other attribute settings for the specified character are cleared.
             */
            // @ts-ignore
            public commentChar(ch: number): void;
            /**
             * Specifies that matching pairs of this character delimit string
             * constants in this tokenizer.
             * <p>
             * When the {@code nextToken} method encounters a string
             * constant, the {@code ttype} field is set to the string
             * delimiter and the {@code sval} field is set to the body of
             * the string.
             * <p>
             * If a string quote character is encountered, then a string is
             * recognized, consisting of all characters after (but not including)
             * the string quote character, up to (but not including) the next
             * occurrence of that same string quote character, or a line
             * terminator, or end of file. The usual escape sequences such as
             * {@code "\n"} and {@code "\t"} are recognized and
             * converted to single characters as the string is parsed.
             * <p>Any other attribute settings for the specified character are cleared.
             */
            // @ts-ignore
            public quoteChar(ch: number): void;
            /**
             * Specifies that numbers should be parsed by this tokenizer. The
             * syntax table of this tokenizer is modified so that each of the twelve
             * characters:
             * <blockquote><pre>
             * 0 1 2 3 4 5 6 7 8 9 . -
             * </pre></blockquote>
             * <p>
             * has the "numeric" attribute.
             * <p>
             * When the parser encounters a word token that has the format of a
             * double precision floating-point number, it treats the token as a
             * number rather than a word, by setting the {@code ttype}
             * field to the value {@code TT_NUMBER} and putting the numeric
             * value of the token into the {@code nval} field.
             */
            // @ts-ignore
            public parseNumbers(): void;
            /**
             * Determines whether or not ends of line are treated as tokens.
             * If the flag argument is true, this tokenizer treats end of lines
             * as tokens; the {@code nextToken} method returns
             * {@code TT_EOL} and also sets the {@code ttype} field to
             * this value when an end of line is read.
             * <p>
             * A line is a sequence of characters ending with either a
             * carriage-return character ({@code '\r'}) or a newline
             * character ({@code '\n'}). In addition, a carriage-return
             * character followed immediately by a newline character is treated
             * as a single end-of-line token.
             * <p>
             * If the {@code flag} is false, end-of-line characters are
             * treated as white space and serve only to separate tokens.
             */
            // @ts-ignore
            public eolIsSignificant(flag: boolean): void;
            /**
             * Determines whether or not the tokenizer recognizes C-style comments.
             * If the flag argument is {@code true}, this stream tokenizer
             * recognizes C-style comments. All text between successive
             * occurrences of {@code /*} and <code>*&#47;</code> are discarded.
             * <p>
             * If the flag argument is {@code false}, then C-style comments
             * are not treated specially.
             */
            // @ts-ignore
            public slashStarComments(flag: boolean): void;
            /**
             * Determines whether or not the tokenizer recognizes C++-style comments.
             * If the flag argument is {@code true}, this stream tokenizer
             * recognizes C++-style comments. Any occurrence of two consecutive
             * slash characters ({@code '/'}) is treated as the beginning of
             * a comment that extends to the end of the line.
             * <p>
             * If the flag argument is {@code false}, then C++-style
             * comments are not treated specially.
             */
            // @ts-ignore
            public slashSlashComments(flag: boolean): void;
            /**
             * Determines whether or not word token are automatically lowercased.
             * If the flag argument is {@code true}, then the value in the
             * {@code sval} field is lowercased whenever a word token is
             * returned (the {@code ttype} field has the
             * value {@code TT_WORD} by the {@code nextToken} method
             * of this tokenizer.
             * <p>
             * If the flag argument is {@code false}, then the
             * {@code sval} field is not modified.
             */
            // @ts-ignore
            public lowerCaseMode(fl: boolean): void;
            /**
             * Parses the next token from the input stream of this tokenizer.
             * The type of the next token is returned in the {@code ttype}
             * field. Additional information about the token may be in the
             * {@code nval} field or the {@code sval} field of this
             * tokenizer.
             * <p>
             * Typical clients of this
             * class first set up the syntax tables and then sit in a loop
             * calling nextToken to parse successive tokens until TT_EOF
             * is returned.
             */
            // @ts-ignore
            public nextToken(): number;
            /**
             * Causes the next call to the {@code nextToken} method of this
             * tokenizer to return the current value in the {@code ttype}
             * field, and not to modify the value in the {@code nval} or
             * {@code sval} field.
             */
            // @ts-ignore
            public pushBack(): void;
            /**
             * Return the current line number.
             */
            // @ts-ignore
            public lineno(): number;
            /**
             * Returns the string representation of the current stream token and
             * the line number it occurs on.
             * <p>The precise string returned is unspecified, although the following
             * example can be considered typical:
             * <blockquote><pre>Token['a'], line 10</pre></blockquote>
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
