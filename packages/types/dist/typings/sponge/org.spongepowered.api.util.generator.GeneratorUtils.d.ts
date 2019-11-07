declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace generator {
                    // @ts-ignore
                     class GeneratorUtils extends java.lang.Object {
                        /**
                         * Gets a class name with the provided classifier.
                         */
                        // @ts-ignore
                        public static getClassName(targetPackage: string, clazz: java.lang.Class, classifier: string): string;
                        /**
                         * Insert the necessary methods to box a primitive type (if the given type
                         * is a primitive object).
                         */
                        // @ts-ignore
                        public static visitBoxingMethod(mv: any /*MethodVisitor*/, type: any /*Type*/): void;
                        /**
                         * Insert the necessary methods to unbox a primitive type (if the given type
                         * is a primitive).
                         */
                        // @ts-ignore
                        public static visitUnboxingMethod(mv: any /*MethodVisitor*/, type: any /*Type*/): void;
                    }
                }
            }
        }
    }
}
