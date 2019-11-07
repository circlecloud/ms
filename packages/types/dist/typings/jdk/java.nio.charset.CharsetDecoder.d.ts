declare namespace java {
    namespace nio {
        namespace charset {
            // @ts-ignore
            abstract class CharsetDecoder extends java.lang.Object {
                /**
                 * Initializes a new decoder.  The new decoder will have the given
                 * chars-per-byte values and its replacement will be the
                 * string <tt>"&#92;uFFFD"</tt>.
                 */
                // @ts-ignore
                constructor(cs: java.nio.charset.Charset, averageCharsPerByte: number, maxCharsPerByte: number)
                /**
                 * Returns the charset that created this decoder.
                 */
                // @ts-ignore
                public charset(): java.nio.charset.Charset;
                /**
                 * Returns this decoder's replacement value.
                 */
                // @ts-ignore
                public replacement(): string;
                /**
                 * Changes this decoder's replacement value.
                 * <p> This method invokes the {@link #implReplaceWith implReplaceWith}
                 * method, passing the new replacement, after checking that the new
                 * replacement is acceptable.  </p>
                 */
                // @ts-ignore
                public replaceWith(newReplacement: string): java.nio.charset.CharsetDecoder;
                /**
                 * Reports a change to this decoder's replacement value.
                 * <p> The default implementation of this method does nothing.  This method
                 * should be overridden by decoders that require notification of changes to
                 * the replacement.  </p>
                 */
                // @ts-ignore
                protected implReplaceWith(newReplacement: string): void;
                /**
                 * Returns this decoder's current action for malformed-input errors.
                 */
                // @ts-ignore
                public malformedInputAction(): java.nio.charset.CodingErrorAction;
                /**
                 * Changes this decoder's action for malformed-input errors.
                 * <p> This method invokes the {@link #implOnMalformedInput
                 * implOnMalformedInput} method, passing the new action.  </p>
                 */
                // @ts-ignore
                public onMalformedInput(newAction: java.nio.charset.CodingErrorAction): java.nio.charset.CharsetDecoder;
                /**
                 * Reports a change to this decoder's malformed-input action.
                 * <p> The default implementation of this method does nothing.  This method
                 * should be overridden by decoders that require notification of changes to
                 * the malformed-input action.  </p>
                 */
                // @ts-ignore
                protected implOnMalformedInput(newAction: java.nio.charset.CodingErrorAction): void;
                /**
                 * Returns this decoder's current action for unmappable-character errors.
                 */
                // @ts-ignore
                public unmappableCharacterAction(): java.nio.charset.CodingErrorAction;
                /**
                 * Changes this decoder's action for unmappable-character errors.
                 * <p> This method invokes the {@link #implOnUnmappableCharacter
                 * implOnUnmappableCharacter} method, passing the new action.  </p>
                 */
                // @ts-ignore
                public onUnmappableCharacter(newAction: java.nio.charset.CodingErrorAction): java.nio.charset.CharsetDecoder;
                /**
                 * Reports a change to this decoder's unmappable-character action.
                 * <p> The default implementation of this method does nothing.  This method
                 * should be overridden by decoders that require notification of changes to
                 * the unmappable-character action.  </p>
                 */
                // @ts-ignore
                protected implOnUnmappableCharacter(newAction: java.nio.charset.CodingErrorAction): void;
                /**
                 * Returns the average number of characters that will be produced for each
                 * byte of input.  This heuristic value may be used to estimate the size
                 * of the output buffer required for a given input sequence.
                 */
                // @ts-ignore
                public averageCharsPerByte(): number;
                /**
                 * Returns the maximum number of characters that will be produced for each
                 * byte of input.  This value may be used to compute the worst-case size
                 * of the output buffer required for a given input sequence.
                 */
                // @ts-ignore
                public maxCharsPerByte(): number;
                /**
                 * Decodes as many bytes as possible from the given input buffer,
                 * writing the results to the given output buffer.
                 * <p> The buffers are read from, and written to, starting at their current
                 * positions.  At most {@link Buffer#remaining in.remaining()} bytes
                 * will be read and at most {@link Buffer#remaining out.remaining()}
                 * characters will be written.  The buffers' positions will be advanced to
                 * reflect the bytes read and the characters written, but their marks and
                 * limits will not be modified.
                 * <p> In addition to reading bytes from the input buffer and writing
                 * characters to the output buffer, this method returns a {@link CoderResult}
                 * object to describe its reason for termination:
                 * <ul>
                 * <li><p> {@link CoderResult#UNDERFLOW} indicates that as much of the
                 * input buffer as possible has been decoded.  If there is no further
                 * input then the invoker can proceed to the next step of the
                 * <a href="#steps">decoding operation</a>.  Otherwise this method
                 * should be invoked again with further input.  </p></li>
                 * <li><p> {@link CoderResult#OVERFLOW} indicates that there is
                 * insufficient space in the output buffer to decode any more bytes.
                 * This method should be invoked again with an output buffer that has
                 * more {@linkplain Buffer#remaining remaining} characters. This is
                 * typically done by draining any decoded characters from the output
                 * buffer.  </p></li>
                 * <li><p> A {@linkplain CoderResult#malformedForLength
                 * malformed-input} result indicates that a malformed-input
                 * error has been detected.  The malformed bytes begin at the input
                 * buffer's (possibly incremented) position; the number of malformed
                 * bytes may be determined by invoking the result object's {@link
                 * CoderResult#length() length} method.  This case applies only if the
                 * {@linkplain #onMalformedInput malformed action} of this decoder
                 * is {@link CodingErrorAction#REPORT}; otherwise the malformed input
                 * will be ignored or replaced, as requested.  </p></li>
                 * <li><p> An {@linkplain CoderResult#unmappableForLength
                 * unmappable-character} result indicates that an
                 * unmappable-character error has been detected.  The bytes that
                 * decode the unmappable character begin at the input buffer's (possibly
                 * incremented) position; the number of such bytes may be determined
                 * by invoking the result object's {@link CoderResult#length() length}
                 * method.  This case applies only if the {@linkplain #onUnmappableCharacter
                 * unmappable action} of this decoder is {@link
                 * CodingErrorAction#REPORT}; otherwise the unmappable character will be
                 * ignored or replaced, as requested.  </p></li>
                 * </ul>
                 * In any case, if this method is to be reinvoked in the same decoding
                 * operation then care should be taken to preserve any bytes remaining
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
                 * pass <tt>true</tt> so that any remaining undecoded input will be treated
                 * as being malformed.
                 * <p> This method works by invoking the {@link #decodeLoop decodeLoop}
                 * method, interpreting its results, handling error conditions, and
                 * reinvoking it as necessary.  </p>
                 */
                // @ts-ignore
                public decode(input: java.nio.ByteBuffer, out: java.nio.CharBuffer, endOfInput: boolean): java.nio.charset.CoderResult;
                /**
                 * Flushes this decoder.
                 * <p> Some decoders maintain internal state and may need to write some
                 * final characters to the output buffer once the overall input sequence has
                 * been read.
                 * <p> Any additional output is written to the output buffer beginning at
                 * its current position.  At most {@link Buffer#remaining out.remaining()}
                 * characters will be written.  The buffer's position will be advanced
                 * appropriately, but its mark and limit will not be modified.
                 * <p> If this method completes successfully then it returns {@link
                 * CoderResult#UNDERFLOW}.  If there is insufficient room in the output
                 * buffer then it returns {@link CoderResult#OVERFLOW}.  If this happens
                 * then this method must be invoked again, with an output buffer that has
                 * more room, in order to complete the current <a href="#steps">decoding
                 * operation</a>.
                 * <p> If this decoder has already been flushed then invoking this method
                 * has no effect.
                 * <p> This method invokes the {@link #implFlush implFlush} method to
                 * perform the actual flushing operation.  </p>
                 */
                // @ts-ignore
                public flush(out: java.nio.CharBuffer): java.nio.charset.CoderResult;
                /**
                 * Flushes this decoder.
                 * <p> The default implementation of this method does nothing, and always
                 * returns {@link CoderResult#UNDERFLOW}.  This method should be overridden
                 * by decoders that may need to write final characters to the output buffer
                 * once the entire input sequence has been read. </p>
                 */
                // @ts-ignore
                protected implFlush(out: java.nio.CharBuffer): java.nio.charset.CoderResult;
                /**
                 * Resets this decoder, clearing any internal state.
                 * <p> This method resets charset-independent state and also invokes the
                 * {@link #implReset() implReset} method in order to perform any
                 * charset-specific reset actions.  </p>
                 */
                // @ts-ignore
                public reset(): java.nio.charset.CharsetDecoder;
                /**
                 * Resets this decoder, clearing any charset-specific internal state.
                 * <p> The default implementation of this method does nothing.  This method
                 * should be overridden by decoders that maintain internal state.  </p>
                 */
                // @ts-ignore
                protected implReset(): void;
                /**
                 * Decodes one or more bytes into one or more characters.
                 * <p> This method encapsulates the basic decoding loop, decoding as many
                 * bytes as possible until it either runs out of input, runs out of room
                 * in the output buffer, or encounters a decoding error.  This method is
                 * invoked by the {@link #decode decode} method, which handles result
                 * interpretation and error recovery.
                 * <p> The buffers are read from, and written to, starting at their current
                 * positions.  At most {@link Buffer#remaining in.remaining()} bytes
                 * will be read, and at most {@link Buffer#remaining out.remaining()}
                 * characters will be written.  The buffers' positions will be advanced to
                 * reflect the bytes read and the characters written, but their marks and
                 * limits will not be modified.
                 * <p> This method returns a {@link CoderResult} object to describe its
                 * reason for termination, in the same manner as the {@link #decode decode}
                 * method.  Most implementations of this method will handle decoding errors
                 * by returning an appropriate result object for interpretation by the
                 * {@link #decode decode} method.  An optimized implementation may instead
                 * examine the relevant error action and implement that action itself.
                 * <p> An implementation of this method may perform arbitrary lookahead by
                 * returning {@link CoderResult#UNDERFLOW} until it receives sufficient
                 * input.  </p>
                 */
                // @ts-ignore
                protected abstract decodeLoop(input: java.nio.ByteBuffer, out: java.nio.CharBuffer): java.nio.charset.CoderResult;
                /**
                 * Convenience method that decodes the remaining content of a single input
                 * byte buffer into a newly-allocated character buffer.
                 * <p> This method implements an entire <a href="#steps">decoding
                 * operation</a>; that is, it resets this decoder, then it decodes the
                 * bytes in the given byte buffer, and finally it flushes this
                 * decoder.  This method should therefore not be invoked if a decoding
                 * operation is already in progress.  </p>
                 */
                // @ts-ignore
                public decode(input: java.nio.ByteBuffer): java.nio.CharBuffer;
                /**
                 * Tells whether or not this decoder implements an auto-detecting charset.
                 * <p> The default implementation of this method always returns
                 * <tt>false</tt>; it should be overridden by auto-detecting decoders to
                 * return <tt>true</tt>.  </p>
                 */
                // @ts-ignore
                public isAutoDetecting(): boolean;
                /**
                 * Tells whether or not this decoder has yet detected a
                 * charset&nbsp;&nbsp;<i>(optional operation)</i>.
                 * <p> If this decoder implements an auto-detecting charset then at a
                 * single point during a decoding operation this method may start returning
                 * <tt>true</tt> to indicate that a specific charset has been detected in
                 * the input byte sequence.  Once this occurs, the {@link #detectedCharset
                 * detectedCharset} method may be invoked to retrieve the detected charset.
                 * <p> That this method returns <tt>false</tt> does not imply that no bytes
                 * have yet been decoded.  Some auto-detecting decoders are capable of
                 * decoding some, or even all, of an input byte sequence without fixing on
                 * a particular charset.
                 * <p> The default implementation of this method always throws an {@link
                 * UnsupportedOperationException}; it should be overridden by
                 * auto-detecting decoders to return <tt>true</tt> once the input charset
                 * has been determined.  </p>
                 */
                // @ts-ignore
                public isCharsetDetected(): boolean;
                /**
                 * Retrieves the charset that was detected by this
                 * decoder&nbsp;&nbsp;<i>(optional operation)</i>.
                 * <p> If this decoder implements an auto-detecting charset then this
                 * method returns the actual charset once it has been detected.  After that
                 * point, this method returns the same value for the duration of the
                 * current decoding operation.  If not enough input bytes have yet been
                 * read to determine the actual charset then this method throws an {@link
                 * IllegalStateException}.
                 * <p> The default implementation of this method always throws an {@link
                 * UnsupportedOperationException}; it should be overridden by
                 * auto-detecting decoders to return the appropriate value.  </p>
                 */
                // @ts-ignore
                public detectedCharset(): java.nio.charset.Charset;
            }
        }
    }
}
