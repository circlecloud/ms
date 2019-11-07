// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
        abstract class Reader extends java.lang.Object {
            /**
             * Creates a new character-stream reader whose critical sections will
             * synchronize on the reader itself.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new character-stream reader whose critical sections will
             * synchronize on the given object.
             */
            // @ts-ignore
            constructor(lock: java.lang.Object)
            // @ts-ignore
            protected lock: java.lang.Object;
            /**
             * Attempts to read characters into the specified character buffer.
             * The buffer is used as a repository of characters as-is: the only
             * changes made are the results of a put operation. No flipping or
             * rewinding of the buffer is performed.
             */
            // @ts-ignore
            public read(target: java.nio.CharBuffer): number;
            /**
             * Reads a single character.  This method will block until a character is
             * available, an I/O error occurs, or the end of the stream is reached.
             * <p> Subclasses that intend to support efficient single-character input
             * should override this method.
             */
            // @ts-ignore
            public read(): number;
            /**
             * Reads characters into an array.  This method will block until some input
             * is available, an I/O error occurs, or the end of the stream is reached.
             */
            // @ts-ignore
            public read(cbuf: string): number;
            /**
             * Skips characters.  This method will block until some characters are
             * available, an I/O error occurs, or the end of the stream is reached.
             */
            // @ts-ignore
            public skip(n: number): number;
            /**
             * Tells whether this stream is ready to be read.
             */
            // @ts-ignore
            public ready(): boolean;
            /**
             * Tells whether this stream supports the mark() operation. The default
             * implementation always returns false. Subclasses should override this
             * method.
             */
            // @ts-ignore
            public markSupported(): boolean;
            /**
             * Marks the present position in the stream.  Subsequent calls to reset()
             * will attempt to reposition the stream to this point.  Not all
             * character-input streams support the mark() operation.
             */
            // @ts-ignore
            public mark(readAheadLimit: number): void;
            /**
             * Resets the stream.  If the stream has been marked, then attempt to
             * reposition it at the mark.  If the stream has not been marked, then
             * attempt to reset it in some way appropriate to the particular stream,
             * for example by repositioning it to its starting point.  Not all
             * character-input streams support the reset() operation, and some support
             * reset() without supporting mark().
             */
            // @ts-ignore
            public reset(): void;
            /**
             * Closes the stream and releases any system resources associated with
             * it.  Once the stream has been closed, further read(), ready(),
             * mark(), reset(), or skip() invocations will throw an IOException.
             * Closing a previously closed stream has no effect.
             */
            // @ts-ignore
            public abstract close(): void;
        }
    }
}
