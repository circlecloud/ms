declare namespace java {
    namespace util {
        namespace regex {
            // @ts-ignore
             class Pattern extends java.lang.Object {
                // @ts-ignore
                public static UNIX_LINES: number;
                // @ts-ignore
                public static CASE_INSENSITIVE: number;
                // @ts-ignore
                public static COMMENTS: number;
                // @ts-ignore
                public static MULTILINE: number;
                // @ts-ignore
                public static LITERAL: number;
                // @ts-ignore
                public static DOTALL: number;
                // @ts-ignore
                public static UNICODE_CASE: number;
                // @ts-ignore
                public static CANON_EQ: number;
                // @ts-ignore
                public static UNICODE_CHARACTER_CLASS: number;
                /**
                 * Compiles the given regular expression into a pattern.
                 */
                // @ts-ignore
                public static compile(regex: string): java.util.regex.Pattern;
                /**
                 * Compiles the given regular expression into a pattern with the given
                 * flags.
                 */
                // @ts-ignore
                public static compile(regex: string, flags: number): java.util.regex.Pattern;
                /**
                 * Returns the regular expression from which this pattern was compiled.
                 */
                // @ts-ignore
                public pattern(): string;
                /**
                 * <p>Returns the string representation of this pattern. This
                 * is the regular expression from which this pattern was
                 * compiled.</p>
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Creates a matcher that will match the given input against this pattern.
                 */
                // @ts-ignore
                public matcher(input: java.lang.CharSequence): java.util.regex.Matcher;
                /**
                 * Returns this pattern's match flags.
                 */
                // @ts-ignore
                public flags(): number;
                /**
                 * Compiles the given regular expression and attempts to match the given
                 * input against it.
                 * <p> An invocation of this convenience method of the form
                 * <blockquote><pre>
                 * Pattern.matches(regex, input);</pre></blockquote>
                 * behaves in exactly the same way as the expression
                 * <blockquote><pre>
                 * Pattern.compile(regex).matcher(input).matches()</pre></blockquote>
                 * <p> If a pattern is to be used multiple times, compiling it once and reusing
                 * it will be more efficient than invoking this method each time.  </p>
                 */
                // @ts-ignore
                public static matches(regex: string, input: java.lang.CharSequence): boolean;
                /**
                 * Splits the given input sequence around matches of this pattern.
                 * <p> The array returned by this method contains each substring of the
                 * input sequence that is terminated by another subsequence that matches
                 * this pattern or is terminated by the end of the input sequence.  The
                 * substrings in the array are in the order in which they occur in the
                 * input. If this pattern does not match any subsequence of the input then
                 * the resulting array has just one element, namely the input sequence in
                 * string form.
                 * <p> When there is a positive-width match at the beginning of the input
                 * sequence then an empty leading substring is included at the beginning
                 * of the resulting array. A zero-width match at the beginning however
                 * never produces such empty leading substring.
                 * <p> The <tt>limit</tt> parameter controls the number of times the
                 * pattern is applied and therefore affects the length of the resulting
                 * array.  If the limit <i>n</i> is greater than zero then the pattern
                 * will be applied at most <i>n</i>&nbsp;-&nbsp;1 times, the array's
                 * length will be no greater than <i>n</i>, and the array's last entry
                 * will contain all input beyond the last matched delimiter.  If <i>n</i>
                 * is non-positive then the pattern will be applied as many times as
                 * possible and the array can have any length.  If <i>n</i> is zero then
                 * the pattern will be applied as many times as possible, the array can
                 * have any length, and trailing empty strings will be discarded.
                 * <p> The input <tt>"boo:and:foo"</tt>, for example, yields the following
                 * results with these parameters:
                 * <blockquote><table cellpadding=1 cellspacing=0
                 * summary="Split examples showing regex, limit, and result">
                 * <tr><th align="left"><i>Regex&nbsp;&nbsp;&nbsp;&nbsp;</i></th>
                 * <th align="left"><i>Limit&nbsp;&nbsp;&nbsp;&nbsp;</i></th>
                 * <th align="left"><i>Result&nbsp;&nbsp;&nbsp;&nbsp;</i></th></tr>
                 * <tr><td align=center>:</td>
                 * <td align=center>2</td>
                 * <td><tt>{ "boo", "and:foo" }</tt></td></tr>
                 * <tr><td align=center>:</td>
                 * <td align=center>5</td>
                 * <td><tt>{ "boo", "and", "foo" }</tt></td></tr>
                 * <tr><td align=center>:</td>
                 * <td align=center>-2</td>
                 * <td><tt>{ "boo", "and", "foo" }</tt></td></tr>
                 * <tr><td align=center>o</td>
                 * <td align=center>5</td>
                 * <td><tt>{ "b", "", ":and:f", "", "" }</tt></td></tr>
                 * <tr><td align=center>o</td>
                 * <td align=center>-2</td>
                 * <td><tt>{ "b", "", ":and:f", "", "" }</tt></td></tr>
                 * <tr><td align=center>o</td>
                 * <td align=center>0</td>
                 * <td><tt>{ "b", "", ":and:f" }</tt></td></tr>
                 * </table></blockquote>
                 */
                // @ts-ignore
                public split(input: java.lang.CharSequence, limit: number): java.lang.String[];
                /**
                 * Splits the given input sequence around matches of this pattern.
                 * <p> This method works as if by invoking the two-argument {@link
                 * #split(java.lang.CharSequence, int) split} method with the given input
                 * sequence and a limit argument of zero.  Trailing empty strings are
                 * therefore not included in the resulting array. </p>
                 * <p> The input <tt>"boo:and:foo"</tt>, for example, yields the following
                 * results with these expressions:
                 * <blockquote><table cellpadding=1 cellspacing=0
                 * summary="Split examples showing regex and result">
                 * <tr><th align="left"><i>Regex&nbsp;&nbsp;&nbsp;&nbsp;</i></th>
                 * <th align="left"><i>Result</i></th></tr>
                 * <tr><td align=center>:</td>
                 * <td><tt>{ "boo", "and", "foo" }</tt></td></tr>
                 * <tr><td align=center>o</td>
                 * <td><tt>{ "b", "", ":and:f" }</tt></td></tr>
                 * </table></blockquote>
                 */
                // @ts-ignore
                public split(input: java.lang.CharSequence): java.lang.String[];
                /**
                 * Returns a literal pattern <code>String</code> for the specified
                 * <code>String</code>.
                 * <p>This method produces a <code>String</code> that can be used to
                 * create a <code>Pattern</code> that would match the string
                 * <code>s</code> as if it were a literal pattern.</p> Metacharacters
                 * or escape sequences in the input sequence will be given no special
                 * meaning.
                 */
                // @ts-ignore
                public static quote(s: string): string;
                /**
                 * Creates a predicate which can be used to match a string.
                 */
                // @ts-ignore
                public asPredicate(): java.util.function$.Predicate;
                /**
                 * Creates a stream from the given input sequence around matches of this
                 * pattern.
                 * <p> The stream returned by this method contains each substring of the
                 * input sequence that is terminated by another subsequence that matches
                 * this pattern or is terminated by the end of the input sequence.  The
                 * substrings in the stream are in the order in which they occur in the
                 * input. Trailing empty strings will be discarded and not encountered in
                 * the stream.
                 * <p> If this pattern does not match any subsequence of the input then
                 * the resulting stream has just one element, namely the input sequence in
                 * string form.
                 * <p> When there is a positive-width match at the beginning of the input
                 * sequence then an empty leading substring is included at the beginning
                 * of the stream. A zero-width match at the beginning however never produces
                 * such empty leading substring.
                 * <p> If the input sequence is mutable, it must remain constant during the
                 * execution of the terminal stream operation.  Otherwise, the result of the
                 * terminal stream operation is undefined.
                 */
                // @ts-ignore
                public splitAsStream(input: java.lang.CharSequence): java.util.stream.Stream;
            }
        }
    }
}
