declare namespace java {
    namespace io {
        // @ts-ignore
         class PipedReader extends java.io.Reader {
            /**
             * Creates a <code>PipedReader</code> so
             * that it is connected to the piped writer
             * <code>src</code>. Data written to <code>src</code>
             * will then be available as input from this stream.
             */
            // @ts-ignore
            constructor(src: java.io.PipedWriter)
            /**
             * Creates a <code>PipedReader</code> so that it is connected
             * to the piped writer <code>src</code> and uses the specified
             * pipe size for the pipe's buffer. Data written to <code>src</code>
             * will then be  available as input from this stream.
             */
            // @ts-ignore
            constructor(src: java.io.PipedWriter, pipeSize: number)
            /**
             * Creates a <code>PipedReader</code> so
             * that it is not yet {@linkplain #connect(java.io.PipedWriter)
             * connected}. It must be {@linkplain java.io.PipedWriter#connect(
             * java.io.PipedReader) connected} to a <code>PipedWriter</code>
             * before being used.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a <code>PipedReader</code> so that it is not yet
             * {@link #connect(java.io.PipedWriter) connected} and uses
             * the specified pipe size for the pipe's buffer.
             * It must be  {@linkplain java.io.PipedWriter#connect(
             * java.io.PipedReader) connected} to a <code>PipedWriter</code>
             * before being used.
             */
            // @ts-ignore
            constructor(pipeSize: number)
            /**
             * Causes this piped reader to be connected
             * to the piped  writer <code>src</code>.
             * If this object is already connected to some
             * other piped writer, an <code>IOException</code>
             * is thrown.
             * <p>
             * If <code>src</code> is an
             * unconnected piped writer and <code>snk</code>
             * is an unconnected piped reader, they
             * may be connected by either the call:
             * <pre><code>snk.connect(src)</code> </pre>
             * <p>
             * or the call:
             * <pre><code>src.connect(snk)</code> </pre>
             * <p>
             * The two calls have the same effect.
             */
            // @ts-ignore
            public connect(src: java.io.PipedWriter): void;
            /**
             * Reads the next character of data from this piped stream.
             * If no character is available because the end of the stream
             * has been reached, the value <code>-1</code> is returned.
             * This method blocks until input data is available, the end of
             * the stream is detected, or an exception is thrown.
             */
            // @ts-ignore
            public read(): number;
            /**
             * Reads up to <code>len</code> characters of data from this piped
             * stream into an array of characters. Less than <code>len</code> characters
             * will be read if the end of the data stream is reached or if
             * <code>len</code> exceeds the pipe's buffer size. This method
             * blocks until at least one character of input is available.
             */
            // @ts-ignore
            public read(cbuf: string, off: number, len: number): number;
            /**
             * Tell whether this stream is ready to be read.  A piped character
             * stream is ready if the circular buffer is not empty.
             */
            // @ts-ignore
            public ready(): boolean;
            /**
             * Closes this piped stream and releases any system resources
             * associated with the stream.
             */
            // @ts-ignore
            public close(): void;
        }
    }
}
