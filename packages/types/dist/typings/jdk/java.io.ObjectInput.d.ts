// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
        interface ObjectInput {
            /**
             * Read and return an object. The class that implements this interface
             * defines where the object is "read" from.
             */
            // @ts-ignore
             readObject(): java.lang.Object;
            /**
             * Reads a byte of data. This method will block if no input is
             * available.
             */
            // @ts-ignore
             read(): number;
            /**
             * Reads into an array of bytes.  This method will
             * block until some input is available.
             */
            // @ts-ignore
             read(b: number): number;
            /**
             * Reads into an array of bytes.  This method will
             * block until some input is available.
             */
            // @ts-ignore
             read(b: number, off: number, len: number): number;
            /**
             * Skips n bytes of input.
             */
            // @ts-ignore
             skip(n: number): number;
            /**
             * Returns the number of bytes that can be read
             * without blocking.
             */
            // @ts-ignore
             available(): number;
            /**
             * Closes the input stream. Must be called
             * to release any resources associated with
             * the stream.
             */
            // @ts-ignore
             close(): void;
        }
    }
}
