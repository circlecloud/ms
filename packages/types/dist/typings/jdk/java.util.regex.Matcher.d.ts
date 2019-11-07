declare namespace java {
    namespace util {
        namespace regex {
            // @ts-ignore
             class Matcher extends java.lang.Object {
                /**
                 * Returns the pattern that is interpreted by this matcher.
                 */
                // @ts-ignore
                public pattern(): java.util.regex.Pattern;
                /**
                 * Returns the match state of this matcher as a {@link MatchResult}.
                 * The result is unaffected by subsequent operations performed upon this
                 * matcher.
                 */
                // @ts-ignore
                public toMatchResult(): java.util.regex.MatchResult;
                /**
                 * Changes the <tt>Pattern</tt> that this <tt>Matcher</tt> uses to
                 * find matches with.
                 * <p> This method causes this matcher to lose information
                 * about the groups of the last match that occurred. The
                 * matcher's position in the input is maintained and its
                 * last append position is unaffected.</p>
                 */
                // @ts-ignore
                public usePattern(newPattern: java.util.regex.Pattern): java.util.regex.Matcher;
                /**
                 * Resets this matcher.
                 * <p> Resetting a matcher discards all of its explicit state information
                 * and sets its append position to zero. The matcher's region is set to the
                 * default region, which is its entire character sequence. The anchoring
                 * and transparency of this matcher's region boundaries are unaffected.
                 */
                // @ts-ignore
                public reset(): java.util.regex.Matcher;
                /**
                 * Resets this matcher with a new input sequence.
                 * <p> Resetting a matcher discards all of its explicit state information
                 * and sets its append position to zero.  The matcher's region is set to
                 * the default region, which is its entire character sequence.  The
                 * anchoring and transparency of this matcher's region boundaries are
                 * unaffected.
                 */
                // @ts-ignore
                public reset(input: java.lang.CharSequence): java.util.regex.Matcher;
                /**
                 * Returns the start index of the previous match.
                 */
                // @ts-ignore
                public start(): number;
                /**
                 * Returns the start index of the subsequence captured by the given group
                 * during the previous match operation.
                 * <p> <a href="Pattern.html#cg">Capturing groups</a> are indexed from left
                 * to right, starting at one.  Group zero denotes the entire pattern, so
                 * the expression <i>m.</i><tt>start(0)</tt> is equivalent to
                 * <i>m.</i><tt>start()</tt>.  </p>
                 */
                // @ts-ignore
                public start(group: number): number;
                /**
                 * Returns the start index of the subsequence captured by the given
                 * <a href="Pattern.html#groupname">named-capturing group</a> during the
                 * previous match operation.
                 */
                // @ts-ignore
                public start(name: string): number;
                /**
                 * Returns the offset after the last character matched.
                 */
                // @ts-ignore
                public end(): number;
                /**
                 * Returns the offset after the last character of the subsequence
                 * captured by the given group during the previous match operation.
                 * <p> <a href="Pattern.html#cg">Capturing groups</a> are indexed from left
                 * to right, starting at one.  Group zero denotes the entire pattern, so
                 * the expression <i>m.</i><tt>end(0)</tt> is equivalent to
                 * <i>m.</i><tt>end()</tt>.  </p>
                 */
                // @ts-ignore
                public end(group: number): number;
                /**
                 * Returns the offset after the last character of the subsequence
                 * captured by the given <a href="Pattern.html#groupname">named-capturing
                 * group</a> during the previous match operation.
                 */
                // @ts-ignore
                public end(name: string): number;
                /**
                 * Returns the input subsequence matched by the previous match.
                 * <p> For a matcher <i>m</i> with input sequence <i>s</i>,
                 * the expressions <i>m.</i><tt>group()</tt> and
                 * <i>s.</i><tt>substring(</tt><i>m.</i><tt>start(),</tt>&nbsp;<i>m.</i><tt>end())</tt>
                 * are equivalent.  </p>
                 * <p> Note that some patterns, for example <tt>a*</tt>, match the empty
                 * string.  This method will return the empty string when the pattern
                 * successfully matches the empty string in the input.  </p>
                 */
                // @ts-ignore
                public group(): string;
                /**
                 * Returns the input subsequence captured by the given group during the
                 * previous match operation.
                 * <p> For a matcher <i>m</i>, input sequence <i>s</i>, and group index
                 * <i>g</i>, the expressions <i>m.</i><tt>group(</tt><i>g</i><tt>)</tt> and
                 * <i>s.</i><tt>substring(</tt><i>m.</i><tt>start(</tt><i>g</i><tt>),</tt>&nbsp;<i>m.</i><tt>end(</tt><i>g</i><tt>))</tt>
                 * are equivalent.  </p>
                 * <p> <a href="Pattern.html#cg">Capturing groups</a> are indexed from left
                 * to right, starting at one.  Group zero denotes the entire pattern, so
                 * the expression <tt>m.group(0)</tt> is equivalent to <tt>m.group()</tt>.
                 * </p>
                 * <p> If the match was successful but the group specified failed to match
                 * any part of the input sequence, then <tt>null</tt> is returned. Note
                 * that some groups, for example <tt>(a*)</tt>, match the empty string.
                 * This method will return the empty string when such a group successfully
                 * matches the empty string in the input.  </p>
                 */
                // @ts-ignore
                public group(group: number): string;
                /**
                 * Returns the input subsequence captured by the given
                 * <a href="Pattern.html#groupname">named-capturing group</a> during the previous
                 * match operation.
                 * <p> If the match was successful but the group specified failed to match
                 * any part of the input sequence, then <tt>null</tt> is returned. Note
                 * that some groups, for example <tt>(a*)</tt>, match the empty string.
                 * This method will return the empty string when such a group successfully
                 * matches the empty string in the input.  </p>
                 */
                // @ts-ignore
                public group(name: string): string;
                /**
                 * Returns the number of capturing groups in this matcher's pattern.
                 * <p> Group zero denotes the entire pattern by convention. It is not
                 * included in this count.
                 * <p> Any non-negative integer smaller than or equal to the value
                 * returned by this method is guaranteed to be a valid group index for
                 * this matcher.  </p>
                 */
                // @ts-ignore
                public groupCount(): number;
                /**
                 * Attempts to match the entire region against the pattern.
                 * <p> If the match succeeds then more information can be obtained via the
                 * <tt>start</tt>, <tt>end</tt>, and <tt>group</tt> methods.  </p>
                 */
                // @ts-ignore
                public matches(): boolean;
                /**
                 * Attempts to find the next subsequence of the input sequence that matches
                 * the pattern.
                 * <p> This method starts at the beginning of this matcher's region, or, if
                 * a previous invocation of the method was successful and the matcher has
                 * not since been reset, at the first character not matched by the previous
                 * match.
                 * <p> If the match succeeds then more information can be obtained via the
                 * <tt>start</tt>, <tt>end</tt>, and <tt>group</tt> methods.  </p>
                 */
                // @ts-ignore
                public find(): boolean;
                /**
                 * Resets this matcher and then attempts to find the next subsequence of
                 * the input sequence that matches the pattern, starting at the specified
                 * index.
                 * <p> If the match succeeds then more information can be obtained via the
                 * <tt>start</tt>, <tt>end</tt>, and <tt>group</tt> methods, and subsequent
                 * invocations of the {@link #find()} method will start at the first
                 * character not matched by this match.  </p>
                 */
                // @ts-ignore
                public find(start: number): boolean;
                /**
                 * Attempts to match the input sequence, starting at the beginning of the
                 * region, against the pattern.
                 * <p> Like the {@link #matches matches} method, this method always starts
                 * at the beginning of the region; unlike that method, it does not
                 * require that the entire region be matched.
                 * <p> If the match succeeds then more information can be obtained via the
                 * <tt>start</tt>, <tt>end</tt>, and <tt>group</tt> methods.  </p>
                 */
                // @ts-ignore
                public lookingAt(): boolean;
                /**
                 * Returns a literal replacement <code>String</code> for the specified
                 * <code>String</code>.
                 * This method produces a <code>String</code> that will work
                 * as a literal replacement <code>s</code> in the
                 * <code>appendReplacement</code> method of the {@link Matcher} class.
                 * The <code>String</code> produced will match the sequence of characters
                 * in <code>s</code> treated as a literal sequence. Slashes ('\') and
                 * dollar signs ('$') will be given no special meaning.
                 */
                // @ts-ignore
                public static quoteReplacement(s: string): string;
                /**
                 * Implements a non-terminal append-and-replace step.
                 * <p> This method performs the following actions: </p>
                 * <ol>
                 * <li><p> It reads characters from the input sequence, starting at the
                 * append position, and appends them to the given string buffer.  It
                 * stops after reading the last character preceding the previous match,
                 * that is, the character at index {@link
                 * #start()}&nbsp;<tt>-</tt>&nbsp;<tt>1</tt>.  </p></li>
                 * <li><p> It appends the given replacement string to the string buffer.
                 * </p></li>
                 * <li><p> It sets the append position of this matcher to the index of
                 * the last character matched, plus one, that is, to {@link #end()}.
                 * </p></li>
                 * </ol>
                 * <p> The replacement string may contain references to subsequences
                 * captured during the previous match: Each occurrence of
                 * <tt>${</tt><i>name</i><tt>}</tt> or <tt>$</tt><i>g</i>
                 * will be replaced by the result of evaluating the corresponding
                 * {@link #group(String) group(name)} or {@link #group(int) group(g)}
                 * respectively. For  <tt>$</tt><i>g</i>,
                 * the first number after the <tt>$</tt> is always treated as part of
                 * the group reference. Subsequent numbers are incorporated into g if
                 * they would form a legal group reference. Only the numerals '0'
                 * through '9' are considered as potential components of the group
                 * reference. If the second group matched the string <tt>"foo"</tt>, for
                 * example, then passing the replacement string <tt>"$2bar"</tt> would
                 * cause <tt>"foobar"</tt> to be appended to the string buffer. A dollar
                 * sign (<tt>$</tt>) may be included as a literal in the replacement
                 * string by preceding it with a backslash (<tt>\$</tt>).
                 * <p> Note that backslashes (<tt>\</tt>) and dollar signs (<tt>$</tt>) in
                 * the replacement string may cause the results to be different than if it
                 * were being treated as a literal replacement string. Dollar signs may be
                 * treated as references to captured subsequences as described above, and
                 * backslashes are used to escape literal characters in the replacement
                 * string.
                 * <p> This method is intended to be used in a loop together with the
                 * {@link #appendTail appendTail} and {@link #find find} methods.  The
                 * following code, for example, writes <tt>one dog two dogs in the
                 * yard</tt> to the standard-output stream: </p>
                 * <blockquote><pre>
                 * Pattern p = Pattern.compile("cat");
                 * Matcher m = p.matcher("one cat two cats in the yard");
                 * StringBuffer sb = new StringBuffer();
                 * while (m.find()) {
                 * m.appendReplacement(sb, "dog");
                 * }
                 * m.appendTail(sb);
                 * System.out.println(sb.toString());</pre></blockquote>
                 */
                // @ts-ignore
                public appendReplacement(sb: java.lang.StringBuffer, replacement: string): java.util.regex.Matcher;
                /**
                 * Implements a terminal append-and-replace step.
                 * <p> This method reads characters from the input sequence, starting at
                 * the append position, and appends them to the given string buffer.  It is
                 * intended to be invoked after one or more invocations of the {@link
                 * #appendReplacement appendReplacement} method in order to copy the
                 * remainder of the input sequence.  </p>
                 */
                // @ts-ignore
                public appendTail(sb: java.lang.StringBuffer): java.lang.StringBuffer;
                /**
                 * Replaces every subsequence of the input sequence that matches the
                 * pattern with the given replacement string.
                 * <p> This method first resets this matcher.  It then scans the input
                 * sequence looking for matches of the pattern.  Characters that are not
                 * part of any match are appended directly to the result string; each match
                 * is replaced in the result by the replacement string.  The replacement
                 * string may contain references to captured subsequences as in the {@link
                 * #appendReplacement appendReplacement} method.
                 * <p> Note that backslashes (<tt>\</tt>) and dollar signs (<tt>$</tt>) in
                 * the replacement string may cause the results to be different than if it
                 * were being treated as a literal replacement string. Dollar signs may be
                 * treated as references to captured subsequences as described above, and
                 * backslashes are used to escape literal characters in the replacement
                 * string.
                 * <p> Given the regular expression <tt>a*b</tt>, the input
                 * <tt>"aabfooaabfooabfoob"</tt>, and the replacement string
                 * <tt>"-"</tt>, an invocation of this method on a matcher for that
                 * expression would yield the string <tt>"-foo-foo-foo-"</tt>.
                 * <p> Invoking this method changes this matcher's state.  If the matcher
                 * is to be used in further matching operations then it should first be
                 * reset.  </p>
                 */
                // @ts-ignore
                public replaceAll(replacement: string): string;
                /**
                 * Replaces the first subsequence of the input sequence that matches the
                 * pattern with the given replacement string.
                 * <p> This method first resets this matcher.  It then scans the input
                 * sequence looking for a match of the pattern.  Characters that are not
                 * part of the match are appended directly to the result string; the match
                 * is replaced in the result by the replacement string.  The replacement
                 * string may contain references to captured subsequences as in the {@link
                 * #appendReplacement appendReplacement} method.
                 * <p>Note that backslashes (<tt>\</tt>) and dollar signs (<tt>$</tt>) in
                 * the replacement string may cause the results to be different than if it
                 * were being treated as a literal replacement string. Dollar signs may be
                 * treated as references to captured subsequences as described above, and
                 * backslashes are used to escape literal characters in the replacement
                 * string.
                 * <p> Given the regular expression <tt>dog</tt>, the input
                 * <tt>"zzzdogzzzdogzzz"</tt>, and the replacement string
                 * <tt>"cat"</tt>, an invocation of this method on a matcher for that
                 * expression would yield the string <tt>"zzzcatzzzdogzzz"</tt>.  </p>
                 * <p> Invoking this method changes this matcher's state.  If the matcher
                 * is to be used in further matching operations then it should first be
                 * reset.  </p>
                 */
                // @ts-ignore
                public replaceFirst(replacement: string): string;
                /**
                 * Sets the limits of this matcher's region. The region is the part of the
                 * input sequence that will be searched to find a match. Invoking this
                 * method resets the matcher, and then sets the region to start at the
                 * index specified by the <code>start</code> parameter and end at the
                 * index specified by the <code>end</code> parameter.
                 * <p>Depending on the transparency and anchoring being used (see
                 * {@link #useTransparentBounds useTransparentBounds} and
                 * {@link #useAnchoringBounds useAnchoringBounds}), certain constructs such
                 * as anchors may behave differently at or around the boundaries of the
                 * region.
                 */
                // @ts-ignore
                public region(start: number, end: number): java.util.regex.Matcher;
                /**
                 * Reports the start index of this matcher's region. The
                 * searches this matcher conducts are limited to finding matches
                 * within {@link #regionStart regionStart} (inclusive) and
                 * {@link #regionEnd regionEnd} (exclusive).
                 */
                // @ts-ignore
                public regionStart(): number;
                /**
                 * Reports the end index (exclusive) of this matcher's region.
                 * The searches this matcher conducts are limited to finding matches
                 * within {@link #regionStart regionStart} (inclusive) and
                 * {@link #regionEnd regionEnd} (exclusive).
                 */
                // @ts-ignore
                public regionEnd(): number;
                /**
                 * Queries the transparency of region bounds for this matcher.
                 * <p> This method returns <tt>true</tt> if this matcher uses
                 * <i>transparent</i> bounds, <tt>false</tt> if it uses <i>opaque</i>
                 * bounds.
                 * <p> See {@link #useTransparentBounds useTransparentBounds} for a
                 * description of transparent and opaque bounds.
                 * <p> By default, a matcher uses opaque region boundaries.
                 */
                // @ts-ignore
                public hasTransparentBounds(): boolean;
                /**
                 * Sets the transparency of region bounds for this matcher.
                 * <p> Invoking this method with an argument of <tt>true</tt> will set this
                 * matcher to use <i>transparent</i> bounds. If the boolean
                 * argument is <tt>false</tt>, then <i>opaque</i> bounds will be used.
                 * <p> Using transparent bounds, the boundaries of this
                 * matcher's region are transparent to lookahead, lookbehind,
                 * and boundary matching constructs. Those constructs can see beyond the
                 * boundaries of the region to see if a match is appropriate.
                 * <p> Using opaque bounds, the boundaries of this matcher's
                 * region are opaque to lookahead, lookbehind, and boundary matching
                 * constructs that may try to see beyond them. Those constructs cannot
                 * look past the boundaries so they will fail to match anything outside
                 * of the region.
                 * <p> By default, a matcher uses opaque bounds.
                 */
                // @ts-ignore
                public useTransparentBounds(b: boolean): java.util.regex.Matcher;
                /**
                 * Queries the anchoring of region bounds for this matcher.
                 * <p> This method returns <tt>true</tt> if this matcher uses
                 * <i>anchoring</i> bounds, <tt>false</tt> otherwise.
                 * <p> See {@link #useAnchoringBounds useAnchoringBounds} for a
                 * description of anchoring bounds.
                 * <p> By default, a matcher uses anchoring region boundaries.
                 */
                // @ts-ignore
                public hasAnchoringBounds(): boolean;
                /**
                 * Sets the anchoring of region bounds for this matcher.
                 * <p> Invoking this method with an argument of <tt>true</tt> will set this
                 * matcher to use <i>anchoring</i> bounds. If the boolean
                 * argument is <tt>false</tt>, then <i>non-anchoring</i> bounds will be
                 * used.
                 * <p> Using anchoring bounds, the boundaries of this
                 * matcher's region match anchors such as ^ and $.
                 * <p> Without anchoring bounds, the boundaries of this
                 * matcher's region will not match anchors such as ^ and $.
                 * <p> By default, a matcher uses anchoring region boundaries.
                 */
                // @ts-ignore
                public useAnchoringBounds(b: boolean): java.util.regex.Matcher;
                /**
                 * <p>Returns the string representation of this matcher. The
                 * string representation of a <code>Matcher</code> contains information
                 * that may be useful for debugging. The exact format is unspecified.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * <p>Returns true if the end of input was hit by the search engine in
                 * the last match operation performed by this matcher.
                 * <p>When this method returns true, then it is possible that more input
                 * would have changed the result of the last search.
                 */
                // @ts-ignore
                public hitEnd(): boolean;
                /**
                 * <p>Returns true if more input could change a positive match into a
                 * negative one.
                 * <p>If this method returns true, and a match was found, then more
                 * input could cause the match to be lost. If this method returns false
                 * and a match was found, then more input might change the match but the
                 * match won't be lost. If a match was not found, then requireEnd has no
                 * meaning.
                 */
                // @ts-ignore
                public requireEnd(): boolean;
            }
        }
    }
}
