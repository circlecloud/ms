declare namespace java {
    namespace lang {
        namespace invoke {
            // @ts-ignore
             class MutableCallSite extends java.lang.invoke.CallSite {
                /**
                 * Create a MutableCallSite permanently set to the same type as the <i>mutableTarget</i> and using
                 * the <i>mutableTarget</i> as the initial target value.
                 */
                // @ts-ignore
                constructor(mutableTarget: java.lang.invoke.MethodHandle)
                /**
                 * Create a MutableCallSite with the MethodType <i>type</i> and an
                 * initial target that throws IllegalStateException.
                 */
                // @ts-ignore
                constructor(type: java.lang.invoke.MethodType)
                // @ts-ignore
                public dynamicInvoker(): java.lang.invoke.MethodHandle;
                // @ts-ignore
                public getTarget(): java.lang.invoke.MethodHandle;
                // @ts-ignore
                public setTarget(newTarget: java.lang.invoke.MethodHandle): void;
                /**
                 * Forces the current target MethodHandle of each of the MutableCallSites in the <i>sites</i> array to be seen by all threads.
                 * Loads of the target from any of the CallSites that has already begun will continue to use the old value.
                 * <p>
                 * If any of the elements in the <i>sites</i> array is null, a NullPointerException will be raised.  It is undefined whether any
                 * of the sites may have been synchronized.
                 * <p>
                 * Note: it is valid for an implementation to use a volatile variable for the target value of MutableCallSite.  In that case,
                 * the {@link #syncAll(MutableCallSite[])} call becomes a no-op.
                 */
                // @ts-ignore
                public static syncAll(sites: java.lang.invoke.MutableCallSite): void;
            }
        }
    }
}
