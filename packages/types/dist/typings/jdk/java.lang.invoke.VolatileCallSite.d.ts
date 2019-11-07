declare namespace java {
    namespace lang {
        namespace invoke {
            // @ts-ignore
             class VolatileCallSite extends java.lang.invoke.CallSite {
                /**
                 * Create a VolatileCallSite with the same type as the volatileTarget
                 * and the initial target set to volatileTarget.
                 */
                // @ts-ignore
                constructor(volatileTarget: java.lang.invoke.MethodHandle)
                /**
                 * Create a VolatileCallSite with the MethodType <i>type</i> and an
                 * initial target that throws IllegalStateException.
                 */
                // @ts-ignore
                constructor(type: java.lang.invoke.MethodType)
                // @ts-ignore
                public dynamicInvoker(): java.lang.invoke.MethodHandle;
                /**
                 * The target MethodHandle is returned as though by a read of a volatile variable.
                 */
                // @ts-ignore
                public getTarget(): java.lang.invoke.MethodHandle;
                /**
                 * Set the CallSite's target to be <i>nextTarget</i>.
                 * The <i>nextTarget</i> MethodHandle must have the same type as the CallSite.
                 * This occurs as though by a write to a volatile variable.
                 */
                // @ts-ignore
                public setTarget(nextTarget: java.lang.invoke.MethodHandle): void;
            }
        }
    }
}
