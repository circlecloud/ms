declare namespace java {
    namespace io {
        // @ts-ignore
        abstract class InputStream extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Reads the next byte of data from the input stream. The value byte is
             * returned as an <code>int</code> in the range <code>0</code> to
             * <code>255</code>. If no byte is available because the end of the stream
             * has been reached, the value <code>-1</code> is returned. This method
             * blocks until input data is available, the end of the stream is detected,
             * or an exception is thrown.
             * <p> A subclass must provide an implementation of this method.
             */
            // @ts-ignore
            public abstract read(): number;
            /**
             * Reads some number of bytes from the input stream and stores them into
             * the buffer array <code>b</code>. The number of bytes actually read is
             * returned as an integer.  This method blocks until input data is
             * available, end of file is detected, or an exception is thrown.
             * <p> If the length of <code>b</code> is zero, then no bytes are read and
             * <code>0</code> is returned; otherwise, there is an attempt to read at
             * least one byte. If no byte is available because the stream is at the
             * end of the file, the value <code>-1</code> is returned; otherwise, at
             * least one byte is read and stored into <code>b</code>.
             * <p> The first byte read is stored into element <code>b[0]</code>, the
             * next one into <code>b[1]</code>, and so on. The number of bytes read is,
             * at most, equal to the length of <code>b</code>. Let <i>k</i> be the
             * number of bytes actually read; these bytes will be stored in elements
             * <code>b[0]</code> through <code>b[</code><i>k</i><code>-1]</code>,
             * leaving elements <code>b[</code><i>k</i><code>]</code> through
             * <code>b[b.length-1]</code> unaffected.
             * <p> The <code>read(b)</code> method for class <code>InputStream</code>
             * has the same effect as: <pre><code> read(b, 0, b.length) </code></pre>
             */
            // @ts-ignore
            public read(b: number): number;
            /**
             * Reads up to <code>len</code> bytes of data from the input stream into
             * an array of bytes.  An attempt is made to read as many as
             * <code>len</code> bytes, but a smaller number may be read.
             * The number of bytes actually read is returned as an integer.
             * <p> This method blocks until input data is available, end of file is
             * detected, or an exception is thrown.
             * <p> If <code>len</code> is zero, then no bytes are read and
             * <code>0</code> is returned; otherwise, there is an attempt to read at
             * least one byte. If no byte is available because the stream is at end of
             * file, the value <code>-1</code> is returned; otherwise, at least one
             * byte is read and stored into <code>b</code>.
             * <p> The first byte read is stored into element <code>b[off]</code>, the
             * next one into <code>b[off+1]</code>, and so on. The number of bytes read
             * is, at most, equal to <code>len</code>. Let <i>k</i> be the number of
             * bytes actually read; these bytes will be stored in elements
             * <code>b[off]</code> through <code>b[off+</code><i>k</i><code>-1]</code>,
             * leaving elements <code>b[off+</code><i>k</i><code>]</code> through
             * <code>b[off+len-1]</code> unaffected.
             * <p> In every case, elements <code>b[0]</code> through
             * <code>b[off]</code> and elements <code>b[off+len]</code> through
             * <code>b[b.length-1]</code> are unaffected.
             * <p> The <code>read(b,</code> <code>off,</code> <code>len)</code> method
             * for class <code>InputStream</code> simply calls the method
             * <code>read()</code> repeatedly. If the first such call results in an
             * <code>IOException</code>, that exception is returned from the call to
             * the <code>read(b,</code> <code>off,</code> <code>len)</code> method.  If
             * any subsequent call to <code>read()</code> results in a
             * <code>IOException</code>, the exception is caught and treated as if it
             * were end of file; the bytes read up to that point are stored into
             * <code>b</code> and the number of bytes read before the exception
             * occurred is returned. The default implementation of this method blocks
             * until the requested amount of input data <code>len</code> has been read,
             * end of file is detected, or an exception is thrown. Subclasses are encouraged
             * to provide a more efficient implementation of this method.
             */
            // @ts-ignore
            public read(b: number, off: number, len: number): number;
            /**
             * Skips over and discards <code>n</code> bytes of data from this input
             * stream. The <code>skip</code> method may, for a variety of reasons, end
             * up skipping over some smaller number of bytes, possibly <code>0</code>.
             * This may result from any of a number of conditions; reaching end of file
             * before <code>n</code> bytes have been skipped is only one possibility.
             * The actual number of bytes skipped is returned. If {@code n} is
             * negative, the {@code skip} method for class {@code InputStream} always
             * returns 0, and no bytes are skipped. Subclasses may handle the negative
             * value differently.
             * <p> The <code>skip</code> method of this class creates a
             * byte array and then repeatedly reads into it until <code>n</code> bytes
             * have been read or the end of the stream has been reached. Subclasses are
             * encouraged to provide a more efficient implementation of this method.
             * For instance, the implementation may depend on the ability to seek.
             */
            // @ts-ignore
            public skip(n: number): number;
            /**
             * Returns an estimate of the number of bytes that can be read (or
             * skipped over) from this input stream without blocking by the next
             * invocation of a method for this input stream. The next invocation
             * might be the same thread or another thread.  A single read or skip of this
             * many bytes will not block, but may read or skip fewer bytes.
             * <p> Note that while some implementations of {@code InputStream} will return
             * the total number of bytes in the stream, many will not.  It is
             * never correct to use the return value of this method to allocate
             * a buffer intended to hold all data in this stream.
             * <p> A subclass' implementation of this method may choose to throw an
             * {@link IOException} if this input stream has been closed by
             * invoking the {@link #close()} method.
             * <p> The {@code available} method for class {@code InputStream} always
             * returns {@code 0}.
             * <p> This method should be overridden by subclasses.
             */
            // @ts-ignore
            public available(): number;
            /**
             * Closes this input stream and releases any system resources associated
             * with the stream.
             * <p> The <code>close</code> method of <code>InputStream</code> does
             * nothing.
             */
            // @ts-ignore
            public close(): void;
            /**
             * Marks the current position in this input stream. A subsequent call to
             * the <code>reset</code> method repositions this stream at the last marked
             * position so that subsequent reads re-read the same bytes.
             * <p> The <code>readlimit</code> arguments tells this input stream to
             * allow that many bytes to be read before the mark position gets
             * invalidated.
             * <p> The general contract of <code>mark</code> is that, if the method
             * <code>markSupported</code> returns <code>true</code>, the stream somehow
             * remembers all the bytes read after the call to <code>mark</code> and
             * stands ready to supply those same bytes again if and whenever the method
             * <code>reset</code> is called.  However, the stream is not required to
             * remember any data at all if more than <code>readlimit</code> bytes are
             * read from the stream before <code>reset</code> is called.
             * <p> Marking a closed stream should not have any effect on the stream.
             * <p> The <code>mark</code> method of <code>InputStream</code> does
             * nothing.
             */
            // @ts-ignore
            public mark(readlimit: number): void;
            /**
             * Repositions this stream to the position at the time the
             * <code>mark</code> method was last called on this input stream.
             * <p> The general contract of <code>reset</code> is:
             * <ul>
             * <li> If the method <code>markSupported</code> returns
             * <code>true</code>, then:
             * <ul><li> If the method <code>mark</code> has not been called since
             * the stream was created, or the number of bytes read from the stream
             * since <code>mark</code> was last called is larger than the argument
             * to <code>mark</code> at that last call, then an
             * <code>IOException</code> might be thrown.
             * <li> If such an <code>IOException</code> is not thrown, then the
             * stream is reset to a state such that all the bytes read since the
             * most recent call to <code>mark</code> (or since the start of the
             * file, if <code>mark</code> has not been called) will be resupplied
             * to subsequent callers of the <code>read</code> method, followed by
             * any bytes that otherwise would have been the next input data as of
             * the time of the call to <code>reset</code>. </ul>
             * <li> If the method <code>markSupported</code> returns
             * <code>false</code>, then:
             * <ul><li> The call to <code>reset</code> may throw an
             * <code>IOException</code>.
             * <li> If an <code>IOException</code> is not thrown, then the stream
             * is reset to a fixed state that depends on the particular type of the
             * input stream and how it was created. The bytes that will be supplied
             * to subsequent callers of the <code>read</code> method depend on the
             * particular type of the input stream. </ul></ul>
             * <p>The method <code>reset</code> for class <code>InputStream</code>
             * does nothing except throw an <code>IOException</code>.
             */
            // @ts-ignore
            public reset(): void;
            /**
             * Tests if this input stream supports the <code>mark</code> and
             * <code>reset</code> methods. Whether or not <code>mark</code> and
             * <code>reset</code> are supported is an invariant property of a
             * particular input stream instance. The <code>markSupported</code> method
             * of <code>InputStream</code> returns <code>false</code>.
             */
            // @ts-ignore
            public markSupported(): boolean;
        }
    }
}
