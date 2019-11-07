declare namespace java {
    namespace io {
        // @ts-ignore
         class ByteArrayOutputStream extends java.io.OutputStream {
            /**
             * Creates a new byte array output stream. The buffer capacity is
             * initially 32 bytes, though its size increases if necessary.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new byte array output stream, with a buffer capacity of
             * the specified size, in bytes.
             */
            // @ts-ignore
            constructor(size: number)
            // @ts-ignore
            protected buf: number[];
            // @ts-ignore
            protected count: number;
            /**
             * Writes the specified byte to this byte array output stream.
             */
            // @ts-ignore
            public write(b: number): void;
            /**
             * Writes <code>len</code> bytes from the specified byte array
             * starting at offset <code>off</code> to this byte array output stream.
             */
            // @ts-ignore
            public write(b: number, off: number, len: number): void;
            /**
             * Writes the complete contents of this byte array output stream to
             * the specified output stream argument, as if by calling the output
             * stream's write method using <code>out.write(buf, 0, count)</code>.
             */
            // @ts-ignore
            public writeTo(out: java.io.OutputStream): void;
            /**
             * Resets the <code>count</code> field of this byte array output
             * stream to zero, so that all currently accumulated output in the
             * output stream is discarded. The output stream can be used again,
             * reusing the already allocated buffer space.
             */
            // @ts-ignore
            public reset(): void;
            /**
             * Creates a newly allocated byte array. Its size is the current
             * size of this output stream and the valid contents of the buffer
             * have been copied into it.
             */
            // @ts-ignore
            public toByteArray(): number[];
            /**
             * Returns the current size of the buffer.
             */
            // @ts-ignore
            public size(): number;
            /**
             * Converts the buffer's contents into a string decoding bytes using the
             * platform's default character set. The length of the new <tt>String</tt>
             * is a function of the character set, and hence may not be equal to the
             * size of the buffer.
             * <p> This method always replaces malformed-input and unmappable-character
             * sequences with the default replacement string for the platform's
             * default character set. The {@linkplain java.nio.charset.CharsetDecoder}
             * class should be used when more control over the decoding process is
             * required.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Converts the buffer's contents into a string by decoding the bytes using
             * the named {@link java.nio.charset.Charset charset}. The length of the new
             * <tt>String</tt> is a function of the charset, and hence may not be equal
             * to the length of the byte array.
             * <p> This method always replaces malformed-input and unmappable-character
             * sequences with this charset's default replacement string. The {@link
             * java.nio.charset.CharsetDecoder} class should be used when more control
             * over the decoding process is required.
             */
            // @ts-ignore
            public toString(charsetName: string): string;
            /**
             * Creates a newly allocated string. Its size is the current size of
             * the output stream and the valid contents of the buffer have been
             * copied into it. Each character <i>c</i> in the resulting string is
             * constructed from the corresponding element <i>b</i> in the byte
             * array such that:
             * <blockquote><pre>
             * c == (char)(((hibyte &amp; 0xff) &lt;&lt; 8) | (b &amp; 0xff))
             * </pre></blockquote>
             */
            // @ts-ignore
            public toString(hibyte: number): string;
            /**
             * Closing a <tt>ByteArrayOutputStream</tt> has no effect. The methods in
             * this class can be called after the stream has been closed without
             * generating an <tt>IOException</tt>.
             */
            // @ts-ignore
            public close(): void;
        }
    }
}
