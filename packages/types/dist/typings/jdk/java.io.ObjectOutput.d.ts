declare namespace java {
    namespace io {
        // @ts-ignore
        interface ObjectOutput {
            /**
             * Write an object to the underlying storage or stream.  The
             * class that implements this interface defines how the object is
             * written.
             */
            // @ts-ignore
             writeObject(obj: java.lang.Object): void;
            /**
             * Writes a byte. This method will block until the byte is actually
             * written.
             */
            // @ts-ignore
             write(b: number): void;
            /**
             * Writes an array of bytes. This method will block until the bytes
             * are actually written.
             */
            // @ts-ignore
             write(b: number): void;
            /**
             * Writes a sub array of bytes.
             */
            // @ts-ignore
             write(b: number, off: number, len: number): void;
            /**
             * Flushes the stream. This will write any buffered
             * output bytes.
             */
            // @ts-ignore
             flush(): void;
            /**
             * Closes the stream. This method must be called
             * to release any resources associated with the
             * stream.
             */
            // @ts-ignore
             close(): void;
        }
    }
}
