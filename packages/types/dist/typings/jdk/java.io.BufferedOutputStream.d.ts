// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
         class BufferedOutputStream extends java.io.FilterOutputStream {
            /**
             * Creates a new buffered output stream to write data to the
             * specified underlying output stream.
             */
            // @ts-ignore
            constructor(out: java.io.OutputStream)
            /**
             * Creates a new buffered output stream to write data to the
             * specified underlying output stream with the specified buffer
             * size.
             */
            // @ts-ignore
            constructor(out: java.io.OutputStream, size: number)
            // @ts-ignore
            protected buf: number[];
            // @ts-ignore
            protected count: number;
            /**
             * Writes the specified byte to this buffered output stream.
             */
            // @ts-ignore
            public write(b: number): void;
            /**
             * Writes <code>len</code> bytes from the specified byte array
             * starting at offset <code>off</code> to this buffered output stream.
             * <p> Ordinarily this method stores bytes from the given array into this
             * stream's buffer, flushing the buffer to the underlying output stream as
             * needed.  If the requested length is at least as large as this stream's
             * buffer, however, then this method will flush the buffer and write the
             * bytes directly to the underlying output stream.  Thus redundant
             * <code>BufferedOutputStream</code>s will not copy data unnecessarily.
             */
            // @ts-ignore
            public write(b: number, off: number, len: number): void;
            /**
             * Flushes this buffered output stream. This forces any buffered
             * output bytes to be written out to the underlying output stream.
             */
            // @ts-ignore
            public flush(): void;
        }
    }
}
