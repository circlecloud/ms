// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
        abstract class FilterWriter extends java.io.Writer {
            /**
             * Create a new filtered writer.
             */
            // @ts-ignore
            constructor(out: java.io.Writer)
            // @ts-ignore
            protected out: java.io.Writer;
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
