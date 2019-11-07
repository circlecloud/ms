declare namespace java {
    namespace util {
        // @ts-ignore
         class DuplicateFormatFlagsException extends java.util.IllegalFormatException {
            /**
             * Constructs an instance of this class with the specified flags.
             */
            // @ts-ignore
            constructor(f: string)
            /**
             * Returns the set of flags which contains a duplicate flag.
             */
            // @ts-ignore
            public getFlags(): string;
            // @ts-ignore
            public getMessage(): string;
        }
    }
}
