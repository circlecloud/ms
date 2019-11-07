// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class IllegalFormatFlagsException extends java.util.IllegalFormatException {
            /**
             * Constructs an instance of this class with the specified flags.
             */
            // @ts-ignore
            constructor(f: string)
            /**
             * Returns the set of flags which contains an illegal combination.
             */
            // @ts-ignore
            public getFlags(): string;
            // @ts-ignore
            public getMessage(): string;
        }
    }
}
