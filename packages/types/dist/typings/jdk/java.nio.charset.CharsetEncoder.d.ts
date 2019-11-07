// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace charset {
            // @ts-ignore
            abstract class CharsetEncoder extends java.lang.Object {
                /**
                 * Initializes a new encoder.  The new encoder will have the given
                 * bytes-per-char and replacement values.
                 */
                // @ts-ignore
                constructor(cs: java.nio.charset.Charset, averageBytesPerChar: number, maxBytesPerChar: number, replacement: number)
                /**
                 * Initializes a new encoder.  The new encoder will have the given
                 * bytes-per-char values and its replacement will be the
                 * byte array <tt>{</tt>&nbsp;<tt>(byte)'?'</tt>&nbsp;<tt>}</tt>.
                 */
                // @ts-ignore
                constructor(cs: java.nio.charset.Charset, averageBytesPerChar: number, maxBytesPerChar: number)
                /**
                 * Returns the charset that created this encoder.
                 */
                // @ts-ignore
                public charset(): java.nio.charset.Charset;
                /**
                 * Returns this encoder's replacement value.
                 */
                // @ts-ignore
                public replacement(): number[];
                /**
                 * Changes this encoder's replacement value.
                 * <p> This method invokes the {@link #implReplaceWith implReplaceWith}
                 * method, passing the new replacement, after checking that the new
                 * replacement is acceptable.  </p>
                 */
                // @ts-ignore
                public replaceWith(newReplacement: number): java.nio.charset.CharsetEncoder;
                /**
                 * Reports a change to this encoder's replacement value.
                 * <p> The default implementation of this method does nothing.  This method
                 * should be overridden by encoders that require notification of changes to
                 * the replacement.  </p>
                 */
                // @ts-ignore
                protected implReplaceWith(newReplacement: number): void;
                /**
                 * Tells whether or not the given byte array is a legal replacement value
                 * for this encoder.
                 * <p> A replacement is legal if, and only if, it is a legal sequence of
                 * bytes in this encoder's charset; that is, it must be possible to decode
                 * the replacement into one or more sixteen-bit Unicode characters.
                 * <p> The default implementation of this method is not very efficient; it
                 * should generally be overridden to improve performance.  </p>
                 */
                // @ts-ignore
                public isLegalReplacement(repl: number): boolean;
                /**
                 * Returns this encoder's current action for malformed-input errors.
                 */
                // @ts-ignore
                public malformedInputAction(): java.nio.charset.CodingErrorAction;
                /**
                 * Changes this encoder's action for malformed-input errors.
                 * <p> This method invokes the {@link #implOnMalformedInput
                 * implOnMalformedInput} method, passing the new action.  </p>
                 */
                // @ts-ignore
                public onMalformedInput(newAction: java.nio.charset.CodingErrorAction): java.nio.charset.CharsetEncoder;
                /**
                 * Reports a change to this encoder's malformed-input action.
                 * <p> The default implementation of this method does nothing.  This method
                 * should be overridden by encoders that require notification of changes to
                 * the malformed-input action.  </p>
                 */
                // @ts-ignore
                protected implOnMalformedInput(newAction: java.nio.charset.CodingErrorAction): void;
                /**
                 * Returns this encoder's current action for unmappable-character errors.
                 */
                // @ts-ignore
                public unmappableCharacterAction(): java.nio.charset.CodingErrorAction;
                /**
                 * Changes this encoder's action for unmappable-character errors.
                 * <p> This method invokes the {@link #implOnUnmappableCharacter
                 * implOnUnmappableCharacter} method, passing the new action.  </p>
                 */
                // @ts-ignore
                public onUnmappableCharacter(newAction: java.nio.charset.CodingErrorAction): java.nio.charset.CharsetEncoder;
                /**
                 * Reports a change to this encoder's unmappable-character action.
                 * <p> The default implementation of this method does nothing.  This method
                 * should be overridden by encoders that require notification of changes to
                 * the unmappable-character action.  </p>
                 */
                // @ts-ignore
                protected implOnUnmappableCharacter(newAction: java.nio.charset.CodingErrorAction): void;
                /**
                 * Returns the average number of bytes that will be produced for each
                 * character of input.  This heuristic value may be used to estimate the size
                 * of the output buffer required for a given input sequence.
                 */
                // @ts-ignore
                public averageBytesPerChar(): number;
                /**
                 * Returns the maximum number of bytes that will be produced for each
                 * character of input.  This value may be used to compute the worst-case size
                 * of the output buffer required for a given input sequence.
                 */
                // @ts-ignore
                public maxBytesPerChar(): number;
                /**
                 * Encodes as many characters as possible from the given input buffer,
                 * writing the results to the given output buffer.
                 * <p> The buffers are read from, and written to, starting at their current
                 * positions.  At most {@link Buffer#remaining in.remaining()} characters
                 * will be read and at most {@link Buffer#remaining out.remaining()}
                 * bytes will be written.  The buffers' positions will be advanced to
                 * reflect the characters read and the bytes written, but their marks and
                 * limits will not be modified.
                 * <p> In addition to reading characters from the input buffer and writing
                 * bytes to the output buffer, this method returns a {@link CoderResult}
                 * object to describe its reason for termination:
                 * <ul>
                 * <li><p> {@link CoderResult#UNDERFLOW} indicates that as much of the
                 * input buffer as possible has been encoded.  If there is no further
                 * input then the invoker can proceed to the next step of the
                 * <a href="#steps">encoding operation</a>.  Otherwise this method
                 * should be invoked again with further input.  </p></li>
                 * <li><p> {@link CoderResult#OVERFLOW} indicates that there is
                 * insufficient space in the output buffer to encode any more characters.
                 * This method should be invoked again with an output buffer that has
                 * more {@linkplain Buffer#remaining remaining} bytes. This is
                 * typically done by draining any encoded bytes from the output
                 * buffer.  </p></li>
                 * <li><p> A {@linkplain CoderResult#malformedForLength
                 * malformed-input} result indicates that a malformed-input
                 * error has been detected.  The malformed characters begin at the input
                 * buffer's (possibly incremented) position; the number of malformed
                 * characters may be determined by invoking the result object's {@link
                 * CoderResult#length() length} method.  This case applies only if the
                 * {@linkplain #onMalformedInput malformed action} of this encoder
                 * is {@link CodingErrorAction#REPORT}; otherwise the malformed input
                 * will be ignored or replaced, as requested.  </p></li>
                 * <li><p> An {@linkplain CoderResult#unmappableForLength
                 * unmappable-character} result indicates that an
                 * unmappable-character error has been detected.  The characters that
                 * encode the unmappable character begin at the input buffer's (possibly
                 * incremented) position; the number of such characters may be determined
                 * by invoking the result object's {@link CoderResult#length() length}
                 * method.  This case applies only if the {@linkplain #onUnmappableCharacter
                 * unmappable action} of this encoder is {@link
                 * CodingErrorAction#REPORT}; otherwise the unmappable character will be
                 * ignored or replaced, as requested.  </p></li>
                 * </ul>
                 * In any case, if this method is to be reinvoked in the same encoding
                 * operation then care should be taken to preserve any characters remaining
                 * in the input buffer so that they are available to the next invocation.
                 * <p> The <tt>endOfInput</tt> parameter advises this method as to whether
                 * the invoker can provide further input beyond that contained in the given
                 * input buffer.  If there is a possibility of providing additional input
                 * then the invoker should pass <tt>false</tt> for this parameter; if there
                 * is no possibility of providing further input then the invoker should
                 * pass <tt>true</tt>.  It is not erroneous, and in fact it is quite
                 * common, to pass <tt>false</tt> in one invocation and later discover that
                 * no further input was actually available.  It is critical, however, that
                 * the final invocation of this method in a sequence of invocations always
                 * pass <tt>true</tt> so that any remaining unencoded input will be treated
                 * as being malformed.
                 * <p> This method works by invoking the {@link #encodeLoop encodeLoop}
                 * method, interpreting its results, handling error conditions, and
                 * reinvoking it as necessary.  </p>
                 */
                // @ts-ignore
                public encode(input: java.nio.CharBuffer, out: java.nio.ByteBuffer, endOfInput: boolean): java.nio.charset.CoderResult;
                /**
                 * Flushes this encoder.
                 * <p> Some encoders maintain internal state and may need to write some
                 * final bytes to the output buffer once the overall input sequence has
                 * been read.
                 * <p> Any additional output is written to the output buffer beginning at
                 * its current position.  At most {@link Buffer#remaining out.remaining()}
                 * bytes will be written.  The buffer's position will be advanced
                 * appropriately, but its mark and limit will not be modified.
                 * <p> If this method completes successfully then it returns {@link
                 * CoderResult#UNDERFLOW}.  If there is insufficient room in the output
                 * buffer then it returns {@link CoderResult#OVERFLOW}.  If this happens
                 * then this method must be invoked again, with an output buffer that has
                 * more room, in order to complete the current <a href="#steps">encoding
                 * operation</a>.
                 * <p> If this encoder has already been flushed then invoking this method
                 * has no effect.
                 * <p> This method invokes the {@link #implFlush implFlush} method to
                 * perform the actual flushing operation.  </p>
                 */
                // @ts-ignore
                public flush(out: java.nio.ByteBuffer): java.nio.charset.CoderResult;
                /**
                 * Flushes this encoder.
                 * <p> The default implementation of this method does nothing, and always
                 * returns {@link CoderResult#UNDERFLOW}.  This method should be overridden
                 * by encoders that may need to write final bytes to the output buffer
                 * once the entire input sequence has been read. </p>
                 */
                // @ts-ignore
                protected implFlush(out: java.nio.ByteBuffer): java.nio.charset.CoderResult;
                /**
                 * Resets this encoder, clearing any internal state.
                 * <p> This method resets charset-independent state and also invokes the
                 * {@link #implReset() implReset} method in order to perform any
                 * charset-specific reset actions.  </p>
                 */
                // @ts-ignore
                public reset(): java.nio.charset.CharsetEncoder;
                /**
                 * Resets this encoder, clearing any charset-specific internal state.
                 * <p> The default implementation of this method does nothing.  This method
                 * should be overridden by encoders that maintain internal state.  </p>
                 */
                // @ts-ignore
                protected implReset(): void;
                /**
                 * Encodes one or more characters into one or more bytes.
                 * <p> This method encapsulates the basic encoding loop, encoding as many
                 * characters as possible until it either runs out of input, runs out of room
                 * in the output buffer, or encounters an encoding error.  This method is
                 * invoked by the {@link #encode encode} method, which handles result
                 * interpretation and error recovery.
                 * <p> The buffers are read from, and written to, starting at their current
                 * positions.  At most {@link Buffer#remaining in.remaining()} characters
                 * will be read, and at most {@link Buffer#remaining out.remaining()}
                 * bytes will be written.  The buffers' positions will be advanced to
                 * reflect the characters read and the bytes written, but their marks and
                 * limits will not be modified.
                 * <p> This method returns a {@link CoderResult} object to describe its
                 * reason for termination, in the same manner as the {@link #encode encode}
                 * method.  Most implementations of this method will handle encoding errors
                 * by returning an appropriate result object for interpretation by the
                 * {@link #encode encode} method.  An optimized implementation may instead
                 * examine the relevant error action and implement that action itself.
                 * <p> An implementation of this method may perform arbitrary lookahead by
                 * returning {@link CoderResult#UNDERFLOW} until it receives sufficient
                 * input.  </p>
                 */
                // @ts-ignore
                protected abstract encodeLoop(input: java.nio.CharBuffer, out: java.nio.ByteBuffer): java.nio.charset.CoderResult;
                /**
                 * Convenience method that encodes the remaining content of a single input
                 * character buffer into a newly-allocated byte buffer.
                 * <p> This method implements an entire <a href="#steps">encoding
                 * operation</a>; that is, it resets this encoder, then it encodes the
                 * characters in the given character buffer, and finally it flushes this
                 * encoder.  This method should therefore not be invoked if an encoding
                 * operation is already in progress.  </p>
                 */
                // @ts-ignore
                public encode(input: java.nio.CharBuffer): java.nio.ByteBuffer;
                /**
                 * Tells whether or not this encoder can encode the given character.
                 * <p> This method returns <tt>false</tt> if the given character is a
                 * surrogate character; such characters can be interpreted only when they
                 * are members of a pair consisting of a high surrogate followed by a low
                 * surrogate.  The {@link #canEncode(java.lang.CharSequence)
                 * canEncode(CharSequence)} method may be used to test whether or not a
                 * character sequence can be encoded.
                 * <p> This method may modify this encoder's state; it should therefore not
                 * be invoked if an <a href="#steps">encoding operation</a> is already in
                 * progress.
                 * <p> The default implementation of this method is not very efficient; it
                 * should generally be overridden to improve performance.  </p>
                 */
                // @ts-ignore
                public canEncode(c: string): boolean;
                /**
                 * Tells whether or not this encoder can encode the given character
                 * sequence.
                 * <p> If this method returns <tt>false</tt> for a particular character
                 * sequence then more information about why the sequence cannot be encoded
                 * may be obtained by performing a full <a href="#steps">encoding
                 * operation</a>.
                 * <p> This method may modify this encoder's state; it should therefore not
                 * be invoked if an encoding operation is already in progress.
                 * <p> The default implementation of this method is not very efficient; it
                 * should generally be overridden to improve performance.  </p>
                 */
                // @ts-ignore
                public canEncode(cs: java.lang.CharSequence): boolean;
            }
        }
    }
}
