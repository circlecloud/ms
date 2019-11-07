// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace invoke {
            // @ts-ignore
            abstract class CallSite extends java.lang.Object {
                /**
                 * Report the type of CallSite's target MethodHandle.
                 * A CallSite cannot change its type.
                 */
                // @ts-ignore
                public type(): java.lang.invoke.MethodType;
                /**
                 * Return the target MethodHandle of the CallSite.
                 */
                // @ts-ignore
                public abstract getTarget(): java.lang.invoke.MethodHandle;
                /**
                 * Set the CallSite's target to be <i>nextTarget</i>.
                 * The <i>nextTarget</i> MethodHandle must have the same type as the CallSite.
                 */
                // @ts-ignore
                public abstract setTarget(nextTarget: java.lang.invoke.MethodHandle): void;
                /**
                 * Return a MethodHandle equivalent to the invokedynamic instruction on this CallSite.
                 * The MethodHandle is equivalent to getTarget().invokeExact(args).
                 */
                // @ts-ignore
                public abstract dynamicInvoker(): java.lang.invoke.MethodHandle;
            }
        }
    }
}
