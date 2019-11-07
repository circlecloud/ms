declare namespace java {
    namespace lang {
        namespace invoke {
            // @ts-ignore
            abstract class MethodHandle extends java.lang.Object {
                /**
                 * Invoke the receiver MethodHandle against the supplied arguments.  The types of the arguments
                 * must be an exact match for the MethodType of the MethodHandle.
                 */
                // @ts-ignore
                public invokeExact(args: java.lang.Object): java.lang.Object;
                /**
                 * Invoke the receiver MethodHandle against the supplied arguments.  If the types of the arguments
                 * are not an exact match for the MethodType of the MethodHandle, conversions will be applied as
                 * possible.  The signature and the MethodHandle's MethodType must have the same number of arguments.
                 */
                // @ts-ignore
                public invoke(args: java.lang.Object): java.lang.Object;
                /**
                 * The MethodType of the MethodHandle.  Invocation must match this MethodType.
                 */
                // @ts-ignore
                public type(): java.lang.invoke.MethodType;
                /**
                 * Produce a MethodHandle that has an array of type <i>arrayClass</i> as its last argument and replaces the
                 * array with <i>spreadCount</i> arguments from the array before calling the original MethodHandle.  The
                 * MethodType of new the methodhandle and the original methodhandle will differ only in the regards to the
                 * last arguments.
                 * <p>
                 * The array must contain exactly <i>spreadCount</i> arguments to be passed to the original methodhandle.  The array
                 * may be null in the case when <i>spreadCount</i> is zero.  Incorrect argument array size will cause the method to
                 * throw an <code>IllegalArgumentException</code> instead of invoking the target.
                 */
                // @ts-ignore
                public asSpreader(arrayClass: java.lang.Class, spreadCount: number): java.lang.invoke.MethodHandle;
                /**
                 * Returns a MethodHandle that collects the requested incoming arguments, which must match the
                 * types in MethodType incomingArgs, into an array of <i>arrayClass</i>, called T.
                 * This method can only be called on MethodHandles that have type() such that their last parameter
                 * can be assigned to from an instance of <i>arrayClass</i>.  An IllegalArgumentException will be
                 * thrown if this is not the case.
                 * This take a MH with type (Something, Something, K)R and presents a MethodType with the form
                 * (Something, Something, T, T, T)R. Where K is assignable to from an array of <i>arrayClass</i> T.
                 */
                // @ts-ignore
                public asCollector(arrayClass: java.lang.Class, collectCount: number): java.lang.invoke.MethodHandle;
                /**
                 * Returns a MethodHandle that presents as being of MethodType newType.  It will
                 * convert the arguments used to match type().  If a conversion is invalid, a
                 * ClassCastException will be thrown.
                 * If newType == type(), then the original MethodHandle may be returned.
                 * TODO: Describe the type conversion rules here.
                 * If the return type T1 is void, any returned value is discarded
                 * If the return type T0 is void and T1 a reference, a null value is introduced.
                 * If the return type T0 is void and T1 a primitive, a zero value is introduced.
                 */
                // @ts-ignore
                public asType(newType: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
                /**
                 * Invoke the MethodHandle using an Object[] of arguments.  The array must contain at exactly type().parameterCount() arguments.
                 * Each of the arguments in the array will be coerced to the appropriate type, if possible, based on the MethodType.
                 */
                // @ts-ignore
                public invokeWithArguments(args: java.lang.Object): java.lang.Object;
                /**
                 * Helper method to call {@link #invokeWithArguments(Object[])}.
                 */
                // @ts-ignore
                public invokeWithArguments(args: java.util.List): java.lang.Object;
                /**
                 * Create an varargs collector adapter on this MethodHandle.
                 * For {@link #asVarargsCollector(Class)} MethodHandles, <i>invokeExact</i> requires that the arguments
                 * exactly match the underlying MethodType.
                 * <p>
                 * <i>invoke</i> acts as normally unless the arities differ.  In that case, the trailing
                 * arguments are converted as though by a call to {@link #asCollector(int)} before invoking the underlying
                 * methodhandle.
                 */
                // @ts-ignore
                public asVarargsCollector(arrayParameter: java.lang.Class): java.lang.invoke.MethodHandle;
                /**
                 * Determine whether this is an {@link #asVarargsCollector(Class)} MethodHandle.
                 */
                // @ts-ignore
                public isVarargsCollector(): boolean;
                /**
                 * Return a fixed arity version of the current MethodHandle.
                 * <p>
                 * This is identical to the current method handle if {@link #isVarargsCollector()} is false.
                 * <p>
                 * If the current method is a varargs collector, then the returned handle will be the same
                 * but without the varargs nature.
                 */
                // @ts-ignore
                public asFixedArity(): java.lang.invoke.MethodHandle;
                // @ts-ignore
                public bindTo(value: java.lang.Object): java.lang.invoke.MethodHandle;
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
