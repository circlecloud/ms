// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class MissingResourceException extends java.lang.RuntimeException {
            /**
             * Constructs a MissingResourceException with the specified information.
             * A detail message is a String that describes this particular exception.
             */
            // @ts-ignore
            constructor(s: string, className: string, key: string)
            /**
             * Gets parameter passed by constructor.
             */
            // @ts-ignore
            public getClassName(): string;
            /**
             * Gets parameter passed by constructor.
             */
            // @ts-ignore
            public getKey(): string;
        }
    }
}
