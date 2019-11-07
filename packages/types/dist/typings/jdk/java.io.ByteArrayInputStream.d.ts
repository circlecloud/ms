declare namespace java {
    namespace io {
        // @ts-ignore
         class ByteArrayInputStream extends java.io.InputStream {
            /**
             * Creates a <code>ByteArrayInputStream</code>
             * so that it  uses <code>buf</code> as its
             * buffer array.
             * The buffer array is not copied.
             * The initial value of <code>pos</code>
             * is <code>0</code> and the initial value
             * of  <code>count</code> is the length of
             * <code>buf</code>.
             */
            // @ts-ignore
            constructor(buf: number)
            /**
             * Creates <code>ByteArrayInputStream</code>
             * that uses <code>buf</code> as its
             * buffer array. The initial value of <code>pos</code>
             * is <code>offset</code> and the initial value
             * of <code>count</code> is the minimum of <code>offset+length</code>
             * and <code>buf.length</code>.
             * The buffer array is not copied. The buffer's mark is
             * set to the specified offset.
             */
            // @ts-ignore
            constructor(buf: number, offset: number, length: number)
            // @ts-ignore
            protected buf: number[];
            // @ts-ignore
            protected pos: number;
            // @ts-ignore
            protected count: number;
            /**
             * Reads the next byte of data from this input stream. The value
             * byte is returned as an <code>int</code> in the range
             * <code>0</code> to <code>255</code>. If no byte is available
             * because the end of the stream has been reached, the value
             * <code>-1</code> is returned.
             * <p>
             * This <code>read</code> method
             * cannot block.
             */
            // @ts-ignore
            public read(): number;
            /**
             * Reads up to <code>len</code> bytes of data into an array of bytes
             * from this input stream.
             * If <code>pos</code> equals <code>count</code>,
             * then <code>-1</code> is returned to indicate
             * end of file. Otherwise, the  number <code>k</code>
             * of bytes read is equal to the smaller of
             * <code>len</code> and <code>count-pos</code>.
             * If <code>k</code> is positive, then bytes
             * <code>buf[pos]</code> through <code>buf[pos+k-1]</code>
             * are copied into <code>b[off]</code>  through
             * <code>b[off+k-1]</code> in the manner performed
             * by <code>System.arraycopy</code>. The
             * value <code>k</code> is added into <code>pos</code>
             * and <code>k</code> is returned.
             * <p>
             * This <code>read</code> method cannot block.
             */
            // @ts-ignore
            public read(b: number, off: number, len: number): number;
            /**
             * Skips <code>n</code> bytes of input from this input stream. Fewer
             * bytes might be skipped if the end of the input stream is reached.
             * The actual number <code>k</code>
             * of bytes to be skipped is equal to the smaller
             * of <code>n</code> and  <code>count-pos</code>.
             * The value <code>k</code> is added into <code>pos</code>
             * and <code>k</code> is returned.
             */
            // @ts-ignore
            public skip(n: number): number;
            /**
             * Returns the number of remaining bytes that can be read (or skipped over)
             * from this input stream.
             * <p>
             * The value returned is <code>count&nbsp;- pos</code>,
             * which is the number of bytes remaining to be read from the input buffer.
             */
            // @ts-ignore
            public available(): number;
            /**
             * Tests if this <code>InputStream</code> supports mark/reset. The
             * <code>markSupported</code> method of <code>ByteArrayInputStream</code>
             * always returns <code>true</code>.
             */
            // @ts-ignore
            public markSupported(): boolean;
            /**
             * Set the current marked position in the stream.
             * ByteArrayInputStream objects are marked at position zero by
             * default when constructed.  They may be marked at another
             * position within the buffer by this method.
             * <p>
             * If no mark has been set, then the value of the mark is the
             * offset passed to the constructor (or 0 if the offset was not
             * supplied).
             * <p> Note: The <code>readAheadLimit</code> for this class
             * has no meaning.
             */
            // @ts-ignore
            public mark(readAheadLimit: number): void;
            /**
             * Resets the buffer to the marked position.  The marked position
             * is 0 unless another position was marked or an offset was specified
             * in the constructor.
             */
            // @ts-ignore
            public reset(): void;
            /**
             * Closing a <tt>ByteArrayInputStream</tt> has no effect. The methods in
             * this class can be called after the stream has been closed without
             * generating an <tt>IOException</tt>.
             */
            // @ts-ignore
            public close(): void;
        }
    }
}
