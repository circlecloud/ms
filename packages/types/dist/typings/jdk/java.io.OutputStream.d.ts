// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
        abstract class OutputStream extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Writes the specified byte to this output stream. The general
             * contract for <code>write</code> is that one byte is written
             * to the output stream. The byte to be written is the eight
             * low-order bits of the argument <code>b</code>. The 24
             * high-order bits of <code>b</code> are ignored.
             * <p>
             * Subclasses of <code>OutputStream</code> must provide an
             * implementation for this method.
             */
            // @ts-ignore
            public abstract write(b: number): void;
            /**
             * Writes <code>b.length</code> bytes from the specified byte array
             * to this output stream. The general contract for <code>write(b)</code>
             * is that it should have exactly the same effect as the call
             * <code>write(b, 0, b.length)</code>.
             */
            // @ts-ignore
            public write(b: number): void;
            /**
             * Writes <code>len</code> bytes from the specified byte array
             * starting at offset <code>off</code> to this output stream.
             * The general contract for <code>write(b, off, len)</code> is that
             * some of the bytes in the array <code>b</code> are written to the
             * output stream in order; element <code>b[off]</code> is the first
             * byte written and <code>b[off+len-1]</code> is the last byte written
             * by this operation.
             * <p>
             * The <code>write</code> method of <code>OutputStream</code> calls
             * the write method of one argument on each of the bytes to be
             * written out. Subclasses are encouraged to override this method and
             * provide a more efficient implementation.
             * <p>
             * If <code>b</code> is <code>null</code>, a
             * <code>NullPointerException</code> is thrown.
             * <p>
             * If <code>off</code> is negative, or <code>len</code> is negative, or
             * <code>off+len</code> is greater than the length of the array
             * <code>b</code>, then an <tt>IndexOutOfBoundsException</tt> is thrown.
             */
            // @ts-ignore
            public write(b: number, off: number, len: number): void;
            /**
             * Flushes this output stream and forces any buffered output bytes
             * to be written out. The general contract of <code>flush</code> is
             * that calling it is an indication that, if any bytes previously
             * written have been buffered by the implementation of the output
             * stream, such bytes should immediately be written to their
             * intended destination.
             * <p>
             * If the intended destination of this stream is an abstraction provided by
             * the underlying operating system, for example a file, then flushing the
             * stream guarantees only that bytes previously written to the stream are
             * passed to the operating system for writing; it does not guarantee that
             * they are actually written to a physical device such as a disk drive.
             * <p>
             * The <code>flush</code> method of <code>OutputStream</code> does nothing.
             */
            // @ts-ignore
            public flush(): void;
            /**
             * Closes this output stream and releases any system resources
             * associated with this stream. The general contract of <code>close</code>
             * is that it closes the output stream. A closed stream cannot perform
             * output operations and cannot be reopened.
             * <p>
             * The <code>close</code> method of <code>OutputStream</code> does nothing.
             */
            // @ts-ignore
            public close(): void;
        }
    }
}
