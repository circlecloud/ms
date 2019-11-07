declare namespace java {
    namespace security {
        // @ts-ignore
         class DigestOutputStream extends java.io.FilterOutputStream {
            /**
             * Creates a digest output stream, using the specified output stream
             * and message digest.
             */
            // @ts-ignore
            constructor(stream: java.io.OutputStream, digest: java.security.MessageDigest)
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
             * Updates the message digest (if the digest function is on) using
             * the specified byte, and in any case writes the byte
             * to the output stream. That is, if the digest function is on
             * (see {@link #on(boolean) on}), this method calls
             * {@code update} on the message digest associated with this
             * stream, passing it the byte {@code b}. This method then
             * writes the byte to the output stream, blocking until the byte
             * is actually written.
             */
            // @ts-ignore
            public write(b: number): void;
            /**
             * Updates the message digest (if the digest function is on) using
             * the specified subarray, and in any case writes the subarray to
             * the output stream. That is, if the digest function is on (see
             * {@link #on(boolean) on}), this method calls {@code update}
             * on the message digest associated with this stream, passing it
             * the subarray specifications. This method then writes the subarray
             * bytes to the output stream, blocking until the bytes are actually
             * written.
             */
            // @ts-ignore
            public write(b: number, off: number, len: number): void;
            /**
             * Turns the digest function on or off. The default is on.  When
             * it is on, a call to one of the {@code write} methods results in an
             * update on the message digest.  But when it is off, the message
             * digest is not updated.
             */
            // @ts-ignore
            public on(on: boolean): void;
            /**
             * Prints a string representation of this digest output stream and
             * its associated message digest object.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
