declare namespace java {
    namespace rmi {
        namespace server {
            // @ts-ignore
             class RemoteObjectInvocationHandler extends java.rmi.server.RemoteObject {
                /**
                 * Creates a new <code>RemoteObjectInvocationHandler</code> constructed
                 * with the specified <code>RemoteRef</code>.
                 */
                // @ts-ignore
                constructor(ref: java.rmi.server.RemoteRef)
                /**
                 * Processes a method invocation made on the encapsulating
                 * proxy instance, <code>proxy</code>, and returns the result.
                 * <p><code>RemoteObjectInvocationHandler</code> implements this method
                 * as follows:
                 * <p>If <code>method</code> is one of the following methods, it
                 * is processed as described below:
                 * <ul>
                 * <li>{@link Object#hashCode Object.hashCode}: Returns the hash
                 * code value for the proxy.
                 * <li>{@link Object#equals Object.equals}: Returns <code>true</code>
                 * if the argument (<code>args[0]</code>) is an instance of a dynamic
                 * proxy class and this invocation handler is equal to the invocation
                 * handler of that argument, and returns <code>false</code> otherwise.
                 * <li>{@link Object#toString Object.toString}: Returns a string
                 * representation of the proxy.
                 * </ul>
                 * <p>Otherwise, a remote call is made as follows:
                 * <ul>
                 * <li>If <code>proxy</code> is not an instance of the interface
                 * {@link Remote}, then an {@link IllegalArgumentException} is thrown.
                 * <li>Otherwise, the {@link RemoteRef#invoke invoke} method is invoked
                 * on this invocation handler's <code>RemoteRef</code>, passing
                 * <code>proxy</code>, <code>method</code>, <code>args</code>, and the
                 * method hash (defined in section 8.3 of the "Java Remote Method
                 * Invocation (RMI) Specification") for <code>method</code>, and the
                 * result is returned.
                 * <li>If an exception is thrown by <code>RemoteRef.invoke</code> and
                 * that exception is a checked exception that is not assignable to any
                 * exception in the <code>throws</code> clause of the method
                 * implemented by the <code>proxy</code>'s class, then that exception
                 * is wrapped in an {@link UnexpectedException} and the wrapped
                 * exception is thrown.  Otherwise, the exception thrown by
                 * <code>invoke</code> is thrown by this method.
                 * </ul>
                 * <p>The semantics of this method are unspecified if the
                 * arguments could not have been produced by an instance of some
                 * valid dynamic proxy class containing this invocation handler.
                 */
                // @ts-ignore
                public invoke(proxy: java.lang.Object, method: java.lang.reflect.Method, args: java.lang.Object): java.lang.Object;
            }
        }
    }
}
