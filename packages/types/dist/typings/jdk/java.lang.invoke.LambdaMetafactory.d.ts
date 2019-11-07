declare namespace java {
    namespace lang {
        namespace invoke {
            // @ts-ignore
             class LambdaMetafactory extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static FLAG_SERIALIZABLE: number;
                // @ts-ignore
                public static FLAG_MARKERS: number;
                // @ts-ignore
                public static FLAG_BRIDGES: number;
                /**
                 * Facilitates the creation of simple "function objects" that implement one
                 * or more interfaces by delegation to a provided {@link MethodHandle},
                 * after appropriate type adaptation and partial evaluation of arguments.
                 * Typically used as a <em>bootstrap method</em> for {@code invokedynamic}
                 * call sites, to support the <em>lambda expression</em> and <em>method
                 * reference expression</em> features of the Java Programming Language.
                 * <p>This is the standard, streamlined metafactory; additional flexibility
                 * is provided by {@link #altMetafactory(MethodHandles.Lookup, String, MethodType, Object...)}.
                 * A general description of the behavior of this method is provided
                 * {@link LambdaMetafactory above}.
                 * <p>When the target of the {@code CallSite} returned from this method is
                 * invoked, the resulting function objects are instances of a class which
                 * implements the interface named by the return type of {@code invokedType},
                 * declares a method with the name given by {@code invokedName} and the
                 * signature given by {@code samMethodType}.  It may also override additional
                 * methods from {@code Object}.
                 */
                // @ts-ignore
                public static metafactory(caller: java.lang.invoke.MethodHandles.Lookup, invokedName: string, invokedType: java.lang.invoke.MethodType, samMethodType: java.lang.invoke.MethodType, implMethod: java.lang.invoke.MethodHandle, instantiatedMethodType: java.lang.invoke.MethodType): java.lang.invoke.CallSite;
                /**
                 * Facilitates the creation of simple "function objects" that implement one
                 * or more interfaces by delegation to a provided {@link MethodHandle},
                 * after appropriate type adaptation and partial evaluation of arguments.
                 * Typically used as a <em>bootstrap method</em> for {@code invokedynamic}
                 * call sites, to support the <em>lambda expression</em> and <em>method
                 * reference expression</em> features of the Java Programming Language.
                 * <p>This is the general, more flexible metafactory; a streamlined version
                 * is provided by {@link #metafactory(java.lang.invoke.MethodHandles.Lookup,
                 * String, MethodType, MethodType, MethodHandle, MethodType)}.
                 * A general description of the behavior of this method is provided
                 * {@link LambdaMetafactory above}.
                 * <p>The argument list for this method includes three fixed parameters,
                 * corresponding to the parameters automatically stacked by the VM for the
                 * bootstrap method in an {@code invokedynamic} invocation, and an {@code Object[]}
                 * parameter that contains additional parameters.  The declared argument
                 * list for this method is:
                 * <pre>{@code
                 * CallSite altMetafactory(MethodHandles.Lookup caller,
                 * String invokedName,
                 * MethodType invokedType,
                 * Object... args)
                 * }</pre>
                 * <p>but it behaves as if the argument list is as follows:
                 * <pre>{@code
                 * CallSite altMetafactory(MethodHandles.Lookup caller,
                 * String invokedName,
                 * MethodType invokedType,
                 * MethodType samMethodType,
                 * MethodHandle implMethod,
                 * MethodType instantiatedMethodType,
                 * int flags,
                 * int markerInterfaceCount,  // IF flags has MARKERS set
                 * Class... markerInterfaces, // IF flags has MARKERS set
                 * int bridgeCount,           // IF flags has BRIDGES set
                 * MethodType... bridges      // IF flags has BRIDGES set
                 * )
                 * }</pre>
                 * <p>Arguments that appear in the argument list for
                 * {@link #metafactory(MethodHandles.Lookup, String, MethodType, MethodType, MethodHandle, MethodType)}
                 * have the same specification as in that method.  The additional arguments
                 * are interpreted as follows:
                 * <ul>
                 * <li>{@code flags} indicates additional options; this is a bitwise
                 * OR of desired flags.  Defined flags are {@link #FLAG_BRIDGES},
                 * {@link #FLAG_MARKERS}, and {@link #FLAG_SERIALIZABLE}.</li>
                 * <li>{@code markerInterfaceCount} is the number of additional interfaces
                 * the function object should implement, and is present if and only if the
                 * {@code FLAG_MARKERS} flag is set.</li>
                 * <li>{@code markerInterfaces} is a variable-length list of additional
                 * interfaces to implement, whose length equals {@code markerInterfaceCount},
                 * and is present if and only if the {@code FLAG_MARKERS} flag is set.</li>
                 * <li>{@code bridgeCount} is the number of additional method signatures
                 * the function object should implement, and is present if and only if
                 * the {@code FLAG_BRIDGES} flag is set.</li>
                 * <li>{@code bridges} is a variable-length list of additional
                 * methods signatures to implement, whose length equals {@code bridgeCount},
                 * and is present if and only if the {@code FLAG_BRIDGES} flag is set.</li>
                 * </ul>
                 * <p>Each class named by {@code markerInterfaces} is subject to the same
                 * restrictions as {@code Rd}, the return type of {@code invokedType},
                 * as described {@link LambdaMetafactory above}.  Each {@code MethodType}
                 * named by {@code bridges} is subject to the same restrictions as
                 * {@code samMethodType}, as described {@link LambdaMetafactory above}.
                 * <p>When FLAG_SERIALIZABLE is set in {@code flags}, the function objects
                 * will implement {@code Serializable}, and will have a {@code writeReplace}
                 * method that returns an appropriate {@link SerializedLambda}.  The
                 * {@code caller} class must have an appropriate {@code $deserializeLambda$}
                 * method, as described in {@link SerializedLambda}.
                 * <p>When the target of the {@code CallSite} returned from this method is
                 * invoked, the resulting function objects are instances of a class with
                 * the following properties:
                 * <ul>
                 * <li>The class implements the interface named by the return type
                 * of {@code invokedType} and any interfaces named by {@code markerInterfaces}</li>
                 * <li>The class declares methods with the name given by {@code invokedName},
                 * and the signature given by {@code samMethodType} and additional signatures
                 * given by {@code bridges}</li>
                 * <li>The class may override methods from {@code Object}, and may
                 * implement methods related to serialization.</li>
                 * </ul>
                 */
                // @ts-ignore
                public static altMetafactory(caller: java.lang.invoke.MethodHandles.Lookup, invokedName: string, invokedType: java.lang.invoke.MethodType, args: java.lang.Object): java.lang.invoke.CallSite;
            }
        }
    }
}
