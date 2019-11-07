// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace invoke {
            namespace MethodHandles {
                // @ts-ignore
                 class Lookup extends java.lang.Object {
                    // @ts-ignore
                    public static PUBLIC: number;
                    // @ts-ignore
                    public static PRIVATE: number;
                    // @ts-ignore
                    public static PROTECTED: number;
                    // @ts-ignore
                    public static PACKAGE: number;
                    /**
                     * A query to determine the lookup capabilities held by this instance.
                     */
                    // @ts-ignore
                    public lookupModes(): number;
                    /**
                     * Return an early-bound method handle to a non-static method.  The receiver must
                     * have a Class in its hierarchy that provides the virtual method named methodName.
                     * <p>
                     * The final MethodType of the MethodHandle will be identical to that of the method.
                     * The receiver will be inserted prior to the call and therefore does not need to be
                     * included in the MethodType.
                     */
                    // @ts-ignore
                    public bind(receiver: java.lang.Object, methodName: string, type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
                    /**
                     * Return a MethodHandle bound to a specific-implementation of a virtual method, as if created by an invokespecial bytecode
                     * using the class specialToken.  The method and all Classes in its MethodType must be accessible to
                     * the caller.
                     * <p>
                     * The receiver class will be added to the MethodType of the handle, but dispatch will not occur based
                     * on the receiver.
                     */
                    // @ts-ignore
                    public findSpecial(clazz: java.lang.Class, methodName: string, type: java.lang.invoke.MethodType, specialToken: java.lang.Class): java.lang.invoke.MethodHandle;
                    /**
                     * Return a MethodHandle to a static method.  The MethodHandle will have the same type as the
                     * method.  The method and all classes in its type must be accessible to the caller.
                     */
                    // @ts-ignore
                    public findStatic(clazz: java.lang.Class, methodName: string, type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
                    /**
                     * Return a MethodHandle to a virtual method.  The method will be looked up in the first argument
                     * (aka receiver) prior to dispatch.  The type of the MethodHandle will be that of the method
                     * with the receiver type prepended.
                     */
                    // @ts-ignore
                    public findVirtual(clazz: java.lang.Class, methodName: string, type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
                    /**
                     * Return a MethodHandle that provides read access to a field.
                     * The MethodHandle will have a MethodType taking a single
                     * argument with type <code>clazz</code> and returning something of
                     * type <code>fieldType</code>.
                     */
                    // @ts-ignore
                    public findGetter(clazz: java.lang.Class, fieldName: string, fieldType: java.lang.Class): java.lang.invoke.MethodHandle;
                    /**
                     * Return a MethodHandle that provides read access to a field.
                     * The MethodHandle will have a MethodType taking no arguments
                     * and returning something of type <code>fieldType</code>.
                     */
                    // @ts-ignore
                    public findStaticGetter(clazz: java.lang.Class, fieldName: string, fieldType: java.lang.Class): java.lang.invoke.MethodHandle;
                    /**
                     * Return a MethodHandle that provides write access to a field.
                     * The MethodHandle will have a MethodType taking a two
                     * arguments, the first with type <code>clazz</code> and the second with
                     * type <code>fieldType</code>, and returning void.
                     */
                    // @ts-ignore
                    public findSetter(clazz: java.lang.Class, fieldName: string, fieldType: java.lang.Class): java.lang.invoke.MethodHandle;
                    /**
                     * Return a MethodHandle that provides write access to a field.
                     * The MethodHandle will have a MethodType taking one argument
                     * of type <code>fieldType</code> and returning void.
                     */
                    // @ts-ignore
                    public findStaticSetter(clazz: java.lang.Class, fieldName: string, fieldType: java.lang.Class): java.lang.invoke.MethodHandle;
                    /**
                     * Create a lookup on the request class.  The resulting lookup will have no more
                     * access privileges than the original.
                     */
                    // @ts-ignore
                    public in(lookupClass: java.lang.Class): java.lang.invoke.MethodHandles.Lookup;
                    /**
                     * The class being used for visibility checks and access permissions.
                     */
                    // @ts-ignore
                    public lookupClass(): java.lang.Class;
                    /**
                     * Make a MethodHandle to the Reflect method.  If the method is non-static, the receiver argument
                     * is treated as the intial argument in the MethodType.
                     * <p>
                     * If m is a virtual method, normal virtual dispatch is used on each invocation.
                     * <p>
                     * If the <code>accessible</code> flag is not set on the Reflect method, then access checking
                     * is performed using the lookup class.
                     */
                    // @ts-ignore
                    public unreflect(method: java.lang.reflect.Method): java.lang.invoke.MethodHandle;
                    /**
                     * Return a MethodHandle for the reflect constructor. The MethodType has a return type
                     * of the declared class, and the arguments of the constructor.  The MehtodHnadle
                     * creates a new object as through by newInstance.
                     * <p>
                     * If the <code>accessible</code> flag is not set, then access checking
                     * is performed using the lookup class.
                     */
                    // @ts-ignore
                    public unreflectConstructor(method: java.lang.reflect.Constructor): java.lang.invoke.MethodHandle;
                    /**
                     * Return a MethodHandle that will create an object of the required class and initialize it using
                     * the constructor method with signature <i>type</i>.  The MethodHandle will have a MethodType
                     * with the same parameters as the constructor method, but will have a return type of the
                     * <i>declaringClass</i> instead of void.
                     */
                    // @ts-ignore
                    public findConstructor(declaringClass: java.lang.Class, type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
                    /**
                     * Return a MethodHandle for the Reflect method, that will directly call the requested method
                     * as through from the class <code>specialToken</code>.  The MethodType of the method handle
                     * will be that of the method with the receiver argument prepended.
                     */
                    // @ts-ignore
                    public unreflectSpecial(method: java.lang.reflect.Method, specialToken: java.lang.Class): java.lang.invoke.MethodHandle;
                    /**
                     * Create a MethodHandle that returns the value of the Reflect field.  There are two cases:
                     * <ol>
                     * <li>a static field - which has the MethodType with only a return type of the field</li>
                     * <li>an instance field - which has the MethodType with a return type of the field and a
                     * single argument of the object that contains the field</li>
                     * </ol>
                     * <p>
                     * If the <code>accessible</code> flag is not set, then access checking
                     * is performed using the lookup class.
                     */
                    // @ts-ignore
                    public unreflectGetter(field: java.lang.reflect.Field): java.lang.invoke.MethodHandle;
                    /**
                     * Create a MethodHandle that sets the value of the Reflect field.  All MethodHandles created
                     * here have a return type of void.  For the arguments, there are two cases:
                     * <ol>
                     * <li>a static field - which takes a single argument the same as the field</li>
                     * <li>an instance field - which takes two arguments, the object that contains the field, and the type of the field</li>
                     * </ol>
                     * <p>
                     * If the <code>accessible</code> flag is not set, then access checking
                     * is performed using the lookup class.
                     */
                    // @ts-ignore
                    public unreflectSetter(field: java.lang.reflect.Field): java.lang.invoke.MethodHandle;
                    /**
                     * Cracks a MethodHandle, which allows access to its symbolic parts.
                     * The MethodHandle must have been created by this Lookup object or one that is able to recreate the MethodHandle.
                     * If the Lookup object is not able to recreate the MethodHandle, the cracking may fail.
                     */
                    // @ts-ignore
                    public revealDirect(target: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandleInfo;
                    // @ts-ignore
                    public toString(): string;
                }
            }
        }
    }
}
