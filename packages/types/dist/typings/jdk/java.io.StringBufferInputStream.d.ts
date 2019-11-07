declare namespace java {
    namespace io {
        // @ts-ignore
         class StringBufferInputStream extends java.io.InputStream {
            /**
             * Creates a string input stream to read data from the specified string.
             */
            // @ts-ignore
            constructor(s: string)
            // @ts-ignore
            protected buffer: string;
            // @ts-ignore
            protected pos: number;
            // @ts-ignore
            protected count: number;
            /**
             * Reads the next byte of data from this input stream. The value
             * byte is returned as an <code>int</code> in the range
             * <code>0</code> to <code>255</code>. If no byte is available
             * because the end of the stream has been reached, the value
             * <code>-1</code> is returned.
             * <p>
             * The <code>read</code> method of
             * <code>StringBufferInputStream</code> cannot block. It returns the
             * low eight bits of the next character in this input stream's buffer.
             */
            // @ts-ignore
            public read(): number;
            /**
             * Reads up to <code>len</code> bytes of data from this input stream
             * into an array of bytes.
             * <p>
             * The <code>read</code> method of
             * <code>StringBufferInputStream</code> cannot block. It copies the
             * low eight bits from the characters in this input stream's buffer into
             * the byte array argument.
             */
            // @ts-ignore
            public read(b: number, off: number, len: number): number;
            /**
             * Skips <code>n</code> bytes of input from this input stream. Fewer
             * bytes might be skipped if the end of the input stream is reached.
             */
            // @ts-ignore
            public skip(n: number): number;
            /**
             * Returns the number of bytes that can be read from the input
             * stream without blocking.
             */
            // @ts-ignore
            public available(): number;
            /**
             * Resets the input stream to begin reading from the first character
             * of this input stream's underlying buffer.
             */
            // @ts-ignore
            public reset(): void;
        }
    }
}
