// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
         class PushbackReader extends java.io.FilterReader {
            /**
             * Creates a new pushback reader with a pushback buffer of the given size.
             */
            // @ts-ignore
            constructor(input: java.io.Reader, size: number)
            /**
             * Creates a new pushback reader with a one-character pushback buffer.
             */
            // @ts-ignore
            constructor(input: java.io.Reader)
            /**
             * Reads a single character.
             */
            // @ts-ignore
            public read(): number;
            /**
             * Reads characters into a portion of an array.
             */
            // @ts-ignore
            public read(cbuf: string, off: number, len: number): number;
            /**
             * Pushes back a single character by copying it to the front of the
             * pushback buffer. After this method returns, the next character to be read
             * will have the value <code>(char)c</code>.
             */
            // @ts-ignore
            public unread(c: number): void;
            /**
             * Pushes back a portion of an array of characters by copying it to the
             * front of the pushback buffer.  After this method returns, the next
             * character to be read will have the value <code>cbuf[off]</code>, the
             * character after that will have the value <code>cbuf[off+1]</code>, and
             * so forth.
             */
            // @ts-ignore
            public unread(cbuf: string, off: number, len: number): void;
            /**
             * Pushes back an array of characters by copying it to the front of the
             * pushback buffer.  After this method returns, the next character to be
             * read will have the value <code>cbuf[0]</code>, the character after that
             * will have the value <code>cbuf[1]</code>, and so forth.
             */
            // @ts-ignore
            public unread(cbuf: string): void;
            /**
             * Tells whether this stream is ready to be read.
             */
            // @ts-ignore
            public ready(): boolean;
            /**
             * Marks the present position in the stream. The <code>mark</code>
             * for class <code>PushbackReader</code> always throws an exception.
             */
            // @ts-ignore
            public mark(readAheadLimit: number): void;
            /**
             * Resets the stream. The <code>reset</code> method of
             * <code>PushbackReader</code> always throws an exception.
             */
            // @ts-ignore
            public reset(): void;
            /**
             * Tells whether this stream supports the mark() operation, which it does
             * not.
             */
            // @ts-ignore
            public markSupported(): boolean;
            /**
             * Closes the stream and releases any system resources associated with
             * it. Once the stream has been closed, further read(),
             * unread(), ready(), or skip() invocations will throw an IOException.
             * Closing a previously closed stream has no effect.
             */
            // @ts-ignore
            public close(): void;
            /**
             * Skips characters.  This method will block until some characters are
             * available, an I/O error occurs, or the end of the stream is reached.
             */
            // @ts-ignore
            public skip(n: number): number;
        }
    }
}
