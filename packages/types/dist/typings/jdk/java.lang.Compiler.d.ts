// @ts-nocheck
declare namespace java {
    namespace lang {
        // @ts-ignore
         class Compiler extends java.lang.Object {
            /**
             * Low level interface to the JIT compiler. Can return
             * any object, or null if no JIT compiler is available.
             */
            // @ts-ignore
            public static command(cmd: java.lang.Object): java.lang.Object;
            /**
             * Compiles the class using the JIT compiler. Answers
             * true if the compilation was successful, or false if
             * it failed or there was no JIT compiler available.
             */
            // @ts-ignore
            public static compileClass(classToCompile: java.lang.Class): boolean;
            /**
             * Compiles all classes whose name matches the argument
             * using the JIT compiler. Answers true if the compilation
             * was successful, or false if it failed or there was no
             * JIT compiler available.
             */
            // @ts-ignore
            public static compileClasses(nameRoot: string): boolean;
            /**
             * Disable the JIT compiler
             */
            // @ts-ignore
            public static disable(): void;
            /**
             * Enable the JIT compiler
             */
            // @ts-ignore
            public static enable(): void;
        }
    }
}
