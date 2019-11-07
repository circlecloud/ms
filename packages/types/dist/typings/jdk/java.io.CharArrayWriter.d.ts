// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
         class CharArrayWriter extends java.io.Writer {
            /**
             * Creates a new CharArrayWriter.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new CharArrayWriter with the specified initial size.
             */
            // @ts-ignore
            constructor(initialSize: number)
            // @ts-ignore
            protected buf: string[];
            // @ts-ignore
            protected count: number;
            /**
             * Writes a character to the buffer.
             */
            // @ts-ignore
            public write(c: number): void;
            /**
             * Writes characters to the buffer.
             */
            // @ts-ignore
            public write(c: string, off: number, len: number): void;
            /**
             * Write a portion of a string to the buffer.
             */
            // @ts-ignore
            public write(str: string, off: number, len: number): void;
            /**
             * Writes the contents of the buffer to another character stream.
             */
            // @ts-ignore
            public writeTo(out: java.io.Writer): void;
            /**
             * Appends the specified character sequence to this writer.
             * <p> An invocation of this method of the form <tt>out.append(csq)</tt>
             * behaves in exactly the same way as the invocation
             * <pre>
             * out.write(csq.toString()) </pre>
             * <p> Depending on the specification of <tt>toString</tt> for the
             * character sequence <tt>csq</tt>, the entire sequence may not be
             * appended. For instance, invoking the <tt>toString</tt> method of a
             * character buffer will return a subsequence whose content depends upon
             * the buffer's position and limit.
             */
            // @ts-ignore
            public append(csq: java.lang.CharSequence): java.io.CharArrayWriter;
            /**
             * Appends a subsequence of the specified character sequence to this writer.
             * <p> An invocation of this method of the form <tt>out.append(csq, start,
             * end)</tt> when <tt>csq</tt> is not <tt>null</tt>, behaves in
             * exactly the same way as the invocation
             * <pre>
             * out.write(csq.subSequence(start, end).toString()) </pre>
             */
            // @ts-ignore
            public append(csq: java.lang.CharSequence, start: number, end: number): java.io.CharArrayWriter;
            /**
             * Appends the specified character to this writer.
             * <p> An invocation of this method of the form <tt>out.append(c)</tt>
             * behaves in exactly the same way as the invocation
             * <pre>
             * out.write(c) </pre>
             */
            // @ts-ignore
            public append(c: string): java.io.CharArrayWriter;
            /**
             * Resets the buffer so that you can use it again without
             * throwing away the already allocated buffer.
             */
            // @ts-ignore
            public reset(): void;
            /**
             * Returns a copy of the input data.
             */
            // @ts-ignore
            public toCharArray(): string[];
            /**
             * Returns the current size of the buffer.
             */
            // @ts-ignore
            public size(): number;
            /**
             * Converts input data to a string.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Flush the stream.
             */
            // @ts-ignore
            public flush(): void;
            /**
             * Close the stream.  This method does not release the buffer, since its
             * contents might still be required. Note: Invoking this method in this class
             * will have no effect.
             */
            // @ts-ignore
            public close(): void;
        }
    }
}
