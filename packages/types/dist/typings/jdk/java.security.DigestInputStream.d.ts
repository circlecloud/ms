// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
         class DigestInputStream extends java.io.FilterInputStream {
            /**
             * Creates a digest input stream, using the specified input stream
             * and message digest.
             */
            // @ts-ignore
            constructor(stream: java.io.InputStream, digest: java.security.MessageDigest)
            // @ts-ignore
            protected digest: java.security.MessageDigest;
            /**
             * Returns the message digest associated with this stream.
             */
            // @ts-ignore
            public getMessageDigest(): java.security.MessageDigest;
            /**
             * Associates the specified message digest with this stream.
             */
            // @ts-ignore
            public setMessageDigest(digest: java.security.MessageDigest): void;
            /**
             * Reads a byte, and updates the message digest (if the digest
             * function is on).  That is, this method reads a byte from the
             * input stream, blocking until the byte is actually read. If the
             * digest function is on (see {@link #on(boolean) on}), this method
             * will then call {@code update} on the message digest associated
             * with this stream, passing it the byte read.
             */
            // @ts-ignore
            public read(): number;
            /**
             * Reads into a byte array, and updates the message digest (if the
             * digest function is on).  That is, this method reads up to
             * {@code len} bytes from the input stream into the array
             * {@code b}, starting at offset {@code off}. This method
             * blocks until the data is actually
             * read. If the digest function is on (see
             * {@link #on(boolean) on}), this method will then call {@code update}
             * on the message digest associated with this stream, passing it
             * the data.
             */
            // @ts-ignore
            public read(b: number, off: number, len: number): number;
            /**
             * Turns the digest function on or off. The default is on.  When
             * it is on, a call to one of the {@code read} methods results in an
             * update on the message digest.  But when it is off, the message
             * digest is not updated.
             */
            // @ts-ignore
            public on(on: boolean): void;
            /**
             * Prints a string representation of this digest input stream and
             * its associated message digest object.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
