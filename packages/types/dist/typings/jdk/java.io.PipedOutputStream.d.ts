// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
         class PipedOutputStream extends java.io.OutputStream {
            /**
             * Creates a piped output stream connected to the specified piped
             * input stream. Data bytes written to this stream will then be
             * available as input from <code>snk</code>.
             */
            // @ts-ignore
            constructor(snk: java.io.PipedInputStream)
            /**
             * Creates a piped output stream that is not yet connected to a
             * piped input stream. It must be connected to a piped input stream,
             * either by the receiver or the sender, before being used.
             */
            // @ts-ignore
            constructor()
            /**
             * Connects this piped output stream to a receiver. If this object
             * is already connected to some other piped input stream, an
             * <code>IOException</code> is thrown.
             * <p>
             * If <code>snk</code> is an unconnected piped input stream and
             * <code>src</code> is an unconnected piped output stream, they may
             * be connected by either the call:
             * <blockquote><pre>
             * src.connect(snk)</pre></blockquote>
             * or the call:
             * <blockquote><pre>
             * snk.connect(src)</pre></blockquote>
             * The two calls have the same effect.
             */
            // @ts-ignore
            public connect(snk: java.io.PipedInputStream): void;
            /**
             * Writes the specified <code>byte</code> to the piped output stream.
             * <p>
             * Implements the <code>write</code> method of <code>OutputStream</code>.
             */
            // @ts-ignore
            public write(b: number): void;
            /**
             * Writes <code>len</code> bytes from the specified byte array
             * starting at offset <code>off</code> to this piped output stream.
             * This method blocks until all the bytes are written to the output
             * stream.
             */
            // @ts-ignore
            public write(b: number, off: number, len: number): void;
            /**
             * Flushes this output stream and forces any buffered output bytes
             * to be written out.
             * This will notify any readers that bytes are waiting in the pipe.
             */
            // @ts-ignore
            public flush(): void;
            /**
             * Closes this piped output stream and releases any system resources
             * associated with this stream. This stream may no longer be used for
             * writing bytes.
             */
            // @ts-ignore
            public close(): void;
        }
    }
}
