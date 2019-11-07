declare namespace java {
    namespace util {
        // @ts-ignore
         class IllegalFormatConversionException extends java.util.IllegalFormatException {
            /**
             * Constructs an instance of this class with the mismatched conversion and
             * the corresponding argument class.
             */
            // @ts-ignore
            constructor(c: string, arg: java.lang.Class)
            /**
             * Returns the inapplicable conversion.
             */
            // @ts-ignore
            public getConversion(): string;
            /**
             * Returns the class of the mismatched argument.
             */
            // @ts-ignore
            public getArgumentClass(): java.lang.Class;
            // @ts-ignore
            public getMessage(): string;
        }
    }
}
