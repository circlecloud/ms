// @ts-nocheck
declare namespace java {
    namespace util {
        namespace regex {
            // @ts-ignore
            interface MatchResult {
                /**
                 * Returns the start index of the match.
                 */
                // @ts-ignore
                 start(): number;
                /**
                 * Returns the start index of the subsequence captured by the given group
                 * during this match.
                 * <p> <a href="Pattern.html#cg">Capturing groups</a> are indexed from left
                 * to right, starting at one.  Group zero denotes the entire pattern, so
                 * the expression <i>m.</i><tt>start(0)</tt> is equivalent to
                 * <i>m.</i><tt>start()</tt>.  </p>
                 */
                // @ts-ignore
                 start(group: number): number;
                /**
                 * Returns the offset after the last character matched.
                 */
                // @ts-ignore
                 end(): number;
                /**
                 * Returns the offset after the last character of the subsequence
                 * captured by the given group during this match.
                 * <p> <a href="Pattern.html#cg">Capturing groups</a> are indexed from left
                 * to right, starting at one.  Group zero denotes the entire pattern, so
                 * the expression <i>m.</i><tt>end(0)</tt> is equivalent to
                 * <i>m.</i><tt>end()</tt>.  </p>
                 */
                // @ts-ignore
                 end(group: number): number;
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
                 group(): string;
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
                 group(group: number): string;
                /**
                 * Returns the number of capturing groups in this match result's pattern.
                 * <p> Group zero denotes the entire pattern by convention. It is not
                 * included in this count.
                 * <p> Any non-negative integer smaller than or equal to the value
                 * returned by this method is guaranteed to be a valid group index for
                 * this matcher.  </p>
                 */
                // @ts-ignore
                 groupCount(): number;
            }
        }
    }
}
