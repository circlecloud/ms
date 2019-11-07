declare namespace java {
    namespace io {
        // @ts-ignore
         class BufferedWriter extends java.io.Writer {
            /**
             * Creates a buffered character-output stream that uses a default-sized
             * output buffer.
             */
            // @ts-ignore
            constructor(out: java.io.Writer)
            /**
             * Creates a new buffered character-output stream that uses an output
             * buffer of the given size.
             */
            // @ts-ignore
            constructor(out: java.io.Writer, sz: number)
            /**
             * Writes a single character.
             */
            // @ts-ignore
            public write(c: number): void;
            /**
             * Writes a portion of an array of characters.
             * <p> Ordinarily this method stores characters from the given array into
             * this stream's buffer, flushing the buffer to the underlying stream as
             * needed.  If the requested length is at least as large as the buffer,
             * however, then this method will flush the buffer and write the characters
             * directly to the underlying stream.  Thus redundant
             * <code>BufferedWriter</code>s will not copy data unnecessarily.
             */
            // @ts-ignore
            public write(cbuf: string, off: number, len: number): void;
            /**
             * Writes a portion of a String.
             * <p> If the value of the <tt>len</tt> parameter is negative then no
             * characters are written.  This is contrary to the specification of this
             * method in the {@linkplain java.io.Writer#write(java.lang.String,int,int)
             * superclass}, which requires that an {@link IndexOutOfBoundsException} be
             * thrown.
             */
            // @ts-ignore
            public write(s: string, off: number, len: number): void;
            /**
             * Writes a line separator.  The line separator string is defined by the
             * system property <tt>line.separator</tt>, and is not necessarily a single
             * newline ('\n') character.
             */
            // @ts-ignore
            public newLine(): void;
            /**
             * Flushes the stream.
             */
            // @ts-ignore
            public flush(): void;
            // @ts-ignore
            public close(): void;
        }
    }
}
