declare namespace java {
    namespace io {
        // @ts-ignore
        abstract class Writer extends java.lang.Object {
            /**
             * Creates a new character-stream writer whose critical sections will
             * synchronize on the writer itself.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new character-stream writer whose critical sections will
             * synchronize on the given object.
             */
            // @ts-ignore
            constructor(lock: java.lang.Object)
            // @ts-ignore
            protected lock: java.lang.Object;
            /**
             * Writes a single character.  The character to be written is contained in
             * the 16 low-order bits of the given integer value; the 16 high-order bits
             * are ignored.
             * <p> Subclasses that intend to support efficient single-character output
             * should override this method.
             */
            // @ts-ignore
            public write(c: number): void;
            /**
             * Writes an array of characters.
             */
            // @ts-ignore
            public write(cbuf: string): void;
            /**
             * Writes a string.
             */
            // @ts-ignore
            public write(str: string): void;
            /**
             * Writes a portion of a string.
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
            public append(csq: java.lang.CharSequence): java.io.Writer;
            /**
             * Appends a subsequence of the specified character sequence to this writer.
             * <tt>Appendable</tt>.
             * <p> An invocation of this method of the form <tt>out.append(csq, start,
             * end)</tt> when <tt>csq</tt> is not <tt>null</tt> behaves in exactly the
             * same way as the invocation
             * <pre>
             * out.write(csq.subSequence(start, end).toString()) </pre>
             */
            // @ts-ignore
            public append(csq: java.lang.CharSequence, start: number, end: number): java.io.Writer;
            /**
             * Appends the specified character to this writer.
             * <p> An invocation of this method of the form <tt>out.append(c)</tt>
             * behaves in exactly the same way as the invocation
             * <pre>
             * out.write(c) </pre>
             */
            // @ts-ignore
            public append(c: string): java.io.Writer;
            /**
             * Flushes the stream.  If the stream has saved any characters from the
             * various write() methods in a buffer, write them immediately to their
             * intended destination.  Then, if that destination is another character or
             * byte stream, flush it.  Thus one flush() invocation will flush all the
             * buffers in a chain of Writers and OutputStreams.
             * <p> If the intended destination of this stream is an abstraction provided
             * by the underlying operating system, for example a file, then flushing the
             * stream guarantees only that bytes previously written to the stream are
             * passed to the operating system for writing; it does not guarantee that
             * they are actually written to a physical device such as a disk drive.
             */
            // @ts-ignore
            public abstract flush(): void;
            /**
             * Closes the stream, flushing it first. Once the stream has been closed,
             * further write() or flush() invocations will cause an IOException to be
             * thrown. Closing a previously closed stream has no effect.
             */
            // @ts-ignore
            public abstract close(): void;
        }
    }
}
