declare namespace java {
    namespace io {
        // @ts-ignore
         class StringWriter extends java.io.Writer {
            /**
             * Create a new string writer using the default initial string-buffer
             * size.
             */
            // @ts-ignore
            constructor()
            /**
             * Create a new string writer using the specified initial string-buffer
             * size.
             */
            // @ts-ignore
            constructor(initialSize: number)
            /**
             * Write a single character.
             */
            // @ts-ignore
            public write(c: number): void;
            /**
             * Write a portion of an array of characters.
             */
            // @ts-ignore
            public write(cbuf: string, off: number, len: number): void;
            /**
             * Write a string.
             */
            // @ts-ignore
            public write(str: string): void;
            /**
             * Write a portion of a string.
             */
            // @ts-ignore
            public write(str: string, off: number, len: number): void;
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
            public append(csq: java.lang.CharSequence): java.io.StringWriter;
            /**
             * Appends a subsequence of the specified character sequence to this writer.
             * <p> An invocation of this method of the form <tt>out.append(csq, start,
             * end)</tt> when <tt>csq</tt> is not <tt>null</tt>, behaves in
             * exactly the same way as the invocation
             * <pre>
             * out.write(csq.subSequence(start, end).toString()) </pre>
             */
            // @ts-ignore
            public append(csq: java.lang.CharSequence, start: number, end: number): java.io.StringWriter;
            /**
             * Appends the specified character to this writer.
             * <p> An invocation of this method of the form <tt>out.append(c)</tt>
             * behaves in exactly the same way as the invocation
             * <pre>
             * out.write(c) </pre>
             */
            // @ts-ignore
            public append(c: string): java.io.StringWriter;
            /**
             * Return the buffer's current value as a string.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Return the string buffer itself.
             */
            // @ts-ignore
            public getBuffer(): java.lang.StringBuffer;
            /**
             * Flush the stream.
             */
            // @ts-ignore
            public flush(): void;
            /**
             * Closing a <tt>StringWriter</tt> has no effect. The methods in this
             * class can be called after the stream has been closed without generating
             * an <tt>IOException</tt>.
             */
            // @ts-ignore
            public close(): void;
        }
    }
}
