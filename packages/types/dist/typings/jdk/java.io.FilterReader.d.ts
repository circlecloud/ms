// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
        abstract class FilterReader extends java.io.Reader {
            /**
             * Creates a new filtered reader.
             */
            // @ts-ignore
            constructor(input: java.io.Reader)
            // @ts-ignore
            protected in: java.io.Reader;
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
             * Skips characters.
             */
            // @ts-ignore
            public skip(n: number): number;
            /**
             * Tells whether this stream is ready to be read.
             */
            // @ts-ignore
            public ready(): boolean;
            /**
             * Tells whether this stream supports the mark() operation.
             */
            // @ts-ignore
            public markSupported(): boolean;
            /**
             * Marks the present position in the stream.
             */
            // @ts-ignore
            public mark(readAheadLimit: number): void;
            /**
             * Resets the stream.
             */
            // @ts-ignore
            public reset(): void;
            // @ts-ignore
            public close(): void;
        }
    }
}
