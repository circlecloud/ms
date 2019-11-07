declare namespace java {
    namespace lang {
        namespace reflect {
            // @ts-ignore
            interface InvocationHandler {
                /**
                 * Processes a method invocation on a proxy instance and returns
                 * the result.  This method will be invoked on an invocation handler
                 * when a method is invoked on a proxy instance that it is
                 * associated with.
                 */
                // @ts-ignore
                 invoke(proxy: java.lang.Object, method: java.lang.reflect.Method, args: java.lang.Object): java.lang.Object;
            }
        }
    }
}
