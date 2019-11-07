declare namespace java {
    namespace io {
        // @ts-ignore
         class InputStreamReader extends java.io.Reader {
            /**
             * Creates an InputStreamReader that uses the default charset.
             */
            // @ts-ignore
            constructor(input: java.io.InputStream)
            /**
             * Creates an InputStreamReader that uses the named charset.
             */
            // @ts-ignore
            constructor(input: java.io.InputStream, charsetName: string)
            /**
             * Creates an InputStreamReader that uses the given charset.
             */
            // @ts-ignore
            constructor(input: java.io.InputStream, cs: java.nio.charset.Charset)
            /**
             * Creates an InputStreamReader that uses the given charset decoder.
             */
            // @ts-ignore
            constructor(input: java.io.InputStream, dec: java.nio.charset.CharsetDecoder)
            /**
             * Returns the name of the character encoding being used by this stream.
             * <p> If the encoding has an historical name then that name is returned;
             * otherwise the encoding's canonical name is returned.
             * <p> If this instance was created with the {@link
             * #InputStreamReader(InputStream, String)} constructor then the returned
             * name, being unique for the encoding, may differ from the name passed to
             * the constructor. This method will return <code>null</code> if the
             * stream has been closed.
             * </p>
             */
            // @ts-ignore
            public getEncoding(): string;
            /**
             * Reads a single character.
             */
            // @ts-ignore
            public read(): number;
            /**
             * Reads characters into a portion of an array.
             */
            // @ts-ignore
            public read(cbuf: string, offset: number, length: number): number;
            /**
             * Tells whether this stream is ready to be read.  An InputStreamReader is
             * ready if its input buffer is not empty, or if bytes are available to be
             * read from the underlying byte stream.
             */
            // @ts-ignore
            public ready(): boolean;
            // @ts-ignore
            public close(): void;
        }
    }
}
