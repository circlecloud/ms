declare namespace java {
    namespace io {
        // @ts-ignore
         class PushbackInputStream extends java.io.FilterInputStream {
            /**
             * Creates a <code>PushbackInputStream</code>
             * with a pushback buffer of the specified <code>size</code>,
             * and saves its  argument, the input stream
             * <code>in</code>, for later use. Initially,
             * there is no pushed-back byte  (the field
             * <code>pushBack</code> is initialized to
             * <code>-1</code>).
             */
            // @ts-ignore
            constructor(input: java.io.InputStream, size: number)
            /**
             * Creates a <code>PushbackInputStream</code>
             * and saves its  argument, the input stream
             * <code>in</code>, for later use. Initially,
             * there is no pushed-back byte  (the field
             * <code>pushBack</code> is initialized to
             * <code>-1</code>).
             */
            // @ts-ignore
            constructor(input: java.io.InputStream)
            // @ts-ignore
            protected buf: number[];
            // @ts-ignore
            protected pos: number;
            /**
             * Reads the next byte of data from this input stream. The value
             * byte is returned as an <code>int</code> in the range
             * <code>0</code> to <code>255</code>. If no byte is available
             * because the end of the stream has been reached, the value
             * <code>-1</code> is returned. This method blocks until input data
             * is available, the end of the stream is detected, or an exception
             * is thrown.
             * <p> This method returns the most recently pushed-back byte, if there is
             * one, and otherwise calls the <code>read</code> method of its underlying
             * input stream and returns whatever value that method returns.
             */
            // @ts-ignore
            public read(): number;
            /**
             * Reads up to <code>len</code> bytes of data from this input stream into
             * an array of bytes.  This method first reads any pushed-back bytes; after
             * that, if fewer than <code>len</code> bytes have been read then it
             * reads from the underlying input stream. If <code>len</code> is not zero, the method
             * blocks until at least 1 byte of input is available; otherwise, no
             * bytes are read and <code>0</code> is returned.
             */
            // @ts-ignore
            public read(b: number, off: number, len: number): number;
            /**
             * Pushes back a byte by copying it to the front of the pushback buffer.
             * After this method returns, the next byte to be read will have the value
             * <code>(byte)b</code>.
             */
            // @ts-ignore
            public unread(b: number): void;
            /**
             * Pushes back a portion of an array of bytes by copying it to the front
             * of the pushback buffer.  After this method returns, the next byte to be
             * read will have the value <code>b[off]</code>, the byte after that will
             * have the value <code>b[off+1]</code>, and so forth.
             */
            // @ts-ignore
            public unread(b: number, off: number, len: number): void;
            /**
             * Pushes back an array of bytes by copying it to the front of the
             * pushback buffer.  After this method returns, the next byte to be read
             * will have the value <code>b[0]</code>, the byte after that will have the
             * value <code>b[1]</code>, and so forth.
             */
            // @ts-ignore
            public unread(b: number): void;
            /**
             * Returns an estimate of the number of bytes that can be read (or
             * skipped over) from this input stream without blocking by the next
             * invocation of a method for this input stream. The next invocation might be
             * the same thread or another thread.  A single read or skip of this
             * many bytes will not block, but may read or skip fewer bytes.
             * <p> The method returns the sum of the number of bytes that have been
             * pushed back and the value returned by {@link
             * java.io.FilterInputStream#available available}.
             */
            // @ts-ignore
            public available(): number;
            /**
             * Skips over and discards <code>n</code> bytes of data from this
             * input stream. The <code>skip</code> method may, for a variety of
             * reasons, end up skipping over some smaller number of bytes,
             * possibly zero.  If <code>n</code> is negative, no bytes are skipped.
             * <p> The <code>skip</code> method of <code>PushbackInputStream</code>
             * first skips over the bytes in the pushback buffer, if any.  It then
             * calls the <code>skip</code> method of the underlying input stream if
             * more bytes need to be skipped.  The actual number of bytes skipped
             * is returned.
             */
            // @ts-ignore
            public skip(n: number): number;
            /**
             * Tests if this input stream supports the <code>mark</code> and
             * <code>reset</code> methods, which it does not.
             */
            // @ts-ignore
            public markSupported(): boolean;
            /**
             * Marks the current position in this input stream.
             * <p> The <code>mark</code> method of <code>PushbackInputStream</code>
             * does nothing.
             */
            // @ts-ignore
            public mark(readlimit: number): void;
            /**
             * Repositions this stream to the position at the time the
             * <code>mark</code> method was last called on this input stream.
             * <p> The method <code>reset</code> for class
             * <code>PushbackInputStream</code> does nothing except throw an
             * <code>IOException</code>.
             */
            // @ts-ignore
            public reset(): void;
            /**
             * Closes this input stream and releases any system resources
             * associated with the stream.
             * Once the stream has been closed, further read(), unread(),
             * available(), reset(), or skip() invocations will throw an IOException.
             * Closing a previously closed stream has no effect.
             */
            // @ts-ignore
            public close(): void;
        }
    }
}
