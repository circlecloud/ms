// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
         class FilterOutputStream extends java.io.OutputStream {
            /**
             * Creates an output stream filter built on top of the specified
             * underlying output stream.
             */
            // @ts-ignore
            constructor(out: java.io.OutputStream)
            // @ts-ignore
            protected out: java.io.OutputStream;
            /**
             * Writes the specified <code>byte</code> to this output stream.
             * <p>
             * The <code>write</code> method of <code>FilterOutputStream</code>
             * calls the <code>write</code> method of its underlying output stream,
             * that is, it performs <tt>out.write(b)</tt>.
             * <p>
             * Implements the abstract <tt>write</tt> method of <tt>OutputStream</tt>.
             */
            // @ts-ignore
            public write(b: number): void;
            /**
             * Writes <code>b.length</code> bytes to this output stream.
             * <p>
             * The <code>write</code> method of <code>FilterOutputStream</code>
             * calls its <code>write</code> method of three arguments with the
             * arguments <code>b</code>, <code>0</code>, and
             * <code>b.length</code>.
             * <p>
             * Note that this method does not call the one-argument
             * <code>write</code> method of its underlying stream with the single
             * argument <code>b</code>.
             */
            // @ts-ignore
            public write(b: number): void;
            /**
             * Writes <code>len</code> bytes from the specified
             * <code>byte</code> array starting at offset <code>off</code> to
             * this output stream.
             * <p>
             * The <code>write</code> method of <code>FilterOutputStream</code>
             * calls the <code>write</code> method of one argument on each
             * <code>byte</code> to output.
             * <p>
             * Note that this method does not call the <code>write</code> method
             * of its underlying input stream with the same arguments. Subclasses
             * of <code>FilterOutputStream</code> should provide a more efficient
             * implementation of this method.
             */
            // @ts-ignore
            public write(b: number, off: number, len: number): void;
            /**
             * Flushes this output stream and forces any buffered output bytes
             * to be written out to the stream.
             * <p>
             * The <code>flush</code> method of <code>FilterOutputStream</code>
             * calls the <code>flush</code> method of its underlying output stream.
             */
            // @ts-ignore
            public flush(): void;
            /**
             * Closes this output stream and releases any system resources
             * associated with the stream.
             * <p>
             * The <code>close</code> method of <code>FilterOutputStream</code>
             * calls its <code>flush</code> method, and then calls the
             * <code>close</code> method of its underlying output stream.
             */
            // @ts-ignore
            public close(): void;
        }
    }
}
