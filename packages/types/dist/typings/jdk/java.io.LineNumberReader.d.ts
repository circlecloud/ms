declare namespace java {
    namespace io {
        // @ts-ignore
         class LineNumberReader extends java.io.BufferedReader {
            /**
             * Create a new line-numbering reader, using the default input-buffer
             * size.
             */
            // @ts-ignore
            constructor(input: java.io.Reader)
            /**
             * Create a new line-numbering reader, reading characters into a buffer of
             * the given size.
             */
            // @ts-ignore
            constructor(input: java.io.Reader, sz: number)
            /**
             * Set the current line number.
             */
            // @ts-ignore
            public setLineNumber(lineNumber: number): void;
            /**
             * Get the current line number.
             */
            // @ts-ignore
            public getLineNumber(): number;
            /**
             * Read a single character.  <a href="#lt">Line terminators</a> are
             * compressed into single newline ('\n') characters.  Whenever a line
             * terminator is read the current line number is incremented.
             */
            // @ts-ignore
            public read(): number;
            /**
             * Read characters into a portion of an array.  Whenever a <a
             * href="#lt">line terminator</a> is read the current line number is
             * incremented.
             */
            // @ts-ignore
            public read(cbuf: string, off: number, len: number): number;
            /**
             * Read a line of text.  Whenever a <a href="#lt">line terminator</a> is
             * read the current line number is incremented.
             */
            // @ts-ignore
            public readLine(): string;
            /**
             * Skip characters.
             */
            // @ts-ignore
            public skip(n: number): number;
            /**
             * Mark the present position in the stream.  Subsequent calls to reset()
             * will attempt to reposition the stream to this point, and will also reset
             * the line number appropriately.
             */
            // @ts-ignore
            public mark(readAheadLimit: number): void;
            /**
             * Reset the stream to the most recent mark.
             */
            // @ts-ignore
            public reset(): void;
        }
    }
}
