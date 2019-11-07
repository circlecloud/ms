// @ts-nocheck
declare namespace java {
    namespace lang {
        namespace management {
            // @ts-ignore
             class MonitorInfo extends java.lang.management.LockInfo {
                /**
                 * Creates a new <code>MonitorInfo</code> instance.
                 */
                // @ts-ignore
                constructor(className: string, identityHashCode: number, stackDepth: number, stackFrame: java.lang.StackTraceElement)
                /**
                 * Returns an integer which is the number of frames deep into the stack
                 * where the monitor locking took place.
                 */
                // @ts-ignore
                public getLockedStackDepth(): number;
                /**
                 * The complete {@link StackTraceElement} in which the monitor was locked.
                 */
                // @ts-ignore
                public getLockedStackFrame(): java.lang.StackTraceElement;
                /**
                 * Receives a {@link CompositeData} representing a <code>MonitorInfo</code>
                 * object and attempts to return the root <code>MonitorInfo</code>
                 * instance.
                 */
                // @ts-ignore
                public static from(cd: any /*javax.management.openmbean.CompositeData*/): java.lang.management.MonitorInfo;
            }
        }
    }
}
