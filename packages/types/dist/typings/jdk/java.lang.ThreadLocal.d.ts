// @ts-nocheck
declare namespace java {
    namespace lang {
        // @ts-ignore
         class ThreadLocal extends java.lang.Object {
            /**
             * Creates a thread local variable.
             */
            // @ts-ignore
            constructor()
            /**
             * Returns the current thread's "initial value" for this
             * thread-local variable.  This method will be invoked the first
             * time a thread accesses the variable with the {@link #get}
             * method, unless the thread previously invoked the {@link #set}
             * method, in which case the {@code initialValue} method will not
             * be invoked for the thread.  Normally, this method is invoked at
             * most once per thread, but it may be invoked again in case of
             * subsequent invocations of {@link #remove} followed by {@link #get}.
             * <p>This implementation simply returns {@code null}; if the
             * programmer desires thread-local variables to have an initial
             * value other than {@code null}, {@code ThreadLocal} must be
             * subclassed, and this method overridden.  Typically, an
             * anonymous inner class will be used.
             */
            // @ts-ignore
            protected initialValue(): java.lang.Object;
            /**
             * Creates a thread local variable. The initial value of the variable is
             * determined by invoking the {@code get} method on the {@code Supplier}.
             */
            // @ts-ignore
            public static withInitial(supplier: java.util.function$.Supplier): java.lang.ThreadLocal;
            /**
             * Returns the value in the current thread's copy of this
             * thread-local variable.  If the variable has no value for the
             * current thread, it is first initialized to the value returned
             * by an invocation of the {@link #initialValue} method.
             */
            // @ts-ignore
            public get(): java.lang.Object;
            /**
             * Sets the current thread's copy of this thread-local variable
             * to the specified value.  Most subclasses will have no need to
             * override this method, relying solely on the {@link #initialValue}
             * method to set the values of thread-locals.
             */
            // @ts-ignore
            public set(value: java.lang.Object): void;
            /**
             * Removes the current thread's value for this thread-local
             * variable.  If this thread-local variable is subsequently
             * {@linkplain #get read} by the current thread, its value will be
             * reinitialized by invoking its {@link #initialValue} method,
             * unless its value is {@linkplain #set set} by the current thread
             * in the interim.  This may result in multiple invocations of the
             * {@code initialValue} method in the current thread.
             */
            // @ts-ignore
            public remove(): void;
        }
    }
}
