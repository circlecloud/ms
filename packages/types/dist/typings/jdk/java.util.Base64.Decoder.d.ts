// @ts-nocheck
declare namespace java {
    namespace util {
        namespace Base64 {
            // @ts-ignore
             class Decoder extends java.lang.Object {
                /**
                 * Decodes all bytes from the input byte array using the {@link Base64}
                 * encoding scheme, writing the results into a newly-allocated output
                 * byte array. The returned byte array is of the length of the resulting
                 * bytes.
                 */
                // @ts-ignore
                public decode(src: number): number[];
                /**
                 * Decodes a Base64 encoded String into a newly-allocated byte array
                 * using the {@link Base64} encoding scheme.
                 * <p> An invocation of this method has exactly the same effect as invoking
                 * {@code decode(src.getBytes(StandardCharsets.ISO_8859_1))}
                 */
                // @ts-ignore
                public decode(src: string): number[];
                /**
                 * Decodes all bytes from the input byte array using the {@link Base64}
                 * encoding scheme, writing the results into the given output byte array,
                 * starting at offset 0.
                 * <p> It is the responsibility of the invoker of this method to make
                 * sure the output byte array {@code dst} has enough space for decoding
                 * all bytes from the input byte array. No bytes will be be written to
                 * the output byte array if the output byte array is not big enough.
                 * <p> If the input byte array is not in valid Base64 encoding scheme
                 * then some bytes may have been written to the output byte array before
                 * IllegalargumentException is thrown.
                 */
                // @ts-ignore
                public decode(src: number, dst: number): number;
                /**
                 * Decodes all bytes from the input byte buffer using the {@link Base64}
                 * encoding scheme, writing the results into a newly-allocated ByteBuffer.
                 * <p> Upon return, the source buffer's position will be updated to
                 * its limit; its limit will not have been changed. The returned
                 * output buffer's position will be zero and its limit will be the
                 * number of resulting decoded bytes
                 * <p> {@code IllegalArgumentException} is thrown if the input buffer
                 * is not in valid Base64 encoding scheme. The position of the input
                 * buffer will not be advanced in this case.
                 */
                // @ts-ignore
                public decode(buffer: java.nio.ByteBuffer): java.nio.ByteBuffer;
                /**
                 * Returns an input stream for decoding {@link Base64} encoded byte stream.
                 * <p> The {@code read}  methods of the returned {@code InputStream} will
                 * throw {@code IOException} when reading bytes that cannot be decoded.
                 * <p> Closing the returned input stream will close the underlying
                 * input stream.
                 */
                // @ts-ignore
                public wrap(is: java.io.InputStream): java.io.InputStream;
            }
        }
    }
}
