// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace invoke {
            // @ts-ignore
             class MethodHandles extends java.lang.Object {
                /**
                 * Return a MethodHandles.Lookup object for the caller.
                 */
                // @ts-ignore
                public static lookup(): java.lang.invoke.MethodHandles.Lookup;
                /**
                 * Return a MethodHandles.Lookup object that is only able to access <code>public</code> members.
                 */
                // @ts-ignore
                public static publicLookup(): java.lang.invoke.MethodHandles.Lookup;
                /**
                 * Gets the underlying Member of the provided <code>target</code> MethodHandle. This is done through an unchecked crack of the MethodHandle.
                 * Calling this method is equivalent to obtaining a lookup object capable of cracking the <code>target</code> MethodHandle, calling
                 * <code>Lookup.revealDirect</code> on the <code>target</code> MethodHandle and then calling <code>MethodHandleInfo.reflectAs</code>.
                 * If a SecurityManager is present, this method requires <code>ReflectPermission("suppressAccessChecks")</code>.
                 */
                // @ts-ignore
                public static reflectAs(expected: java.lang.Class, target: java.lang.invoke.MethodHandle): java.lang.reflect.Member;
                /**
                 * Return a MethodHandle that is the equivalent of calling
                 * MethodHandles.lookup().findVirtual(MethodHandle.class, "invokeExact", type).
                 * <p>
                 * The MethodHandle has a method type that is the same as type except that an additional
                 * argument of MethodHandle will be added as the first parameter.
                 * <p>
                 * This method is not subject to the same security checks as a findVirtual call.
                 */
                // @ts-ignore
                public static exactInvoker(type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
                /**
                 * Return a MethodHandle that is the equivalent of calling
                 * MethodHandles.lookup().findVirtual(MethodHandle.class, "invoke", type).
                 * <p>
                 * The MethodHandle has a method type that is the same as type except that an additional
                 * argument of MethodHandle will be added as the first parameter.
                 * <p>
                 * This method is not subject to the same security checks as a findVirtual call.
                 */
                // @ts-ignore
                public static invoker(type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
                /**
                 * Return a MethodHandle that is able to invoke a MethodHandle of <i>type</i> as though by
                 * invoke after spreading the final Object[] parameter.
                 * <p>
                 * When the <code>MethodHandle</code> is invoked, the argument array must contain exactly <i>spreadCount</i> arguments
                 * to be passed to the original <code>MethodHandle</code>.  The array may be null in the case when <i>spreadCount</i> is zero.
                 * Incorrect argument array size will cause the method to throw an <code>IllegalArgumentException</code> instead of invoking the target.
                 * </p>
                 */
                // @ts-ignore
                public static spreadInvoker(type: java.lang.invoke.MethodType, fixedArgCount: number): java.lang.invoke.MethodHandle;
                /**
                 * Produce a MethodHandle that implements an if-else block.
                 * This MethodHandle is composed from three handles:
                 * <ul>
                 * <li>guard - a boolean returning handle that takes a subset of the arguments passed to the true and false targets</li>
                 * <li>trueTarget - the handle to call if the guard returns true</li>
                 * <li>falseTarget - the handle to call if the guard returns false</li>
                 * </ul>
                 */
                // @ts-ignore
                public static guardWithTest(guard: java.lang.invoke.MethodHandle, trueTarget: java.lang.invoke.MethodHandle, falseTarget: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
                /**
                 * Produce a MethodHandle that implements a try-catch block.
                 * This adapter acts as though the <i>tryHandle</i> were run inside a try block.  If <i>tryHandle</i>
                 * throws an exception of type <i>throwableClass</i>, the <i>catchHandle</i> is invoked with the
                 * exception instance and the original arguments.
                 * <p>
                 * The catchHandle may take a subset of the original arguments rather than the full set.  Its first
                 * argument will be the exception instance.
                 * <p>
                 * Both the catchHandle and the tryHandle must have the same return type.
                 */
                // @ts-ignore
                public static catchException(tryHandle: java.lang.invoke.MethodHandle, throwableClass: java.lang.Class, catchHandle: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
                /**
                 * Produce a MethodHandle that acts as an identity function.  It will accept a single
                 * argument and return it.
                 */
                // @ts-ignore
                public static identity(classType: java.lang.Class): java.lang.invoke.MethodHandle;
                /**
                 * Create a MethodHandle that returns the <i>constantValue</i> on each invocation.
                 * <p>
                 * Conversions of the <i>constantValue</i> to the <i>returnType</i> occur if possible, otherwise
                 * a ClassCastException is thrown.  For primitive <i>returnType</i>, widening primitive conversions are
                 * attempted.  Otherwise, reference conversions are attempted.
                 */
                // @ts-ignore
                public static constant(returnType: java.lang.Class, constantValue: java.lang.Object): java.lang.invoke.MethodHandle;
                /**
                 * Return a MethodHandle able to read from the array.  The MethodHandle's return type will be the same as
                 * the elements of the array.  The MethodHandle will also accept two arguments - the first being the array, typed correctly,
                 * and the second will be the the <code>int</code> index into the array.
                 */
                // @ts-ignore
                public static arrayElementGetter(arrayType: java.lang.Class): java.lang.invoke.MethodHandle;
                /**
                 * Return a MethodHandle able to write to the array.  The MethodHandle will have a void return type and take three
                 * arguments: the first being the array, typed correctly, the second will be the the <code>int</code> index into the array,
                 * and the third will be the item to write into the array
                 */
                // @ts-ignore
                public static arrayElementSetter(arrayType: java.lang.Class): java.lang.invoke.MethodHandle;
                /**
                 * Return a MethodHandle that will throw the passed in Exception object.  The return type is largely
                 * irrelevant as the method never completes normally.  Any return type that is convenient can be
                 * used.
                 */
                // @ts-ignore
                public static throwException(returnType: java.lang.Class, exception: java.lang.Class): java.lang.invoke.MethodHandle;
                /**
                 * Return a MethodHandle that will adapt the return value of <i>handle</i> by running the <i>filter</i>
                 * on it and returning the result of the filter.
                 * <p>
                 * If <i>handle</i> has a void return, <i>filter</i> must not take any parameters.
                 */
                // @ts-ignore
                public static filterReturnValue(handle: java.lang.invoke.MethodHandle, filter: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
                /**
                 * Produce a MethodHandle that adapts its arguments using the filter methodhandles before calling the underlying handle.
                 * <p>
                 * The type of the adapter is the type of the original handle with the filter argument types replacing their corresponding
                 * arguments.  Each of the adapters must return the correct type for their corresponding argument.
                 * <p>
                 * If the filters array is empty or contains only null filters, the original handle will be returned.
                 */
                // @ts-ignore
                public static filterArguments(handle: java.lang.invoke.MethodHandle, startPosition: number, filters: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
                /**
                 * Produce a MethodHandle that preprocesses some of the arguments by calling the preprocessor handle.
                 * If the preprocessor handle has a return type, it must be the same as the first argument type of the <i>handle</i>.
                 * If the preprocessor returns void, it does not contribute the first argument to the <i>handle</i>.
                 * In all cases, the preprocessor handle accepts a subset of the arguments for the handle.
                 */
                // @ts-ignore
                public static foldArguments(handle: java.lang.invoke.MethodHandle, preprocessor: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
                /**
                 * Produce a MethodHandle that will permute the incoming arguments according to the
                 * permute array.  The new handle will have a type of permuteType.
                 * <p>
                 * The permutations can include duplicating or rearranging the arguments.  The permute
                 * array must have the same number of items as there are parameters in the
                 * handle's type.
                 * <p>
                 * Each argument type must exactly match - no conversions are applied.
                 */
                // @ts-ignore
                public static permuteArguments(handle: java.lang.invoke.MethodHandle, permuteType: java.lang.invoke.MethodType, permute: number): java.lang.invoke.MethodHandle;
                /**
                 * Produce a MethodHandle that preprocesses some of the arguments by calling the filter handle.
                 * If the <i>filter</i> handle has a return type, it must be the same as the argument type at pos in the <i>target</i> arguments.
                 * If the <i>filter</i> returns void, it does not contribute an argument to the <i>target</i> arguments at pos.
                 * The <i>filter</i> handle consumes a subset (size equal to the <i>filter's</i> arity) of the returned handle's arguments, starting at pos.
                 */
                // @ts-ignore
                public static collectArguments(target: java.lang.invoke.MethodHandle, pos: number, filter: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
                /**
                 * This method returns a method handle that delegates to the original method handle,
                 * ignoring a particular range of arguments (starting at a given location and
                 * with given types).  The type of the returned method handle is the type of the original handle
                 * with the given types inserted in the parameter type list at the given location.
                 */
                // @ts-ignore
                public static dropArguments(originalHandle: java.lang.invoke.MethodHandle, location: number, valueTypes: java.lang.Class): java.lang.invoke.MethodHandle;
                /**
                 * This method returns a method handle that delegates to the original method handle,
                 * ignoring a particular range of arguments (starting at a given location and
                 * with given types).  The type of the returned method handle is the type of the original handle
                 * with the given types inserted in the parameter type list at the given location.
                 */
                // @ts-ignore
                public static dropArguments(originalHandle: java.lang.invoke.MethodHandle, location: number, valueTypes: java.util.List): java.lang.invoke.MethodHandle;
                /**
                 * Produce an adapter that converts the incoming arguments from <i>type</i> to the underlying MethodHandle's type
                 * and converts the return value as required.
                 * <p>
                 * The following conversions, beyond those allowed by {@link MethodHandle#asType(MethodType)} are also allowed:
                 * <ul>
                 * <li>A conversion to an interface is done without a cast</li>
                 * <li>A boolean is treated as a single bit unsigned integer and may be converted to other primitive types</li>
                 * <li>A primitive can also be cast using Java casting conversion if asType would have allowed Java method invocation conversion</li>
                 * <li>An unboxing conversion, possibly followed by a widening primitive conversion</li>
                 * </ul>
                 * These additional rules match Java casting conversion and those of the bytecode verifier.
                 */
                // @ts-ignore
                public static explicitCastArguments(handle: java.lang.invoke.MethodHandle, type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
                /**
                 * This method returns a method handle that delegates to the original method handle,
                 * adding a particular range of arguments (starting at a given location and
                 * with given types).  The type of the returned method handle is the type of the original handle
                 * with the given types dropped from the parameter type list at the given location.
                 */
                // @ts-ignore
                public static insertArguments(originalHandle: java.lang.invoke.MethodHandle, location: number, values: java.lang.Object): java.lang.invoke.MethodHandle;
            }
        }
    }
}
