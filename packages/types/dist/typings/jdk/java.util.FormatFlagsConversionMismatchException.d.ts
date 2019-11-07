// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class FormatFlagsConversionMismatchException extends java.util.IllegalFormatException {
            /**
             * Constructs an instance of this class with the specified flag
             * and conversion.
             */
            // @ts-ignore
            constructor(f: string, c: string)
            /**
             * Returns the incompatible flag.
             */
            // @ts-ignore
            public getFlags(): string;
            /**
             * Returns the incompatible conversion.
             */
            // @ts-ignore
            public getConversion(): string;
            // @ts-ignore
            public getMessage(): string;
        }
    }
}
