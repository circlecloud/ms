// @ts-nocheck
declare namespace java {
    namespace util {
        namespace Base64 {
            // @ts-ignore
             class Encoder extends java.lang.Object {
                /**
                 * Encodes all bytes from the specified byte array into a newly-allocated
                 * byte array using the {@link Base64} encoding scheme. The returned byte
                 * array is of the length of the resulting bytes.
                 */
                // @ts-ignore
                public encode(src: number): number[];
                /**
                 * Encodes all bytes from the specified byte array using the
                 * {@link Base64} encoding scheme, writing the resulting bytes to the
                 * given output byte array, starting at offset 0.
                 * <p> It is the responsibility of the invoker of this method to make
                 * sure the output byte array {@code dst} has enough space for encoding
                 * all bytes from the input byte array. No bytes will be written to the
                 * output byte array if the output byte array is not big enough.
                 */
                // @ts-ignore
                public encode(src: number, dst: number): number;
                /**
                 * Encodes the specified byte array into a String using the {@link Base64}
                 * encoding scheme.
                 * <p> This method first encodes all input bytes into a base64 encoded
                 * byte array and then constructs a new String by using the encoded byte
                 * array and the {@link java.nio.charset.StandardCharsets#ISO_8859_1
                 * ISO-8859-1} charset.
                 * <p> In other words, an invocation of this method has exactly the same
                 * effect as invoking
                 * {@code new String(encode(src), StandardCharsets.ISO_8859_1)}.
                 */
                // @ts-ignore
                public encodeToString(src: number): string;
                /**
                 * Encodes all remaining bytes from the specified byte buffer into
                 * a newly-allocated ByteBuffer using the {@link Base64} encoding
                 * scheme.
                 * Upon return, the source buffer's position will be updated to
                 * its limit; its limit will not have been changed. The returned
                 * output buffer's position will be zero and its limit will be the
                 * number of resulting encoded bytes.
                 */
                // @ts-ignore
                public encode(buffer: java.nio.ByteBuffer): java.nio.ByteBuffer;
                /**
                 * Wraps an output stream for encoding byte data using the {@link Base64}
                 * encoding scheme.
                 * <p> It is recommended to promptly close the returned output stream after
                 * use, during which it will flush all possible leftover bytes to the underlying
                 * output stream. Closing the returned output stream will close the underlying
                 * output stream.
                 */
                // @ts-ignore
                public wrap(os: java.io.OutputStream): java.io.OutputStream;
                /**
                 * Returns an encoder instance that encodes equivalently to this one,
                 * but without adding any padding character at the end of the encoded
                 * byte data.
                 * <p> The encoding scheme of this encoder instance is unaffected by
                 * this invocation. The returned encoder instance should be used for
                 * non-padding encoding operation.
                 */
                // @ts-ignore
                public withoutPadding(): java.util.Base64.Encoder;
            }
        }
    }
}
