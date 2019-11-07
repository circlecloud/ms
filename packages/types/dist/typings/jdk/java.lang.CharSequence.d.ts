declare namespace java {
    namespace lang {
        // @ts-ignore
        interface CharSequence {
            /**
             * Returns the length of this character sequence.  The length is the number
             * of 16-bit <code>char</code>s in the sequence.
             */
            // @ts-ignore
             length(): number;
            /**
             * Returns the <code>char</code> value at the specified index.  An index ranges from zero
             * to <tt>length() - 1</tt>.  The first <code>char</code> value of the sequence is at
             * index zero, the next at index one, and so on, as for array
             * indexing.
             * <p>If the <code>char</code> value specified by the index is a
             * <a href="{@docRoot}/java/lang/Character.html#unicode">surrogate</a>, the surrogate
             * value is returned.
             */
            // @ts-ignore
             charAt(index: number): string;
            /**
             * Returns a <code>CharSequence</code> that is a subsequence of this sequence.
             * The subsequence starts with the <code>char</code> value at the specified index and
             * ends with the <code>char</code> value at index <tt>end - 1</tt>.  The length
             * (in <code>char</code>s) of the
             * returned sequence is <tt>end - start</tt>, so if <tt>start == end</tt>
             * then an empty sequence is returned.
             */
            // @ts-ignore
             subSequence(start: number, end: number): java.lang.CharSequence;
            /**
             * Returns a string containing the characters in this sequence in the same
             * order as this sequence.  The length of the string will be the length of
             * this sequence.
             */
            // @ts-ignore
             toString(): string;
            /**
             * Returns a stream of {@code int} zero-extending the {@code char} values
             * from this sequence.  Any char which maps to a <a
             * href="{@docRoot}/java/lang/Character.html#unicode">surrogate code
             * point</a> is passed through uninterpreted.
             * <p>If the sequence is mutated while the stream is being read, the
             * result is undefined.
             */
            // @ts-ignore
             chars(): java.util.stream.IntStream;
            /**
             * Returns a stream of code point values from this sequence.  Any surrogate
             * pairs encountered in the sequence are combined as if by {@linkplain
             * Character#toCodePoint Character.toCodePoint} and the result is passed
             * to the stream. Any other code units, including ordinary BMP characters,
             * unpaired surrogates, and undefined code units, are zero-extended to
             * {@code int} values which are then passed to the stream.
             * <p>If the sequence is mutated while the stream is being read, the result
             * is undefined.
             */
            // @ts-ignore
             codePoints(): java.util.stream.IntStream;
        }
    }
}
