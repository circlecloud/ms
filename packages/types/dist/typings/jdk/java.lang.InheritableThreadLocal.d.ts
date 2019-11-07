// @ts-nocheck
declare namespace java {
    namespace lang {
        // @ts-ignore
         class InheritableThreadLocal extends java.lang.ThreadLocal {
            // @ts-ignore
            constructor()
            /**
             * Computes the child's initial value for this inheritable thread-local
             * variable as a function of the parent's value at the time the child
             * thread is created.  This method is called from within the parent
             * thread before the child is started.
             * <p>
             * This method merely returns its input argument, and should be overridden
             * if a different behavior is desired.
             */
            // @ts-ignore
            protected childValue(parentValue: java.lang.Object): java.lang.Object;
        }
    }
}
