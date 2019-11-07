declare namespace java {
    namespace io {
        // @ts-ignore
         class InvalidClassException extends java.io.ObjectStreamException {
            /**
             * Report an InvalidClassException for the reason specified.
             */
            // @ts-ignore
            constructor(reason: string)
            /**
             * Constructs an InvalidClassException object.
             */
            // @ts-ignore
            constructor(cname: string, reason: string)
            // @ts-ignore
            public classname: string;
            /**
             * Produce the message and include the classname, if present.
             */
            // @ts-ignore
            public getMessage(): string;
        }
    }
}
