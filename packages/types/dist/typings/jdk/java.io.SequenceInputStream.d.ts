declare namespace java {
    namespace io {
        // @ts-ignore
         class SequenceInputStream extends java.io.InputStream {
            /**
             * Initializes a newly created <code>SequenceInputStream</code>
             * by remembering the argument, which must
             * be an <code>Enumeration</code>  that produces
             * objects whose run-time type is <code>InputStream</code>.
             * The input streams that are  produced by
             * the enumeration will be read, in order,
             * to provide the bytes to be read  from this
             * <code>SequenceInputStream</code>. After
             * each input stream from the enumeration
             * is exhausted, it is closed by calling its
             * <code>close</code> method.
             */
            // @ts-ignore
            constructor(e: java.util.Enumeration)
            /**
             * Initializes a newly
             * created <code>SequenceInputStream</code>
             * by remembering the two arguments, which
             * will be read in order, first <code>s1</code>
             * and then <code>s2</code>, to provide the
             * bytes to be read from this <code>SequenceInputStream</code>.
             */
            // @ts-ignore
            constructor(s1: java.io.InputStream, s2: java.io.InputStream)
            /**
             * Returns an estimate of the number of bytes that can be read (or
             * skipped over) from the current underlying input stream without
             * blocking by the next invocation of a method for the current
             * underlying input stream. The next invocation might be
             * the same thread or another thread.  A single read or skip of this
             * many bytes will not block, but may read or skip fewer bytes.
             * <p>
             * This method simply calls {@code available} of the current underlying
             * input stream and returns the result.
             */
            // @ts-ignore
            public available(): number;
            /**
             * Reads the next byte of data from this input stream. The byte is
             * returned as an <code>int</code> in the range <code>0</code> to
             * <code>255</code>. If no byte is available because the end of the
             * stream has been reached, the value <code>-1</code> is returned.
             * This method blocks until input data is available, the end of the
             * stream is detected, or an exception is thrown.
             * <p>
             * This method
             * tries to read one character from the current substream. If it
             * reaches the end of the stream, it calls the <code>close</code>
             * method of the current substream and begins reading from the next
             * substream.
             */
            // @ts-ignore
            public read(): number;
            /**
             * Reads up to <code>len</code> bytes of data from this input stream
             * into an array of bytes.  If <code>len</code> is not zero, the method
             * blocks until at least 1 byte of input is available; otherwise, no
             * bytes are read and <code>0</code> is returned.
             * <p>
             * The <code>read</code> method of <code>SequenceInputStream</code>
             * tries to read the data from the current substream. If it fails to
             * read any characters because the substream has reached the end of
             * the stream, it calls the <code>close</code> method of the current
             * substream and begins reading from the next substream.
             */
            // @ts-ignore
            public read(b: number, off: number, len: number): number;
            /**
             * Closes this input stream and releases any system resources
             * associated with the stream.
             * A closed <code>SequenceInputStream</code>
             * cannot  perform input operations and cannot
             * be reopened.
             * <p>
             * If this stream was created
             * from an enumeration, all remaining elements
             * are requested from the enumeration and closed
             * before the <code>close</code> method returns.
             */
            // @ts-ignore
            public close(): void;
        }
    }
}
