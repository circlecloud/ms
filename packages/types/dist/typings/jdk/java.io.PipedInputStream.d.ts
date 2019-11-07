declare namespace java {
    namespace io {
        // @ts-ignore
         class PipedInputStream extends java.io.InputStream {
            /**
             * Creates a <code>PipedInputStream</code> so
             * that it is connected to the piped output
             * stream <code>src</code>. Data bytes written
             * to <code>src</code> will then be  available
             * as input from this stream.
             */
            // @ts-ignore
            constructor(src: java.io.PipedOutputStream)
            /**
             * Creates a <code>PipedInputStream</code> so that it is
             * connected to the piped output stream
             * <code>src</code> and uses the specified pipe size for
             * the pipe's buffer.
             * Data bytes written to <code>src</code> will then
             * be available as input from this stream.
             */
            // @ts-ignore
            constructor(src: java.io.PipedOutputStream, pipeSize: number)
            /**
             * Creates a <code>PipedInputStream</code> so
             * that it is not yet {@linkplain #connect(java.io.PipedOutputStream)
             * connected}.
             * It must be {@linkplain java.io.PipedOutputStream#connect(
             * java.io.PipedInputStream) connected} to a
             * <code>PipedOutputStream</code> before being used.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a <code>PipedInputStream</code> so that it is not yet
             * {@linkplain #connect(java.io.PipedOutputStream) connected} and
             * uses the specified pipe size for the pipe's buffer.
             * It must be {@linkplain java.io.PipedOutputStream#connect(
             * java.io.PipedInputStream)
             * connected} to a <code>PipedOutputStream</code> before being used.
             */
            // @ts-ignore
            constructor(pipeSize: number)
            // @ts-ignore
            protected static PIPE_SIZE: number;
            // @ts-ignore
            protected buffer: number[];
            // @ts-ignore
            protected in: number;
            // @ts-ignore
            protected out: number;
            /**
             * Causes this piped input stream to be connected
             * to the piped  output stream <code>src</code>.
             * If this object is already connected to some
             * other piped output  stream, an <code>IOException</code>
             * is thrown.
             * <p>
             * If <code>src</code> is an
             * unconnected piped output stream and <code>snk</code>
             * is an unconnected piped input stream, they
             * may be connected by either the call:
             * <pre><code>snk.connect(src)</code> </pre>
             * <p>
             * or the call:
             * <pre><code>src.connect(snk)</code> </pre>
             * <p>
             * The two calls have the same effect.
             */
            // @ts-ignore
            public connect(src: java.io.PipedOutputStream): void;
            /**
             * Receives a byte of data.  This method will block if no input is
             * available.
             */
            // @ts-ignore
            protected receive(b: number): void;
            /**
             * Reads the next byte of data from this piped input stream. The
             * value byte is returned as an <code>int</code> in the range
             * <code>0</code> to <code>255</code>.
             * This method blocks until input data is available, the end of the
             * stream is detected, or an exception is thrown.
             */
            // @ts-ignore
            public read(): number;
            /**
             * Reads up to <code>len</code> bytes of data from this piped input
             * stream into an array of bytes. Less than <code>len</code> bytes
             * will be read if the end of the data stream is reached or if
             * <code>len</code> exceeds the pipe's buffer size.
             * If <code>len </code> is zero, then no bytes are read and 0 is returned;
             * otherwise, the method blocks until at least 1 byte of input is
             * available, end of the stream has been detected, or an exception is
             * thrown.
             */
            // @ts-ignore
            public read(b: number, off: number, len: number): number;
            /**
             * Returns the number of bytes that can be read from this input
             * stream without blocking.
             */
            // @ts-ignore
            public available(): number;
            /**
             * Closes this piped input stream and releases any system resources
             * associated with the stream.
             */
            // @ts-ignore
            public close(): void;
        }
    }
}
