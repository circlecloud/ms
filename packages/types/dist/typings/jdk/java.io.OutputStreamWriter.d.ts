// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
         class OutputStreamWriter extends java.io.Writer {
            /**
             * Creates an OutputStreamWriter that uses the named charset.
             */
            // @ts-ignore
            constructor(out: java.io.OutputStream, charsetName: string)
            /**
             * Creates an OutputStreamWriter that uses the default character encoding.
             */
            // @ts-ignore
            constructor(out: java.io.OutputStream)
            /**
             * Creates an OutputStreamWriter that uses the given charset.
             */
            // @ts-ignore
            constructor(out: java.io.OutputStream, cs: java.nio.charset.Charset)
            /**
             * Creates an OutputStreamWriter that uses the given charset encoder.
             */
            // @ts-ignore
            constructor(out: java.io.OutputStream, enc: java.nio.charset.CharsetEncoder)
            /**
             * Returns the name of the character encoding being used by this stream.
             * <p> If the encoding has an historical name then that name is returned;
             * otherwise the encoding's canonical name is returned.
             * <p> If this instance was created with the {@link
             * #OutputStreamWriter(OutputStream, String)} constructor then the returned
             * name, being unique for the encoding, may differ from the name passed to
             * the constructor.  This method may return <tt>null</tt> if the stream has
             * been closed. </p>
             */
            // @ts-ignore
            public getEncoding(): string;
            /**
             * Writes a single character.
             */
            // @ts-ignore
            public write(c: number): void;
            /**
             * Writes a portion of an array of characters.
             */
            // @ts-ignore
            public write(cbuf: string, off: number, len: number): void;
            /**
             * Writes a portion of a string.
             */
            // @ts-ignore
            public write(str: string, off: number, len: number): void;
            /**
             * Flushes the stream.
             */
            // @ts-ignore
            public flush(): void;
            // @ts-ignore
            public close(): void;
        }
    }
}
