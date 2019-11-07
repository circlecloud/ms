// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace invoke {
            // @ts-ignore
             class MethodType extends java.lang.Object {
                /**
                 * Convenience method to create a new MethodType with only the parameter at
                 * position changed to the new type.
                 */
                // @ts-ignore
                public changeParameterType(position: number, type: java.lang.Class): java.lang.invoke.MethodType;
                /**
                 * Convenience method to create a new MethodType with a changed return type.
                 */
                // @ts-ignore
                public changeReturnType(type: java.lang.Class): java.lang.invoke.MethodType;
                /**
                 * Convenience method to create a new MethodType after dropping the
                 * parameters between startPosition and endPosition.
                 */
                // @ts-ignore
                public dropParameterTypes(startPosition: number, endPosition: number): java.lang.invoke.MethodType;
                /**
                 * Compares the specified object with this type for equality.
                 * That is, it returns true if and only if the specified object
                 * is also a method type with exactly the same parameters and return type.
                 */
                // @ts-ignore
                public equals(x: java.lang.Object): boolean;
                /**
                 * Convenience method erase all reference types to Object.  Primitive and void
                 * remain unchanged.
                 */
                // @ts-ignore
                public erase(): java.lang.invoke.MethodType;
                /**
                 * Convenience Method to create a MethodType from bytecode-level method descriptor.
                 * (See JVM Spec 2nd Ed. section 4.4.3).
                 * <p>
                 * All of the classes used in the method descriptor string must be reachable from a
                 * common ClassLoader or an exception will result.
                 * <p>
                 * The ClassLoader parameter may be null, in which case the System ClassLoader will be used.
                 * <p>
                 * Note, the Class names must use JVM syntax in the method descriptor String and therefore
                 * <i>java.lang.Class</i> will be represented as <i>Ljava/lang/Class;</i>
                 * <p>
                 * <b>Example method descriptors</b>
                 * <ul>
                 * <li>(II)V - method taking two ints and return void</li>
                 * <li>(I)Ljava/lang/Integer; - method taking an int and returning an Integer</li>
                 * <li>([I)I - method taking an array of ints and returning an int</li>
                 * </ul>
                 */
                // @ts-ignore
                public static fromMethodDescriptorString(methodDescriptor: string, loader: java.lang.ClassLoader): java.lang.invoke.MethodType;
                /**
                 * Convenience method to convert all types to Object.
                 */
                // @ts-ignore
                public generic(): java.lang.invoke.MethodType;
                /**
                 * Returns the MethodType's hash code, which is defined to be
                 * the same as the hash code of a List composed of the return type
                 * followed by the parameter types.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Helper method to determine if the return type or any of the parameter types
                 * are primitives.
                 */
                // @ts-ignore
                public hasPrimitives(): boolean;
                /**
                 * Helper method to determine if the return type or any of the parameter types
                 * are wrappers.  Wrappers are the boxed versions of primitives.
                 * <p>
                 * java.lang.Void is only treated as a wrapper if it occurs as the class of the
                 * return.
                 */
                // @ts-ignore
                public hasWrappers(): boolean;
                /**
                 * Return a new MethodType with an additional parameters inserted at position, which
                 * is a zero based index.
                 */
                // @ts-ignore
                public insertParameterTypes(position: number, types: java.lang.Class): java.lang.invoke.MethodType;
                /**
                 * Return a new MethodType with an additional parameters inserted at position, which
                 * is a zero based index.
                 */
                // @ts-ignore
                public insertParameterTypes(position: number, types: java.util.List): java.lang.invoke.MethodType;
                /**
                 * Create a MethodType object with the specified return type and no parameters
                 */
                // @ts-ignore
                public static methodType(type: java.lang.Class): java.lang.invoke.MethodType;
                /**
                 * Return a MethodType object with the specified return type and a single parameter
                 * of type 'parameter0'.
                 */
                // @ts-ignore
                public static methodType(type: java.lang.Class, parameter0: java.lang.Class): java.lang.invoke.MethodType;
                /**
                 * Return a MethodType object with the parameter and return types as requested.
                 */
                // @ts-ignore
                public static methodType(returnType: java.lang.Class, parameters: java.lang.Class): java.lang.invoke.MethodType;
                /**
                 * Wrapper on {@link MethodType#methodType(Class, Class[])}.
                 * <br>
                 * parameter0 is appended to the remaining parameters.
                 */
                // @ts-ignore
                public static methodType(type: java.lang.Class, parameter0: java.lang.Class, parameters: java.lang.Class): java.lang.invoke.MethodType;
                /**
                 * Wrapper on {@link MethodType#methodType(Class, Class[])}
                 */
                // @ts-ignore
                public static methodType(type: java.lang.Class, parameters: java.util.List): java.lang.invoke.MethodType;
                /**
                 * Wrapper on {@link #methodType(Class, Class[])}.
                 * Return a MethodType made from the returnType and parameters of the passed in MethodType.
                 */
                // @ts-ignore
                public static methodType(returnType: java.lang.Class, methodType: java.lang.invoke.MethodType): java.lang.invoke.MethodType;
                /**
                 * Static helper method to create a MethodType with only Object return type and parameters.
                 */
                // @ts-ignore
                public static genericMethodType(numParameters: number): java.lang.invoke.MethodType;
                /**
                 * Wrapper on {@link #methodType(Class, Class[])}.
                 * <br>
                 * Return a MethodType with an Object return and only Object parameters.  If isVarags is true, the
                 * final parameter will be an Object[].  This Object[] parameter is NOT included in the numParameters
                 * count.
                 */
                // @ts-ignore
                public static genericMethodType(numParameters: number, isVarargs: boolean): java.lang.invoke.MethodType;
                /**
                 * Helper method to return the parameter types in an array.
                 * <br>
                 * Changes to the array do not affect the MethodType object.
                 */
                // @ts-ignore
                public parameterArray(): java.lang.Class[];
                /**
                 * Helper method to return the number of parameters
                 */
                // @ts-ignore
                public parameterCount(): number;
                /**
                 * Helper method to return the parameter types in a List.
                 * <br>
                 * Changes to the List do not affect the MethodType object.
                 */
                // @ts-ignore
                public parameterList(): java.util.List;
                /**
                 * Return the type of the parameter at position.
                 */
                // @ts-ignore
                public parameterType(position: number): java.lang.Class;
                // @ts-ignore
                public returnType(): java.lang.Class;
                /**
                 * Create a method descriptor string for this MethodType.
                 */
                // @ts-ignore
                public toMethodDescriptorString(): string;
                /**
                 * Return a string representation of the MethodType in the form: '(A0,A2,A3...)R'.
                 * The simple name of each class is used.
                 * <p>
                 * Note that this is not the same as {@link #toMethodDescriptorString()}
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Wrapper method on {@link #methodType(Class, Class[])}.  Replaces all wrapper types with
                 * the appropriate primitive types, including changing {@link java.lang.Void} to
                 * void.
                 */
                // @ts-ignore
                public unwrap(): java.lang.invoke.MethodType;
                /**
                 * Wrapper method on {@link #methodType(Class, Class[])}.  Replaces all primitive types with
                 * the appropriate wrapper types, including changing void to {@link java.lang.Void}.
                 */
                // @ts-ignore
                public wrap(): java.lang.invoke.MethodType;
                /**
                 * Returns a MethodType with the additional class types appended to the end.
                 */
                // @ts-ignore
                public appendParameterTypes(classes: java.lang.Class): java.lang.invoke.MethodType;
                /**
                 * Returns a MethodType with the additional class types appended to the end.
                 */
                // @ts-ignore
                public appendParameterTypes(classes: java.util.List): java.lang.invoke.MethodType;
            }
        }
    }
}
