// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace reflect {
            // @ts-ignore
             class Proxy extends java.lang.Object {
                /**
                 * Constructs a new {@code Proxy} instance from a subclass
                 * (typically, a dynamic proxy class) with the specified value
                 * for its invocation handler.
                 */
                // @ts-ignore
                constructor(h: java.lang.reflect.InvocationHandler)
                // @ts-ignore
                protected h: java.lang.reflect.InvocationHandler;
                /**
                 * Returns the {@code java.lang.Class} object for a proxy class
                 * given a class loader and an array of interfaces.  The proxy class
                 * will be defined by the specified class loader and will implement
                 * all of the supplied interfaces.  If any of the given interfaces
                 * is non-public, the proxy class will be non-public. If a proxy class
                 * for the same permutation of interfaces has already been defined by the
                 * class loader, then the existing proxy class will be returned; otherwise,
                 * a proxy class for those interfaces will be generated dynamically
                 * and defined by the class loader.
                 * <p>There are several restrictions on the parameters that may be
                 * passed to {@code Proxy.getProxyClass}:
                 * <ul>
                 * <li>All of the {@code Class} objects in the
                 * {@code interfaces} array must represent interfaces, not
                 * classes or primitive types.
                 * <li>No two elements in the {@code interfaces} array may
                 * refer to identical {@code Class} objects.
                 * <li>All of the interface types must be visible by name through the
                 * specified class loader.  In other words, for class loader
                 * {@code cl} and every interface {@code i}, the following
                 * expression must be true:
                 * <pre>
                 * Class.forName(i.getName(), false, cl) == i
                 * </pre>
                 * <li>All non-public interfaces must be in the same package;
                 * otherwise, it would not be possible for the proxy class to
                 * implement all of the interfaces, regardless of what package it is
                 * defined in.
                 * <li>For any set of member methods of the specified interfaces
                 * that have the same signature:
                 * <ul>
                 * <li>If the return type of any of the methods is a primitive
                 * type or void, then all of the methods must have that same
                 * return type.
                 * <li>Otherwise, one of the methods must have a return type that
                 * is assignable to all of the return types of the rest of the
                 * methods.
                 * </ul>
                 * <li>The resulting proxy class must not exceed any limits imposed
                 * on classes by the virtual machine.  For example, the VM may limit
                 * the number of interfaces that a class may implement to 65535; in
                 * that case, the size of the {@code interfaces} array must not
                 * exceed 65535.
                 * </ul>
                 * <p>If any of these restrictions are violated,
                 * {@code Proxy.getProxyClass} will throw an
                 * {@code IllegalArgumentException}.  If the {@code interfaces}
                 * array argument or any of its elements are {@code null}, a
                 * {@code NullPointerException} will be thrown.
                 * <p>Note that the order of the specified proxy interfaces is
                 * significant: two requests for a proxy class with the same combination
                 * of interfaces but in a different order will result in two distinct
                 * proxy classes.
                 */
                // @ts-ignore
                public static getProxyClass(loader: java.lang.ClassLoader, interfaces: java.lang.Class): java.lang.Class;
                /**
                 * Returns an instance of a proxy class for the specified interfaces
                 * that dispatches method invocations to the specified invocation
                 * handler.
                 * <p>{@code Proxy.newProxyInstance} throws
                 * {@code IllegalArgumentException} for the same reasons that
                 * {@code Proxy.getProxyClass} does.
                 */
                // @ts-ignore
                public static newProxyInstance(loader: java.lang.ClassLoader, interfaces: java.lang.Class, h: java.lang.reflect.InvocationHandler): java.lang.Object;
                /**
                 * Returns true if and only if the specified class was dynamically
                 * generated to be a proxy class using the {@code getProxyClass}
                 * method or the {@code newProxyInstance} method.
                 * <p>The reliability of this method is important for the ability
                 * to use it to make security decisions, so its implementation should
                 * not just test if the class in question extends {@code Proxy}.
                 */
                // @ts-ignore
                public static isProxyClass(cl: java.lang.Class): boolean;
                /**
                 * Returns the invocation handler for the specified proxy instance.
                 */
                // @ts-ignore
                public static getInvocationHandler(proxy: java.lang.Object): java.lang.reflect.InvocationHandler;
            }
        }
    }
}
