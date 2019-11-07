declare namespace java {
    namespace lang {
        // @ts-ignore
         class StackTraceElement extends java.lang.Object {
            /**
             * Create a StackTraceElement from the parameters.
             */
            // @ts-ignore
            constructor(cls: string, method: string, file: string, line: number)
            /**
             * Returns true if the specified object is another StackTraceElement instance
             * representing the same execution point as this instance.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns the full name (i.e. including package) of the class where this
             * stack trace element is executing.
             */
            // @ts-ignore
            public getClassName(): string;
            /**
             * If available, returns the name of the file containing the Java code
             * source which was compiled into the class where this stack trace element
             * is executing.
             */
            // @ts-ignore
            public getFileName(): string;
            /**
             * Returns the source file line number for the class where this stack trace
             * element is executing.
             */
            // @ts-ignore
            public getLineNumber(): number;
            /**
             * Returns the name of the method where this stack trace element is
             * executing.
             */
            // @ts-ignore
            public getMethodName(): string;
            /**
             * Returns a hash code value for this stack trace element.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns <code>true</code> if the method name returned by
             * {@link #getMethodName()} is implemented as a native method.
             */
            // @ts-ignore
            public isNativeMethod(): boolean;
            /**
             * Returns a string representation of this stack trace element.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
