// @ts-nocheck
declare namespace java {
    namespace beans {
        // @ts-ignore
         class Statement extends java.lang.Object {
            /**
             * Creates a new {@link Statement} object
             * for the specified target object to invoke the method
             * specified by the name and by the array of arguments.
             * <p>
             * The {@code target} and the {@code methodName} values should not be {@code null}.
             * Otherwise an attempt to execute this {@code Expression}
             * will result in a {@code NullPointerException}.
             * If the {@code arguments} value is {@code null},
             * an empty array is used as the value of the {@code arguments} property.
             */
            // @ts-ignore
            constructor(target: java.lang.Object, methodName: string, arguments: java.lang.Object)
            /**
             * Returns the target object of this statement.
             * If this method returns {@code null},
             * the {@link #execute} method
             * throws a {@code NullPointerException}.
             */
            // @ts-ignore
            public getTarget(): java.lang.Object;
            /**
             * Returns the name of the method to invoke.
             * If this method returns {@code null},
             * the {@link #execute} method
             * throws a {@code NullPointerException}.
             */
            // @ts-ignore
            public getMethodName(): string;
            /**
             * Returns the arguments for the method to invoke.
             * The number of arguments and their types
             * must match the method being  called.
             * {@code null} can be used as a synonym of an empty array.
             */
            // @ts-ignore
            public getArguments(): java.lang.Object[];
            /**
             * The {@code execute} method finds a method whose name is the same
             * as the {@code methodName} property, and invokes the method on
             * the target.
             * When the target's class defines many methods with the given name
             * the implementation should choose the most specific method using
             * the algorithm specified in the Java Language Specification
             * (15.11). The dynamic class of the target and arguments are used
             * in place of the compile-time type information and, like the
             * {@link java.lang.reflect.Method} class itself, conversion between
             * primitive values and their associated wrapper classes is handled
             * internally.
             * <p>
             * The following method types are handled as special cases:
             * <ul>
             * <li>
             * Static methods may be called by using a class object as the target.
             * <li>
             * The reserved method name "new" may be used to call a class's constructor
             * as if all classes defined static "new" methods. Constructor invocations
             * are typically considered {@code Expression}s rather than {@code Statement}s
             * as they return a value.
             * <li>
             * The method names "get" and "set" defined in the {@link java.util.List}
             * interface may also be applied to array instances, mapping to
             * the static methods of the same name in the {@code Array} class.
             * </ul>
             */
            // @ts-ignore
            public execute(): void;
            /**
             * Prints the value of this statement using a Java-style syntax.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
